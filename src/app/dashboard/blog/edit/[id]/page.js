'use client'
import BackButton from '@/components/admin/BackButton'
import BreadCrumb from '@/components/admin/BreadCrumb'
import React from 'react'
import { useParams } from 'next/navigation'
import Form from '../../Form'

const Edit = () => {
    const { id } = useParams();

    return (
        <div className='blog-pg'>
            <div className="mb-8 grid grid-cols-1 col-span-2 gap-6">
                <div className="relative flex flex-col bg-clip-border bg-[#141d2a] text-gray-400 shadow-md overflow-hidden xl:col-span-2 p-4">
                    <div className="flex flex-col-reverse justify-between gap-6 md:flex-row md:items-center">
                        <div className="capitalize">
                            <BreadCrumb title="Edit Blog" parent='blog' />
                        </div>

                        <div className="flex items-center justify-end text-right w-full place-items-center flex-col gap-4 sm:flex-row">
                            <BackButton />
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-md-12">
                    <div className="shadow-md">
                        <div className="relative flex flex-col bg-clip-border bg-[#141d2a] text-gray-700 shadow-md overflow-hidden xl:col-span-2 p-4">
                            <h3 className="block mb-6 text-xl text-gray-300 border-b border-gray-600 pb-2 mt-3 font-bold">Edit Blog Details</h3>

                            <div className="row">
                                <div className="col-md-7">
                                    <Form id={id} />
                                </div>

                                <div className="col-md-5">
                                    <div className="img-ai">
                                        <img src="/assets/images/bg_img.jpg" alt="" className="img-fluid" />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Edit