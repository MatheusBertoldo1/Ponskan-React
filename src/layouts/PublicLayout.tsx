import { Navbar, Footer } from "../components/sections"
import { Outlet } from "react-router-dom"
import { SideEdge } from "../components/ui/SideEdge"
import { Container } from "../components/ui/Container"

export const PublicLayout = () => {
    return(
        <div className="flex flex-col min-h-screen overflow-x-hidden">
            <Navbar/>
            
            <main className="flex flex-1 mt-12 justify-center">
                <Container>
                    <SideEdge />
                    
                    <div className="flex flex-col w-full">
                        <Outlet />
                    </div>

                    <SideEdge />
                </Container>
            </main>

            <Footer />
        </div>
    )
}
