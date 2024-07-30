import { Box, Button, Heading, HStack, VStack } from "@chakra-ui/react";

interface AlertProps {
    message: string;

    onClose: () => void;    // Función de callback para cerrar
}
export default function ImgAlert({ message, onClose }: AlertProps) {

    return (
        <div className="fle flex-col py-2 px-1 w-full items-center text-white">
            <h1 className="text-base font-semibold">{message}</h1>
            <div className="flex items-center justify-center gap-2">
                <button className="bg-green-500 rounded font-medium p-1 hover:bg-green-600">
                    Confirm
                </button>
                <button onClick={onClose} className="bg-red-500 p-1 rounded hover:bg-red-600">
                    Cancel
                </button>
            </div>
        </div>
    )
}