import { Container } from "../../utilities/Container"
import { ColoredLogo } from "../../../../assets/svg"
import { NavbarLinks } from "./NavbarLinks"

export const Navbar = () => {
    return(
        <nav className="fixed inset-x-0 top-0 z-10 py-2 bg-white border-b border-black/5">
            <Container size="xl"> 
                <div className="flex">
                    <ColoredLogo className="h-8 inline"/>
                    <NavbarLinks />
                </div>
            </Container>
        </nav>
    )
}