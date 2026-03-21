"use client";
import { useState } from 'react';

export default function AdminRequestsPage() {
    const [requests, setRequests] = useState([]);

    const pendingRequests = requests.filter((r: any) => r.status === 'Pending');
    const inProgressRequests = requests.filter((r: any) => r.status === 'In Progress');
    const resolvedRequests = requests.filter((r: any) => r.status === 'Resolved');

    return (
        <div className="max-w-7xl mx-auto space-y-8 animate-fade-in relative z-10">
            <header className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
                <div>
                    <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">Maintenance</h1>
                    <p className="text-slate-500 text-lg mt-1 font-medium">Manage and dispatch facility repairs and tenant requests.</p>
                </div>
                <div className="flex items-center space-x-3">
                    <button className="bg-white border border-slate-200 text-slate-600 px-4 py-2.5 rounded-xl shadow-sm hover:bg-slate-50 font-bold transition-all text-sm flex items-center">
                        <svg className="w-5 h-5 mr-1.5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"></path></svg> 
                        Category Filter
                    </button>
                    <button className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-5 py-2.5 rounded-xl font-bold shadow-md shadow-amber-500/20 hover:shadow-lg hover:shadow-amber-500/30 hover:-translate-y-0.5 transition-all flex items-center">
                        <svg className="w-5 h-5 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg> Log External Issue
                    </button>
                </div>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 animate-slide-up">
                
                {/* Board Column: Pending */}
                <div className="bg-slate-50/50 rounded-[1.5rem] p-5 border border-slate-100 flex flex-col h-min min-h-[500px]">
                    <div className="flex justify-between items-center mb-4 px-2">
                        <h3 className="font-bold text-slate-700 flex items-center">
                            <span className="w-2.5 h-2.5 rounded-full bg-amber-500 mr-2"></span> Pending Review
                        </h3>
                        <span className="bg-slate-200 text-slate-600 text-xs font-bold px-2 py-0.5 rounded-full">{pendingRequests.length}</span>
                    </div>

                    <div className="space-y-4 flex-1">
                        {pendingRequests.length > 0 ? (
                            pendingRequests.map((req: any) => (
                                <div key={req.id} className="bg-white rounded-2xl p-5 shadow-sm border border-slate-200 hover:shadow-md hover:border-amber-200 transition-all cursor-pointer group">
                                    <div className="flex justify-between items-start mb-3">
                                        <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">{req.category}</span>
                                    </div>
                                    <h4 className="font-bold text-slate-800 mb-1 line-clamp-1">{req.description}</h4>
                                </div>
                            ))
                        ) : (
                            <div className="h-full min-h-[300px] border-2 border-dashed border-slate-200 rounded-2xl flex flex-col items-center justify-center text-center p-6 text-slate-400">
                                <svg className="w-8 h-8 mb-2 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                <p className="text-sm font-bold">No Pending Requests</p>
                                <p className="text-xs mt-1">Great job! The queue is empty.</p>
                            </div>
                        )}
                    </div>
                </div>

                {/* Board Column: In Progress */}
                <div className="bg-slate-50/50 rounded-[1.5rem] p-5 border border-slate-100 flex flex-col h-min min-h-[500px]">
                    <div className="flex justify-between items-center mb-4 px-2">
                        <h3 className="font-bold text-slate-700 flex items-center">
                            <span className="w-2.5 h-2.5 rounded-full bg-blue-500 mr-2"></span> In Progress
                        </h3>
                        <span className="bg-slate-200 text-slate-600 text-xs font-bold px-2 py-0.5 rounded-full">{inProgressRequests.length}</span>
                    </div>

                    <div className="space-y-4 flex-1">
                        {inProgressRequests.length > 0 ? (
                            inProgressRequests.map((req: any) => (
                                <div key={req.id} className="bg-white rounded-2xl p-5 shadow-sm border border-blue-200 ring-2 ring-blue-500/10 cursor-pointer group hover:shadow-md transition-all">
                                    <h4 className="font-bold text-slate-800 mb-1 line-clamp-1">{req.description}</h4>
                                </div>
                            ))
                        ) : (
                            <div className="h-full min-h-[300px] border-2 border-dashed border-slate-200 rounded-2xl flex flex-col items-center justify-center text-center p-6 text-slate-400">
                                <p className="text-sm font-bold">No Active Work</p>
                            </div>
                        )}
                    </div>
                </div>

                {/* Board Column: Resolved */}
                <div className="bg-slate-50/50 rounded-[1.5rem] p-5 border border-slate-100 flex flex-col h-min min-h-[500px]">
                    <div className="flex justify-between items-center mb-4 px-2">
                        <h3 className="font-bold text-slate-700 flex items-center">
                            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 mr-2"></span> Resolved
                        </h3>
                        <span className="bg-slate-200 text-slate-600 text-xs font-bold px-2 py-0.5 rounded-full">{resolvedRequests.length}</span>
                    </div>

                    <div className="space-y-4 flex-1">
                        {resolvedRequests.length > 0 ? (
                            resolvedRequests.map((req: any) => (
                                <div key={req.id} className="bg-white/60 rounded-2xl p-5 border border-slate-200 opacity-80">
                                    <h4 className="font-bold text-slate-600 mb-1 line-through decoration-slate-300">{req.description}</h4>
                                </div>
                            ))
                        ) : (
                            <div className="h-full min-h-[300px] border-2 border-dashed border-slate-200 rounded-2xl flex flex-col items-center justify-center text-center p-6 text-slate-400">
                                <p className="text-sm font-bold">No Resolved Requests</p>
                            </div>
                        )}
                    </div>
                </div>

            </div>
        </div>
    );
}
