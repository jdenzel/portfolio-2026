"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Switch } from "@/components/ui/switch"

import { cn } from "@/lib/utils"

export function ThemeToggle({ className }: { className?: string }) {
    const { setTheme, resolvedTheme } = useTheme()
    const [mounted, setMounted] = React.useState(false)

    React.useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return (
            <div className={cn("flex items-center space-x-2 opacity-0", className)}>
                <Sun className="h-4 w-4" />
                <div className="h-[24px] w-[44px]" />
                <Moon className="h-4 w-4" />
            </div>
        )
    }

    return (
        <div className={cn("flex items-center space-x-2", className)}>
            <Sun className="h-4 w-4" />
            <Switch
                id="theme-mode"
                size="lg"
                checked={resolvedTheme === "dark"}
                onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
            />
            <Moon className="h-4 w-4" />
            <span className="sr-only">Toggle theme</span>
        </div>
    )
}
