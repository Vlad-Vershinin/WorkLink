import { ReactNode } from "react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ['latin'] });

export default function AuthLayout({
    children
}: {
    children: ReactNode;
}) {
    return (
        <html lang="ru">
            <body className={inter.className}>
                <div className="min-h-screen bg-linear-to-br from-white to-blue-600 from-15% flex items-center justify-center p-4">
                    <div className="bg-white rounded-xl shadow-lg p-8 space-y-6 w-full max-w-md">
                        {children}
                    </div>
                </div>
            </body>
        </html>
    );
}