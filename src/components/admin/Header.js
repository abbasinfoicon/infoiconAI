'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { Bell, BoxArrowLeft, Fullscreen, Gear, List, Person, Receipt, Search, X } from 'react-bootstrap-icons'

const Header = ({ toggleMenu, setToggleMenu }) => {
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);

    const notifications = [
        { _id: 1, title: "Version 4.1.2 has been launched", time: "34 Min Ago" },
        { _id: 2, title: "Video Generation has been released", time: "12 Apr" },
        { _id: 3, title: "Terms has been updated", time: "12 Apr" },
    ];

    return (
        <div className="relative fixed-header">
            <div className="d-flex align-items-center gap-2">
                <button onClick={() => setToggleMenu(!toggleMenu)} className="navbar-toggler">{toggleMenu ? <X className="iconsax text-3xl" /> : <List className="iconsax text-2xl" />}</button>

                <Link href="/dashboard" className="logo-icon d-flex d-md-none"><img src="/assets/images/logo.png" className="img-fluid" /></Link>
                <h3>Dashboard <small className='text-gray-300 text-base'>Admin</small></h3>
            </div>

            <div className="flex items-center gap-2">
                <div className="search-box">
                    <button onClick={() => setIsSearchOpen(true)} className="p-2 rounded-full hover:bg-gray-800">
                        <Search className="w-5 h-5 text-white" />
                    </button>
                    {isSearchOpen && (
                        <div className="absolute w-full inset-0 bg-gray-900 flex items-center justify-center px-4 z-10">
                            <div className="w-full h-full flex items-center">
                                <Search className="w-5 h-5 text-gray-400" />
                                <input type="text" placeholder="Search here..." className="w-full bg-transparent text-white px-4 py-2 outline-none" />
                                <button onClick={() => setIsSearchOpen(false)} className="p-2 text-gray-400 hover:text-white">✕</button>
                            </div>
                        </div>
                    )}
                </div>
                <button onClick={() => document.fullscreenElement ? document.exitFullscreen() : document.documentElement.requestFullscreen()} className="p-3 rounded-full hover:bg-gray-800"><Fullscreen className="w-5 h-5 text-white" /></button>

                <div className="relative">
                    <button onClick={() => setIsNotificationsOpen(!isNotificationsOpen)} className="p-2 rounded-full hover:bg-gray-800"><Bell className="w-6 h-6 text-white" /></button>

                    {isNotificationsOpen && (
                        <div className="absolute right-0 w-80 bg-gray-900 border border-gray-800 rounded-none shadow-lg">
                            <div className="flex justify-between items-center px-4 py-3 border-b border-gray-700">
                                <span className="text-sm font-medium text-gray-300">NOTIFICATIONS</span>
                                <Link href="/dashboard/notification" className="text-xs text-gray-400 hover:text-white">View All</Link>
                            </div>

                            <ul className="py-2">
                                {notifications.map((item) => (
                                    <li key={item._id} className="px-4 py-3 text-sm text-gray-300 hover:bg-gray-800 cursor-pointer">
                                        <span className="block font-medium">{item.title}</span>
                                        <small className="text-xs text-gray-500">{item.time}</small>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>

                <div className="relative group">
                    <button className="flex items-center bg-gray-900 rounded-full hover:bg-gray-800">
                        <img src="/assets/images/user/5.jpg" alt="User Avatar" className="w-10 h-10 rounded-full" />
                    </button>

                    {/* Dropdown Menu */}
                    <div className="absolute right-0 z-10 hidden w-56 bg-gray-900 border border-gray-800 rounded-none shadow-lg group-hover:block">
                        <div className="p-4 border-b border-gray-700">
                            <div className="flex items-center gap-3">
                                <img src="/assets/images/user/5.jpg" alt="User Avatar" className="w-12 h-12 rounded-full" />
                                <div>
                                    <span className="block text-sm font-medium text-white">Caden Smith</span>
                                    <small className="block text-xs text-gray-400">cadmail@gmail.com</small>
                                </div>
                            </div>
                        </div>
                        <ul className="py-2">
                            <li className="px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 flex items-center gap-3 cursor-pointer">
                                <Link className='flex items-center gap-2' href="/dashboard/profile"><Person className="w-4 h-4" /> Profile</Link>
                            </li>
                            <li className="px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 flex items-center gap-3 cursor-pointer">
                                <Link className='flex items-center gap-2' href="/dashboard/setting"><Gear className="w-4 h-4" /> Settings</Link>
                            </li>
                            <li className="px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 flex items-center gap-3 cursor-pointer">
                                <Link className='flex items-center gap-2' href="/dashboard/payment"><Receipt className="w-4 h-4" /> Billing</Link>
                            </li>
                            <li className="px-4 py-2 text-sm text-red-400 hover:bg-gray-800 flex items-center gap-3 cursor-pointer">
                                <button className='flex items-center gap-2'><BoxArrowLeft className="w-4 h-4" /> Log Out</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header