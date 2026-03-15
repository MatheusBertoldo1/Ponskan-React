import React from "react"

interface Props {
    children : React.ReactNode
}

export const Container = ({ children} : Props) => {


    return(
        <div className={`flex-1 flex flex-row mx-0 xl:mx-32`}>{ children }</div>
    )
}   