import './globals.css';
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata = {
    title: 'RentFlow | Modern Boarding House Management',
    description: 'A premium management system for modern boarding houses and dormitories.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className="antialiased selection:bg-blue-500 selection:text-white transition-colors duration-300">
                <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}