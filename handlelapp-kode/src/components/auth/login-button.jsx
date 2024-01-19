'use client';
import Link from "next/link";
function onClick() {
    console.log('clicked');
}
export default function LoginButton({ children, mode = "redirect", asChild }) {
    return (
        <>
            <Link href="/auth/login">
                <span onClick={onClick} className="cursor-pointer">{children}</span>
            </Link>
        </>
    );
}
