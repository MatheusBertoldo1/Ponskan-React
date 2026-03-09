import { Navbar, Footer } from "../components/public/sections"
import { Outlet } from "react-router-dom"
import { SideEdge } from "../components/public/ui/SideEdge"
import { Container } from "../components/public/utilities/Container"

export const PublicLayout = () => {
    return(
        <div className="flex flex-col min-h-screen overflow-x-hidden">
            <Navbar/>
            
            <main className="flex flex-1 mt-12 flex-row justify-center">
                <Container size="lg" className="flex flex-row">
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
