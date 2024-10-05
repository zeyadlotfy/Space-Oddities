import { MenuIcon } from "lucide-react";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Navbar } from "./Navbar";

import NavbarSheetLinks from "./NavbarSheetLinks";
import Link from "next/link";

export default function Nav() {

    return (
        <div className=" w-full max-w-7xl  mx-auto px-4 sm:px-6 lg:px-8 py-5 flex items-center justify-between ">
            <Link href="/">
                <h1 className="text-[#f8b500] font-bold text-xl lg:text-3xl">
                    Space<span className="text-primary"> Oddities</span>
                </h1>
            </Link>
            <Navbar />
            <Sheet>
                <SheetTrigger asChild>
                    <Button
                        className="shrink-0 md:hidden"
                        variant="outline"
                        size="icon"
                    >
                        <MenuIcon className="h-5 w-5" />
                    </Button>
                </SheetTrigger>
                <SheetContent side="left">
                    <nav className="flex flex-col gap-6 text-lg font-medium mt-5">
                        <NavbarSheetLinks />
                    </nav>
                </SheetContent>
            </Sheet>
        </div>

    )
}