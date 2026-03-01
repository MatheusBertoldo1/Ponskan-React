import { Navbar, Footer } from "../components/public/sections"
import { Outlet } from "react-router-dom"

export const PublicLayout = () => {
    return(
        <>
            <Navbar color="yellow"/>
            
            <main>
                <Outlet />
            </main>

            <Footer />  
        </>
    )
}
