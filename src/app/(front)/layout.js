'use client'
import "../main.css";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { usePathname } from 'next/navigation'

export default function FrontLayout({ children }) {
  const pathname = usePathname();

  return (
    <>
      {pathname !== '/login' && pathname !== '/reset-password' && pathname !== '/otp' && <Header />}

      {children}

      {pathname !== '/login' && pathname !== '/reset-password' && pathname !== '/otp' && <Footer />}
    </>
  );
}
