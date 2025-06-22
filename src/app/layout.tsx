import type { Metadata } from "next";
import { Kosugi_Maru, Gaegu, Playpen_Sans, Rock_Salt } from "next/font/google";
import "./globals.css";

const kosugiMaru = Kosugi_Maru({
    variable: "--font-kosugi-maru",
    subsets: ["latin"],
    weight: "400",
});

const gaegu = Gaegu({
    variable: "--font-gaegu",
    subsets: ["latin"],
    weight: ["300", "400", "700"],
});

const playpenSans = Playpen_Sans({
    variable: "--font-playpen-sans",
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

const rockSalt = Rock_Salt({
    variable: "--font-rock-salt",
    subsets: ["latin"],
    weight: "400",
});

export const metadata: Metadata = {
    title: "Tsukuyomi",
    description: "",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${kosugiMaru.variable} ${gaegu.variable} ${playpenSans.variable} ${rockSalt.variable} antialiased`}
            >
                {children}
            </body>
        </html>
    );
}
