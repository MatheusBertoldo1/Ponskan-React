import { Container } from "../../utilities/Container"
import { ColoredLogo } from "../../../../assets/icons"
import { NavbarLinks } from "./NavbarLinks"

export const Navbar = () => {
    return(
        <nav className="fixed inset-x-0 top-0 z-10 border-b border-black/5">
            <Container> 
                <div className="flex">
                    <ColoredLogo className="h-12 inline py-2"/>
                    <NavbarLinks />
                </div>
            </Container>
        </nav>
    )
}