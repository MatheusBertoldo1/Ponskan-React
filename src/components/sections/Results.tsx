import { ContentEdge, PatternDivider } from "../ui"


export const Results = () => {
    return(
        <section id="results" className="">
            <ContentEdge>
                <PatternDivider />
            </ContentEdge>

            <ContentEdge>
                <div className="flex w-full h-full">
                    <div className="pt-2 text-xs font-mono text-green-700 [writing-mode:vertical-rl]">Resultados</div>

                    <div className="flex w-full justify-center py-25">
                        <h1 className=" font-inter text-black/80 tracking-tight text-[clamp(2rem,5vw,4rem)]">Compare e decida</h1>
                    </div>
                </div>
            </ContentEdge>

            {/* eficiencia na identificação de doenças, economia de mão de obra, informações 100% atualizadas 0/100, Cobertura total do pomar*/}
            <ContentEdge>
                <div className="grid grid-cols-2 h-200">
                    {/* box 1 */}
                    <div className="flex flex-col bg-white border-r border-b border-black/10">
                        {/* titulo grafico */}
                        <div className="flex py-4 items-center justify-center border-b border-black/10">
                            <p className="font-inter text-gray-800">Eficiência na identificação de doenças</p>
                        </div>

                        {/* grafico */}
                        <div className="flex justify-center items-center h-full p-4">
                            <div className="grid relative grid-cols-4 w-full h-full p-10 rounded-2xl overflow-hidden border border-gray-900 bg-gray-600 bg-[radial-gradient(#6b728080_1px,transparent_1px)] bg-size-[12px_12px]">
                                <div className="absolute top-0 w-full bg-gray-700 text-sm text-white">
                                    <div className="w-fit px-8 py-1 bg-white/15">eficiencia.lucid</div>
                                </div>

                                {/* row 1 */}
                                <div className="flex items-center justify-end pr-2">
                                    <p className="font-inter text-center text-white/90">Método manual</p>
                                </div>
                                <div className="flex items-center px-2 border-r border-r-white/30 border-l-3 border-l-white/30">
                                    <span className="h-15 w-full rounded-lg bg-gray-300 hover:scale-102 transition-all"></span>
                                </div>
                                <div className="flex items-center px-2 border-r border-r-white/30 ">
                                    <span className="h-15 w-full rounded-lg bg-gray-300 hover:scale-102 transition-all"></span>
                                </div>
                                    
                                <div className="flex items-center px-2 border-r border-r-white/30">
                                    <></>
                                </div>
                                
                                {/* row 2 */}
                                <div className="flex justify-end items-center pr-2">
                                    <p className="font-inter text-center text-white/90">Com a PonSkan</p>
                                </div>

                                <div className="flex items-center px-2 border-r border-r-white/30 border-l-3 border-l-white/30 border-b-2 border-b-white/30 rounded-bl-2xl">
                                    <span className="h-15 w-full rounded-lg bg-amber-400 hover:scale-102 transition-all"></span>
                                </div>

                                <div className="flex items-center px-2 border-b-2 border-white/30 border-r border-r-white/30">
                                    <span className="h-15 w-full rounded-lg bg-amber-300 hover:scale-102 transition-all"></span>
                                </div>

                                <div className="flex items-center px-2 border-b-2 border-white/30 border-r border-r-white/30">
                                    <span className="h-15 w-full rounded-lg bg-amber-200 hover:scale-102 transition-all"></span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* box 2 */}
                    <div className="flex flex-col bg-white border-b border-black/10">
                        <div className="flex py-4 items-center justify-center border-b border-black/10">
                            <p className="font-inter text-gray-800">Economia com mão de obra</p>
                        </div>

                        {/* grafico */}
                        <div className="flex justify-center items-center h-full p-4">
                            <div className="grid relative grid-cols-4 w-full h-full p-10 rounded-2xl overflow-hidden border border-gray-900 bg-gray-600 bg-[radial-gradient(#6b728080_1px,transparent_1px)] bg-size-[12px_12px]">
                                <div className="absolute top-0 w-full bg-gray-700 text-sm text-white">
                                    <div className="w-fit px-8 py-1 bg-white/15">economia.lucid</div>
                                </div>

                                {/* row 1 */}
                                <div className="flex items-center justify-end pr-2">
                                    <p className="font-inter text-center text-white/90">Método manual</p>
                                </div>
                                <div className="flex items-center px-2 border-r border-r-white/30 border-l-3 border-l-white/30">
                                    <></>
                                </div>
                                <div className="flex items-center px-2 border-r border-r-white/30 ">
                                    <></>
                                </div>
                                <div className="flex items-center px-2 border-r border-r-white/30">
                                    <></>
                                </div>
                                
                                {/* row 2 */}
                                <div className="flex justify-end items-center pr-2">
                                    <p className="font-inter text-center text-white/90">Com a PonSkan</p>
                                </div>

                                <div className="flex items-center px-2 border-r border-r-white/30 border-l-3 border-l-white/30 border-b-2 border-b-white/30 rounded-bl-2xl">
                                    <span className="h-15 w-full rounded-lg bg-amber-400 hover:scale-102 transition-all"></span>
                                </div>

                                <div className="flex items-center px-2 border-b-2 border-white/30 border-r border-r-white/30">
                                    <span className="h-15 w-full rounded-lg bg-amber-300 hover:scale-102 transition-all"></span>
                                </div>

                                <div className="flex items-center px-2 border-b-2 border-white/30 border-r border-r-white/30">
                                    <span className="h-15 w-full rounded-lg bg-amber-200 hover:scale-102 transition-all"></span>
                                </div>
                            </div>
                        </div>      
                    </div>

                    {/* box 3 */}
                    <div className="flex flex-col bg-white border-r border-b border-black/10">
                        <div className="flex py-4 items-center justify-center border-b border-black/10">
                            <p className="font-inter text-gray-800">Informações em tempo real</p>
                        </div>

                        {/* grafico */}
                        <div className="flex justify-center items-center h-full p-4">
                            <div className="grid relative grid-cols-4 w-full h-full p-10 rounded-2xl overflow-hidden border border-gray-900 bg-gray-600 bg-[radial-gradient(#6b728080_1px,transparent_1px)] bg-size-[12px_12px]">
                                <div className="absolute top-0 w-full bg-gray-700 text-sm text-white">
                                    <div className="w-fit px-8 py-1 bg-white/15">informações.lucid</div>
                                </div>

                                {/* row 1 */}
                                <div className="flex items-center justify-end pr-2">
                                    <p className="font-inter text-center text-white/90">Método manual</p>
                                </div>
                                <div className="flex items-center px-2 border-r border-r-white/30 border-l-3 border-l-white/30">
                                    <span className="h-15 w-full rounded-lg bg-gray-300 hover:scale-102 transition-all"></span>
                                </div>
                                <div className="flex items-center px-2 border-r border-r-white/30 "></div>
                                <div className="flex items-center px-2 border-r border-r-white/30"></div>
                                
                                {/* row 2 */}
                                <div className="flex justify-end items-center pr-2">
                                    <p className="font-inter text-center text-white/90">Com a PonSkan</p>
                                </div>

                                <div className="flex items-center px-2 border-r border-r-white/30 border-l-3 border-l-white/30 border-b-2 border-b-white/30 rounded-bl-2xl">
                                    <span className="h-15 w-full rounded-lg bg-amber-400 hover:scale-102 transition-all"></span>
                                </div>

                                <div className="flex items-center px-2 border-b-2 border-white/30 border-r border-r-white/30">
                                    <span className="h-15 w-full rounded-lg bg-amber-300 hover:scale-102 transition-all"></span>
                                </div>

                                <div className="flex items-center px-2 border-b-2 border-white/30 border-r border-r-white/30">
                                    <span className="h-15 w-full rounded-lg bg-amber-200 hover:scale-102 transition-all"></span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* box-4 */}
                    <div className="flex flex-col bg-white border-b border-black/10">
                        <div className="flex py-4 items-center justify-center border-b border-black/10">
                            <p className="font-inter text-gray-800">Cobertura total do pomar</p>
                        </div>

                        {/* grafico */}
                        <div className="flex justify-center items-center h-full p-4">
                            <div className="grid relative grid-cols-4 w-full h-full p-10 rounded-2xl overflow-hidden border border-gray-900 bg-gray-600 bg-[radial-gradient(#6b728080_1px,transparent_1px)] bg-size-[12px_12px]">
                                <div className="absolute top-0 w-full bg-gray-700 text-sm text-white">
                                    <div className="w-fit px-8 py-1 bg-white/15">abrangência.lucid</div>
                                </div>

                                {/* row 1 */}
                                <div className="flex items-center justify-end pr-2">
                                    <p className="font-inter text-center text-white/90">Método manual</p>
                                </div>
                                <div className="flex items-center px-2 border-r border-r-white/30 border-l-3 border-l-white/30">
                                    <span className="h-15 w-full rounded-lg bg-gray-300 hover:scale-102 transition-all"></span>
                                </div>
                                <div className="flex items-center px-2 border-r border-r-white/30 "></div>
                                <div className="flex items-center px-2 border-r border-r-white/30"></div>
                                
                                {/* row 2 */}
                                <div className="flex justify-end items-center pr-2">
                                    <p className="font-inter text-center text-white/90">Com a PonSkan</p>
                                </div>

                                <div className="flex items-center px-2 border-r border-r-white/30 border-l-3 border-l-white/30 border-b-2 border-b-white/30 rounded-bl-2xl">
                                    <span className="h-15 w-full rounded-lg bg-amber-400 hover:scale-102 transition-all"></span>
                                </div>

                                <div className="flex items-center px-2 border-b-2 border-white/30 border-r border-r-white/30">
                                    <span className="h-15 w-full rounded-lg bg-amber-300 hover:scale-102 transition-all"></span>
                                </div>

                                <div className="flex items-center px-2 border-b-2 border-white/30 border-r border-r-white/30">
                                    <span className="h-15 w-full rounded-lg bg-amber-200 hover:scale-102 transition-all"></span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* box 5 resumo */}
                    
                </div>
            </ContentEdge>
        </section>
    )
}