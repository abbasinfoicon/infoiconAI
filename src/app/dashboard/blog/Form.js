'use client'
import FormEditor from '@/components/admin/FormEditor'
import React, { useState } from 'react'

const Form = ({ id }) => {
    const [contents, setContents] = useState("");

    return (
        <form autoComplete="off">
            <div className="grid grid-cols-1 gap-3 md:grid-cols-3 text-sm">
                <div className="col-span-2">
                    <label className="block mb-2 text-sm text-gray-400">Title <span className="text-red-600">*</span></label>
                    <input type="text" name="title" className="border border-[#0a1321] bg-[#0b1523] text-gray-300 placeholder:text-slate-500 text-gray-300 placeholder:text-slate-500 p-2 w-full outline-none focus:outline-none" placeholder="Enter Title" autoComplete="off" />
                </div>                

                <div className="col-span-1">
                    <label className="block mb-2 text-sm text-gray-400">Status</label>
                    <select name="status" className="form-select border border-[#0a1321] bg-[#0b1523] text-gray-300 p-2 w-full outline-none focus:outline-none" >
                        <option value="publish">Publish</option>
                        <option value="pending">Pending</option>
                    </select>
                </div>

                <div className="col-span-3">
                    <label className="block mb-2 text-sm text-gray-400">Description</label>
                    <FormEditor contents={contents} setContents={setContents} />
                </div>

                <div className="flex flex-col gap-2 items-end col-span-3">
                    <div className='w-full'>
                        <label className="block mb-2 text-sm text-gray-400">Upload Image</label>
                        <input type="file" name="file" className="border border-[#0a1321] bg-[#0b1523] text-gray-300 placeholder:text-slate-500 p-2 w-full outline-none focus:outline-none" accept="image/png, image/gif, image/jpeg" autoComplete="off" />
                        {id && <img src="/assets/images/user/5.jpg" alt="" className="w-36 p-2" />}
                    </div>
                </div>

                <div className="col-span-3 mt-8 text-center">
                    <button type="submit" className="text-[#0b1523] text-sm custom_btn hover:text-white hover:bg-amber-600 hover:border-amber-600 px-8 py-2">Create</button>
                </div>
            </div>
        </form>
    )
}

export default Form