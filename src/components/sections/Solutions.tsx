import { ContentEdge, PatternDivider } from "../ui"

export const Solutions = () => {
    return(
        <section id="solutions">
            <ContentEdge>
                <PatternDivider />
            </ContentEdge>

            <ContentEdge>
                <div className="flex w-full justify-center  bg-amber-400/80">
                    <div className="pt-2 text-sm font-mono text-white [writing-mode:vertical-rl]">Nossa solução</div>

                    <div className="flex flex-1 flex-col items-center py-12 ">
                        <h1 className=" font-inter text-white tracking-tight text-[clamp(1.7rem,3vw,3rem)]">Enquanto a tecnologia protege a safra prospera</h1>
                        <p className="text-white text-lg ">Entenda como nossa tecnologia vai beneficiar sua produção</p>
                    </div>
                </div>
            </ContentEdge>

            <ContentEdge>
                <div className="flex flex-col gap-4 p-25">
                    <div className="grid grid-cols-4 h-100 ">
                        <div className="relative p-4 flex flex-col-reverse border-l-2 border-b-2 border-r-2 rounded-b-3xl border-amber-300 mt-5 after:content[''] after:absolute after:top-0 after:-left-3 after:w-5 after:h-5 after:rounded-full after:bg-amber-300">
                            <div className="flex justify-center py-2 rounded-xl bg-gray-500">
                                <p className="text-white font-inter font-medium">Captura</p>
                            </div>

                            <div className="flex flex-col flex-1 p-4 justify-center">
                                <p className="font-inter text-gray-800">Monitoramento via dispositivos móveis, captação de imagens da planta infectada</p>
                            </div>
                        </div>

                        <div className="p-4 flex flex-col border-l-2 border-t-2 border-r-2 rounded-t-3xl border-amber-300 -ml-0.5 mb-5">
                            <div className="flex justify-center py-2 rounded-xl bg-gray-500">
                                <p className="text-white font-inter font-medium">Análise</p>
                            </div>

                            <div className="flex flex-col flex-1 p-4 justify-center">
                                <p className="font-inter text-gray-800">Nossa IA escaneia cada pixel em busca de padrões invisíveis ao olho destreinado.</p>
                            </div>
                        </div>

                        <div className="p-4 flex flex-col-reverse border-l-2 border-b-2 border-r-2 rounded-b-3xl border-amber-300 -ml-0.5 mt-5">
                            <div className="flex justify-center py-2 rounded-xl bg-gray-500">
                                <p className="text-white font-inter font-medium">Diagnóstico</p>
                            </div>

                            <div className="flex flex-col gap-4 flex-1 p-4 justify-center">
                                <p className="font-inter text-gray-800">O sistema diferencia manchas comuns de fungos patogênicos que atacam o pomar.</p>
                            </div>
                        </div>

                        <div className="relative p-4 flex flex-col border-l-2 border-t-2 border-r-2 rounded-t-3xl border-amber-300 -ml-0.5 mb-5 after:content[''] after:absolute after:bottom-0 after:-right-3 after:w-5 after:h-5 after:rounded-full after:bg-amber-300">
                            <div className="flex justify-center py-2 rounded-xl bg-gray-500">
                                <p className="text-white font-inter font-medium">Resposta</p>
                            </div>

                            <div className="flex flex-col gap-4 flex-1 p-4 justify-center">
                                <p className="font-inter text-gray-800">Você recebe a localização e a medida de controle agir de forma precisa e eficiente</p>
                            </div>
                        </div>
                    </div>

                    {/* timeline */}
                    <div className="grid grid-cols-4 relative gap-4 px-2">
                        <div className="absolute h-0.5 w-[calc(100%+60px)] -left-7.5 top-[50%] bg-black/10 z-0"></div>

                        <div className="flex flex-col h-10 select-none">
                            <div className="flex items-center justify-center h-10 z-1 ">
                                <p className="w-9 h-9 rounded-full text-center text-white font-inter font-bold leading-9 bg-gray-500">1°</p>
                            </div>
                        </div>
                        <div className="flex flex-col h-10 select-none">
                            <div className="flex items-center justify-center h-10 z-1 ">
                                <p className="w-9 h-9 rounded-full text-center text-white font-inter font-bold leading-9 bg-gray-500">2°</p>
                            </div>
                        </div>
                        <div className="flex flex-col h-10 select-none">
                            <div className="flex items-center justify-center h-10 z-1 ">
                                <p className="w-9 h-9 rounded-full text-center text-white font-inter font-bold leading-9 bg-gray-500">3°</p>
                            </div>
                        </div>
                        <div className="flex flex-col h-10 select-none">
                            <div className="flex items-center justify-center h-10 z-1 ">
                                <p className="w-9 h-9 rounded-full text-center text-white font-inter font-bold leading-9 bg-gray-500">4°</p>
                            </div>
                        </div>
                    </div>
                </div>
            </ContentEdge>

            <ContentEdge>
                <p className="pl-4 text-lg font-inter text-gray-800">Soluções adaptadas para as necessidades do produtor</p>
            </ContentEdge>

            <ContentEdge>
                <div className="grid grid-cols-4">
                    <div className="flex justify-center items-center p-12 cursor-pointer border-r border-black/10 hover:bg-black/5 transition-all">
                        <p className="font-inter text-gray-800">Análise de imagens do fruto ou folha infectada</p>
                    </div>
                    <div className="flex justify-center items-center p-12 cursor-pointer border-r border-black/10 hover:bg-black/5 transition-all">
                        <p className="font-inter text-gray-800">Relatórios completos</p>
                    </div>
                    <div className="flex justify-center items-center p-12 cursor-pointer border-r border-black/10 hover:bg-black/5 transition-all">
                        <p className="font-inter text-gray-800">Planos de ação personalizados para cada situação</p>
                    </div>
                    <div className="flex justify-center items-center p-12 cursor-pointer hover:bg-black/5 transition-all">
                        <p className="font-inter text-gray-800">Acompanhamento em tempo real</p>
                    </div>
                </div>
            </ContentEdge>
        </section>
    )
}