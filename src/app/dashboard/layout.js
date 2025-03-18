'use client'
import Header from "@/components/admin/Header";
import Sidebar from "@/components/admin/Sidebar";
import { useState } from "react";

export default function DashbaordLayout({ children }) {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="dashboard flex">
      <Sidebar toggleMenu={toggleMenu} />
      <div className={`main-wrapper ${toggleMenu ? 'w-full' : 'w-[calc(100vw-200px)]'}`}>
        <Header toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
        <main className="main-sec bg-[#070f18]">
          {children}
        </main>
      </div>
    </div>
  );
}
