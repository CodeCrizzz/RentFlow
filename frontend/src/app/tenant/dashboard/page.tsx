"use client";
import { useEffect, useState } from 'react';
import api from '@/lib/api';

export default function TenantDashboard() {
    const [userName, setUserName] = useState("Tenant");
    const [roomData, setRoomData] = useState<any>(null);
    const [paymentData, setPaymentData] = useState<any>(null);
    const [activeRequestsCount, setActiveRequestsCount] = useState<number>(0);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchDashboardData = async () => {
            try {
                const storedUser = localStorage.getItem('user');
                if (storedUser) {
                    const user = JSON.parse(storedUser);
                    setUserName(user.name.split(' ')[0]);
                    
                    const res = await api.get(`/tenant/dashboard/${user.id}`);
                    setRoomData(res.data.roomData);
                    setPaymentData(res.data.paymentData);
                    setActiveRequestsCount(res.data.activeRequestsCount);
                }
            } catch (error) {
                console.error("Failed to fetch dashboard data:", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchDashboardData();
    }, []);

    return (
        <div className="max-w-6xl mx-auto space-y-8 animate-fade-in relative z-10">
            
            <header className="flex justify-between items-end mb-2">
                <div>
                    <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">Overview</h1>
                    <p className="text-slate-500 text-lg mt-1 font-medium">Welcome back, {userName}.</p>
                </div>
            </header>

            {/* 1. Welcome Banner */}
            <div className="relative bg-white rounded-[2rem] p-10 shadow-xl overflow-hidden animate-slide-up hover:shadow-2xl transition-all duration-500 border border-slate-100 group">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 group-hover:scale-110 transition-transform duration-700"></div>
                <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-gradient-to-tr from-cyan-500/10 to-teal-500/10 rounded-full blur-2xl translate-y-1/3 -translate-x-1/3"></div>
                
                <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                    <div>
                        {roomData ? (
                            <>
                                <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-4 py-1.5 rounded-full text-sm font-bold mb-6 shadow-md shadow-blue-500/30">
                                    <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
                                    <span>Active Resident</span>
                                </div>
                                <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700 mb-2">
                                    Everything looks good in Room {roomData.room_number}
                                </h2>
                                <p className="text-slate-500 text-lg max-w-xl">
                                    {paymentData ? `Your next payment is due in ${paymentData.days_left} days.` : "You have no pending payments."}
                                    {activeRequestsCount > 0 ? ` You have ${activeRequestsCount} pending requests.` : " You have no pending maintenance requests."}
                                </p>
                            </>
                        ) : (
                            <>
                                <div className="inline-flex items-center space-x-2 bg-slate-100 text-slate-500 px-4 py-1.5 rounded-full text-sm font-bold mb-6 border border-slate-200">
                                    <span className="w-2 h-2 rounded-full bg-slate-400"></span>
                                    <span>Pending Assignment</span>
                                </div>
                                <h2 className="text-3xl font-bold text-slate-800 mb-2">
                                    No Room Assigned Yet
                                </h2>
                                <p className="text-slate-500 text-lg max-w-xl">
                                    Your account has not been assigned a room by the administrator. Please wait or contact support.
                                </p>
                            </>
                        )}
                    </div>
                </div>
            </div>

            {/* 2. Main Information Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-slide-up" style={{animationDelay: '0.1s'}}>

                {/* Billing Summary Card */}
                <div className="glass card-hover rounded-[1.5rem] p-8 flex flex-col justify-between">
                    <div>
                        <div className="w-12 h-12 bg-red-100 text-red-600 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        </div>
                        <h3 className="text-slate-500 font-semibold mb-3">Next Payment</h3>
                        
                        {paymentData ? (
                            <>
                                <div className="flex items-end space-x-1 mb-2">
                                    <span className="text-4xl font-extrabold text-slate-900 tracking-tight">₱{paymentData.amount.toLocaleString()}</span>
                                    <span className="text-slate-400 font-medium mb-1">.00</span>
                                </div>
                                <p className="text-sm font-medium text-red-500 bg-red-50 inline-block px-3 py-1 rounded-full border border-red-100 mb-6">
                                    Due {paymentData.due_date}
                                </p>
                            </>
                        ) : (
                            <div className="flex items-center space-x-2 text-slate-400 bg-slate-50 p-4 rounded-xl border border-slate-100 mb-6">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                <span className="text-sm font-bold">No pending dues</span>
                            </div>
                        )}
                    </div>
                    <button 
                        disabled={!paymentData}
                        className="w-full bg-slate-900 text-white font-bold py-3.5 rounded-xl hover:bg-blue-600 transition-colors shadow-lg shadow-slate-900/20 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-slate-900 disabled:shadow-none"
                    >
                        Make Payment
                    </button>
                </div>

                {/* Room Details Card */}
                <div className="glass card-hover rounded-[1.5rem] p-8 flex flex-col justify-between">
                    <div>
                        <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
                        </div>
                        <h3 className="text-slate-500 font-semibold mb-3">My Accommodation</h3>
                        
                        {roomData ? (
                            <>
                                <div className="text-4xl font-extrabold text-slate-900 tracking-tight mb-6">Room {roomData.room_number}</div>
                                <div className="space-y-3">
                                    <div className="flex justify-between items-center bg-slate-50 p-3 rounded-xl border border-slate-100">
                                        <span className="text-slate-500 font-medium text-sm">Type</span>
                                        <span className="font-bold text-slate-800 text-sm">{roomData.room_type}</span>
                                    </div>
                                    <div className="flex justify-between items-center bg-slate-50 p-3 rounded-xl border border-slate-100">
                                        <span className="text-slate-500 font-medium text-sm">Move-in Date</span>
                                        <span className="font-bold text-slate-800 text-sm">{roomData.move_in_date}</span>
                                    </div>
                                </div>
                            </>
                        ) : (
                            <div className="flex flex-col items-center justify-center text-center p-6 bg-slate-50 border border-slate-100 rounded-xl">
                                <span className="text-slate-400 font-bold mb-1">Unassigned</span>
                                <span className="text-slate-400 text-xs">An admin hasn't assigned you a room yet.</span>
                            </div>
                        )}
                    </div>
                </div>

                {/* Maintenance Card */}
                <div className="glass card-hover rounded-[1.5rem] p-8 flex flex-col justify-between">
                    <div>
                        <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        </div>
                        <h3 className="text-slate-500 font-semibold mb-3">Active Requests</h3>
                        
                        {activeRequestsCount > 0 ? (
                            <>
                                <div className="text-4xl font-extrabold text-slate-900 tracking-tight mb-2">{activeRequestsCount}</div>
                                <p className="text-amber-600 font-medium text-sm bg-amber-50 inline-block px-3 py-1 rounded-full border border-amber-100">
                                    Waiting on resolution
                                </p>
                            </>
                        ) : (
                            <>
                                <div className="text-4xl font-extrabold text-slate-900 tracking-tight mb-2">0</div>
                                <p className="text-emerald-600 font-medium text-sm bg-emerald-50 inline-block px-3 py-1 rounded-full border border-emerald-100 flex items-center space-x-1">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                    <span>All issues resolved</span>
                                </p>
                            </>
                        )}
                    </div>
                    
                    <button className="w-full bg-white border-2 border-slate-200 text-slate-700 font-bold py-3.5 rounded-xl hover:border-slate-300 hover:bg-slate-50 transition-colors mt-6">
                        Report an Issue
                    </button>
                </div>

            </div>
        </div>
    );
}