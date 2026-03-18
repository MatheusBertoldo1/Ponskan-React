import { Outlet } from "react-router-dom";
import { Navbar, Footer} from "../components/public/sections";
import { Container } from "../components/public/utilities/Container";
import { SideEdge } from "../components/public/ui";
import { Link } from "react-router-dom";    

export const TermsLayout = () =>{
    return(
        <div className="min-h-screen flex flex-col overflow-x-hidden">
            <Navbar></Navbar>
            
            <main className="flex flex-col flex-1 ">
                <Container>
                    <SideEdge />
                    
                    <div className="flex flex-1 flex-col px-4">
                        <Link to={"/"} className="w-fit mt-15 mb-10 px-4 border border-gray-300 rounded-full font-inter text-sm text-gray-600 hover:bg-gray-100 transition-all">Voltar</Link>
                        <Outlet/>
                    </div>
                    
                    <SideEdge />
                </Container>
            </main>

            <Footer />
            
        </div>
    )
}