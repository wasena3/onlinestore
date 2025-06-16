import React from 'react'

type Props ={
    children: React.ReactNode
}
const BoxText = ({children}: Props) => {
    return (
        <h1 className="border-2 px-4 w-fit rounded-lg bg-gray-100 py-1 text-[#00b4d8] font-bold">
            {children}
        </h1>
    )
}

export default BoxText