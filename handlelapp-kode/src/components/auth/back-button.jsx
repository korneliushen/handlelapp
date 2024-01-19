'use client'
import { Button } from "../ui/button"
import Link from "next/link"
export function Backbutton({ href, label }) {
    return (
        <>
            <Button
                variant="link"
                className="font-normal w-full"
                size="sm"
                asChild
            >
                <Link href={href}>{label}</Link>
            </Button>
        </>
    )
}