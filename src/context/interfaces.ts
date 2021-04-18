import { createContext, MutableRefObject, ReactNode, useRef, useState } from "react";

export interface ContextProviderProps {
  children: ReactNode
}

export interface ContextData {
  canvasRef: MutableRefObject<HTMLCanvasElement>;
    upperText: string;
    lowerText: string;
    setUpperText: (value:string) => void;
    setLowerText: (value:string) => void;
}
