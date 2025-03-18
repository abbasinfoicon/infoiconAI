'use client'
import BackButton from '@/components/admin/BackButton'
import BlockUser from '@/components/admin/BlockUser'
import BreadCrumb from '@/components/admin/BreadCrumb'
import DeleteModal from '@/components/admin/DeleteModal'
import FetchData from '@/components/FetchApi'
import FormEditor from '@/components/admin/FormEditor'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import React, { useState } from 'react'
import { Bell, Camera, Envelope, Eye, EyeSlash, Facebook, Instagram, Key, Linkedin, Mic, PencilSquare, Phone, Send, Trash, Twitter, XLg, Youtube } from 'react-bootstrap-icons'
import { toast } from 'react-toastify'

const UsersDetail = () => {
    const { id } = useParams();
    const [contents, setContents] = useState("");

    const [show, setShow] = useState(false);
    const [itemIdToDelete, setItemIdToDelete] = useState(null);

    const [show2, setShow2] = useState(false);
    const [itemIdToChangePassword, setItemIdToChangePassword] = useState(null);

    const [itemIdToNotification, setItemIdToNotification] = useState(null);
    const [notification, setNotification] = useState(false);

    const [showPassword, setShowPassword] = useState({ password: false, cpassword: false });
    const toggleEye = (field) => setShowPassword((prev) => ({ ...prev, [field]: !prev[field] }));

    const onOpenChangePassword = (itemId) => {
        setItemIdToChangePassword(itemId);
        setShow2(true);
    };

    // Delete-Function
    const handleDelete = async () => {
        try {
            const res = await FetchData({ url: ``, method: "DELETE" });
            const result = await res.json();

            if (!res.ok) {
                toast.error(result.message);
                throw new Error('Failed to delete item');
            }
            setShow(false);
            getData();
            toast.success(result.message);
        } catch (error) {
            console.error(`Error deleting ${itemIdToDelete}:`, error.message);
        }
    };
    const onOpenModal = (itemId) => {
        setItemIdToDelete(itemId);
        setShow(true);
    };
    const onCloseModal = () => setShow(false);

    // Notification-function
    const onSendNotificationModal = (id) => {
        setItemIdToNotification(id);
        setNotification(true);
    }
    const handleSendNotification = async () => {
        try {
            const formData = { "message": description, participants: [id], fromUserId: user._id };
            const res = await FetchData({ url: "", body: formData, method: "POST" });

            if (!res.ok) { throw new Error('Failed to notification item'); }
            const result = await res.json();
            setNotification(false);
            toast.success(result.message);
        } catch (error) {
            console.error('Error sending data:', error.message);
        }
    }

    return (
        <div className='user-pg'>
            <div className="mb-8 grid grid-cols-1 col-span-2 gap-6">
                <div className="relative flex flex-col bg-clip-border bg-[#141d2a] text-gray-400 shadow-md overflow-hidden xl:col-span-2 p-4">
                    <div className="flex flex-col-reverse justify-between gap-6 md:flex-row md:items-center">
                        <div className="capitalize">
                            <BreadCrumb title="Abbas" parent='users' />
                        </div>

                        <div className="flex items-center justify-end text-right w-full place-items-center flex-col gap-4 sm:flex-row">
                            <BackButton />

                            <button onClick={() => onOpenChangePassword("1")} className="middle center flex max-[640px]:w-full items-center gap-2 custom_btn py-2 px-6 font-sans text-xs font-bold uppercase text-[#141d2a] shadow-md shadow-green-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                                <Key className="text-xl" /> Change Password
                            </button>
                            <Link href={`/dashboard/users/edit/${id}`} className="middle center flex max-[640px]:w-full items-center gap-2 custom_btn py-2 px-6 font-sans text-xs font-bold uppercase text-[#141d2a] shadow-md shadow-green-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                                <PencilSquare className="text-xl" /> Edit
                            </Link>
                            <button onClick={() => onOpenModal("1")} className="middle center flex max-[640px]:w-full items-center gap-2 custom_btn py-2 px-6 font-sans text-xs font-bold uppercase text-[#141d2a] shadow-md shadow-green-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                                <Trash className="text-xl" /> Delete
                            </button>
                            <button onClick={() => onSendNotificationModal("1")} className="middle center flex max-[640px]:w-full items-center gap-2 custom_btn py-2 px-6 font-sans text-xs font-bold uppercase text-[#141d2a] shadow-md shadow-green-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                                <Bell className="text-xl" /> Send Notification
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-md-12">
                    <div className="mx-auto">
                        <div className="grid grid-cols-4 sm:grid-cols-12 gap-6">
                            <div className="col-span-4">
                                <div className="bg-[#141d2a] shadow p-6">
                                    <div className="flex flex-col items-center">
                                        <img src="/assets/images/user/5.jpg" className="w-32 h-32 bg-gray-300 rounded-full mb-4 shrink-0" />
                                        <h1 className="text-xl font-bold text-[#3bedb2]">Abbas Abidi</h1>
                                        <p className="text-gray-500">Admin</p>
                                        <div className="mt-6 flex flex-wrap gap-4 justify-center">
                                            <Link href={`mailto:abbas@infoicon.in`} className="flex gap-2 items-center bg-emerald-500 hover:bg-emerald-600 text-white py-2 px-4"><Envelope /> Email</Link>
                                            <Link href={`tel:9876543210`} className="flex gap-2 items-center bg-gray-300 hover:bg-gray-400 text-gray-500 py-2 px-4"><Phone /> Phone</Link>
                                        </div>
                                    </div>

                                    <hr className="my-6 border-t border-gray-300" />

                                    <div className="flex flex-col text-gray-500">
                                        <span className="uppercase font-bold tracking-wider mb-2">Contact Info</span>
                                        <ul>
                                            <li className="flex gap-4 items-center mb-2 justify-between">ID: <span className='font-bold text-gray-400'>001</span></li>
                                            <li className="flex gap-4 items-center mb-2 justify-between">Name: <span className='font-bold text-gray-400'>Abbas</span></li>
                                            <li className="flex gap-4 items-center mb-2 justify-between">Email: <span className='font-bold text-gray-400'>abbas@gmail.ocm</span></li>
                                            <li className="flex gap-4 items-center mb-2 justify-between">Phone: <span className='font-bold text-gray-400'>9876543210</span></li>
                                            <li className="flex gap-4 items-center mb-2 justify-between">City: <span className='font-bold text-gray-400'>Delhi</span></li>
                                            <li className="flex gap-4 items-center mb-2 justify-between">Address: <span className='font-bold text-gray-400'>E-32, Noida</span></li>
                                            <li className="flex gap-4 items-center mb-2 justify-between">Certified: <span className='font-bold text-gray-400'>Infoicon AI</span></li>
                                        </ul>
                                    </div>

                                    <hr className="my-6 border-t border-gray-300" />

                                    <div className="mx-auto bg-[#141d2a] shadow-lg overflow-hidden text-gray-500">
                                        <div className="bg-gray-800 text-white text-center py-4">
                                            <h3 className="text-2xl font-semibold">Active Package</h3>
                                            <p className="mt-2 mb-0">Mondly Plan</p>
                                        </div>

                                        <div className="p-6">
                                            <h4 className="text-4xl font-bold text-[#3bedb2]">€ 100</h4>
                                            <p className="text-gray-400">Per Month</p>

                                            <div className='mb-3 plan-lists'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel, facilis at tenetur corrupti explicabo dolore dolores iste debitis sed dolor consectetur deserunt numquam possimus eligendi similique quam consequatur. Inventore, dicta.</div>
                                            <div className='mb-3 plan-lists'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel, facilis at tenetur corrupti explicabo dolore dolores iste debitis sed dolor consectetur deserunt numquam possimus eligendi similique quam consequatur. Inventore, dicta.</div>
                                            <div className='mb-3 plan-lists'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel, facilis at tenetur corrupti explicabo dolore dolores iste debitis sed dolor consectetur deserunt numquam possimus eligendi similique quam consequatur. Inventore, dicta.</div>

                                            <div className="flex items-center justify-center gap-3">
                                                <button className="hidden d-none none w-full mt-6 py-2 px-4 bg-amber-700 text-white font-semibold hover:bg-amber-800 transition duration-300">
                                                    Choose another Plan
                                                </button>

                                                <button className="w-full mt-6 py-2 px-4 bg-red-500 text-white font-semibold hover:bg-red-600 transition duration-300">
                                                    Cancel Plan
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className="col-span-8 flex flex-col justify-between">
                                <div className="bg-[#141d2a] shadow p-6 text-gray-500">
                                    <div className="flex justify-between items-center">
                                        <h2 className="text-xl font-bold mb-8 text-gray-400">About Information</h2>
                                        <div className='flex items-center gap-6'>
                                            <BlockUser />
                                        </div>
                                    </div>

                                    <div className='mb-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. A ea, ipsum aspernatur velit culpa, iste magni repellendus unde quae commodi obcaecati error voluptate in sit accusamus optio aliquid praesentium nisi.</div>

                                    <h3 className="font-semibold text-center mt-3 -mb-2 text-gray-400">Find on Social</h3>
                                    <div className="flex justify-center items-center gap-6 my-6">
                                        <Link className="bg-emerald-500 hover:bg-emerald-600 text-white p-4 rounded-full transition duration-300" href="" target="_blank"><Facebook /></Link>
                                        <Link className="bg-pink-500 hover:bg-pink-600 text-white p-4 rounded-full transition duration-300" href="" target="_blank"><Youtube /></Link>
                                        <Link className="bg-lime-500 hover:bg-lime-600 text-white p-4 rounded-full transition duration-300" href="" target="_blank"><Linkedin /></Link>
                                        <Link className="bg-amber-500 hover:bg-amber-600 text-white p-4 rounded-full transition duration-300" href="" target="_blank"><Instagram /></Link>
                                        <Link className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full transition duration-300" href="" target="_blank"><Twitter /></Link>
                                    </div>
                                </div>

                                <div className="main-chat">
                                    <div className="no-chat">
                                        <div>
                                            <img src="https://themes.pixelstrap.net/mega_bot/assets/svg/no-chat.svg" className="img-fluid" alt="" />
                                            <h3>Ask anything to chatbot</h3>
                                        </div>
                                    </div>

                                    <div className="msger-chat"></div>

                                    <form className="msger-inputarea">
                                        <input type="text" className="msger-input" placeholder="Ask any question here..." />
                                        <Link href="#" className="scan-icon"><Camera className="iconsax" /></Link>
                                        <Link href="#" className="mic-icon"><Mic className="iconsax" /></Link>
                                        <button type="submit" className="msger-send-btn"><Send className="iconsax" /></button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {show2 &&
                <div className="fixed inset-0 flex justify-center items-center z-[1000]" >
                    <div className="fixed inset-0 bg-black bg-opacity-50"></div>

                    <div className="bg-white w-full max-w-lg rounded-none shadow-xl p-6 relative">
                        <button onClick={() => setShow2(false)} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 focus:outline-none"> ✖ </button>

                        <div className="text-center">
                            <h2 className="text-2xl font-bold text-gray-800">Change Password</h2>
                            <p className="text-sm text-gray-500 mt-1">Update your account password for added security.</p>
                        </div>

                        <form className="mt-6">
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">New Password </label>
                                <div className="relative">
                                    <input type={showPassword.password ? 'text' : 'password'} name='password' className="border text-gray-800 placeholder:text-slate-500 p-2 w-full outline-none focus:outline-none" placeholder="Enter new password" />
                                    <span onClick={() => toggleEye('password')} className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500">
                                        {showPassword.password ? <EyeSlash /> : <Eye />}
                                    </span>
                                </div>
                            </div>

                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">Confirm New Password </label>
                                <div className="relative">
                                    <input type={showPassword.cpassword ? 'text' : 'password'} name='cpassword' className="border text-gray-800 placeholder:text-slate-500 p-2 w-full outline-none focus:outline-none" placeholder="Re-enter new password" />
                                    <span onClick={() => toggleEye('cpassword')} className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500">
                                        {showPassword.password ? <EyeSlash /> : <Eye />}
                                    </span>
                                </div>
                            </div>

                            <div className="flex justify-center items-center gap-3 mt-6">
                                <button type='submit' className="text-[#0b1523] text-sm custom_btn hover:text-white hover:bg-amber-600 hover:border-amber-600 px-8 py-2"> Save Changes </button>
                                <button type="button" onClick={() => setShow2(false)} className="w-1/2 bg-gray-200 text-gray-800 rounded-none py-2 text-sm font-medium hover:bg-gray-300 focus:ring focus:ring-gray-300 focus:outline-none"> Cancel </button>
                            </div>
                        </form>
                    </div>
                </div>
            }

            {notification &&
                <div className="fixed inset-0 p-4 flex flex-wrap justify-center items-center w-full h-full z-[1000] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] overflow-auto font-[sans-serif]">
                    <div className="w-full max-w-xl bg-[#141d2a] shadow-lg p-6 relative">
                        <XLg className="w-3 cursor-pointer shrink-0 fill-gray-400 hover:fill-red-500 float-right" onClick={() => setNotification(false)} />

                        <div className="mb-8 text-center">
                            <h4 className="text-[#3bedb2] text-lg font-semibold">Send Notification</h4>
                            <p className="text-sm text-gray-400 mb-4">Notify your users with an important message.</p>
                        </div>

                        <div className="mt-6 mb-6">
                            <FormEditor contents={contents} setContents={setContents} />
                        </div>

                        <div className="flex items-center justify-center gap-3">
                            <button type="button" onClick={handleSendNotification} className="text-[#0b1523] text-sm custom_btn hover:text-white hover:bg-amber-600 hover:border-amber-600 px-8 py-2">Send</button>
                            <button type="button" onClick={() => setNotification(false)} className="px-4 py-2 text-gray-800 text-sm tracking-wide bg-gray-200 hover:bg-gray-300 active:bg-gray-200">Cancel</button>
                        </div>
                    </div>
                </div>
            }

            <DeleteModal show={show} onClose={onCloseModal} onDelete={handleDelete} />
        </div>
    )
}

export default UsersDetail