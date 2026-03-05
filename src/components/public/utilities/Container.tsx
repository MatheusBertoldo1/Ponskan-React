import React from "react"

interface Props {
    children : React.ReactNode,
}

export const Container = ({ children } : Props) => {
    return(
        <div className="max-w-6xl mx-auto px-4">{ children }</div>

    )
}   