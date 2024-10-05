import { NavbarLinks } from "./NavbarLinks";



export function Navbar() {
    return (
        <div className="hidden md:flex items-center">
            {/* <Link href="/">
                    <h1 className="text-black font-bold text-xl lg:text-3xl">
                        Shoe<span className="text-primary">Marshal</span>
                    </h1>
                </Link> */}
            <NavbarLinks />
        </div>
    );
}