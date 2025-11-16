import { Eye, EyeClosed } from "lucide-react";
import { BaseInput } from "./BaseInput";
import type { IBaseInput } from "./BaseInput";
import { forwardRef, useState } from "react";
import Button from "./Button";

interface IPasswordInput extends Omit<IBaseInput, "type">
{
};

const PasswordInput = forwardRef<HTMLInputElement, IPasswordInput>((
    {
        label,
        error,
        containerClassName,
        className,
        disabled,
        ...props
    },
    ref
) => {
    const [showPassword, setShowPassword] = useState(false);

    const toggleVisibility = () => {
        setShowPassword((prev) => !prev);
    };

    return (
        <div>
            <BaseInput
                ref={ref}
                type={showPassword ? "text" : 'password'}
                label={label}
                error={error}
                containerClassName={containerClassName}
                className={className}
                disabled={disabled}
                rightIcon={
                    <Button
                        onClick={toggleVisibility}
                        btnType="ghost"
                        title={showPassword ? "Показать пароль" : "Скрыть пароль"}>
                            { showPassword ? <Eye className="h-4 w-4" /> : <EyeClosed className="h-4 w-4" />}
                    </Button>
                }
                {...props}
            />
        </div>
    )
});

export { PasswordInput };