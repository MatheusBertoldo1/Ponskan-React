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
                <div className="" style={{
                    width: "100%",
                    height: "400px",
                    backgroundColor: "#F9F9F9",
                    backgroundImage : "radial-gradient(#dbd9d9 1px, #dbd9d9 1px, transparent 1px, transparent 100%)",
                    backgroundSize: "12px 12px",
                    backgroundRepeat: "repeat"
                }}>

                </div>
            </ContentEdge>

        </section>
    )
}   