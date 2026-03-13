import { ContentEdge, DecorationText } from "../ui"
import { CardHero } from "../cards/CardHero"

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
                    <div className="pt-2 text-xs font-mono text-green-700 [writing-mode:vertical-rl]">Início</div>

                    {/* Headline */}
                    <div className="flex flex-4 py-1 px-2 items-center">
                        <h1 className="font-inter text-[clamp(1.5rem,5vw,3rem)] tracking-tight text-black/80 font-medium">
                            Sua <span className="text-amber-400">safra</span> com padrão de exportação e <span className="text-amber-400">desperdício zero</span>
                        </h1>
                    </div>

                    {/* Container Card CTA */}
                    <div className="flex flex-2 min-h-70 pl-16">
                        <div className="flex flex-2 items-center border-l border-l-black/10  bg-[repeating-linear-gradient(315deg,color-mix(in_oklab,#000_5%,transparent)_0px,color-mix(in_oklab,#000_5%,transparent)_1px,transparent_1px,transparent_50%)] bg-size-[10px_10px] bg-repeat bg-fixed">
                            <CardHero />
                        </div>
                    </div> 
                </div>
            </ContentEdge>

            <ContentEdge>
                <div className="pl-2 text-gray-600 text-lg max-w-180">
                    Proteja seu pomar, reduza em até 30% o uso de defensivos ao identificar o momento biológico exato para a aplicação. <span className="text-amber-400">Menos desperdício, mais margem.</span>
                </div>
            </ContentEdge>

            <ContentEdge className="py-4" />

            <ContentEdge>
                <div className="flex p-2 w-full">
                    {/* Div de estilização */}
                    <div className={"flex flex-1 relative rounded-xl overflow-hidden border border-black/10 bg-[#F9F9F9]"} style={{backgroundImage : "radial-gradient(#dbd9d9 1px, #dbd9d9 1px, transparent 1px, transparent 100%)", backgroundSize: "12px 12px", backgroundRepeat: "repeat"}}>
                        <div className="absolute top-0 w-full bg-gray-400 text-sm text-white border-b border-gray-400">
                            <div className="w-fit pl-8 pr-4 py-1 bg-white/15">Tecnologias do sistema</div>
                        </div>

                        {/* Wrapper Cards */}
                        <div className="flex flex-1 gap-3 pt-12 pb-6 px-12 justify-center items-center">
                            {/* Cards */}
                            <div className="flex-1 min-w-20 max-w-40 h-40 bg-white/20 rounded-xl border border-black/10 hover:scale-105 transition-transform">
                            </div>

                            <div className="flex-1 min-w-20 max-w-40 h-60 bg-white/20 rounded-xl hover:scale-105 transition-transform">
                            </div>

                            <div className="flex flex-1 min-w-20 max-w-40 h-80 px-4 justify-center items-center bg-white bg-[image: amber-400/5] rounded-xl hover:scale-105 transition-transform">
                                <h1 className="text-sm  text-amber-400 tracking-tighter font-mono">Pré-diagnostico acertivo</h1>
                            </div>

                            <div className="flex-1 min-w-20 max-w-40 h-60 bg-white/20 rounded-xl hover:scale-105 transition-transform">
                            </div>

                            <div className="flex-1 min-w-20 max-w-40 h-40 bg-white/20 rounded-xl hover:scale-105 transition-transform">
                            </div>
                        </div>
                    </div>
                </div>
            </ContentEdge>

        </section>
    )
}   