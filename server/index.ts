import Fastify from "fastify";
import cors from "@fastify/cors";
import jwt from "@fastify/jwt";
import argon2 from "argon2";
import { db } from "./db";
import { users } from "./db/schema";
import { eq } from "drizzle-orm";
import dotenv from "dotenv";
import { z } from "zod";

dotenv.config();

const fastify = Fastify({
    logger: true,
});

const PORT = parseInt(process.env.PORT || "3001");
const SECRET = process.env.JWT_SECRET || "supersecret";

fastify.register(cors, {
    origin: "http://localhost:3000", // Allow Next.js frontend
});

fastify.register(jwt, {
    secret: SECRET,
});

// Zod schemas for validation
const AuthSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8),
});

fastify.post("/api/register", async (request, reply) => {
    try {
        const { email, password } = AuthSchema.parse(request.body);

        const existingUser = await db.query.users.findFirst({
            where: eq(users.email, email)
        });

        if (existingUser) {
            return reply.status(409).send({ message: "User already exists" });
        }

        const hashedPassword = await argon2.hash(password);

        await db.insert(users).values({
            email,
            password: hashedPassword,
        });

        return reply.status(201).send({ message: "User created successfully" });
    } catch (error) {
        if (error instanceof z.ZodError) {
            return reply.status(400).send({ message: "Invalid input", errors: error.errors });
        }
        fastify.log.error(error);
        return reply.status(500).send({ message: "Internal Server Error" });
    }
});

fastify.post("/api/login", async (request, reply) => {
    try {
        const { email, password } = AuthSchema.parse(request.body);

        const user = await db.query.users.findFirst({
            where: eq(users.email, email),
        });

        if (!user) {
            return reply.status(401).send({ message: "Invalid credentials" });
        }

        const valid = await argon2.verify(user.password, password);

        if (!valid) {
            return reply.status(401).send({ message: "Invalid credentials" });
        }

        const token = fastify.jwt.sign({ id: user.id, email: user.email });

        return reply.send({ token });
    } catch (error) {
        if (error instanceof z.ZodError) {
            return reply.status(400).send({ message: "Invalid input", errors: error.errors });
        }
        fastify.log.error(error);
        return reply.status(500).send({ message: "Internal Server Error" });
    }
});

const start = async () => {
    try {
        await fastify.listen({ port: PORT, host: '0.0.0.0' });
        console.log(`Server listening on http://localhost:${PORT}`);
    } catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
};

start();
