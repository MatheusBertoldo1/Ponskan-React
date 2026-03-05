import { Link } from "react-scroll"
import { Container } from "../utilities/Container"
import Logo from "../../../assets/icons/logotipo.svg?react"

// Lista de links do menu de navegação
const navbarLinks = [
    {nome: "Inicio", sessao : "hero"},
    {nome: "O problema", sessao : "problems"},
    {nome: "Nossa solução", sessao : "solutions"},
    {nome: "Como funciona", sessao : "resources"},
    {nome: "Resultados", sessao : "results"},
    {nome: "Sobre nós", sessao : "institutional"},
]

export const Navbar = () => {
    return(
        <nav>
            <Container>
                <Logo />
                <ul className="flex flex-row gap-4 justify-end py-2">
                    {navbarLinks.map((item) => ( // Iterando sobre a lista de links (react-scroll)
                        <li key={item.nome} className="inline cursor-pointer">
                            <Link  to={item.sessao} spy={true} duration={500} smooth={true} offset={-70}>
                                {item.nome}
                            </Link>
                        </li>
                    ))}
                </ul>
            </Container>
        </nav>
    )
}