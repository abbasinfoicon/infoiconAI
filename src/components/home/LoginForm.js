'use client'
import Link from 'next/link';
import React, { useState } from 'react'
import { Envelope, Eye, EyeSlash, Lock, LockFill, Person, Phone } from 'react-bootstrap-icons'
import FetchData from '../FetchApi';
import { toast } from 'react-toastify';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { setUserData } from '@/app/lib/features/userSlice';

const LoginForm = ({ page, changeSignup }) => {
    const router = useRouter();
    const dispatch = useDispatch();
    const [data, setData] = useState({ name: '', email: '', phone: '', password: '', cpassword: '', role: 'user' });
    const [showPassword, setShowPassword] = useState({ password: false, cpassword: false });

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const body = page === 'login' ? { email: data.email, password: data.password } : data;
            const res = await FetchData({ url: `auth/${page === 'login' ? 'login' : 'register'}`, method: "POST", body, });
            const result = await res.json();

            if (!res.ok) {
                toast.error(result.message);
                throw new Error(result.message);
            }

            if (page === 'login') {
                Cookies.set('access_token', result.accessToken);
                dispatch(setUserData(result.user));

                router.push('/dashboard');
                toast.success(result.message);
            } else {
                router.push(`/otp?email=${data.email}`);
                toast.success(result.message);
            }

        } catch (error) {
            console.error(page === 'login' ? "Login" : "Register", error);
        }
    }

    const toggleEye = (field) => setShowPassword((prev) => ({ ...prev, [field]: !prev[field] }));

    return (
        <form className="auth-form" onSubmit={handleSubmit}>
            {page === 'register' &&
                <div className="mb-3 form-group">
                    <label htmlFor="name" className="form-label">Name</label>
                    <div className="relative">
                        <Person className="iconsax" />
                        <input type="text" name='name' value={data.name} onChange={handleChange} placeholder="Enter your name" className="form-control" />
                    </div>
                </div>
            }

            <div className="mb-3 form-group">
                <label htmlFor="emailid" className="form-label">Email ID</label>
                <div className="relative">
                    <Envelope className='iconsax' />
                    <input type="email" name='email' value={data.email} onChange={handleChange} placeholder="Enter your mail id" className="form-control" />
                </div>
            </div>

            {page === 'register' &&
                <div className="mb-3 form-group">
                    <label htmlFor="name" className="form-label">Phone</label>
                    <div className="relative">
                        <Phone className="iconsax" />
                        <input type="number" name='phone' value={data.phone} onChange={handleChange} placeholder="Enter your Phone" className="form-control" />
                    </div>
                </div>
            }

            <div className="mb-3 form-group">
                <label htmlFor="password" className="form-label">Password</label>
                <div className="relative">
                    <Lock className="iconsax" />
                    <input type={showPassword.password ? 'text' : 'password'} name='password' value={data.password} onChange={handleChange} placeholder="Enter your password" className="form-control" />
                    <span onClick={() => toggleEye('password')} className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-300">
                        {showPassword.password ? <EyeSlash /> : <Eye />}
                    </span>
                </div>
            </div>

            {page === 'register' &&
                <div className="mb-3 form-group">
                    <label htmlFor="password1" className="form-label">Confirm Password</label>
                    <div className="relative">
                        <LockFill className="iconsax" />
                        <input type={showPassword.cpassword ? 'text' : 'password'} name='cpassword' value={data.cpassword} onChange={handleChange} placeholder="Enter your password" className="form-control" />
                        <span onClick={() => toggleEye('cpassword')} className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-300">
                            {showPassword.cpassword ? <EyeSlash /> : <Eye />}
                        </span>
                    </div>
                </div>
            }

            {page === 'login' && <div className="text-end"><Link href="/reset-password">Forget Password?</Link></div>}

            <button type="submit" className="btn-solid w-100 text-center mt-4">{page === 'register' ? 'Sign up' : 'Log me in'}</button>
            {page === 'register' ?
                <h4 className="text-title text-center mt-2">Already have an account <button onClick={() => setTabIndex(0)} className='mainColor'>Sign in</button></h4> :
                <h4 className="text-title text-center mt-2">Don’t have an account ? <button onClick={changeSignup} className='mainColor'>Signup</button></h4>
            }

            {page === 'login' &&
                <>
                    <div className="divider">
                        <h3>or sign in with</h3>
                    </div>

                    <ul className="social-btn">
                        <li><Link href="https://www.google.com/"><img src="/assets/svg/google.svg" className="img-fluid" />Continue with google</Link></li>
                        <li><Link href="https://www.apple.com/"><img src="/assets/svg/apple.svg" className="img-fluid" />Continue with apple</Link></li>
                    </ul>
                </>
            }
        </form>
    )
}

export default LoginForm