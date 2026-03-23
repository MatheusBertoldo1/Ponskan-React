
import { type ComponentPropsWithoutRef } from "react"

interface CustomInputProps extends ComponentPropsWithoutRef<'input'>{
    label : string,
    id : string
}

export const FormInput = ({label, id, ...props} : CustomInputProps) => {
    return (
        <div className="flex flex-col relative w-full pl-2 select-none rounded-md border border-black/10 focus-within:border-amber-400 transition-all">
            <label htmlFor={id} className="absolute -top-3.5 left-3 px-2  bg-white text-gray-800 font-inter select-none">{label}</label >
            <input id={id} {...props} className="block outline-none py-4" />
        </div>
    )
}
