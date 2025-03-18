'use client'
import BackButton from '@/components/admin/BackButton'
import BreadCrumb from '@/components/admin/BreadCrumb'
import DeleteModal from '@/components/admin/DeleteModal'
import FetchData from '@/components/FetchApi'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import React, { useState } from 'react'
import { PencilSquare, Trash, } from 'react-bootstrap-icons'
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
        <div className='pages-pg'>
            <div className="mb-8 grid grid-cols-1 col-span-2 gap-6">
                <div className="relative flex flex-col bg-clip-border bg-[#141d2a] text-gray-400 shadow-md overflow-hidden xl:col-span-2 p-4">
                    <div className="flex flex-col-reverse justify-between gap-6 md:flex-row md:items-center">
                        <div className="capitalize">
                            <BreadCrumb title="pages name" parent='pages' />
                        </div>

                        <div className="flex items-center justify-end text-right w-full place-items-center flex-col gap-4 sm:flex-row">
                            <BackButton />

                            <Link href={`/dashboard/pages/edit/${id}`} className="middle center flex max-[640px]:w-full items-center gap-2 custom_btn py-2 px-6 font-sans text-xs font-bold uppercase text-[#141d2a] shadow-md shadow-green-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                                <PencilSquare className="text-xl" /> Edit
                            </Link>
                            <button onClick={() => onOpenModal("1")} className="middle center flex max-[640px]:w-full items-center gap-2 custom_btn py-2 px-6 font-sans text-xs font-bold uppercase text-[#141d2a] shadow-md shadow-green-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                                <Trash className="text-xl" /> Delete
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="service-details-area bg-[#141d2a] space shadow-md p-4">
                <div className="row gx-30">
                    <div className="col-xl-12 col-lg-12">
                        <div className="service-page-single">
                            <div className="row page-content">
                                <div className="col-md-4">
                                    <img src="/assets/images/blog/1.jpg" alt="Banner Img" className='mb-8 w-full object-cover' />
                                </div>
                                <div className="col-md-8 text-gray-500">
                                    <div className="flex justify-between gap-3">
                                        <div>
                                            <h2 className='text-2xl font-bold text-[#3bedb2]'>ChatGPT: Revolutionizing Conversational AI with GPT-3.5</h2>
                                            <p className='text-base text-gray-300'>Create by: Admin</p>
                                        </div>

                                        <div className="status-change">
                                            <label className="block mb-2 text-sm text-gray-400">Status</label>
                                            <select name="status" className="form-select border border-[#0a1321] bg-[#0b1523] text-gray-300 p-2 w-full outline-none focus:outline-none" >
                                                <option value="">Update Status</option>
                                                <option value="publish">Publish</option>
                                                <option value="pending">Pending</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className='mb-30'>
                                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto dignissimos temporibus quam aut fuga hic suscipit, debitis aliquam dolorem, quis consequatur, atque alias saepe facere dolor harum? Molestiae, blanditiis qui!</p>
                                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto dignissimos temporibus quam aut fuga hic suscipit, debitis aliquam dolorem, quis consequatur, atque alias saepe facere dolor harum? Molestiae, blanditiis qui!</p>
                                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto dignissimos temporibus quam aut fuga hic suscipit, debitis aliquam dolorem, quis consequatur, atque alias saepe facere dolor harum? Molestiae, blanditiis qui!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 mt-6">
                        <div className="service-page-single">
                            <div className="page-content">
                                <div className="flex items-center justify-between gap-3">
                                    <p><span className='text-gray-500'>Create by :</span> 12-04-2025</p>
                                    <p><span className='text-gray-500'>Update by :</span> 12-04-2025</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <DeleteModal show={show} onClose={onCloseModal} onDelete={handleDelete} />
        </div>
    )
}

export default UsersDetail