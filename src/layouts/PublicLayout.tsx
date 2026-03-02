import { Navbar, Footer } from "../components/public/sections"
import { Outlet } from "react-router-dom"

export const PublicLayout = () => {
    return(
        <>
            <Navbar/>
            
            <main className="w-full">
                <Outlet />
            </main>

            <Footer />  
        </>
    )
}
