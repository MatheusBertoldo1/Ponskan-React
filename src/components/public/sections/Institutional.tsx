import { ContentEdge, DecorationText } from "../ui"

export const Institutional = () => {
    return(
        <section id="institutional">
            <ContentEdge>
                <div className="w-full h-25 bg-[repeating-linear-gradient(315deg,color-mix(in_oklab,#000_5%,transparent)_0px,color-mix(in_oklab,#000_5%,transparent)_1px,transparent_1px,transparent_50%)] bg-size-[10px_10px] bg-repeat bg-fixed"></div>
            </ContentEdge>

            <ContentEdge>
                <div className="flex w-full h-full">
                    <div className="pt-2 text-xs font-mono text-green-700 [writing-mode:vertical-rl]">Sobre nós</div>

                    <div className="flex w-full justify-center py-25">
                        <h1 className=" font-inter text-black/80 tracking-tight text-[clamp(2rem,5vw,4rem)]">Nosso time de especialistas à sua disposição</h1>
                    </div>
                </div>
            </ContentEdge>
            
            <ContentEdge>
                <div className="grid grid-cols-3">
                    <div className="flex flex-col justify-center gap-6 col-span-2 row-span-2 p-4 border-r border-b border-black/10">
                        <p className="text-inter text-gray-800">
                            Nascemos da união entre <span className="text-amber-400">tecnologia</span> de ponta e o <span className="text-amber-400">agronegócio brasileiro  </span>. Nosso objetivo é democratizar o acesso à Inteligência Artificial para pequenos e médios citricultores
                        </p>

                        <p className="text-inter text-gray-800">
                            O sistema <span className="text-amber-400">PonSkan</span> é o resultado de uma pesquisa desenvolvida na universidade Fatec Registro. Utilizando algoritmos de visão computacional buscamos resolver problemas reais da nossa região.
                        </p>
                    </div>

                    <div className="flex flex-col p-4 min-h-35 border-b border-black/10 hover:bg-amber-50 transition-all select-none">
                        <h2 className="mb-2 font-inter font-medium text-gray-700">Arthur Parra da Silva</h2>
                        <p className="px-2 mb-2 w-fit rounded-sm text-sm font-mono tracking-tighter font-light  bg-amber-100 text-gray-700">Administrador de Banco de Dados</p>
                    </div>

                    <div className="flex flex-col p-4 min-h-35 border-b border-black/10 hover:bg-amber-50 transition-all select-none">
                        <h2 className="mb-2 font-inter font-medium text-gray-700">Danieli Fiel Reis</h2>
                        <p className="px-2 mb-2 w-fit rounded-sm text-sm font-mono tracking-tighter font-light  bg-amber-100 text-gray-700">Qualidade de Software</p>   
                        <p className="px-2 mb-2 w-fit rounded-sm text-sm font-mono tracking-tighter font-light  bg-amber-100 text-gray-700">Desenvolvedor Backend</p>   
                    </div>

                    <div className="flex flex-col p-4 min-h-35 border-b border-r border-black/10 hover:bg-amber-50 transition-all select-none">
                        <h2 className="mb-2 font-inter font-medium text-gray-700">Guilherme Shimada Pereira</h2>
                        <p className="px-2 mb-2 w-fit rounded-sm text-sm font-mono tracking-tighter font-light  bg-amber-100 text-gray-700">DevOps</p>
                        <p className="px-2 mb-2 w-fit rounded-sm text-sm font-mono tracking-tighter font-light  bg-amber-100 text-gray-700">Desenvolvedor Backend</p>
                    </div>

                    <div className="flex flex-col p-4 min-h-35 border-b border-r border-black/10 hover:bg-amber-50 transition-all select-none">
                        <h2 className="mb-2 font-inter font-medium text-gray-700">Gustavo Kletelinger</h2>
                        <p className="px-2 mb-2 w-fit rounded-sm text-sm font-mono tracking-tighter font-light  bg-amber-100 text-gray-700">Analista de Marketing</p>
                    </div>

                    <div className="flex flex-col p-4 min-h-35 border-b border-black/10 hover:bg-amber-50 transition-all select-none">
                        <h2 className="mb-2 font-inter font-medium text-gray-700">Matheus Bertoldo de Oliveira</h2>
                        <p className="px-2 mb-2 w-fit rounded-sm text-sm font-mono tracking-tighter font-light  bg-amber-100 text-gray-700">UI/UX Design</p>
                        <p className="px-2 mb-2 w-fit rounded-sm text-sm font-mono tracking-tighter font-light  bg-amber-100 text-gray-700">Desenvolvedor Frontend</p>
                    </div>
                </div>
            </ContentEdge>

            <ContentEdge>
                <DecorationText className="pl-2 pt-25 pb-2">Agradecemos a todos os educadores que nos apoiam nessa jornada</DecorationText>
            </ContentEdge>

        </section>
    )
}