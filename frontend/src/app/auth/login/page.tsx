'use client';

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm, Controller } from "react-hook-form";

import Button from "@/components/ui/Button";
import { BaseInput } from "@/components/ui/BaseInput";
import { PasswordInput } from "@/components/ui/PasswordInput";

type LoginForm = {
    login: string,
    password: string
};

export default function LoginPage() {
    const router = useRouter();
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginForm>({
        defaultValues: {
            login: '',
            password: ''
        },
    });

    const onSubmit = (data: LoginForm) => {

    }

    return (
        <>
            <h2 className="text-2x1 font-bold text-center text-gray-800">Вход</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                    <Controller
                        name="login"
                        control={control}
                        rules={{
                            required: 'Это поле обязательно',
                            minLength: {
                                value: 3,
                                message: 'Логин не должен быть пустым'
                            }
                        }}
                        render={({field}) =>(
                            <BaseInput
                                {...field}
                                label="Логин"
                                placeholder="Введите логин"
                                error={errors.login?.message}
                            />
                        )}
                    />
                    <Controller
                        name="password"
                        control={control}
                        rules={{
                            required: 'Это поле обязательно',
                            minLength: {
                                value: 3,
                                message: 'Пароль не должен быть пустым'
                            }
                        }}
                        render={({field}) => (
                            <PasswordInput
                                {...field}
                                label="Пароль"
                                placeholder="Введите пароль"
                                containerClassName="mt-4"
                                error={errors.password?.message}
                            />
                        )}
                    />
                    <div className="flex justify-end">
                        <Link href="" className="text-gray-800 hover:underline font-medium mt-2">Забыли пароль?</Link>
                    </div>
                    <div className="flex justify-center">
                        <Button className="mt-4 px-5">Войти</Button>
                    </div>
                </div>
                <div className="text-center text-gray-800">
                    Нет аккаунта?{'  '}
                    <Link href={'/auth/register'} className="text-blue-600 hover:underline font-medium">Создайте его</Link>
                </div>
            </form>
        </>
    );
}