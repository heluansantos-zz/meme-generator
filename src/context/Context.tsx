import { SSL_OP_DONT_INSERT_EMPTY_FRAGMENTS } from "constants";
import { createContext, useEffect, useRef, useState } from "react";
import { ContextData, ContextProviderProps } from './interfaces'

export const Context = createContext({} as ContextData);

export const ContextProvider = ({ children }: ContextProviderProps) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [upperText, setUpperText] = useState("");
    const [lowerText, setLowerText] = useState("");
    const [images, setImages] = useState<string[]>([]);

    useEffect(() => {
        if (images && images.length > 0) {
            const image = new Image();
            image.onload = () => {
                const canvas = canvasRef.current;
                canvas.width = 500;
                canvas.height = 500;
                const contexto = canvas.getContext('2d');
                contexto.drawImage(image, 0, 0);
            }
            image.src = images[0];
        }
    }, [images])

    const onDrop = (selectedFiles: File[]) => {
        if (selectedFiles && selectedFiles.length) {
            selectedFiles.map((file) => {
                const reader = new FileReader();
                reader.onload = (e) => {
                    const uploadImages = [String(e.target.result), ...images];
                    setImages(uploadImages);
                }
                reader.readAsDataURL(file);
            })
        }
    }

    return (
        <Context.Provider value={{
            canvasRef,
            upperText,
            lowerText,
            setUpperText,
            setLowerText,
            onDrop,
            images,
        }}>
            {
                children
            }
        </Context.Provider>
    )
}
