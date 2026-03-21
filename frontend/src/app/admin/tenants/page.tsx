"use client";
import { useEffect, useState } from 'react';
import api from '@/lib/api';

export default function TenantsPage() {
    const [tenants, setTenants] = useState([]);

    useEffect(() => {
        api.get('/admin/tenants')
            .then(res => setTenants(res.data))
            .catch(err => console.error(err));
    }, []);

    return (
        <div className="max-w-7xl mx-auto space-y-8 animate-fade-in relative z-10">
            <header className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
                <div>
                    <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">Resident Directory</h1>
                    <p className="text-slate-500 text-lg mt-1 font-medium">Manage all registered tenants and applications.</p>
                </div>
                <div className="flex items-center space-x-3">
                    <div className="bg-white border border-slate-200 flex items-center px-4 py-2.5 rounded-xl shadow-sm focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500 transition-all">
                        <svg className="w-5 h-5 text-slate-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                        <input type="text" placeholder="Search tenants..." className="bg-transparent outline-none text-slate-700 font-medium placeholder-slate-400 w-full md:w-48" />
                    </div>
                    <button className="bg-blue-600 text-white px-5 py-2.5 rounded-xl font-bold shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/30 hover:-translate-y-0.5 transition-all text-sm flex items-center whitespace-nowrap">
                        <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg> Add Tenant
                    </button>
                </div>
            </header>

            <div className="bg-white rounded-[1.5rem] shadow-sm border border-slate-100 overflow-hidden animate-slide-up">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-slate-50/80 border-b border-slate-100">
                                <th className="p-5 text-xs font-bold text-slate-400 uppercase tracking-widest">Name</th>
                                <th className="p-5 text-xs font-bold text-slate-400 uppercase tracking-widest hidden sm:table-cell">Email</th>
                                <th className="p-5 text-xs font-bold text-slate-400 uppercase tracking-widest hidden md:table-cell">Status</th>
                                <th className="p-5 text-xs font-bold text-slate-400 uppercase tracking-widest hidden lg:table-cell">Joined</th>
                                <th className="p-5 text-xs font-bold text-slate-400 uppercase tracking-widest text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-50">
                            {tenants.map((t: any) => (
                                <tr key={t.id} className="hover:bg-slate-50/80 transition-colors group">
                                    <td className="p-5">
                                        <div className="flex items-center space-x-4">
                                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center text-blue-600 font-bold border border-blue-200">
                                                {t.name.charAt(0).toUpperCase()}
                                            </div>
                                            <div className="font-bold text-slate-800">{t.name}</div>
                                        </div>
                                    </td>
                                    <td className="p-5 text-slate-500 font-medium hidden sm:table-cell">{t.email}</td>
                                    <td className="p-5 hidden md:table-cell">
                                        <span className="inline-flex items-center space-x-1.5 bg-emerald-50 text-emerald-600 px-3 py-1 rounded-full border border-emerald-100">
                                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                                            <span className="text-xs font-bold uppercase tracking-wider">Active</span>
                                        </span>
                                    </td>
                                    <td className="p-5 text-slate-400 font-medium text-sm hidden lg:table-cell">
                                        {new Date(t.created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                                    </td>
                                    <td className="p-5 text-right">
                                        <button className="text-slate-400 hover:text-blue-600 bg-white hover:bg-blue-50 border border-slate-200 hover:border-blue-200 transition-colors px-4 py-2 rounded-lg text-sm font-bold shadow-sm inline-flex items-center space-x-1 opacity-0 group-hover:opacity-100 focus:opacity-100">
                                            <span>View Details</span>
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                            
                            {/* Empty State when no tenants */}
                            {tenants.length === 0 && (
                                <tr>
                                    <td colSpan={5} className="p-16 text-center text-slate-400 font-medium bg-white/40">
                                        <div className="w-20 h-20 bg-slate-50 text-slate-300 rounded-full flex items-center justify-center mx-auto mb-4 border border-slate-100 shadow-sm">
                                            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                                        </div>
                                        <p className="text-lg text-slate-600 font-bold mb-1">No Tenants Found</p>
                                        <p className="text-sm">There are no residents registered in the database yet.</p>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
                
                <div className="border-t border-slate-100 p-5 flex items-center justify-between text-sm text-slate-500 bg-slate-50/50">
                    <p className="font-medium">Showing {tenants.length} residents</p>
                    <div className="flex space-x-1">
                        <button className="px-3 py-1 bg-white border border-slate-200 rounded-md shadow-sm font-medium hover:bg-slate-50 disabled:opacity-50" disabled>Prev</button>
                        <button className="px-3 py-1 bg-white border border-slate-200 rounded-md shadow-sm font-medium hover:bg-slate-50 disabled:opacity-50 text-blue-600 border-blue-200">1</button>
                        <button className="px-3 py-1 bg-white border border-slate-200 rounded-md shadow-sm font-medium hover:bg-slate-50 disabled:opacity-50" disabled>Next</button>
                    </div>
                </div>
            </div>
        </div>
    );
}