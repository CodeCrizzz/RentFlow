"use client";
import { useState } from 'react';

export default function TenantProfile() {
    const [isEditing, setIsEditing] = useState(false);

    return (
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in relative z-10">
            
            <header className="mb-8">
                <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">My Profile</h1>
                <p className="text-slate-500 text-lg mt-1 font-medium">Manage your personal information and preferences.</p>
            </header>

            <div className="glass rounded-[2rem] p-10 overflow-hidden relative shadow-xl border border-slate-100 animate-slide-up">
                {/* Decorative blob */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                
                <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8 mb-12 relative z-10 border-b border-slate-100 pb-10">
                    <div className="relative group cursor-pointer">
                        <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-5xl font-extrabold text-white shadow-lg shadow-blue-500/20 ring-4 ring-white">
                            JD
                        </div>
                        <div className="absolute inset-0 bg-slate-900/40 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                        </div>
                    </div>
                    
                    <div className="text-center md:text-left pt-2">
                        <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">John Doe</h2>
                        <div className="flex items-center justify-center md:justify-start mt-2 space-x-2">
                            <span className="flex items-center text-sm font-semibold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">
                                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-2"></span> Active Tenant
                            </span>
                            <span className="text-slate-400 text-sm font-medium">Since Jan 2026</span>
                        </div>
                    </div>
                </div>

                <form className="relative z-10 space-y-8" onSubmit={(e) => e.preventDefault()}>
                    <div className="flex justify-between items-center mb-2">
                        <h3 className="text-xl font-bold text-slate-800">Personal Details</h3>
                        <button 
                            type="button"
                            onClick={() => setIsEditing(!isEditing)}
                            className="text-blue-600 font-semibold text-sm hover:underline flex items-center gap-1"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>
                            {isEditing ? "Cancel Edit" : "Edit Details"}
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-slate-400 uppercase tracking-wider pl-1">Full Name</label>
                            <input 
                                type="text" 
                                defaultValue="John Doe" 
                                disabled={!isEditing}
                                className="w-full bg-slate-50/50 border border-slate-200 text-slate-800 font-semibold p-4 rounded-xl focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition disabled:opacity-70 disabled:cursor-not-allowed" 
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-slate-400 uppercase tracking-wider pl-1">Email Address</label>
                            <input 
                                type="email" 
                                defaultValue="john@example.com" 
                                disabled className="w-full bg-slate-100 border border-slate-200 text-slate-500 font-semibold p-4 rounded-xl outline-none cursor-not-allowed" 
                            />
                            <p className="text-xs text-slate-400 pl-1 mt-1">Email cannot be changed.</p>
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-slate-400 uppercase tracking-wider pl-1">Phone Number</label>
                            <input 
                                type="text" 
                                defaultValue="+63 912 345 6789" 
                                disabled={!isEditing}
                                className="w-full bg-slate-50/50 border border-slate-200 text-slate-800 font-semibold p-4 rounded-xl focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition disabled:opacity-70 disabled:cursor-not-allowed" 
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-slate-400 uppercase tracking-wider pl-1">Emergency Contact</label>
                            <input 
                                type="text" 
                                defaultValue="Jane Doe (+63 998 765 4321)" 
                                disabled={!isEditing}
                                className="w-full bg-slate-50/50 border border-slate-200 text-slate-800 font-semibold p-4 rounded-xl focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition disabled:opacity-70 disabled:cursor-not-allowed" 
                            />
                        </div>
                    </div>

                    {isEditing && (
                        <div className="pt-8 border-t border-slate-100 flex justify-end animate-fade-in">
                            <button type="button" onClick={() => setIsEditing(false)} className="bg-slate-100 text-slate-600 px-6 py-3 rounded-xl font-bold hover:bg-slate-200 transition mr-4">
                                Cancel
                            </button>
                            <button type="submit" onClick={() => setIsEditing(false)} className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-xl font-bold shadow-lg shadow-blue-500/30 hover:shadow-blue-500/40 hover:-translate-y-0.5 transition-all">
                                Save Changes
                            </button>
                        </div>
                    )}
                </form>
            </div>
        </div>
    );
}