import React from "react"

interface Props {
    children? : React.ReactNode,
    className? : string,
}

export const ContentEdge = ({ children, className = "min-h-2"} : Props) => {
    return(
        <div className={`relative before:content-[''] before:absolute before:bottom-0 before:h-px before:w-[200vw] before:-left-[100vw] before:bg-black/10 ${className}`}>
            {children}
        </div>
    )
}