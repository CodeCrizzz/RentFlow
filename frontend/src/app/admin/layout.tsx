import AdminSidebar from "@/components/AdminSidebar";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex bg-slate-50 dark:bg-[#020617] min-h-screen overflow-hidden transition-colors duration-300">
            <AdminSidebar />
            
            <main className="flex-1 relative h-screen">
                {/* Immersive Ambient Backgrounds */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/10 dark:bg-blue-600/20 rounded-full blur-[120px] pointer-events-none -translate-y-1/3 translate-x-1/3 transition-colors duration-500"></div>
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-500/10 dark:bg-emerald-600/20 rounded-full blur-[120px] pointer-events-none translate-y-1/3 -translate-x-1/3 transition-colors duration-500"></div>
                
                {/* Scrollable Content Container */}
                <div className="relative z-10 w-full h-full overflow-y-auto p-4 md:p-8 lg:p-12 custom-scrollbar">
                    {children}
                </div>
            </main>
        </div>
    );
}