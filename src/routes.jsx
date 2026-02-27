    import { createBrowserRouter } from "react-router-dom"
    import { LandingLayout , AppLayout} from "./layouts"

    // Definição de rotas da aplicação
    const Routes = createBrowserRouter([
        { // Rota para landingpage
            path: "/",
            element: <LandingLayout />
        },
        { // Rota para o sistema
            path: "/app",
            element: <AppLayout />,
            children: [ // Rotas dentro do sistema (rotas aninhadas)

            ]
        }
    ])

    export default Routes