import { createContext, MutableRefObject, ReactNode, useRef, useState } from "react";

export interface ContextProviderProps {
  children: ReactNode
}

export interface ContextData {
    canvasRef: MutableRefObject<HTMLCanvasElement>;
    upperText: string;
    lowerText: string;
    images: string[];
  setUpperText: (value:string) => void;
  setLowerText: (value: string) => void;
  onDrop: (selectedFiles: File[]) => void;
  seletcColor: (selectedColor: string) => void;
  seletcFont: (selectedFont: string) => void;
}
