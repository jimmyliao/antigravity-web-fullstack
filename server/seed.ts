import { db } from "./db";
import { users } from "./db/schema";
import argon2 from "argon2";

async function main() {
    console.log("Seeding database...");

    const password = await argon2.hash("password123");

    try {
        await db.insert(users).values({
            email: "test@example.com",
            password: password,
        });
        console.log("User created: test@example.com / password123");
    } catch (e) {
        console.log("User might already exist or error:", e);
    }

    process.exit(0);
}

main();
