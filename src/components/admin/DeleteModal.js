'use client'
import React from 'react'
import { Trash, XLg } from 'react-bootstrap-icons'

const DeleteModal = ({ show, onClose, onDelete }) => {

    return (
        <div className={`${show ? 'fixed' : 'none'}  inset-0 p-4 flex flex-wrap justify-center items-center w-full h-full z-[1000] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.8)] overflow-auto font-[sans-serif]`}>
            <div className="w-full max-w-md bg-[#141d2a] shadow-lg p-6 relative">
                <XLg className="w-3 cursor-pointer shrink-0 fill-gray-400 hover:fill-red-500 float-right" onClick={onClose} />

                <div className="my-8 text-center">
                    <Trash className="w-14 h-14 fill-red-500 inline" />
                    <h4 className="text-[#3bedb2] text-lg font-semibold mt-4">Are you sure you want to delete it?</h4>
                    <p className="text-sm text-gray-400 mt-4">Once deleted, this data cannot be recovered. Please confirm whether you wish to proceed with deletion. Click 'Delete' to confirm or 'Cancel' to abort.</p>
                </div>

                <div className="flex gap-3 items-center justify-center">
                    <button type="button" onClick={onDelete} className="px-4 py-2 text-gray-400 text-sm tracking-wide custom_btn">Delete</button>
                    <button type="button" onClick={onClose} className="px-4 py-2 text-gray-800 text-sm tracking-wide bg-gray-200 hover:bg-gray-300 active:bg-gray-200">Cancel</button>
                </div>
            </div>
        </div>
    )
}

export default DeleteModal