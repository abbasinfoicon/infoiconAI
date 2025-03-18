'use client'
import BreadCrumb from '@/components/admin/BreadCrumb'
import DeleteModal from '@/components/admin/DeleteModal'
import FetchData from '@/components/FetchApi'
import SearchForm from '@/components/admin/SearchForm'
import Link from 'next/link'
import React, { useState } from 'react'
import { ArrowRepeat, Calendar2, Eye, PencilSquare, Trash } from 'react-bootstrap-icons'
import { toast } from 'react-toastify'

const Subscription = () => {

  const [show, setShow] = useState(false);
  const [itemIdToDelete, setItemIdToDelete] = useState(null);

  const handleDelete = async () => {
    try {
      const res = await FetchData({ url: ``, method: "DELETE" });
      const result = await res.json();

      if (!res.ok) {
        toast.error(result.message);
        throw new Error('Failed to delete item');
      }
      setShow(false);
      getData();
      toast.success(result.message);
    } catch (error) {
      console.error(`Error deleting ${itemIdToDelete}:`, error.message);
    }
  };

  const onOpenModal = (itemId) => {
    setItemIdToDelete(itemId);
    setShow(true);
  };
  const onCloseModal = () => setShow(false);
  
  return (
    <div className='subscription-pg'>
      <div className="mb-8 grid grid-cols-1 col-span-2 gap-6">
        <div className="relative flex flex-col bg-clip-border bg-[#141d2a] text-gray-700 shadow-md overflow-hidden xl:col-span-2 p-4">
          <div className="flex flex-col-reverse justify-between gap-6 md:flex-row md:items-center">
            <div className="capitalize">
              <BreadCrumb title="Subscription" />
            </div>

            <div className="flex items-center justify-end text-right w-full place-items-center flex-col gap-4 sm:flex-row">
              <SearchForm searchQuery={""} setSearchQuery={"setSearchQuery"} />

              <Link href='/dashboard/subscription/add' className="middle center flex max-[640px]:w-full items-center gap-2 custom_btn py-2 px-6 font-sans text-xs font-bold uppercase shadow-md shadow-green-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                <Calendar2 className="text-xl" /> Create New Subscription
              </Link>
            </div>
          </div>
        </div>
      </div>


      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
        <div className="relative bg-[#141d2a] shadow-lg overflow-hidden text-center p-6">
          <div className={`bg-slate-600 text-white py-4 px-6`}>
            <h3 className="text-xl font-semibold mb-0">Month Plan</h3>
          </div>
          <div className="py-6">
            <p className="text-4xl font-bold text-[#3bedb2]">€ 100</p>
            <p className="text-gray-400 mb-6">1 - Month</p>

            <div className="mb-5 plan-lists text-gray-400">
              <ul>
                <li>Interactive Bepper Boards with 6 different varieties (BBM-Basic, BBM-Me-in-the-middle, BBM-Steps-to-goal and a layout for Transactional Analysis (TA), Positieve Intelligence (PQ), DiSC.</li>
                <li>White Board</li>
                <li>Can create invite codes for 1 guest</li>
                <li>Video view of participants except the ‘self’</li>
                <li>Chat</li>
                <li>Share screen</li>
                <li>Download and order digital and physical products with for free or payed</li>
                <li>Subscribe for Bepper (demo)coaching sessions (payed) and trainings (payed)</li>
                <li>Can create unlimited invite codes for more then 1 guest with one code for (every-kind-of-)relationship-coaching-sessions</li>
                <li>Calendar to fill with slots for sessions and dates and times for trainings by subscriber for guests (clients) of the subscriber</li>
                <li>DashBoard for subscribers to see their calendar-schedule and guests (clients)</li>
              </ul>
            </div>

            <div className="flex gap-2 items-center justify-center abs-button-inline">
              <Link href={`/dashboard/subscription/1`} className="bg-emerald-500 text-white font-bold py-2 px-4 hover:bg-emerald-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50">
                <Eye className="inline-block mr-1" />
              </Link>
              <Link href={`/dashboard/subscription/edit/1`} className="bg-green-700 text-white font-bold py-2 px-4 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50">
                <PencilSquare className="inline-block mr-1" />
              </Link>
              <button onClick={() => onOpenModal("1")} className="bg-red-700 text-white font-bold py-2 px-4 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50">
                <Trash className="inline-block mr-1" />
              </button>
            </div>
          </div>
        </div>

        <div className="relative bg-[#141d2a] shadow-lg overflow-hidden text-center p-6">
          <div className={`bg-slate-600 text-white py-4 px-6`}>
            <h3 className="text-xl font-semibold mb-0">Month Plan</h3>
          </div>
          <div className="py-6">
            <p className="text-4xl font-bold text-[#3bedb2]">€ 100</p>
            <p className="text-gray-400 mb-6">1 - Month</p>

            <div className="mb-5 plan-lists text-gray-400">
              <ul>
                <li>Interactive Bepper Boards with 6 different varieties (BBM-Basic, BBM-Me-in-the-middle, BBM-Steps-to-goal and a layout for Transactional Analysis (TA), Positieve Intelligence (PQ), DiSC.</li>
                <li>White Board</li>
                <li>Can create invite codes for 1 guest</li>
                <li>Video view of participants except the ‘self’</li>
                <li>Chat</li>
                <li>Share screen</li>
                <li>Download and order digital and physical products with for free or payed</li>
                <li>Subscribe for Bepper (demo)coaching sessions (payed) and trainings (payed)</li>
                <li>Can create unlimited invite codes for more then 1 guest with one code for (every-kind-of-)relationship-coaching-sessions</li>
                <li>Calendar to fill with slots for sessions and dates and times for trainings by subscriber for guests (clients) of the subscriber</li>
                <li>DashBoard for subscribers to see their calendar-schedule and guests (clients)</li>
              </ul>
            </div>

            <div className="flex gap-2 items-center justify-center abs-button-inline">
              <Link href={`/dashboard/subscription/1`} className="bg-emerald-500 text-white font-bold py-2 px-4 hover:bg-emerald-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50">
                <Eye className="inline-block mr-1" />
              </Link>
              <Link href={`/dashboard/subscription/edit/1`} className="bg-green-700 text-white font-bold py-2 px-4 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50">
                <PencilSquare className="inline-block mr-1" />
              </Link>
              <button onClick={() => onOpenModal("1")} className="bg-red-700 text-white font-bold py-2 px-4 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50">
                <Trash className="inline-block mr-1" />
              </button>
            </div>
          </div>
        </div>

        <div className="relative bg-[#141d2a] shadow-lg overflow-hidden text-center p-6">
          <div className={`bg-slate-600 text-white py-4 px-6`}>
            <h3 className="text-xl font-semibold mb-0">Month Plan</h3>
          </div>
          <div className="py-6">
            <p className="text-4xl font-bold text-[#3bedb2]">€ 100</p>
            <p className="text-gray-400 mb-6">1 - Month</p>

            <div className="mb-5 plan-lists text-gray-400">
              <ul>
                <li>Interactive Bepper Boards with 6 different varieties (BBM-Basic, BBM-Me-in-the-middle, BBM-Steps-to-goal and a layout for Transactional Analysis (TA), Positieve Intelligence (PQ), DiSC.</li>
                <li>White Board</li>
                <li>Can create invite codes for 1 guest</li>
                <li>Video view of participants except the ‘self’</li>
                <li>Chat</li>
                <li>Share screen</li>
                <li>Download and order digital and physical products with for free or payed</li>
                <li>Subscribe for Bepper (demo)coaching sessions (payed) and trainings (payed)</li>
                <li>Can create unlimited invite codes for more then 1 guest with one code for (every-kind-of-)relationship-coaching-sessions</li>
                <li>Calendar to fill with slots for sessions and dates and times for trainings by subscriber for guests (clients) of the subscriber</li>
                <li>DashBoard for subscribers to see their calendar-schedule and guests (clients)</li>
              </ul>
            </div>

            <div className="flex gap-2 items-center justify-center abs-button-inline">
              <Link href={`/dashboard/subscription/1`} className="bg-emerald-500 text-white font-bold py-2 px-4 hover:bg-emerald-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50">
                <Eye className="inline-block mr-1" />
              </Link>
              <Link href={`/dashboard/subscription/edit/1`} className="bg-green-700 text-white font-bold py-2 px-4 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50">
                <PencilSquare className="inline-block mr-1" />
              </Link>
              <button onClick={() => onOpenModal("1")} className="bg-red-700 text-white font-bold py-2 px-4 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50">
                <Trash className="inline-block mr-1" />
              </button>
            </div>
          </div>
        </div>

        <div className="col-span-3">
          <div className="flex items-center gap-8 justify-center my-5">
            <button className="btn-arrow">
              <div className="icon-arrow"><ArrowRepeat className="iconsax" /></div> Load More
            </button>
          </div>
        </div>
      </div>


      <DeleteModal show={show} onClose={onCloseModal} onDelete={handleDelete} />
    </div>
  )
}

export default Subscription