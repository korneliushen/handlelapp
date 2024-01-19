import { FaCheck } from "react-icons/fa";

export function FormSuccess({ message }) {
    if (!message) return null
    return (
        <>
            <div className="flex items-center space-x-2">
                <FaCheck className="text-emerald-500" />
                <span className="text-emerald-500">{message}</span>
            </div>
        </>
    )
}