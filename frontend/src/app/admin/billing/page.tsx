"use client";
import { useState } from 'react';

export default function AdminBillingPage() {
    const [payments, setPayments] = useState([]);

    return (
        <div className="max-w-7xl mx-auto space-y-8 animate-fade-in relative z-10">
            <header className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
                <div>
                    <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">Finance & Billing</h1>
                    <p className="text-slate-500 text-lg mt-1 font-medium">Manage invoices, collect rent, and view revenue.</p>
                </div>
                <div className="flex items-center space-x-3">
                    <button className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-5 py-2.5 rounded-xl font-bold shadow-md shadow-emerald-500/20 hover:shadow-lg hover:shadow-emerald-500/30 hover:-translate-y-0.5 transition-all flex items-center">
                        <svg className="w-5 h-5 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg> Generate Invoice
                    </button>
                </div>
            </header>

            <div className="bg-white rounded-[1.5rem] shadow-sm border border-slate-100 overflow-hidden animate-slide-up">
                <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
                    <h3 className="text-xl font-bold text-slate-800">Recent Transactions</h3>
                    <div className="bg-white border border-slate-200 flex items-center px-4 py-2 rounded-xl shadow-sm focus-within:ring-2 focus-within:ring-emerald-500 focus-within:border-emerald-500 transition-all">
                        <svg className="w-4 h-4 text-slate-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                        <input type="text" placeholder="Search payments..." className="bg-transparent outline-none text-slate-700 text-sm font-medium placeholder-slate-400 w-32 md:w-48" />
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-white border-b border-slate-100">
                                <th className="p-5 text-xs font-bold text-slate-400 uppercase tracking-widest">Reference</th>
                                <th className="p-5 text-xs font-bold text-slate-400 uppercase tracking-widest">Tenant</th>
                                <th className="p-5 text-xs font-bold text-slate-400 uppercase tracking-widest">Amount</th>
                                <th className="p-5 text-xs font-bold text-slate-400 uppercase tracking-widest">Status</th>
                                <th className="p-5 text-xs font-bold text-slate-400 uppercase tracking-widest hidden md:table-cell">Due Date</th>
                                <th className="p-5 text-xs font-bold text-slate-400 uppercase tracking-widest text-right">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-50">
                            {payments.length > 0 ? (
                                payments.map((tx: any, idx: number) => (
                                    <tr key={idx} className="hover:bg-slate-50/80 transition-colors group">
                                        <td className="p-5 font-bold text-slate-600 text-sm">#{tx.id || 'N/A'}</td>
                                        <td className="p-5 font-bold text-slate-800">{tx.tenant_name}</td>
                                        <td className="p-5 font-extrabold text-slate-900">₱{tx.amount.toLocaleString()}</td>
                                        <td className="p-5">
                                            <span className={`inline-flex items-center space-x-1.5 px-3 py-1 rounded-full border shadow-sm ${
                                                tx.status === 'Paid' ? 'bg-emerald-50 text-emerald-600 border-emerald-100' : 
                                                tx.status === 'Pending' ? 'bg-slate-50 text-slate-600 border-slate-200' :
                                                'bg-rose-50 text-rose-600 border-rose-100'
                                            }`}>
                                                <span className={`w-1.5 h-1.5 rounded-full ${
                                                    tx.status === 'Paid' ? 'bg-emerald-500' : 
                                                    tx.status === 'Pending' ? 'bg-slate-400' :
                                                    'bg-rose-500 animate-pulse'
                                                }`}></span>
                                                <span className="text-xs font-bold uppercase tracking-wider">{tx.status}</span>
                                            </span>
                                        </td>
                                        <td className="p-5 text-slate-500 font-medium text-sm hidden md:table-cell">{tx.due_date}</td>
                                        <td className="p-5 text-right">
                                            <button className="text-slate-400 hover:text-emerald-600 hover:bg-emerald-50 px-3 py-1.5 rounded-lg text-sm font-bold transition-colors">
                                                Manage
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={6} className="p-16 text-center text-slate-400 font-medium bg-slate-50/20">
                                        <div className="w-16 h-16 bg-slate-100 text-slate-300 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                                        </div>
                                        <p className="text-slate-600 font-bold mb-1">No Invoices Found</p>
                                        <p className="text-sm">There are no billing records or transactions in the database.</p>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
