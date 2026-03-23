import { ContentEdge } from "../ui/ContentEdge"
import { Forest, Question, Gastos, Virus } from "../../assets/svg"

export const Problems = () => {
    return(
        <section id="problems">
            <ContentEdge>
                <div className="flex w-full h-full">
                    <div className="pt-2 text-xs font-mono text-green-700 [writing-mode:vertical-rl]">O problema</div>

                    <div className="flex w-full justify-center py-25">
                        <h1 className=" font-inter text-black/80 tracking-tight text-[clamp(2rem,5vw,4rem)]">O inimigo silencioso que desvaloriza sua colheita</h1>
                    </div>
                </div>
            </ContentEdge>

            <ContentEdge>
                <div className="grid grid-cols-4 h-100 text-gray-800">
                    <div className="flex flex-col gap-4 items-center justify-center px-4 border-r border-black/10">
                        <Forest className="h-45"/>
                        <p className="font-inter  text-center">O fungo se espalha silenciosamente pelo pomar</p>
                    </div>
                    <div className="flex flex-col gap-4 items-center justify-center px-4  border-r border-black/10">
                        <Question className="h-45"/>
                        <p className="font-inter  text-center">A falta de informação precisa impede a tomada de decisão acertiva</p>
                    </div>
                    <div className="flex flex-col gap-4 items-center justify-center px-4  border-r border-black/10">
                        <Virus className="h-45"/>
                        <p className="font-inter  text-center">Os problemas se espalham por todo lugar</p>
                    </div>
                    <div className="flex flex-col gap-4 items-center justify-center px-4">
                        <Gastos className="h-45"/>
                        <p className="font-inter  text-center">Produtividade cai e custos sobem</p>
                    </div>
                </div>
            </ContentEdge>

            <ContentEdge>
                <div className="flex justify-center py-10">
                    <p className="text-gray-600 text-xl font-medium">Mas e se você pudesse enxergar o invisível antes que fosse tarde demais?</p>
                </div>
            </ContentEdge>
        </section>
    )
}