"use client";
import { useState } from 'react';

export default function AdminChatPage() {
    const [chats, setChats] = useState([]);
    const [activeChat, setActiveChat] = useState<any>(null);

    return (
        <div className="max-w-7xl mx-auto h-[88vh] flex bg-white rounded-[2rem] overflow-hidden shadow-sm border border-slate-100 animate-slide-up relative z-10">
            
            {/* Sidebar / Contacts List */}
            <div className="w-80 bg-slate-50 border-r border-slate-100 flex flex-col">
                <div className="p-6 border-b border-slate-100 bg-white">
                    <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">Messages</h2>
                    <div className="mt-4 relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <svg className="h-5 w-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </div>
                        <input
                            type="text"
                            placeholder="Search tenants..."
                            className="w-full bg-slate-100 border-none text-slate-700 placeholder-slate-400 pl-10 p-2.5 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all text-sm font-medium"
                        />
                    </div>
                </div>

                <div className="flex-1 overflow-y-auto w-full">
                    {chats.length > 0 ? (
                        chats.map((chat: any) => (
                            <div key={chat.id} className="p-4 border-b border-slate-100 hover:bg-slate-100 transition-colors cursor-pointer group">
                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-slate-200 to-slate-100 text-slate-500 border border-slate-200 flex items-center justify-center font-bold">
                                        {chat.tenant_name.charAt(0)}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="flex justify-between items-baseline mb-0.5">
                                            <h3 className="text-slate-700 font-bold text-sm truncate group-hover:text-slate-900 transition-colors">{chat.tenant_name}</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="p-10 text-center text-slate-400 flex flex-col items-center">
                            <svg className="w-10 h-10 mb-2 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"></path></svg>
                            <p className="font-bold text-sm text-slate-500">No active chats</p>
                        </div>
                    )}
                </div>
            </div>

            {/* Main Chat Area */}
            <div className="flex-1 flex flex-col bg-white">
                {activeChat ? (
                    <>
                        <div className="p-6 border-b border-slate-100 flex justify-between items-center shadow-sm z-10">
                            <div className="flex items-center space-x-4">
                                <div>
                                    <h2 className="text-lg font-extrabold text-slate-800 tracking-tight">{activeChat.tenant_name}</h2>
                                </div>
                            </div>
                        </div>

                        <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-slate-50/50">
                            {/* Messages go here */}
                        </div>

                        <div className="p-5 border-t border-slate-100 bg-white">
                            <div className="flex items-center bg-slate-50 border border-slate-200 rounded-2xl p-1.5 focus-within:ring-2 focus-within:ring-blue-500/30 focus-within:border-blue-500 transition-all shadow-inner">
                                <input
                                    type="text"
                                    placeholder="Type your message..."
                                    className="flex-1 bg-transparent p-2 outline-none text-slate-700 font-medium placeholder-slate-400 text-sm"
                                />
                                <button className="bg-blue-600 text-white p-3 rounded-xl hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/30 transition-all flex items-center justify-center -translate-y-[0.5px]">
                                    <svg className="w-5 h-5 relative right-[1px] bottom-[1px] transform rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg>
                                </button>
                            </div>
                        </div>
                    </>
                ) : (
                    <div className="flex-1 flex flex-col items-center justify-center bg-slate-50/50 text-slate-400">
                        <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm border border-slate-100">
                            <svg className="w-10 h-10 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
                        </div>
                        <h2 className="text-xl font-bold text-slate-600 mb-2">Select a Conversation</h2>
                        <p className="text-sm font-medium">Click on a tenant's name from the sidebar to view messages.</p>
                    </div>
                )}
            </div>
        </div>
    );
}
