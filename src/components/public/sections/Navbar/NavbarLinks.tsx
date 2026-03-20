import { NavHashLink } from "react-router-hash-link"

import { Link as RouterLink} from "react-router-dom"

// Lista de links do menu de navegação
const navbarLinks = [
    {nome: "Inicio", id: "hero"},
    {nome: "Problema", id: "problems"},
    {nome: "Solução", id: "solutions"},
    {nome: "Resultados", id: "results"},
    {nome: "Sobre nós", id: "institutional"},
]

export const NavbarLinks = () => (
    <ul className=" flex flex-1 gap-4 justify-end text-sm/6 text-nowrap select-none">
        {navbarLinks.map((item) => ( // Iterando sobre a lista de links (react-scroll)
            <li key={item.nome} className=" relative flex items-center text-gray-800 cursor-pointer hover:text-black transition-all">
                <NavHashLink // Smooth scroll para sessão do item
                    to={`/#${item.id}`}
                    smooth
                >
                    {item.nome}
                </NavHashLink>
            </li>
        ))}
        
        <RouterLink to={"/auth"} className="flex ml-10 text-gray-800 cursor-pointer items-center">
            Cadastrar
        </RouterLink>

        <RouterLink to={""} className="rounded-full cursor-pointer bg-amber-400 py-1 px-3 text-white transition-colors hover:bg-amber-400/80">
            Entrar na conta
        </RouterLink>
    </ul>
)

