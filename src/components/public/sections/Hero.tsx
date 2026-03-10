import { ContentEdge, DecorationText } from "../ui"
import { Devices } from "../../../assets/svg"
import { Link as RouterLink} from "react-router-dom"

export const Hero = () => {
    return(
        <section id="hero">
            <ContentEdge>
                <DecorationText className="pt-20 px-2">
                    A solução para sua proteger a sua safra 
                </DecorationText>
            </ContentEdge>

            <ContentEdge>
                <div className="flex relative">
                    <span className="absolute left-0 top-0">Inicio</span>

                    {/* Headline */}
                    <div className="flex flex-4 py-1 px-2 items-center">
                        <h1 className="font-inter text-[clamp(1.5rem,5vw,3rem)] tracking-tight text-black/80 font-medium">
                            Sua <span className="text-amber-400">safra</span> com padrão de exportação e <span className="text-amber-400">desperdício zero</span>
                        </h1>
                    </div>

                    {/* Container Card CTA */}
                    <div className="flex flex-2 h-70 pl-16">
                        <div className="flex flex-2 items-center p-4 border-l border-l-black/10  bg-[repeating-linear-gradient(315deg,color-mix(in_oklab,#000_5%,transparent)_0px,color-mix(in_oklab,#000_5%,transparent)_1px,transparent_1px,transparent_50%)] bg-size-[10px_10px] bg-repeat bg-fixed">
                            <div className="-translate-x-12 flex flex-1 min-h-62 overflow-hidden bg-white rounded-xl border border-black/10">
                                <div className="flex items-center justify-center p-4 bg-black/3 border-r border-r-black/5 ">
                                    <Devices className="h-30 w-fit"/>
                                </div>

                                <div className="flex flex-col flex-3 justify-center items-center px-4 min-w-fit gap-4">
                                    <h2 className="text-xl text-black/70 font-inter tracking-tight">Solucão multiplataforma</h2>

                                    <RouterLink to={""} className="bg-amber-400 text-white text-sm py-2 w-full text-center rounded-full select-none hover:bg-amber-400/80 transition-all">
                                        Descobrir agora
                                    </RouterLink>
                                </div>
                            </div>
                        </div>
                    </div> 


                </div>
            </ContentEdge>

            <ContentEdge>
                <DecorationText className="px-2 pt-4">
                    Inteligência artificial trabalhando por você
                </DecorationText>
            </ContentEdge>

            <ContentEdge>
                <div className="pl-2 text-gray-600 text-lg max-w-180">
                    Proteja seu pomar, reduza em até 30% o uso de defensivos ao identificar o momento biológico exato para a aplicação. <span className="text-amber-400">Menos desperdício, mais margem.</span>
                </div>
            </ContentEdge>
        </section>
    )
}   