import React from "react"

interface Props {
    children : React.ReactNode
}

export const ContentEdge = ({ children } : Props) => {
    return(
        <div className="relative before:content-[''] before:absolute before:bottom-0 before:h-px before:w-[200vw] before:-left-[100vw] before:bg-black/10">
            {children}
        </div>
    )
}