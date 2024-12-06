"use client"
import React, { createContext, ReactNode, SetStateAction, useState } from "react";

interface ContextType {
    accessToken: string | null
    setAccessToken:React.Dispatch<SetStateAction<string | null>>
}

export const Context = createContext<ContextType>({
    accessToken:null,
    setAccessToken:() => ""
})

export const AuthContext:React.FC<{children:ReactNode}> = ({children}) => {
    const [accessToken, setAccessToken] = useState<string | null>(null)
    return <Context.Provider value={{accessToken, setAccessToken}}>{children}</Context.Provider>
}