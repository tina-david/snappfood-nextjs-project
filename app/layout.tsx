import Header from "@/components/Header";
import "./globals.css";
import {ReactNode} from "react";
import store from '@/redux/store'
import ReduxProvider from "@/provider/ReduxProvider";
interface Props {
    children: ReactNode
}

export default function RootLayout({children}: Props) {
    return (
        <html lang="fa" dir={'rtl'}>
        <body className={'bg-surface-main'}>
            <ReduxProvider>
            <Header/>
        {children}
        </ReduxProvider>
        </body>
        </html>
    );
}