import { tv } from "tailwind-variants"

const navbarLinks = [
    {nome: "inicio", sessao : "hero"},
    {nome: "O problema", sessao : "problems"},
    {nome: "Nossa solução", sessao : "solutions"},
    {nome: "Como funciona", sessao : "resources"},
    {nome: "Resultados", sessao : "results"},
    {nome: "Sobre nós", sessao : "Institutional"},
]

export const Navbar = ({ color }: { color: "dark" | "yellow" }) => {
    const navVariants = tv({
        base: 'w-96 h-96',
        variants: {
            color: {
                dark : "bg-gray-950",
                yellow: "bg-amber-500"
            }
        },
        defaultVariants: {
            color: 'dark'
        }
    })

   

    return(
        <nav>
            <div className={navVariants({ color })}></div>
        </nav>
    )
}