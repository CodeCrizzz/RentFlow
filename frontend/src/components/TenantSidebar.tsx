"use client";
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { ThemeToggle } from './ThemeToggle';

export default function TenantSidebar() {
    const router = useRouter();
    const pathname = usePathname();

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        router.push('/login');
    };

    // Active link helper - Oceanic Neon palette
    const isActive = (path: string) => 
        pathname === path 
            ? "bg-gradient-to-r from-emerald-500/20 to-teal-500/20 text-emerald-300 border-r-4 border-emerald-400 font-bold shadow-lg shadow-emerald-500/10 translate-x-1" 
            : "text-slate-400/80 font-medium hover:bg-white/5 hover:text-white hover:translate-x-1";

    return (
        <aside className="w-72 bg-gradient-to-br from-[#020617] via-[#064e3b] to-[#020617] min-h-screen p-6 flex flex-col shadow-2xl relative overflow-hidden border-r border-teal-900/30 z-50">
            
            {/* Ambient Oceanic Glow */}
            <div className="absolute top-0 right-0 w-full h-80 bg-emerald-500/15 blur-[100px] rounded-full pointer-events-none -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-full h-80 bg-teal-500/10 blur-[100px] rounded-full pointer-events-none translate-y-1/3"></div>
            
            <div className="mb-10 relative z-10 flex items-center space-x-4 bg-white/5 p-3.5 rounded-[1.25rem] border border-white/10 shadow-inner group hover:bg-white/10 transition-colors">
                <div className="w-12 h-12 rounded-[1rem] bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center text-white font-black text-xl shadow-lg shadow-emerald-500/30 border border-emerald-400/50">
                    T
                </div>
                <div>
                    <h2 className="text-white font-black text-lg tracking-tight leading-tight">Tenant</h2>
                    <p className="text-emerald-200/80 text-[10px] font-black uppercase tracking-widest mt-1">Active Resident</p>
                </div>
            </div>

            <nav className="flex-1 space-y-1.5 relative z-10">
                <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest px-4 mb-4">Portal Menu</p>
                <Link href="/tenant/dashboard" className={`flex items-center space-x-3 px-4 py-3.5 rounded-xl transition-all duration-300 ${isActive('/tenant/dashboard')}`}>
                    <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>
                    <span>Dashboard</span>
                </Link>
                <Link href="/tenant/profile" className={`flex items-center space-x-3 px-4 py-3.5 rounded-xl transition-all duration-300 ${isActive('/tenant/profile')}`}>
                    <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                    <span>My Profile</span>
                </Link>
                <Link href="/tenant/payments" className={`flex items-center space-x-3 px-4 py-3.5 rounded-xl transition-all duration-300 ${isActive('/tenant/payments')}`}>
                    <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path></svg>
                    <span>Payments</span>
                </Link>
                <Link href="/tenant/requests" className={`flex items-center space-x-3 px-4 py-3.5 rounded-xl transition-all duration-300 ${isActive('/tenant/requests')}`}>
                    <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"></path></svg>
                    <span>Maintenance</span>
                </Link>
                <Link href="/tenant/chat" className={`flex items-center space-x-3 px-4 py-3.5 rounded-xl transition-all duration-300 ${isActive('/tenant/chat')}`}>
                    <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path></svg>
                    <span>Message Admin</span>
                </Link>
            </nav>

            <div className="p-4 border-t border-white/5 relative z-10 mx-2 mt-auto">
                <ThemeToggle />
            </div>

            <div className="relative z-10 pt-4 px-2 pb-2">
                <button
                    onClick={handleLogout}
                    className="w-full flex items-center justify-center space-x-2 px-4 py-3.5 text-slate-400 hover:text-white hover:bg-gradient-to-r hover:from-rose-500/20 hover:to-orange-500/20 rounded-xl transition-all duration-300 font-bold group border border-transparent hover:border-rose-500/30"
                >
                    <svg className="w-5 h-5 group-hover:text-rose-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
                    <span>Log Out</span>
                </button>
            </div>
        </aside>
    );
}