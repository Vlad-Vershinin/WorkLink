import { ReactNode } from "react";

interface IBtn 
extends React.ButtonHTMLAttributes<HTMLButtonElement> 
{
    children: ReactNode,
    className?: string,
    btnType?: "primary" | "ghost"
};

export default function Button({
    onClick,
    children,
    className,
    btnType = "primary",
    ...props
}: IBtn) {
    return (
        <button onClick={onClick}
                className={
                    btnType == "primary"
                    ? `bg-blue-600 rounded-lg p-1.5 hover:bg-blue-700 flex items-center justify-center ${className}`
                    : `bg-transparent rounded-lg p-1.5 hover:bg-gray-100 flex items-center justify-center ${className}`
                }
                {...props}>
            {children}
        </button>
    );
};