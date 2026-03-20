import { Outlet } from "react-router-dom"

export const AuthLayout = () => (
    <main className="flex min-h-screen min-w-screen">
        <Outlet />
    </main>
)