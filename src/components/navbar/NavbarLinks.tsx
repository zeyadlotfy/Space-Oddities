"use client";

import { navbarLinks } from "@/lib/NavbarLinks";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import navbarCss from "./navbar.module.css"


export function NavbarLinks() {
    const location = usePathname();
    return (
        <div className=" md:flex justify-center items-center gap-x-2 ml-8">
            {navbarLinks.map((item) => (
                <Link
                    href={item.href}
                    key={item.id}
                    className={cn(
                        location === item.href
                            ? "text-secondary-foreground"
                            : "hover:text-secondary-foreground", navbarCss.link,
                    )}
                >
                    {item.name}
                </Link>
            ))}
        </div>
    );
}