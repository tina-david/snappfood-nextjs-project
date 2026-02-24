import Header from "@/components/Header";
import "./globals.css";
import {ReactNode} from "react";

interface Props {
    children: ReactNode
}

export default function RootLayout({children}: Props) {
    return (
        <html lang="fa" dir={'rtl'}>
        <body className={'bg-surface-main'}>
            <Header/>
        {children}
        </body>
        </html>
    );
}