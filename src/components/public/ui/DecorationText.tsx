import React from "react"

interface Props {
    children : React.ReactNode,
    className?: string
}
export const DecorationText = ({children, className} : Props) => {
    return (
        <p className={`font-mono text-md text-black/20 ${className}`}>
            {children}
        </p>
    )

}