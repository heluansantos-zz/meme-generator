import { SSL_OP_DONT_INSERT_EMPTY_FRAGMENTS } from "constants";
import { createContext, useEffect, useRef, useState } from "react";
import { ContextData, ContextProviderProps } from './interfaces'

export const Context = createContext({} as ContextData);

export const ContextProvider = ({ children }: ContextProviderProps) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [upperText, setUpperText] = useState("");
    const [lowerText, setLowerText] = useState("");
    const [images, setImages] = useState<string[]>([]);
    const [color, setColor] = useState('white');
    const [font, setFont] = useState('Impact')
    // Roboto, Zen Dots, Karantina

    useEffect(() => {
        if (images && images.length > 0) {
            const image = new Image();
            image.onload = () => {
                const canvas = canvasRef.current;
                canvas.width = 500;
                canvas.height = 500;
                const contexto = canvas.getContext('2d');
                contexto.drawImage(image, 0, 0, 500, 500);
                contexto.fillText(upperText, 50, 60);
                contexto.font = `25pt ${font}`;
                contexto.fillStyle = `${color}`;
                contexto.strokeStyle = "black";
                contexto.strokeText(upperText, 50, 60);
                contexto.fillText(upperText, 50, 60);
                contexto.strokeText(lowerText, 50, 440);
                contexto.fillText(lowerText, 50, 440);
                contexto.lineWidth = 2;
            }
            image.src = images[0]
        }
    }, [images, upperText, lowerText, color, font])

    const seletcFont = (selectedFont: string) => {
        setFont(selectedFont);
    }

    const saveMeme = () => {
        if(images && images.length > 0) {
            const canvas = canvasRef.current;
            console.log(canvas.toDataURL());
            const a = document.createElement('a');
            a.href = canvas.toDataURL();
            a.download = 'meme.png';
            document.body.appendChild(a);
            a.click();
        }
    }

    const seletcColor = (selectedColor: string) => {
        setColor(selectedColor);
    }

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
            seletcFont,
            seletcColor,
            saveMeme,
        }}>
            {
                children
            }
        </Context.Provider>
    )
}
