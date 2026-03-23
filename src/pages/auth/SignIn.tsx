import { LogoCurrentColor } from "../../assets/svg"
import { Link } from "react-router-dom"
import { FormInput } from "../../components/inputs/FormInput"

export const SignIn = () => (
        <div className="flex  w-full lg:max-w-[60vw] h-full max-h-120 overflow-hidden bg-white border border-black/10 rounded-3xl">
            <div className="flex flex-col flex-1 relative p-8 border-r border-black/10">
                
                <div className="flex absolute w-full h-25 pl-8 items-center left-0 top-0 bg-amber-400">
                    <Link to={"/"}>
                        <LogoCurrentColor className="w-10 h-fit text-white"/>
                    </Link>
                </div>

                <div className="flex flex-col gap-2 pt-25 select-none">
                    <p className="text-4xl text-gray-700 font-medium font-inter">Faça login</p>
                    <p className="text-gray-800 font-inter">Acesse sua conta <span className="text-amber-400">Ponskan</span></p>
                </div>
            </div>

            <div className="flex flex-1 px-8 items-center">
                <form action="" method="post" className="flex flex-col w-full gap-8">
                    <p className="text-xl text-gray-700 font-inter select-none">Entre com suas credenciais</p>

                    <div className="flex flex-col gap-8">
                        <FormInput id="userEmail" label="Email" type="email"/>
                        <FormInput id="userPassword" label="Senha" type="password"/>
                    </div>

                    
                    <div className="flex gap-8 justify-end">
                        <Link to={"/auth/signup"} className="py-2 px-4 text-sm/6 text-gray-700 font-inter rounded-full cursor-pointer select-none border border-black/10 hover:bg-gray-50">Criar uma conta</Link>
                        <button type="submit" className="py-2 px-4 text-sm/6 text-white font-inter bg-amber-400 rounded-full cursor-pointer select-none transition-colors hover:bg-amber-400/80">Acessar</button>
                    </div>

                    <Link to={""} className="w-fit px-2 text-sm font-inter text-amber-500 cursor-pointer rounded-full transition-all select-none hover:bg-gray-50">
                        Esqueceu o e-mail ou senha?
                    </Link>
                </form>
            </div>  
        </div>
    
)