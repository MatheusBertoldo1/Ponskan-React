import { createBrowserRouter } from "react-router-dom"
import { PublicLayout , AppLayout} from "./layouts/index"
import { LandingPage } from "./pages/public/LandingPage"
import { TermsLayout } from "./layouts/TermsLayout"
import { TermosUso } from "./pages/public/TermosUso"
import { PrivacyPolicies } from "./pages/public/PrivacyPolicies"
import { Cookies } from "./pages/public/Cookies"

// Definição de rotas da aplicação
const router = createBrowserRouter([
    { // Rota para o site público
        path: "/",
        element: <PublicLayout />,
        children: [
            {
                index: true,
                element: <LandingPage />
            },
        ]
    },
    {   // Página de políticas do sistema
        path: "/terms",
        element: <TermsLayout />,
        children: [
            { // Página de termos de uso
                path: "termos",
                element: <TermosUso />
            },
            { // Página de políticas de privacidade         
                path: "privacy",
                element: <PrivacyPolicies />
            },
            {
                path: "cookies",
                element: <Cookies />
            }
        ]
    },
    { // Rota para o sistema
        path: "/app",
        element: <AppLayout />,
        children: [ // Rotas dentro do sistema (rotas aninhadas)

        ]
    },
])

export default router