'use client';
import { useRouter } from 'next/navigation';
import React from 'react'
import { ArrowLeft } from 'react-bootstrap-icons';

const BackButton = () => {
    const router = useRouter();
    
    return (
        <button onClick={() => router.back()} className="middle center flex max-[640px]:w-full items-center gap-2 custom_btn py-2 px-6 font-sans text-xs font-bold uppercase text-[#141d2a] shadow-md shadow-green-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
            <ArrowLeft className="text-xl" /> Back
        </button>
    )
}

export default BackButton