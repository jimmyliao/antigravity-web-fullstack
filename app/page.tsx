import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-24 gap-4">
            <h1 className="text-4xl font-bold">Welcome</h1>
            <Link href="/login">
                <Button>Go to Login</Button>
            </Link>
        </main>
    );
}
