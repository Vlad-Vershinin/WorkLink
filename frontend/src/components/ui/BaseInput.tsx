import { forwardRef, ReactNode, useId } from "react"

interface IBaseInput 
extends React.InputHTMLAttributes<HTMLInputElement>
{
    label?: string,
    error?: string,
    leftIcon?: ReactNode,
    rightIcon?: ReactNode,
    containerClassName?: string,
};

const BaseInput = forwardRef<HTMLInputElement, IBaseInput>(
    (
        {
            className,
            containerClassName,
            type = "text",
            label,
            error,
            disabled,
            leftIcon,
            rightIcon,
            ...props
        },
        ref
    ) => {
        const id = props.id || useId().toString();
        return(
            <div className={`${containerClassName}`}>
                {label && (
                    <label 
                        htmlFor={id}
                        className="block text-sm font-medium text-gray-700 mb-1">
                            {label}
                    </label>
                )}

                <div className="relative">
                    {leftIcon && (
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
                            {leftIcon}
                        </div>
                    )}

                    <input 
                        type={type}
                        ref={ref}
                        disabled={disabled}
                        id={id}
                        className={`
                            w-full 
                            px-3 
                            py-2
                            pl-${leftIcon ? "10" : "3"}
                            pr-${rightIcon ? "10" : "3"}
                            border 
                            rounded-lg 
                            focus:outline-none 
                            focus:ring-2 
                            focus:ring-blue-500 
                            focus:border-blue-500 
                            transition
                            ${
                                error
                                ? "border-red-500 bg-red-50"
                                : "border-gray-300"
                            }
                            ${
                                disabled
                                ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                                : "bg-white text-gray-900"
                            }
                            ${className}`
                        }
                        {...props}
                    ></input>
                    {rightIcon && (
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400">
                            {rightIcon}
                        </div>
                    )}
                </div>

                {error && (
                    <p className="mt-1 text-sm text-red-600" role="alert">
                        {error}
                    </p>
                )}
            </div>
        );
    }
)

export { BaseInput };
export type { IBaseInput };