"use client";

import { navbarLinks } from "@/lib/NavbarLinks";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const NavbarSheetLinks = () => {
    const pathname = usePathname();
    return <>
        {navbarLinks.map((link) => (
            <Link
                key={link.href}
                href={link.href}
                className={cn(
                    link.href === pathname
                        ? "text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                )}
            >
                {link.name}
            </Link>
        ))}
    </>;
};

export default NavbarSheetLinks;
