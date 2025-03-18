'use client'
import BreadCrumb from '@/components/admin/BreadCrumb'
import DeleteModal from '@/components/admin/DeleteModal'
import FetchData from '@/components/FetchApi'
import SearchForm from '@/components/admin/SearchForm'
import Link from 'next/link'
import React, { useState } from 'react'
import { ArrowRepeat, Eye, PencilSquare, Trash } from 'react-bootstrap-icons'
import { toast } from 'react-toastify'

const Blog = () => {

    const [show, setShow] = useState(false);
    const [itemIdToDelete, setItemIdToDelete] = useState(null);

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
        <div className='blog-pg'>
            <div className="mb-8 grid grid-cols-1 col-span-2 gap-6">
                <div className="relative flex flex-col bg-clip-border bg-[#141d2a] text-gray-700 shadow-md overflow-hidden xl:col-span-2 p-4">
                    <div className="flex flex-col-reverse justify-between gap-6 md:flex-row md:items-center">
                        <div className="capitalize">
                            <BreadCrumb title="Blog" />
                        </div>

                        <div className="flex items-center justify-end text-right w-full place-items-center flex-col gap-4 sm:flex-row">
                            <SearchForm searchQuery={""} setSearchQuery={"setSearchQuery"} />

                            <Link href='/dashboard/blog/add' className="middle center flex max-[640px]:w-full items-center gap-2 custom_btn py-2 px-6 font-sans font-bold text-xs uppercase shadow-md shadow-green-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                                <PencilSquare className="text-xl " /> Create New Blog
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="blog-section">
                <div className="relative">
                    <div className="row g-lg-5 g-4">
                        <div className="col-xl-3 col-md-4">
                            <div className="w-full bg-[#141d2a] rounded-none overflow-hidden shadow-lg blog-box">
                                <div className="blog-img-full">
                                    <img src="/assets/images/blog/1.jpg" className="img-fluid" alt="blog" />
                                </div>
                                <div className="blog-content px-3">
                                    <Link href="#">ChatGPT: Revolutionizing Conversational AI with GPT-3.5</Link>
                                    <ul>
                                        <li>14 march 2023</li>
                                        <li>5 min to read</li>
                                    </ul>
                                </div>

                                <div className="flex gap-2 px-2 justify-center py-3">
                                    <Link href={`/dashboard/blog/1`} className="rounded-full bg-emerald-600 text-white antialiased font-bold hover:bg-emerald-700 p-3"><Eye /></Link>
                                    <Link href={`/dashboard/blog/edit/1`} className="rounded-full bg-lime-600 text-white antialiased font-bold hover:bg-lime-700 p-3"><PencilSquare /></Link>
                                    <button onClick={() => onOpenModal("1")} className="rounded-full bg-red-600 text-white antialiased font-bold hover:bg-red-700 p-3"><Trash /></button>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-4">
                            <div className="w-full bg-[#141d2a] rounded-none overflow-hidden shadow-lg blog-box">
                                <div className="blog-img-full">
                                    <img src="/assets/images/blog/1.jpg" className="img-fluid" alt="blog" />
                                </div>
                                <div className="blog-content px-3">
                                    <Link href="#">ChatGPT: Revolutionizing Conversational AI with GPT-3.5</Link>
                                    <ul>
                                        <li>14 march 2023</li>
                                        <li>5 min to read</li>
                                    </ul>
                                </div>

                                <div className="flex gap-2 px-2 justify-center py-3">
                                    <Link href={`/dashboard/blog/1`} className="rounded-full bg-emerald-600 text-white antialiased font-bold hover:bg-emerald-700 p-3"><Eye /></Link>
                                    <Link href={`/dashboard/blog/edit/1`} className="rounded-full bg-lime-600 text-white antialiased font-bold hover:bg-lime-700 p-3"><PencilSquare /></Link>
                                    <button onClick={() => onOpenModal("1")} className="rounded-full bg-red-600 text-white antialiased font-bold hover:bg-red-700 p-3"><Trash /></button>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-4">
                            <div className="w-full bg-[#141d2a] rounded-none overflow-hidden shadow-lg blog-box">
                                <div className="blog-img-full">
                                    <img src="/assets/images/blog/1.jpg" className="img-fluid" alt="blog" />
                                </div>
                                <div className="blog-content px-3">
                                    <Link href="#">ChatGPT: Revolutionizing Conversational AI with GPT-3.5</Link>
                                    <ul>
                                        <li>14 march 2023</li>
                                        <li>5 min to read</li>
                                    </ul>
                                </div>

                                <div className="flex gap-2 px-2 justify-center py-3">
                                    <Link href={`/dashboard/blog/1`} className="rounded-full bg-emerald-600 text-white antialiased font-bold hover:bg-emerald-700 p-3"><Eye /></Link>
                                    <Link href={`/dashboard/blog/edit/1`} className="rounded-full bg-lime-600 text-white antialiased font-bold hover:bg-lime-700 p-3"><PencilSquare /></Link>
                                    <button onClick={() => onOpenModal("1")} className="rounded-full bg-red-600 text-white antialiased font-bold hover:bg-red-700 p-3"><Trash /></button>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-4">
                            <div className="w-full bg-[#141d2a] rounded-none overflow-hidden shadow-lg blog-box">
                                <div className="blog-img-full">
                                    <img src="/assets/images/blog/1.jpg" className="img-fluid" alt="blog" />
                                </div>
                                <div className="blog-content px-3">
                                    <Link href="#">ChatGPT: Revolutionizing Conversational AI with GPT-3.5</Link>
                                    <ul>
                                        <li>14 march 2023</li>
                                        <li>5 min to read</li>
                                    </ul>
                                </div>

                                <div className="flex gap-2 px-2 justify-center py-3">
                                    <Link href={`/dashboard/blog/1`} className="rounded-full bg-emerald-600 text-white antialiased font-bold hover:bg-emerald-700 p-3"><Eye /></Link>
                                    <Link href={`/dashboard/blog/edit/1`} className="rounded-full bg-lime-600 text-white antialiased font-bold hover:bg-lime-700 p-3"><PencilSquare /></Link>
                                    <button onClick={() => onOpenModal("1")} className="rounded-full bg-red-600 text-white antialiased font-bold hover:bg-red-700 p-3"><Trash /></button>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-4">
                            <div className="w-full bg-[#141d2a] rounded-none overflow-hidden shadow-lg blog-box">
                                <div className="blog-img-full">
                                    <img src="/assets/images/blog/1.jpg" className="img-fluid" alt="blog" />
                                </div>
                                <div className="blog-content px-3">
                                    <Link href="#">ChatGPT: Revolutionizing Conversational AI with GPT-3.5</Link>
                                    <ul>
                                        <li>14 march 2023</li>
                                        <li>5 min to read</li>
                                    </ul>
                                </div>

                                <div className="flex gap-2 px-2 justify-center py-3">
                                    <Link href={`/dashboard/blog/1`} className="rounded-full bg-emerald-600 text-white antialiased font-bold hover:bg-emerald-700 p-3"><Eye /></Link>
                                    <Link href={`/dashboard/blog/edit/1`} className="rounded-full bg-lime-600 text-white antialiased font-bold hover:bg-lime-700 p-3"><PencilSquare /></Link>
                                    <button onClick={() => onOpenModal("1")} className="rounded-full bg-red-600 text-white antialiased font-bold hover:bg-red-700 p-3"><Trash /></button>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-4">
                            <div className="w-full bg-[#141d2a] rounded-none overflow-hidden shadow-lg blog-box">
                                <div className="blog-img-full">
                                    <img src="/assets/images/blog/1.jpg" className="img-fluid" alt="blog" />
                                </div>
                                <div className="blog-content px-3">
                                    <Link href="#">ChatGPT: Revolutionizing Conversational AI with GPT-3.5</Link>
                                    <ul>
                                        <li>14 march 2023</li>
                                        <li>5 min to read</li>
                                    </ul>
                                </div>

                                <div className="flex gap-2 px-2 justify-center py-3">
                                    <Link href={`/dashboard/blog/1`} className="rounded-full bg-emerald-600 text-white antialiased font-bold hover:bg-emerald-700 p-3"><Eye /></Link>
                                    <Link href={`/dashboard/blog/edit/1`} className="rounded-full bg-lime-600 text-white antialiased font-bold hover:bg-lime-700 p-3"><PencilSquare /></Link>
                                    <button onClick={() => onOpenModal("1")} className="rounded-full bg-red-600 text-white antialiased font-bold hover:bg-red-700 p-3"><Trash /></button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="text-center">
                        <div className="flex items-center gap-8 justify-center my-5">
                            <button className="btn-arrow">
                                <div className="icon-arrow"><ArrowRepeat className="iconsax" /></div> Load More
                            </button>
                        </div>
                    </div>
                </div >
            </div >

            <DeleteModal show={show} onClose={onCloseModal} onDelete={handleDelete} />
        </div>
    )
}

export default Blog