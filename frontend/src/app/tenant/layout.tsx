import TenantSidebar from "@/components/TenantSidebar";

export default function TenantLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex bg-slate-50 dark:bg-[#020617] min-h-screen overflow-hidden transition-colors duration-300">
            <TenantSidebar />

            <main className="flex-1 relative h-screen">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/10 dark:bg-blue-600/20 rounded-full blur-[120px] pointer-events-none -translate-y-1/3 translate-x-1/3 transition-colors duration-500"></div>
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-500/10 dark:bg-indigo-600/20 rounded-full blur-[100px] pointer-events-none translate-y-1/3 -translate-x-1/4 transition-colors duration-500"></div>
                <div className="relative z-10 w-full h-full overflow-y-auto p-4 md:p-8 lg:p-10 custom-scrollbar">
                    {children}
                </div>
            </main>
        </div>
    );
}