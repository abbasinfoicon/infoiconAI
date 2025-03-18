'use client'
import FetchData from '@/components/FetchApi';
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useState } from 'react'
import { toast } from 'react-toastify';

const OTP = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const email = searchParams.get('email');
    const [otp, setOtp] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const body = { email, otp }
            const res = await FetchData({ url: 'auth/emailVerify', method: "POST", body });
            const result = await res.json();

            if (!res.ok) {
                toast.error(result.message);
                throw new Error(result.message);
            }

            router.push('/login');
            toast.success(result.message);

        } catch (error) {
            console.error("error", error);
        }
    }

    return (
        <section className="login-section">
            <Link href="/" className='logo-auth flex items-center gap-3 text-xl'><img src="/assets/images/logo.png" className="img-fluid " /> InfoiconAI</Link>

            <div className="row m-0">
                <div className="col-lg-7 d-lg-inline-block d-none p-0">
                    <div className="login-animation">
                        <img src="/assets/svg/auth/1.svg" className="img-fluid img-base" alt="" />
                        <img src="/assets/svg/auth/2.svg" className="img-fluid img-light" alt="" />
                        <div className="img-face"><img src="/assets/svg/auth/3.svg" className="img-fluid img-faces" alt="" /></div>
                    </div>
                </div>

                <div className="col-xxl-4 col-lg-5 ms-auto p-0">
                    <div className="login-box mt-sm-0">
                        <div>
                            <h2><span>Verification code</span></h2>
                            <p>Enter the OTP send to {email}</p>
                            <form className="auth-form" onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="otp" className="form-label">OTP</label>
                                    <input type="number" name='otp' value={otp} onChange={(e) => setOtp(e.target.value)} placeholder="Enter 6 digit code" className="form-control" />
                                </div>
                                <button type='submit' data-cursor="pointer" className="btn-solid btn-absolute text-center mt-3">Submit</button>
                                <h4 className="text-title text-center mt-2">Already have an account <Link href="/login" className='mainColor'>Sign in</Link></h4>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OTP