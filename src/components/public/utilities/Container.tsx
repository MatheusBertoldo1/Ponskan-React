import React from "react"

// Definindo as opções
type Size = "ultraLarge" | "xl" | "lg" | "md" | "sm" | "ultraSmall" 

interface Props {
    children : React.ReactNode,
    size : Size,
    className?: string 
}

export const Container = ({ children, size = "xl", className } : Props) => {

    const mapSize : Record<Size, string> = {
        "ultraLarge" : "mx-8",
        "xl" : "mx-16",
        "lg" : "mx-32",
        "md" : "mx-64",
        "sm" : "mx-128",
        "ultraSmall" : "mx-196"
    }

    return(
        <div className={`flex-1 ${mapSize[size]} ${className}`}>{ children }</div>
    )
}   