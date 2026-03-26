import { Logotipo, Logo } from "../../assets/svg"
import { Link } from "react-router-dom"
import { FormInput } from "../../components/inputs/FormInput"
import { FormSelect } from "../../components/inputs/FormSelect"
import { useState } from "react"

export const SignUp = () => {
    const [stageForm, setStageForm] = useState(0)

    return(
        <div className="flex flex-col w-full lg:max-w-[70vw] min-h-[90vh] overflow-hidden select-none bg-white border border-black/10 rounded-3xl">
            <div className="flex justify-center items-center h-fit py-4 bg-amber-400 border-b border-black/10">
                <p className="text-4xl font-inter font-medium text-white">Junte-se a nós</p>
            </div>
            
            {/* Contagem de etapas do form */}
            <p className="px-4 pt-1 text-xs/6 text-end text-gray-700 font-inter">Etapa {stageForm + 1} de  5</p>

            <div className="flex flex-1 p-8 border-b border-black/10">
                <div className="flex flex-1 flex-col gap-4 text-gray-700 font-inter">
                    <Link to={"/"} className="w-fit">
                        <Logo className="h-12 w-fit" />
                    </Link>
                    <h1 className=" text-4xl font-medium">Crie uma conta <br/> Ponskan</h1>
                    <p>Preencha os campos solicitados</p>
                </div>

                <form action="/" method="get" className="flex flex-1 flex-col gap-6 text-gray-700 font-inter">
                    {stageForm === 0 && (
                        <>
                        <p className=" font-medium mb-2 ">Dados pessoais</p>
                        <FormInput id="userName" label="Nome Completo" required/>
                        <FormInput id="userEmail" label="E-mail" required/>
                        <input type="button" value="Avançar" onClick={()=>setStageForm(stageForm + 1)} className="self-end text-white text-sm/6 px-4 py-2 rounded-full cursor-pointer bg-amber-400 hover:bg-amber-400/80"/>
                        </>
                    )}
                    {
                        stageForm === 1 && (
                            <>
                            <p className=" font-medium mb-2 ">Dados pessoais</p>
                            
                            <FormSelect 
                            id="typeUser" 
                            name="typeUser" 
                            className="p-4 font-inter outline-none text-gray-700 rounded-md border border-black/10 focus:border-amber-400"
                            required
                            labelText="Qual tipo de perfil mais se adequa a você?"
                            labelClassName="text-gray-700 font-inter"
                            options={[
                                { optionValue: "produtorRural", content: "Produtor Rural" },
                                { optionValue: "agronomo", content: "Agrônomo" },
                                { optionValue: "consultor", content: "Consultor" },
                                { optionValue: "agronomo", content: "Agrônomo" },
                                { optionValue: "estudante", content: "Estudante" },
                                { optionValue: "pequenoProdutor", content: "Pequeno produtor" },
                                { optionValue: "other", content: "Outro" }
                            ]}/>

                            <div className="flex flex-1 items-end justify-end gap-6">
                                <input type="button" value="Retornar" onClick={()=>setStageForm(stageForm - 1)} className="text-gray-800 text-sm/6 px-4 py-2 rounded-full border border-black/10 cursor-pointer bg-white hover:bg-gray-50"/>
                                <input type="button" value="Avançar" onClick={()=>setStageForm(stageForm + 1)} className="text-white text-sm/6 px-4 py-2 rounded-full cursor-pointer bg-amber-400 hover:bg-amber-400/80"/>
                            </div>
                            
                            </>
                        )
                    }
                    {
                        stageForm === 2 && (
                            <>

                            <FormSelect 
                            id="uf" 
                            name="uf" 
                            className="p-4 font-inter outline-none text-gray-700 rounded-md border border-black/10 focus:border-amber-400"
                            required
                            labelText="Em qual estado você reside?"
                            labelClassName="text-gray-700 font-inter"
                            options={[
                                { optionValue: "AC", content: "Acre" },
                                { optionValue: "AL", content: "Alagoas" },
                                { optionValue: "AP", content: "Amapá" },
                                { optionValue: "AM", content: "Amazonas" },
                                { optionValue: "BA", content: "Bahia" },
                                { optionValue: "CE", content: "Ceará" },
                                { optionValue: "DF", content: "Distrito Federal" },
                                { optionValue: "ES", content: "Espírito Santo" },
                                { optionValue: "GO", content: "Goiás" },
                                { optionValue: "MA", content: "Maranhão" },
                                { optionValue: "MT", content: "Mato Grosso" },
                                { optionValue: "MS", content: "Mato Grosso do Sul" },
                                { optionValue: "MG", content: "Minas Gerais" },
                                { optionValue: "PA", content: "Pará" },
                                { optionValue: "PB", content: "Paraíba" },
                                { optionValue: "PR", content: "Paraná" },
                                { optionValue: "PE", content: "Pernambuco" },
                                { optionValue: "PI", content: "Piauí" },
                                { optionValue: "RJ", content: "Rio de Janeiro" },
                                { optionValue: "RN", content: "Rio Grande do Norte" },
                                { optionValue: "RS", content: "Rio Grande do Sul" },
                                { optionValue: "RO", content: "Rondônia" },
                                { optionValue: "RR", content: "Roraima" },
                                { optionValue: "SC", content: "Santa Catarina" },
                                { optionValue: "SP", content: "São Paulo" },
                                { optionValue: "SE", content: "Sergipe" },
                                { optionValue: "TO", content: "Tocantins" }
                            ]}/>

                            <div className="flex flex-1 items-end justify-end gap-6">
                                <input type="button" value="Retornar" onClick={()=>setStageForm(stageForm - 1)} className="text-gray-800 text-sm/6 px-4 py-2 rounded-full border border-black/10 cursor-pointer bg-white hover:bg-gray-50"/>
                                <input type="button" value="Avançar" onClick={()=>setStageForm(stageForm + 1)} className="text-white text-sm/6 px-4 py-2 rounded-full cursor-pointer bg-amber-400 hover:bg-amber-400/80"/>
                            </div>

                            </>
                        )
                    }

                    {
                        stageForm === 3 && (
                            <>

                            <p className="text-gray-700 font-inter font-medium mb-2">Dados empresariais (opcional)</p>
                            <FormInput id="bussinesName" label="Nome da fazenda"/>

                            <div className="flex flex-1 items-end justify-end gap-6">
                                <input type="button" value="Retornar" onClick={()=>setStageForm(stageForm - 1)} className="text-gray-800 text-sm/6 px-4 py-2 rounded-full border border-black/10 cursor-pointer bg-white hover:bg-gray-50"/>
                                <input type="button" value="Avançar" onClick={()=>setStageForm(stageForm + 1)} className="text-white text-sm/6 px-4 py-2 rounded-full cursor-pointer bg-amber-400 hover:bg-amber-400/80"/>
                            </div>

                            </>
                        )
                    }
                    {
                        stageForm === 4 && (
                            <>
                            
                            <p className="text-gray-700 font-inter font-medium mb-2">Segurança da conta</p>
                            <FormInput id="password" label="Senha"/>
                            <FormInput id="confirmPassword" label="Confirmar"/>
                            
                            <div className="flex gap-6 justify-end">
                                <input type="button" value="Retornar" onClick={()=>setStageForm(stageForm - 1)} className="text-gray-800 text-sm/6 px-4 py-2 rounded-full border border-black/10 cursor-pointer bg-white hover:bg-gray-50"/>
                                <button type="submit" className="w-fit py-2 px-4 text-sm/6 text-white font-inter bg-amber-400 rounded-full cursor-pointer select-none transition-colors hover:bg-amber-400/80">Criar conta</button>
                            </div>

                            </>
                        )
                    }
                </form>
            </div>

            <div className="flex py-4 px-8 items-center">
                <div className="flex flex-1 gap-4 text-gray-700 text-sm/6 font-inter ">
                    <Link to={"/terms/privacy"} className="px-1 rounded-full hover:bg-gray-100">Políticas de privacidade</Link>
                    <Link to={"/terms/termos"} className="px-1 rounded-full hover:bg-gray-100">Termos de uso</Link>
                    <Link to={"/terms/cookies"} className="px-1 rounded-full hover:bg-gray-100">Uso de Cookies</Link>
                </div>

                <Logotipo className="h-8 w-fit text-gray-700"/>
            </div>
        </div>
    )
}
