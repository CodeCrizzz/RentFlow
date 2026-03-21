"use client";
import { useState, useEffect } from 'react';

export default function TenantChat() {
    const [messages, setMessages] = useState([]);
    const [inputMessage, setInputMessage] = useState('');

    return (
        <div className="max-w-4xl mx-auto h-[88vh] flex flex-col glass rounded-[2rem] overflow-hidden animate-slide-up relative z-10 shadow-2xl border border-white/60">
            
            {/* Chat Header */}
            <div className="bg-white/80 backdrop-blur-md border-b border-slate-100 p-5 flex items-center justify-between sticky top-0 z-20">
                <div className="flex items-center space-x-4">
                    <div className="relative">
                        <div className="h-12 w-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center text-white font-extrabold text-lg shadow-md shadow-blue-500/20">
                            A
                        </div>
                        <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-emerald-500 border-2 border-white rounded-full"></div>
                    </div>
                    <div>
                        <h2 className="font-extrabold text-slate-800 text-lg tracking-tight">Admin / Property Manager</h2>
                        <p className="text-xs text-emerald-600 font-bold tracking-wide uppercase mt-0.5">
                            Online
                        </p>
                    </div>
                </div>
            </div>

            {/* Chat Messages Area */}
            <div className="flex-1 p-6 overflow-y-auto bg-slate-50/50 space-y-6">
                
                {messages.length > 0 ? (
                    messages.map((msg: any) => (
                        <div key={msg.id} className={`flex items-end space-x-2 ${msg.is_admin ? '' : 'justify-end mt-8'}`}>
                            {msg.is_admin && (
                                <div className="h-8 w-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-xs flex-shrink-0">
                                    A
                                </div>
                            )}
                            <div className={`${
                                msg.is_admin 
                                ? 'bg-white border border-slate-200 text-slate-700 rounded-[1.5rem] rounded-bl-sm' 
                                : 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-[1.5rem] rounded-br-sm shadow-md shadow-blue-500/20'
                            } p-4 max-w-[75%] shadow-sm relative group`}>
                                <p className="font-medium leading-relaxed">{msg.content}</p>
                                <span className={`text-[10px] uppercase font-bold text-slate-400 mt-2 block opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 absolute -bottom-5 ${msg.is_admin ? 'left-2' : 'right-2'}`}>
                                    {new Date(msg.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                </span>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="h-full flex flex-col items-center justify-center text-center text-slate-400">
                        <div className="w-20 h-20 bg-blue-50 text-blue-400 rounded-full flex items-center justify-center mb-4 shadow-sm">
                            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
                        </div>
                        <h3 className="text-xl font-bold text-slate-700 mb-1">Start a Conversation</h3>
                        <p className="font-medium text-sm max-w-xs">Send a message to your property manager to get help or ask a question.</p>
                    </div>
                )}

            </div>

            {/* Message Input Area */}
            <div className="p-4 border-t border-slate-100 bg-white/80 backdrop-blur-md">
                <form className="flex items-center bg-slate-100/80 border border-slate-200 rounded-2xl p-1.5 focus-within:ring-2 focus-within:ring-blue-500/30 focus-within:border-blue-500 transition-all shadow-sm">
                    <button type="button" className="p-3 text-slate-400 hover:text-blue-500 transition-colors rounded-xl">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"></path></svg>
                    </button>
                    <input
                        type="text"
                        value={inputMessage}
                        onChange={(e) => setInputMessage(e.target.value)}
                        placeholder="Write a message..."
                        className="flex-1 bg-transparent p-2 outline-none text-slate-700 font-medium placeholder-slate-400"
                    />
                    <button type="submit" className="bg-blue-600 text-white p-3 rounded-xl hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/30 transition-all flex items-center justify-center -translate-y-[0.5px]">
                        <svg className="w-5 h-5 relative right-[1px] bottom-[1px] transform rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg>
                    </button>
                </form>
            </div>
            
        </div>
    );
}