'use client'
import FormEditor from '@/components/admin/FormEditor'
import React, { useState } from 'react'
import { Eye, EyeSlash } from 'react-bootstrap-icons';

const Form = ({ id }) => {
    const [contents, setContents] = useState("");
    const [showPassword, setShowPassword] = useState({ password: false, cpassword: false });

    const toggleEye = (field) => setShowPassword((prev) => ({ ...prev, [field]: !prev[field] }));

    return (
        <form autoComplete="off">
            <div className="grid grid-cols-1 gap-3 md:grid-cols-3 text-sm">
                <div className="col-span-3">
                    <label className="block mb-2 text-sm text-gray-400">Full Name <span className="text-red-600">*</span></label>
                    <input type="text" name="name" className="border border-[#0a1321] bg-[#0b1523] text-gray-300 placeholder:text-slate-500 text-gray-300 placeholder:text-slate-500 p-2 w-full outline-none focus:outline-none" placeholder="Enter Full Name" autoComplete="off" />
                </div>

                <div className="col-span-1">
                    <label className="block mb-2 text-sm text-gray-400">Email <span className="text-red-600">*</span></label>
                    <input type="email" name="email" className="border border-[#0a1321] bg-[#0b1523] text-gray-300 placeholder:text-slate-500 p-2 w-full outline-none focus:outline-none" placeholder="Enter Email" autoComplete="off" />
                </div>

                <div className="col-span-2">
                    <label className="block mb-2 text-sm text-gray-400">Phone <span className="text-red-600">*</span></label>
                    <input type="phone" name="phone" className="border border-[#0a1321] bg-[#0b1523] text-gray-300 placeholder:text-slate-500 p-2 w-full outline-none focus:outline-none" placeholder="Enter Phone" autoComplete="off" />
                </div>

                <div className="col-span-1">
                    <label className="block mb-2 text-sm text-gray-400">Country <span className="text-red-600">*</span></label>
                    <input type="text" name="country" className="border border-[#0a1321] bg-[#0b1523] text-gray-300 placeholder:text-slate-500 p-2 w-full outline-none focus:outline-none" placeholder="Enter Country" autoComplete="off" />
                </div>

                <div className="col-span-1">
                    <label className="block mb-2 text-sm text-gray-400">City <span className="text-red-600">*</span></label>
                    <input type="text" name="city" className="border border-[#0a1321] bg-[#0b1523] text-gray-300 placeholder:text-slate-500 p-2 w-full outline-none focus:outline-none" placeholder="Enter City" autoComplete="off" />
                </div>

                <div className="col-span-1">
                    <label className="block mb-2 text-sm text-gray-400">Pincode <span className="text-red-600">*</span></label>
                    <input type="number" name="pincode" className="border border-[#0a1321] bg-[#0b1523] text-gray-300 placeholder:text-slate-500 p-2 w-full outline-none focus:outline-none" placeholder="Enter Pincode" autoComplete="off" />
                </div>

                <div className="col-span-3">
                    <label className="block mb-2 text-sm text-gray-400">Address <span className="text-red-600">*</span></label>
                    <textarea name="address" id="" className="border border-[#0a1321] bg-[#0b1523] text-gray-300 placeholder:text-slate-500 p-2 w-full outline-none focus:outline-none" placeholder="Enter Address" rows="5" autoComplete="off"></textarea>
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
                
                {!id &&
                    <>
                        <div className="col-span-1">
                            <label className="block mb-2 text-sm text-gray-400">Password <span className="text-red-600">*</span></label>

                            <div className="relative">
                                <input type={showPassword.password ? 'text' : 'password'} name="password" className="border border-[#0a1321] bg-[#0b1523] text-gray-300 placeholder:text-slate-500 p-2 w-full outline-none focus:outline-none" placeholder="Enter Password" autoComplete="off" />
                                <span onClick={() => toggleEye('password')} className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-300">
                                    {showPassword.password ? <EyeSlash /> : <Eye />}
                                </span>
                            </div>
                        </div>

                        <div className="col-span-1">
                            <label className="block mb-2 text-sm text-gray-400">Confirm Password <span className="text-red-600">*</span></label>
                            <div className="relative">
                                <input type={showPassword.cpassword ? 'text' : 'password'} name="cpassword" className="border border-[#0a1321] bg-[#0b1523] text-gray-300 placeholder:text-slate-500 p-2 w-full outline-none focus:outline-none" placeholder="Enter Confirm Password" autoComplete="off" />
                                <span onClick={() => toggleEye('cpassword')} className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-300">
                                    {showPassword.cpassword ? <EyeSlash /> : <Eye />}
                                </span>
                            </div>
                        </div>
                    </>
                }

                <div className="col-span-3 mt-8 text-center">
                    <button type="submit" className="text-[#0b1523] text-sm custom_btn hover:text-white hover:bg-amber-600 hover:border-amber-600 px-8 py-2">Create</button>
                </div>
            </div>
        </form>
    )
}

export default Form