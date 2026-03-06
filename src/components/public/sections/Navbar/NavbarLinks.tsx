import { Link as ScrollLink} from "react-scroll"
import { Link as RouterLink} from "react-router-dom"

// Lista de links do menu de navegação
const navbarLinks = [
    {nome: "Inicio", sessao : "hero"},
    {nome: "Problema", sessao : "problems"},
    {nome: "Solução", sessao : "solutions"},
    // {nome: "Como funciona", sessao : "resources"},
    {nome: "Resultados", sessao : "results"},
    {nome: "Sobre nós", sessao : "institutional"},
]

export const NavbarLinks = () => {
    return (
        <ul className=" flex-1 flex-row gap-4 justify-end py-1 text-sm/6 text-nowrap text-gray-800 cursor-pointer flex items-center">
            {navbarLinks.map((item) => ( // Iterando sobre a lista de links (react-scroll)
                <li key={item.nome} className=" relative select-none  hover:text-black transition-all">
                    <ScrollLink 
                        to={item.sessao}
                        spy={true}
                        duration={500} 
                        smooth={true} 
                        offset={-70}
                        activeClass="bg-amber-200"
                    >
                        {item.nome}
                    </ScrollLink>
                </li>
            ))} 

            <RouterLink to={""} className="ml-10">
                Cadastrar
            </RouterLink>

            <RouterLink to={""} className="rounded-full bg-amber-400 py-1 px-3 text-white transition-colors hover:bg-amber-400/80">
                Entrar na conta
            </RouterLink>

        </ul>
    )
}
