import { FaExclamation } from "react-icons/fa";

export function FormError({ message }) {
    if (!message) return null
    return (
        <>
            <div className="flex items-center space-x-2">
                <FaExclamation className="text-red-500" />
                <span className="text-red-500">{message}</span>
            </div>
        </>
    )
} 