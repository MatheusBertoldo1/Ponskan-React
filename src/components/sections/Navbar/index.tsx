import { Container } from "../../ui/Container"
import { ColoredLogo } from "../../../assets/svg"
import { NavbarLinks } from "./NavbarLinks"
import { Link } from "react-router-dom"

export const Navbar = () => {
    return(
        <nav className="fixed inset-x-0 top-0 z-10 py-2 bg-white border-b border-black/5">
            <Container> 
                <div className="flex flex-1 px-4">
                    <Link to={"/"}>
                        <ColoredLogo className="h-8 inline"/>
                    </Link>
                    <NavbarLinks />
                </div>
            </Container>
        </nav>
    )
}