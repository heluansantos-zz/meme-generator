import { createContext, useRef, useState } from "react";
import { ContextData, ContextProviderProps } from './interfaces'

export const Context = createContext({} as ContextData);

export const ContextProvider = ({children}: ContextProviderProps) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [upperText, setUpperText] = useState("");
    const [lowerText, setLowerText] = useState("");

    return (
        <Context.Provider value={{
            canvasRef,
            upperText,
            lowerText,
            setUpperText,
            setLowerText
        }}>
        {
            children
        }
        </Context.Provider>
    )
}
