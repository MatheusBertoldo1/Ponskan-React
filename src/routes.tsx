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
            }
        ]
    },
    { // Rota para o sistema
        path: "/app",
        element: <AppLayout />,
        children: [ // Rotas dentro do sistema (rotas aninhadas)

        ]
    }
])

export default router