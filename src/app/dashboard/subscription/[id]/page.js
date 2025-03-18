'use client'
import BackButton from '@/components/admin/BackButton'
import BreadCrumb from '@/components/admin/BreadCrumb'
import DeleteModal from '@/components/admin/DeleteModal'
import FetchData from '@/components/FetchApi'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import React, { useState } from 'react'
import { ArrowRepeat, Envelope, PencilSquare, Trash, } from 'react-bootstrap-icons'
import { toast } from 'react-toastify'

const UsersDetail = () => {
    const { id } = useParams();

    const [show, setShow] = useState(false);
    const [itemIdToDelete, setItemIdToDelete] = useState(null);


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

    return (
        <div className='subscription-pg'>
            <div className="mb-8 grid grid-cols-1 col-span-2 gap-6">
                <div className="relative flex flex-col bg-clip-border bg-[#141d2a] text-gray-400 shadow-md overflow-hidden xl:col-span-2 p-4">
                    <div className="flex flex-col-reverse justify-between gap-6 md:flex-row md:items-center">
                        <div className="capitalize">
                            <BreadCrumb title="Abbas" parent='subscription' />
                        </div>

                        <div className="flex items-center justify-end text-right w-full place-items-center flex-col gap-4 sm:flex-row">
                            <BackButton />

                            <Link href={`/dashboard/subscription/edit/${id}`} className="middle center flex max-[640px]:w-full items-center gap-2 custom_btn py-2 px-6 font-sans text-xs font-bold uppercase text-[#141d2a] shadow-md shadow-green-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                                <PencilSquare className="text-xl" /> Edit
                            </Link>
                            <button onClick={() => onOpenModal("1")} className="middle center flex max-[640px]:w-full items-center gap-2 custom_btn py-2 px-6 font-sans text-xs font-bold uppercase text-[#141d2a] shadow-md shadow-green-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                                <Trash className="text-xl" /> Delete
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-full bg-[#141d2a] text-gray-500 p-6 shadow-md flex flex-col justify-between gap-4 mb-5">
                <div className="flex-1 text-left">
                    <h2 className="text-2xl font-bold whitespace-nowrap text-[#3bedb2]">Month Plan</h2>
                    <p className="mt-2 text-sm">Price : <strong> 100 €</strong>.</p>
                    <p className="mt-2 text-sm">Expires on : <strong> 3-Month</strong>.</p>
                </div>

                <div className="flex items-center gap-4">
                    <div className='plan-lists'>
                        <ul>
                            <li>Interactive Bepper Boards with 6 differentoal and a layout for Transactional Analysis (TA), Positieve Intelligence (PQ), DiSC.</li>
                            <li>White Board</li>
                            <li>Can create invite codes for 1 guest</li>
                            <li>Video view of participants except the ‘self’</li>
                            <li>Chat</li>
                            <li>Share screen</li>
                            <li>Download and order digital and physical products with for free or payed</li>
                            <li>Subscribe for Bepper (demo)coaching sessions (payed) and trainings (payed)</li>
                            <li>Can create unlimited invite codes for more then 1 guest with one code for (every-kind-of-)relationship-coaching-sessions</li>
                            <li>Calendar to fill with slots for sessions and dates and times for trainings by subscriber for guests (clients) of the subscriber</li>
                            <li>DashBoard for subscribers to see their calendar-schedule and guests (clients)</li>
                        </ul>
                    </div>
                </div>
            </div>


            <div className="row">
                <div className="col-md-3 mb-4">
                    <div className="max-w-sm mx-auto bg-[#141d2a] overflow-hidden shadow-lg">
                        <div className="px-4 pb-6">
                            <div className="my-4">
                                <img className="h-32 w-32 rounded-full border-4 border-white mx-auto my-4" src="/assets/images/user/5.jpg" alt="Avatar" />
                                <div className="py-2">
                                    <h3 className="font-bold text-2xl text-[#3bedb2] mb-1 text-center">Madhuri</h3>

                                    <ul className="text-gray-500  items-center">
                                        <li className="flex gap-2 items-center justify-center"><Envelope /> uid3@infoiocn.in</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="flex gap-2 px-2 justify-center">
                                <button onClick={() => onOpenModal("1")} className="rounded-full bg-red-600 text-white antialiased font-bold hover:bg-red-700 p-3"><Trash /></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mb-4">
                    <div className="max-w-sm mx-auto bg-[#141d2a] overflow-hidden shadow-lg">
                        <div className="px-4 pb-6">
                            <div className="my-4">
                                <img className="h-32 w-32 rounded-full border-4 border-white mx-auto my-4" src="/assets/images/user/5.jpg" alt="Avatar" />
                                <div className="py-2">
                                    <h3 className="font-bold text-2xl text-[#3bedb2] mb-1 text-center">Madhuri</h3>

                                    <ul className="text-gray-500  items-center">
                                        <li className="flex gap-2 items-center justify-center"><Envelope /> uid3@infoiocn.in</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="flex gap-2 px-2 justify-center">
                                <button onClick={() => onOpenModal("1")} className="rounded-full bg-red-600 text-white antialiased font-bold hover:bg-red-700 p-3"><Trash /></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mb-4">
                    <div className="max-w-sm mx-auto bg-[#141d2a] overflow-hidden shadow-lg">
                        <div className="px-4 pb-6">
                            <div className="my-4">
                                <img className="h-32 w-32 rounded-full border-4 border-white mx-auto my-4" src="/assets/images/user/5.jpg" alt="Avatar" />
                                <div className="py-2">
                                    <h3 className="font-bold text-2xl text-[#3bedb2] mb-1 text-center">Madhuri</h3>

                                    <ul className="text-gray-500  items-center">
                                        <li className="flex gap-2 items-center justify-center"><Envelope /> uid3@infoiocn.in</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="flex gap-2 px-2 justify-center">
                                <button onClick={() => onOpenModal("1")} className="rounded-full bg-red-600 text-white antialiased font-bold hover:bg-red-700 p-3"><Trash /></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mb-4">
                    <div className="max-w-sm mx-auto bg-[#141d2a] overflow-hidden shadow-lg">
                        <div className="px-4 pb-6">
                            <div className="my-4">
                                <img className="h-32 w-32 rounded-full border-4 border-white mx-auto my-4" src="/assets/images/user/5.jpg" alt="Avatar" />
                                <div className="py-2">
                                    <h3 className="font-bold text-2xl text-[#3bedb2] mb-1 text-center">Madhuri</h3>

                                    <ul className="text-gray-500  items-center">
                                        <li className="flex gap-2 items-center justify-center"><Envelope /> uid3@infoiocn.in</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="flex gap-2 px-2 justify-center">
                                <button onClick={() => onOpenModal("1")} className="rounded-full bg-red-600 text-white antialiased font-bold hover:bg-red-700 p-3"><Trash /></button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-12">
                    <div className="flex items-center gap-8 justify-center my-5">
                        <button className="btn-arrow">
                            <div className="icon-arrow"><ArrowRepeat className="iconsax" /></div> Load More
                        </button>
                    </div>
                </div>
            </div>

            <DeleteModal show={show} onClose={onCloseModal} onDelete={handleDelete} />
        </div>
    )
}

export default UsersDetail