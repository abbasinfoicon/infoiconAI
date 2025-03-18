'use client'
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { Power } from 'react-bootstrap-icons';

const Logout = () => {
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const handleLogout = async (e) => {
        e.preventDefault();
        setLoading(true);

        // Clear cookies
        Cookies.remove('access_token');

        // Clear localStorage
        localStorage.clear();

        // Redirect to login
        router.push('/login');
    };

    return (
        <button onClick={handleLogout} disabled={loading} className='flex align-center gap-2'>
            <Power className='font-[15px] relative top-[3px]' /> <span>{loading ? 'Please wait...' : 'Logout'}</span>
        </button>
    );
};

export default Logout;
