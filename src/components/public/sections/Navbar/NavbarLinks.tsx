import { Link as ScrollLink} from "react-scroll"
import { Link as RouterLink} from "react-router-dom"

// Lista de links do menu de navegação
const navbarLinks = [
    {nome: "Inicio", sessao : "hero"},
    {nome: "Problema", sessao : "problems"},
    {nome: "Solução", sessao : "solutions"},
    {nome: "Resultados", sessao : "results"},
    {nome: "Sobre nós", sessao : "institutional"},
]

export const NavbarLinks = () => {
    return (
        <ul className=" flex flex-1 gap-4 justify-end text-sm/6 text-nowrap select-none">
            {navbarLinks.map((item) => ( // Iterando sobre a lista de links (react-scroll)
                <li key={item.nome} className=" relative flex items-center text-gray-800 cursor-pointer hover:text-black transition-all">
                    <ScrollLink 
                        to={item.sessao}
                        spy={true}
                        duration={300} 
                        smooth={true} 
                        offset={-70}
                        className="before:content-[''] before:absolute before:-bottom-2 before:left-0 before:h-1 before:w-0 before:bg-amber-400 before:rounded-tl-full before:rounded-tr-full before:transition-all"
                        activeClass="before:w-full"
                    >
                        {item.nome}
                    </ScrollLink>
                </li>
            ))} 

            <RouterLink to={""} className="flex ml-10 text-gray-800 cursor-pointer items-center">
                Cadastrar
            </RouterLink>

            <RouterLink to={""} className="rounded-full cursor-pointer bg-amber-400 py-1 px-3 text-white transition-colors hover:bg-amber-400/80">
                Entrar na conta
            </RouterLink>

        </ul>
    )
}
