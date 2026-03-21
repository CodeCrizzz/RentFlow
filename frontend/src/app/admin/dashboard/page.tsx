"use client";
import { useState, useEffect } from 'react';
import api from '@/lib/api';

export default function AdminDashboard() {
    const [stats, setStats] = useState({
        totalTenants: 0,
        occupiedRooms: 0,
        totalRooms: 0,
        pendingRequests: 0
    });
    const [recentActivities, setRecentActivities] = useState([]);

    useEffect(() => {
        const fetchStats = async () => {
            try {
                const res = await api.get('/admin/dashboard-stats');
                setStats(res.data.stats);
                setRecentActivities(res.data.recentActivities);
            } catch (error) {
                console.error("Failed to fetch admin stats:", error);
            }
        };
        fetchStats();
    }, []);

    return (
        <div className="max-w-7xl mx-auto space-y-8 animate-fade-in relative z-10">
            <header className="mb-10">
                <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">System Overview</h1>
                <p className="text-slate-500 text-lg mt-1 font-medium">Real-time boarding house metrics and alerts.</p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-slide-up">

                {/* Total Tenants */}
                <div className="bg-white p-6 rounded-[1.5rem] shadow-sm border border-slate-100 relative overflow-hidden group hover:shadow-lg transition-all">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 rounded-bl-full pointer-events-none group-hover:scale-110 transition-transform"></div>
                    <div className="flex items-start justify-between mb-4">
                        <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-slate-400 font-bold text-sm uppercase tracking-wider mb-1">Total Tenants</h3>
                        <p className="text-4xl font-black text-slate-800 tracking-tight">{stats.totalTenants}</p>
                    </div>
                </div>

                {/* Occupied Rooms */}
                <div className="bg-white p-6 rounded-[1.5rem] shadow-sm border border-slate-100 relative overflow-hidden group hover:shadow-lg transition-all">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 rounded-bl-full pointer-events-none group-hover:scale-110 transition-transform"></div>
                    <div className="flex items-start justify-between mb-4">
                        <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
                        </div>
                        <span className="inline-flex items-center text-slate-500 bg-slate-50 px-2 py-1 rounded-lg text-xs font-bold">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-1.5"></span> Capacity
                        </span>
                    </div>
                    <div>
                        <h3 className="text-slate-400 font-bold text-sm uppercase tracking-wider mb-1">Occupied Rooms</h3>
                        <p className="text-4xl font-black text-slate-800 tracking-tight">
                            <span className="text-emerald-600">{stats.occupiedRooms}</span> <span className="text-slate-300 text-3xl">/ {stats.totalRooms}</span>
                        </p>
                    </div>
                </div>

                {/* Pending Requests */}
                <div className="bg-white p-6 rounded-[1.5rem] shadow-sm border border-slate-100 relative overflow-hidden group hover:shadow-lg transition-all">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/5 rounded-bl-full pointer-events-none group-hover:scale-110 transition-transform"></div>
                    <div className="flex items-start justify-between mb-4">
                        <div className="w-12 h-12 bg-amber-50 text-amber-500 rounded-2xl flex items-center justify-center">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
                        </div>
                        {stats.pendingRequests > 0 && (
                            <span className="inline-flex items-center text-amber-600 bg-amber-50 px-2 py-1 rounded-lg text-xs font-bold">
                                Action Needed
                            </span>
                        )}
                    </div>
                    <div>
                        <h3 className="text-slate-400 font-bold text-sm uppercase tracking-wider mb-1">Pending Requests</h3>
                        <p className="text-4xl font-black text-slate-800 tracking-tight">{stats.pendingRequests}</p>
                    </div>
                </div>

            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 animate-slide-up" style={{ animationDelay: '0.1s' }}>
                <div className="lg:col-span-2 bg-white rounded-[1.5rem] shadow-sm border border-slate-100 p-8 h-96 flex flex-col justify-center items-center text-slate-400">
                    <svg className="w-16 h-16 mb-4 text-slate-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
                    <p className="font-medium">Not enough data to generate charts</p>
                </div>

                <div className="bg-white rounded-[1.5rem] shadow-sm border border-slate-100 p-6 flex flex-col">
                    <h3 className="text-lg font-bold text-slate-800 mb-6">Recent Activity</h3>

                    {recentActivities.length > 0 ? (
                        <div className="flex-1 space-y-6">
                            {recentActivities.map((act: any) => (
                                <div key={act.id} className="flex items-start space-x-4">
                                    <div className="w-2 h-2 mt-2 rounded-full bg-blue-500"></div>
                                    <div>
                                        <p className="text-slate-700 font-bold text-sm">{act.title}</p>
                                        <p className="text-slate-400 text-xs mt-1">{act.description}</p>
                                        <p className="text-slate-300 text-xs mt-1 font-medium">{new Date(act.created_at).toLocaleString()}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="flex-1 flex flex-col justify-center items-center text-center text-slate-400 py-8">
                            <svg className="w-10 h-10 text-slate-200 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            <p className="font-medium text-sm">No recent activity detected.</p>
                        </div>
                    )}

                    <button className="w-full mt-4 text-blue-600 bg-blue-50 py-2.5 rounded-xl text-sm font-bold hover:bg-blue-100 transition-colors">
                        Refresh Feed
                    </button>
                </div>
            </div>
        </div>
    );
}