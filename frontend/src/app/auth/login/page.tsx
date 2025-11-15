'use client';

import Button from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Eye } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

type LoginForm = {
    login: string,
    password: string
};

export default function LoginPage() {
    const router = useRouter();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginForm>();

    const onSubmit = (data: LoginForm) => {

    }

    return (
        <>
            <h2 className="text-2x1 font-bold text-center text-gray-800">Вход</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                    <Input
                        label="Логин"
                        placeholder="Введите логин"
                    >
                    </Input>
                    <Input
                        label="Пароль"
                        placeholder="Введите пароль"
                        type="password"
                        rightIcon={
                            <Eye className="w-4 h-4"/>
                        }
                    >
                    </Input>
                    <div className="flex justify-end">
                        <Link href="" className="text-gray-800 hover:underline font-medium mt-2">Забыли пароль?</Link>
                    </div>
                    <div className="flex justify-center">
                    <Button className="mt-4 px-5">Войти</Button>
                    </div>
                </div>
                <div className="text-center text-gray-800">
                    Нет аккаунта?{'  '}
                    <Link href={'/auth/register'} className="text-blue-600 hover:underline font-medium">Создайте его!</Link>
                </div>
            </form>
        </>
    );
}