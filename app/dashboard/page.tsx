"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

export default function DashboardPage() {
    const router = useRouter()
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
        const token = localStorage.getItem("token")
        if (!token) {
            router.push("/login")
        }
    }, [router])

    const handleLogout = () => {
        localStorage.removeItem("token")
        router.push("/login")
    }

    // Prevent hydration mismatch or flash of content
    if (!isMounted) return null

    return (
        <div className="flex min-h-svh w-full items-center justify-center bg-muted/40 p-6 md:p-10">
            <Card className="w-full max-w-sm">
                <CardHeader className="text-center">
                    <CardTitle className="text-2xl">Welcome Back!</CardTitle>
                    <CardDescription>
                        You have successfully logged in.
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="rounded-md bg-secondary p-4 text-sm text-secondary-foreground text-center">
                        All systems operational.
                    </div>
                    <Button
                        onClick={handleLogout}
                        variant="destructive"
                        className="w-full"
                    >
                        Sign Out
                    </Button>
                </CardContent>
            </Card>
        </div>
    )
}
