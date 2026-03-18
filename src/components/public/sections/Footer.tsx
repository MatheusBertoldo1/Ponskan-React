import { Link } from "react-router-dom"

export const Footer = () => {
    return(
        <footer className="flex flex-col justify-center items-start gap-4 pt-12 pb-2 bg-amber-400 border-t border-black/10">
            <div className="flex w-full justify-center">
                <Link className="text-sm text-white px-5 border-r border-white hover:text-white/80" to={"/privacidade"}>Políticas de privacidade</Link>
                <Link className="text-sm text-white px-5 border-r border-white hover:text-white/80" to={"/termos"}>Termos de uso</Link>
                <Link className="text-sm text-white px-5 hover:text-white/80" to={"/cookies"}>Uso de cookies</Link>
            </div>

            <p className="w-full text-sm text-white text-center">© 2026 Ponskan. Todos os direitos reservados.</p>
        </footer>
    )
}