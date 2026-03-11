import { Devices } from "../../../assets/svg"
import { Link as RouterLink} from "react-router-dom"
import { Dots } from "../../../assets/svg"

export const CardHero = () => {
    return(
        <div className="-translate-x-12 flex min-h-62 overflow-hidden bg-white rounded-xl border border-black/10">
        <div className="flex items-center justify-center p-4 bg-black/3 border-r border-r-black/5 ">
            <Devices className="h-24 w-fit"/>
        </div>

        <div className="flex flex-col justify-center items-center min-w-48 p-4 gap-4 bg-amber-400">
            <h2 className="text-xl text-white font-inter tracking-tight">Solucão multiplataforma</h2>

            <RouterLink to={""} className="bg-white text-amber-500 py-2 w-full font-medium text-sm text-center rounded-full select-none hover:scale-95 transition-all">
                Descobrir agora
            </RouterLink>
        </div>
    </div>
    )
}