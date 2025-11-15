import { ReactNode } from "react";

interface IBtn {
    onClick?: () => void,
    children: ReactNode,
    className?: string
};

export default function Button({
    onClick,
    children,
    className
}: IBtn) {
    return (
        <button onClick={onClick}
                className={`bg-blue-600 rounded-lg p-1.5 hover:bg-blue-700 flex items-center justify-center ${className}`}>
            {children}
        </button>
    );
};