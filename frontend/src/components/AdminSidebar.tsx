"use client";
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { ThemeToggle } from "./ThemeToggle";

export default function AdminSidebar() {
    const router = useRouter();
    const pathname = usePathname();

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        router.push('/login');
    };

    const isActive = (path: string) => 
        pathname === path 
            ? "bg-gradient-to-r from-indigo-500/20 to-fuchsia-500/20 text-indigo-300 border-r-4 border-indigo-400 font-bold shadow-lg shadow-indigo-500/10 translate-x-1" 
            : "text-slate-400/80 font-medium hover:bg-white/5 hover:text-white hover:translate-x-1";

    return (
        <aside className="w-72 bg-gradient-to-br from-[#0f172a] via-[#1e1b4b] to-[#0f172a] min-h-screen p-6 flex flex-col shadow-2xl relative z-50 overflow-hidden border-r border-indigo-900/30">
            
            {/* Ambient Aurora Glow */}
            <div className="absolute top-0 left-0 w-full h-80 bg-indigo-500/20 blur-[100px] rounded-full pointer-events-none -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-full h-80 bg-fuchsia-500/15 blur-[100px] rounded-full pointer-events-none translate-y-1/3"></div>

            <div className="mb-12 flex items-center space-x-4 relative z-10 transition-transform duration-300 hover:scale-[1.02]">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 via-purple-500 to-fuchsia-500 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-500/30">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2-2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
                </div>
                <div>
                    <h2 className="text-2xl font-black text-white tracking-tight leading-none">Rent<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-fuchsia-400">Flow</span></h2>
                    <p className="text-[10px] text-indigo-300/80 mt-1 uppercase tracking-widest font-black">Admin Portal</p>
                </div>
            </div>

            <div className="mb-6 relative z-10">
                <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest px-4 mb-4">Master Menu</p>
                <nav className="flex-1 space-y-1.5">
                    <Link href="/admin/dashboard" className={`flex items-center space-x-3 px-4 py-3.5 rounded-xl transition-all duration-300 ${isActive('/admin/dashboard')}`}>
                        <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>
                        <span>Dashboard</span>
                    </Link>
                    <Link href="/admin/tenants" className={`flex items-center space-x-3 px-4 py-3.5 rounded-xl transition-all duration-300 ${isActive('/admin/tenants')}`}>
                        <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
                        <span>Tenants</span>
                    </Link>
                    <Link href="/admin/rooms" className={`flex items-center space-x-3 px-4 py-3.5 rounded-xl transition-all duration-300 ${isActive('/admin/rooms')}`}>
                        <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
                        <span>Properties</span>
                    </Link>
                    <Link href="/admin/billing" className={`flex items-center space-x-3 px-4 py-3.5 rounded-xl transition-all duration-300 ${isActive('/admin/billing')}`}>
                        <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2zM10 8.5a.5.5 0 11-1 0 .5.5 0 011 0zm5 5a.5.5 0 11-1 0 .5.5 0 011 0z"></path></svg>
                        <span>Financials</span>
                    </Link>
                    <Link href="/admin/requests" className={`flex items-center space-x-3 px-4 py-3.5 rounded-xl transition-all duration-300 ${isActive('/admin/requests')}`}>
                        <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"></path></svg>
                        <span>Maintenance</span>
                    </Link>
                    <Link href="/admin/chat" className={`flex items-center space-x-3 px-4 py-3.5 rounded-xl transition-all duration-300 ${isActive('/admin/chat')}`}>
                        <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path></svg>
                        <span>Messages</span>
                    </Link>
                </nav>
            </div>

            <div className="p-4 border-t border-white/5 relative z-10 mx-2 mt-auto">
                <ThemeToggle />
            </div>

            <div className="relative z-10 pt-4 px-2 pb-2">
                <button
                    onClick={handleLogout}
                    className="w-full flex items-center justify-center space-x-2 px-4 py-3.5 text-slate-400 hover:text-white hover:bg-gradient-to-r hover:from-rose-500/20 hover:to-orange-500/20 rounded-xl transition-all duration-300 font-bold group border border-transparent hover:border-rose-500/30"
                >
                    <svg className="w-5 h-5 group-hover:text-rose-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
                    <span>Sign Out</span>
                </button>
            </div>
        </aside>
    );
}