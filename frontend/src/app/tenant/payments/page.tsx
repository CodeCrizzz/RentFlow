"use client";
import { useEffect, useState } from 'react';
import api from '@/lib/api';

export default function TenantPayments() {
    const [transactions, setTransactions] = useState([]);
    const [balance, setBalance] = useState(0);

    return (
        <div className="max-w-6xl mx-auto space-y-8 animate-fade-in relative z-10">
            <header className="mb-8">
                <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">Payments</h1>
                <p className="text-slate-500 text-lg mt-1 font-medium">View your balance and payment history.</p>
            </header>

            {/* Current Balance Hero Card */}
            <div className="relative glass-dark rounded-[2rem] overflow-hidden p-10 animate-slide-up group">
                <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 blur-[100px] rounded-full group-hover:scale-110 transition-transform duration-700"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500/10 blur-[80px] rounded-full"></div>
                
                <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center p-2">
                    <div className="mb-8 md:mb-0">
                        <p className="text-blue-200/80 font-bold uppercase tracking-widest text-sm mb-2">Current Balance</p>
                        <div className="flex items-start space-x-1">
                            <span className="text-2xl font-bold text-white/50 mt-2">₱</span>
                            <h2 className="text-6xl font-extrabold text-white tracking-tighter">{balance.toLocaleString()}</h2>
                            <span className="text-3xl font-bold text-white/50 mb-1 self-end">.00</span>
                        </div>
                        
                        {balance === 0 ? (
                            <div className="mt-4 inline-flex items-center space-x-2 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5 rounded-full">
                                <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
                                <span className="text-emerald-300 text-sm font-medium">Up to date! No pending dues.</span>
                            </div>
                        ) : (
                            <div className="mt-4 inline-flex items-center space-x-2 bg-amber-500/10 border border-amber-500/20 px-3 py-1.5 rounded-full">
                                <span className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></span>
                                <span className="text-amber-300 text-sm font-medium">Payment Required</span>
                            </div>
                        )}
                    </div>
                    
                    <button 
                        disabled={balance === 0}
                        className="bg-white text-slate-900 hover:bg-slate-50 px-8 py-4 rounded-xl font-extrabold transition-all duration-300 shadow-xl shadow-white/5 hover:shadow-white/10 hover:-translate-y-1 flex items-center space-x-2 group/btn disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                    >
                        <span>Make a Payment</span>
                        <svg className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </button>
                </div>
            </div>

            {/* Payment History Table */}
            <div className="glass rounded-[1.5rem] overflow-hidden shadow-xl border border-slate-100 animate-slide-up" style={{animationDelay: "0.1s"}}>
                <div className="p-6 border-b border-slate-100 bg-white/50">
                    <h3 className="text-xl font-bold text-slate-800">Transaction History</h3>
                </div>
                
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-slate-50/80 text-slate-400 text-xs uppercase tracking-widest border-b border-slate-100">
                                <th className="p-5 font-bold">Date</th>
                                <th className="p-5 font-bold hidden sm:table-cell">Description</th>
                                <th className="p-5 font-bold">Amount</th>
                                <th className="p-5 font-bold hidden md:table-cell">Status</th>
                                <th className="p-5 font-bold text-right">Receipt</th>
                            </tr>
                        </thead>
                        <tbody className="text-slate-700 divide-y divide-slate-50">
                            {transactions.length > 0 ? (
                                transactions.map((tx: any, idx: number) => (
                                    <tr key={idx} className="hover:bg-slate-50/80 transition-colors group">
                                        <td className="p-5 font-medium">{new Date(tx.created_at).toLocaleDateString()}</td>
                                        <td className="p-5 text-slate-500 font-medium hidden sm:table-cell">{tx.description || "Rent Payment"}</td>
                                        <td className="p-5 font-bold text-slate-800">₱{tx.amount?.toLocaleString()}</td>
                                        <td className="p-5 hidden md:table-cell">
                                            <div className={`inline-flex items-center space-x-1.5 px-3 py-1 rounded-full border shadow-sm ${
                                                tx.status === 'Paid' ? 'bg-emerald-50 text-emerald-600 border-emerald-100' : 
                                                tx.status === 'Pending' ? 'bg-amber-50 text-amber-600 border-amber-100' :
                                                'bg-rose-50 text-rose-600 border-rose-100'
                                            }`}>
                                                <span className="text-xs font-bold uppercase tracking-wider">{tx.status}</span>
                                            </div>
                                        </td>
                                        <td className="p-5 text-right">
                                            <button className="text-slate-400 hover:text-blue-600 transition-colors bg-white hover:bg-blue-50 border border-slate-200 hover:border-blue-200 px-4 py-2 rounded-lg text-sm font-bold shadow-sm inline-flex items-center space-x-2 opacity-0 group-hover:opacity-100 focus:opacity-100">
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                                                <span>PDF</span>
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={5} className="p-10 text-center text-slate-400 font-medium bg-white/40">
                                        <svg className="w-12 h-12 mx-auto mb-3 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                                        No transaction history found.
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