import { ReactNode } from "react";

interface IBtn {
    onClick?: () => void,
    children: ReactNode
};

export default function Button({
    onClick,
    children
}: IBtn) {
    return (
        <button onClick={onClick}
                className="bg-blue-600 rounded-lg p-1.5 hover:bg-blue-700 flexx items-center justify-center">
            {children}
        </button>
    );
};