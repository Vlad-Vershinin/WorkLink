'use client';

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

import Button from "@/components/ui/Button";
import { BaseInput } from "@/components/ui/BaseInput";
import { PasswordInput } from "@/components/ui/PasswordInput";

type RegisterForm = {
    login: string,
    email: string,
    password: string,
    repeatPassword: string
};

export default function RegisterPage() {
    const router = useRouter();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<RegisterForm>();

    const onSubmit = (data: RegisterForm) => {

    }

    return (
        <>
            <h2 className="text-2x1 font-bold text-center text-gray-800">Регистрация</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-x-4">
                <div>
                        <BaseInput
                            label="Логин"
                            placeholder="Введите логин"
                        />
                        <BaseInput
                            label="Почта"
                            placeholder="Введите почту"
                            containerClassName="mt-4"
                        />
                        <PasswordInput
                            label="Пароль"
                            placeholder="Введите пароль"
                            containerClassName="mt-4"
                        />
                        <PasswordInput
                            label="Повторить пароль"
                            placeholder="Введите пароль повторно"
                            containerClassName="mt-4"
                        />
                        <div className="flex justify-center">
                            <Button className="mt-4 px-5">Регистрация</Button>
                        </div>
                </div>
            </form>
            <div className="text-center text-gray-800">
                Уже есть аккаунт?{'  '}
                <Link href={'/auth/login'} className="text-blue-600 hover:underline font-medium">Вход в аккаунт</Link>
            </div>
        </>
    );
}