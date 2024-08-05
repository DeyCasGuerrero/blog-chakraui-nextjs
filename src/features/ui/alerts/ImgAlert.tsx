import { Box, Button, Heading, HStack, VStack } from "@chakra-ui/react";
import { useState } from "react";

interface AlertProps {
    message: string;

    onClose: () => void;    // Función de callback para cerrar
}
export default function ImgAlert({ message, onClose }: AlertProps) {

    const [isClick, setIsClik]=useState(false);

    return (
        <div className="flex flex-col gap-2 py-2 px-1 w-full items-center text-white">
            <h1 className="text-base font-semibold">{message}</h1>
            <div className="flex items-center justify-center gap-2">
                <button onClick={()=>setIsClik(false)} className="bg-green-500 rounded font-medium  px-4 py-2 hover:bg-green-600">
                    Confirm
                </button>
                <button onClick={onClose} className="bg-red-500 px-4 py-2 rounded hover:bg-red-600">
                    Cancel
                </button>
            </div>
        </div>
    )
}