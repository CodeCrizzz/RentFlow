"use client";
import { useState, useEffect } from 'react';

export default function TenantRequests() {
    const [requests, setRequests] = useState([]);

    return (
        <div className="max-w-5xl mx-auto space-y-8 animate-fade-in relative z-10">
            <header className="mb-8 flex flex-col md:flex-row md:justify-between md:items-end gap-4">
                <div>
                    <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">Maintenance</h1>
                    <p className="text-slate-500 text-lg mt-1 font-medium">Report issues and track repair status.</p>
                </div>
                <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3.5 rounded-xl font-bold hover:shadow-lg hover:shadow-blue-500/30 hover:-translate-y-0.5 transition-all shadow-md flex items-center justify-center space-x-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M12 4v16m8-8H4"></path></svg>
                    <span>New Request</span>
                </button>
            </header>

            <div className="grid grid-cols-1 gap-6">

                {requests.length > 0 ? (
                    requests.map((req: any) => (
                        <div key={req.id} className={`glass card-hover rounded-[1.5rem] p-8 border-l-8 relative overflow-hidden group ${req.status === 'Resolved' ? 'border-l-slate-300 bg-white/40 opacity-75' :
                                req.status === 'In Progress' ? 'border-l-blue-400' : 'border-l-amber-400'
                            }`}>

                            <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-4">
                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 bg-slate-50 text-slate-500 rounded-2xl flex items-center justify-center shadow-sm border border-slate-100">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path></svg>
                                    </div>
                                    <div>
                                        <h3 className={`text-xl font-bold ${req.status === 'Resolved' ? 'text-slate-500 line-through decoration-slate-300' : 'text-slate-800'}`}>
                                            {req.category} Issue
                                        </h3>
                                        <p className="text-slate-400 text-sm font-medium mt-0.5">Reported on {new Date(req.created_at).toLocaleDateString()}</p>
                                    </div>
                                </div>
                                <span className={`inline-flex items-center space-x-1.5 px-4 py-1.5 rounded-full border shadow-sm ${req.status === 'Resolved' ? 'bg-slate-100 text-slate-500 border-slate-200' :
                                        req.status === 'In Progress' ? 'bg-blue-50 text-blue-600 border-blue-100' :
                                            'bg-amber-50 text-amber-600 border-amber-100'
                                    }`}>
                                    {req.status !== 'Resolved' && <span className={`w-2 h-2 rounded-full animate-pulse ${req.status === 'In Progress' ? 'bg-blue-500' : 'bg-amber-500'}`}></span>}
                                    <span className="text-xs font-bold uppercase tracking-wider">{req.status}</span>
                                </span>
                            </div>

                            <div className="bg-slate-50/50 p-5 rounded-2xl border border-slate-100 text-slate-600 font-medium leading-relaxed">
                                {req.description}
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="bg-white/50 backdrop-blur-sm border-2 border-dashed border-slate-200 rounded-[2rem] p-16 flex flex-col items-center justify-center text-center">
                        <div className="w-20 h-20 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mb-6 shadow-sm">
                            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        </div>
                        <h2 className="text-2xl font-bold text-slate-800 mb-2">No Active Requests</h2>
                        <p className="text-slate-500 font-medium max-w-md">Everything is currently in working order. If you experience any issues in your accommodation, you can log a new request here.</p>
                    </div>
                )}
            </div>
        </div>
    );
}