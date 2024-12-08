import "~/styles/globals.css";

import { Roboto } from "next/font/google";
import { Toaster } from "~/components/ui/toaster";


const roboto = Roboto({
    weight: '400',
    subsets: ['latin'],
})


export const metadata = {
    title: "Samyam Katwal",
    description: "Protfolio Website",
    icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={`${roboto.className} text-[#FFFFE6] text-lg bg-[#0A0A0A]`}>
            <body>
                <Toaster />
                {children}
            </body>
        </html>
    );
}
