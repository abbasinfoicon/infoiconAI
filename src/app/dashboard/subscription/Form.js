'use client'
import FormEditor from '@/components/admin/FormEditor'
import React, { useState } from 'react'

const Form = ({ id }) => {
    const [contents, setContents] = useState("");

    return (
        <form autoComplete="off">
            <div className="grid grid-cols-1 gap-3 md:grid-cols-3 text-sm">
                <div className="col-span-3">
                    <label className="block mb-2 text-sm text-gray-400">Title <span className="text-red-600">*</span></label>
                    <input type="text" name="title" className="border border-[#0a1321] bg-[#0b1523] text-gray-300 placeholder:text-slate-500 text-gray-300 placeholder:text-slate-500 p-2 w-full outline-none focus:outline-none" placeholder="Enter Title" autoComplete="off" />
                </div>

                <div className="col-span-1">
                    <label className="block mb-2 text-sm text-gray-400">Price <span className="text-red-600">*</span></label>
                    <input type="number" name="price" className="border border-[#0a1321] bg-[#0b1523] text-gray-300 placeholder:text-slate-500 p-2 w-full outline-none focus:outline-none" placeholder="Enter Price" autoComplete="off" />
                </div>

                <div className="col-span-2">
                    <label className="block mb-2 text-sm text-gray-400">Duration <span className="text-red-600">*</span></label>
                    <input type="text" name="duration" className="border border-[#0a1321] bg-[#0b1523] text-gray-300 placeholder:text-slate-500 p-2 w-full outline-none focus:outline-none" placeholder="Enter Duration" autoComplete="off" />
                </div>

                <div className="col-span-3">
                    <label className="block mb-2 text-sm text-gray-400">Description</label>
                    <FormEditor contents={contents} setContents={setContents} />
                </div>
                

                <div className="col-span-3 mt-8 text-center">
                    <button type="submit" className="text-[#0b1523] text-sm custom_btn hover:text-white hover:bg-amber-600 hover:border-amber-600 px-8 py-2">Create</button>
                </div>
            </div>
        </form>
    )
}

export default Form