import { Outlet } from "react-router-dom"

export const AuthLayout = () => (
    <main className="flex min-h-screen min-w-screen">
        <div className="flex justify-center items-center h-screen w-screen bg-white bg-[repeating-linear-gradient(315deg,color-mix(in_oklab,#000_2%,transparent)_0px,color-mix(in_oklab,#000_2%,transparent)_1px,transparent_1px,transparent_50%)] bg-size-[10px_10px] bg-repeat bg-fixed">
            <Outlet />
        </div>
    </main>
)