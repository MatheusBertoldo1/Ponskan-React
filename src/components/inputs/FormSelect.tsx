import type { ComponentPropsWithoutRef } from "react"

interface OptionsValue {
    optionValue : string, 
    content : string
}

interface CustomProps extends ComponentPropsWithoutRef<'select'> {
    id : string,
    name: string,
    labelText? : string | undefined,
    optionsClassName?: string,
    labelClassName?: string,
    options : OptionsValue[], // Array de objeto contendo campos de valor e conteúdo
}

export const FormSelect = ({id, name, options, optionsClassName, labelClassName, labelText, ...props} : CustomProps) => {
    // 
    return (
        <label htmlFor={id} className="flex flex-col gap-2">
            {/* Se labelText existir, renderiza o <p>. Se for undefined, não renderiza nada. ( operador curto-circuito -> &&)*/}
            {labelText && (
                <p className={labelClassName}>{labelText}</p>
            )}

            <select id={id} name={name} {...props}>
                <option value="null" className={optionsClassName} disabled selected>Selecione uma opção</option>
                {options.map((items) => { // Mapeando o options e extraindo --optionValue para atributo "value" e --content para o texto do <option>
                    return (
                        <option key={items.optionValue} value={items.optionValue} className={optionsClassName}>{items.content}</option>
                    )
                })}
            </select>
        </label>
    )
}