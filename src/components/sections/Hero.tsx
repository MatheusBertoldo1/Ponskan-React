import { ContentEdge, DecorationText, PatternDivider } from "../ui" 
import { Devices } from "../../assets/svg"
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
                <div className="flex">
                    <div className="pt-2 text-xs font-mono text-green-700 [writing-mode:vertical-rl]">Início</div>

                    {/* Headline */}
                    <div className="flex flex-col flex-1 py-10 pl-2 pr-3 justify-center">
                        <h1 className="font-inter leading-fluid! text-[clamp(1.5rem,4vw,3rem)] tracking-tight text-black/80 font-medium">
                            <span className="text-amber-400">Gerenciamento</span> multiplataforma e em tempo real de <span className="text-amber-400">doenças</span> no seu pomar 
                        </h1>

                        <div className="pt-4 text-gray-600 text-lg max-w-180">
                            Proteja sua safra, reduza em até 30% o uso de defensivos ao identificar o momento biológico exato para a aplicação. <span className="text-amber-400">Menos desperdício, mais margem.</span>
                        </div>

                        <RouterLink to={"/auth/signup"} className="py-2 px-15 w-fit mt-4 text-white bg-amber-400 font-medium text-sm text-center rounded-full select-none hover:bg-amber-400/80 transition-all">
                            Descobrir agora
                        </RouterLink>
                    </div>

                    {/* Container Card CTA */}
                    <div className="flex flex-col flex-1 p-4 border-l border-black/10">
                        <div className="flex flex-1 items-center justify-center">
                            <Devices className="w-[clamp(280px,22.91vw,440px)]"/>
                        </div>
                    </div> 
                </div>
            </ContentEdge>

            <ContentEdge>
                <div className="flex p-2 w-full ">
                    {/* Div de estilização */}
                    <div className={"flex flex-1 relative rounded-xl overflow-hidden border border-gray-900 bg-gray-600 bg-[radial-gradient(#6b728080_1px,transparent_1px)] bg-size-[12px_12px]"} >
                        <div className="absolute top-0 w-full bg-gray-700 text-sm text-white">
                            <div className="w-fit px-8 py-1 bg-white/15">Benefícios.lucid</div>
                        </div>

                        {/* Wrapper Cards */}
                        <div className="flex flex-1 gap-8 pt-24 pb-12 px-12 justify-center items-center min-h-120">
                            {/* Cards */}
                            <div className="flex h-full bg-amber-400 rounded-xl p-2 ">
                                <p className="text-white text-center text-md font-medium [writing-mode:vertical-rl]">Ponskan</p>
                            </div>

                            <div className="flex flex-1 h-full flex-col p-2 max-w-40 gap-4 rounded-2xl border-dashed border-2 border-amber-400">
                                <div className="flex flex-1 px-4 justify-center items-center bg-white border border-black/10 rounded-xl hover:scale-102 transition-transform">
                                    <h1 className="text-md  text-gray-600 tracking-tighter font-mono">Informações em tempo real</h1>
                                </div>

                                <div className="flex flex-1 px-4 justify-center items-center bg-white border border-black/10 rounded-xl hover:scale-102 transition-transform">
                                    <h1 className="text-md  text-gray-600 tracking-tighter font-mono">Decisões acertivas</h1>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 columns-40 h-full p-2 gap-3 rounded-2xl border-dashed border-2 border-green-500">
                                <div className="flex px-4 max-w-40 justify-center items-center bg-white border border-black/10 rounded-xl hover:scale-102 transition-transform">
                                    <h1 className="text-md  text-gray-600 tracking-tighter font-mono">Previsibilidade de resultados</h1>
                                </div>
                                <div className="row-span-2 flex max-w-40 px-4 justify-center items-center bg-white border-2 border-green-500/80 rounded-xl hover:scale-102 transition-transform">
                                    <h1 className="text-md  text-green-800 tracking-tighter font-mono">Redução de custos e aumento da margem de lucro</h1>
                                </div>
                                <div className="flex px-4 max-w-40 justify-center items-center bg-white border border-black/10 rounded-xl hover:scale-102 transition-transform">
                                    <h1 className="text-md  text-gray-600 tracking-tighter font-mono">Padrão de qualidade</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </ContentEdge>

            <ContentEdge>
                <PatternDivider />
            </ContentEdge>
        </section>
    )
}   