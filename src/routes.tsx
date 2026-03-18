import { createBrowserRouter } from "react-router-dom"
import { PublicLayout , AppLayout} from "./layouts/index"
import { LandingPage } from "./pages/public/LandingPage"

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
    { // Rota para o sistema
        path: "/app",
        element: <AppLayout />,
        children: [ // Rotas dentro do sistema (rotas aninhadas)

        ]
    },
    {   // Página de políticas de privacidade
        path: "/privacidade",
        element: <></>
    },
    {   // Página de termos de uso
        path: "/termos",
        element: <></>
    },
    {   // Página de uso de cookies
        path: "/cookies",
        element: <></>
    }
])

export default router