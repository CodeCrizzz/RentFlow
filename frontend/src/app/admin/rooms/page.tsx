"use client";
import { useState, useEffect } from 'react';
import api from '@/lib/api';

export default function RoomsPage() {
    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        api.get('/admin/rooms')
            .then(res => setRooms(res.data))
            .catch(err => console.error(err));
    }, []);

    return (
        <div className="max-w-7xl mx-auto space-y-8 animate-fade-in relative z-10">
            <header className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
                <div>
                    <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">Properties & Rooms</h1>
                    <p className="text-slate-500 text-lg mt-1 font-medium">Manage boarding capacity, pricing, and availability.</p>
                </div>
                <div className="flex items-center space-x-3">
                    <button className="bg-white border border-slate-200 text-slate-600 flex items-center px-4 py-2.5 rounded-xl shadow-sm hover:bg-slate-50 transition-all font-bold text-sm">
                        <svg className="w-4 h-4 mr-2 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"></path></svg> 
                        Filter
                    </button>
                    <button className="bg-blue-600 text-white px-5 py-2.5 rounded-xl font-bold shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/30 hover:-translate-y-0.5 transition-all text-sm flex items-center whitespace-nowrap">
                        <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg> Add Room
                    </button>
                </div>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 animate-slide-up">
                
                {rooms.length > 0 ? (
                    rooms.map((room: any) => (
                        <div key={room.id} className="bg-white rounded-[1.5rem] border border-slate-100 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                            <div className="h-32 bg-gradient-to-br from-slate-100 to-slate-200 relative">
                                <div className="absolute top-3 right-3">
                                    <span className={`inline-flex items-center space-x-1 px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider shadow-sm ${
                                        room.status === 'Available' ? 'bg-white text-emerald-600' : 'bg-white text-rose-600'
                                    }`}>
                                        <span className={`w-1.5 h-1.5 rounded-full ${room.status === 'Available' ? 'bg-emerald-500 animate-pulse' : 'bg-rose-500'}`}></span>
                                        <span>{room.status}</span>
                                    </span>
                                </div>
                                <div className="absolute -bottom-6 left-5">
                                    <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-blue-600 font-black text-xl shadow-md border border-slate-50">
                                        {room.room_number}
                                    </div>
                                </div>
                            </div>
                            
                            <div className="p-5 pt-8">
                                <h3 className="text-xl font-bold text-slate-800 mb-1">{room.room_type}</h3>
                                <div className="flex items-center text-slate-400 text-xs font-bold uppercase tracking-wider mb-4">
                                    <svg className="w-3.5 h-3.5 mr-1 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                                    Capacity: {room.capacity}
                                </div>
                                
                                <div className="flex items-end justify-between border-t border-slate-100 pt-4">
                                    <div>
                                        <p className="text-[10px] uppercase font-bold text-slate-400">Monthly Rent</p>
                                        <p className="text-lg font-black text-slate-800">₱{room.price_per_month.toLocaleString()}</p>
                                    </div>
                                    <button className="w-8 h-8 rounded-full bg-slate-50 text-slate-400 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors group-hover:shadow-md">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="col-span-1 md:col-span-2 lg:col-span-3 xl:col-span-4 bg-white/50 border-2 border-dashed border-slate-200 rounded-[2rem] p-16 flex flex-col items-center justify-center text-center">
                        <div className="w-20 h-20 bg-blue-50 text-blue-400 rounded-full flex items-center justify-center mb-6 shadow-sm">
                            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
                        </div>
                        <h2 className="text-2xl font-bold text-slate-800 mb-2">No Rooms Configured</h2>
                        <p className="text-slate-500 font-medium max-w-md mb-6">You haven't added any properties or rooms to the system yet. Click the "Add Room" button to get started.</p>
                        <button className="bg-blue-600 text-white px-6 py-3 rounded-xl font-bold shadow-md shadow-blue-500/20 hover:shadow-lg hover:-translate-y-0.5 transition-all text-sm flex items-center">
                            <svg className="w-5 h-5 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg> Create First Room
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}