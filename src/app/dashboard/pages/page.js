'use client'
import BreadCrumb from '@/components/admin/BreadCrumb'
import DeleteModal from '@/components/admin/DeleteModal'
import SearchForm from '@/components/admin/SearchForm'
import Link from 'next/link'
import React, { useState } from 'react'
import { ChevronLeft, ChevronRight, Eye, Files, PencilSquare, Trash } from 'react-bootstrap-icons'

const Pages = () => {

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
    <div className='pages-pg'>
      <div className="mb-8 grid grid-cols-1 col-span-2 gap-6">
        <div className="relative flex flex-col bg-clip-border bg-[#141d2a] text-gray-700 shadow-md overflow-hidden xl:col-span-2 p-4">
          <div className="flex flex-col-reverse justify-between gap-6 md:flex-row md:items-center">
            <div className="capitalize">
              <BreadCrumb title="Pages" />
            </div>

            <div className="flex items-center justify-end text-right w-full place-items-center flex-col gap-4 sm:flex-row">
              <SearchForm searchQuery={""} setSearchQuery={"setSearchQuery"} />

              <Link href='/dashboard/pages/add' className="middle center flex max-[640px]:w-full items-center gap-2 custom_btn py-2 px-6 font-sans font-bold text-xs uppercase shadow-md shadow-green-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                <Files className="text-xl " /> Create New Page
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="2xl:col-span-4 sm:col-span-2 bg-[#141d2a] border-none p-4">
        <div className="flex flex-col">
          <div className="overflow-x-auto">
            <table className="table-fixed min-w-full divide-y divide-gray-200 dark:divide-gray-600">
              <thead className="bg-gray-50 dark:bg-gray-700">
                <tr className="text-gray-800 dark:text-gray-300">
                  <th className="p-3.5 text-sm text-start font-normal">Sr.No</th>
                  <th className="p-3.5 text-sm text-start font-normal">Page Name</th>
                  <th className="p-3.5 text-sm text-start font-normal">Image</th>
                  <th className="p-3.5 text-sm text-start font-normal">Content</th>
                  <th className="p-3.5 text-sm text-start font-normal">Date</th>
                  <th className="p-3.5 text-sm text-start font-normal">Status</th>
                  <th className="p-3.5 text-sm text-start font-normal">Action</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-200 dark:divide-gray-600">
                <tr>
                  <td className="p-3.5 text-sm text-gray-900 dark:text-gray-400">1</td>
                  <td className="p-3.5 text-sm text-gray-700 dark:text-gray-400 whitespace-nowrap">Privacy Policy</td>
                  <td className="p-3.5 text-sm text-gray-700 dark:text-gray-400">
                    <div className="flex gap-2 items-center">
                      <div className="w-[42px] h-[42px] rounded-full border"><img src="/assets/images/user/5.jpg" alt="" className="h-full object-cover" /></div>
                    </div>
                  </td>
                  <td className="p-3.5 text-sm text-gray-700 dark:text-gray-400 line-clamp">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel esse, quos autem debitis sequi voluptas. Architecto tempora sed magnam sit unde ut minima veniam provident eveniet est. Rerum, molestiae rem.</td>
                  <td className="p-3.5 text-base text-gray-700 dark:text-gray-400 whitespace-nowrap">12-03-2025</td>
                  <td className="p-3.5 text-sm text-[#3bedb2] whitespace-nowrap">Publish</td>
                  <td className="p-3.5 text-sm text-[#3bedb2]">
                    <div className="flex items-center gap-2">
                      <Link href='/dashboard/pages/1' title='View' className="rounded bg-emerald-600 text-white hover:bg-emerald-700 p-2 mx-1"><Eye /></Link>
                      <Link href='/dashboard/pages/edit/1' title='Edit' className="rounded bg-lime-600 text-white hover:bg-lime-700 p-2 mx-1"><PencilSquare /></Link>
                      <button onClick={() => onOpenModal("1")} title='Delete' className="rounded bg-red-600 text-white hover:bg-red-700 p-2 mx-1"><Trash /></button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="p-3.5 text-sm text-gray-900 dark:text-gray-400">1</td>
                  <td className="p-3.5 text-sm text-gray-700 dark:text-gray-400 whitespace-nowrap">Privacy Policy</td>
                  <td className="p-3.5 text-sm text-gray-700 dark:text-gray-400">
                    <div className="flex gap-2 items-center">
                      <div className="w-[42px] h-[42px] rounded-full border"><img src="/assets/images/user/5.jpg" alt="" className="h-full object-cover" /></div>
                    </div>
                  </td>
                  <td className="p-3.5 text-sm text-gray-700 dark:text-gray-400 line-clamp">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel esse, quos autem debitis sequi voluptas. Architecto tempora sed magnam sit unde ut minima veniam provident eveniet est. Rerum, molestiae rem.</td>
                  <td className="p-3.5 text-base text-gray-700 dark:text-gray-400 whitespace-nowrap">12-03-2025</td>
                  <td className="p-3.5 text-sm text-[#3bedb2] whitespace-nowrap">Publish</td>
                  <td className="p-3.5 text-sm text-[#3bedb2]">
                    <div className="flex items-center gap-2">
                      <Link href='/dashboard/pages/1' title='View' className="rounded bg-emerald-600 text-white hover:bg-emerald-700 p-2 mx-1"><Eye /></Link>
                      <Link href='/dashboard/pages/edit/1' title='Edit' className="rounded bg-lime-600 text-white hover:bg-lime-700 p-2 mx-1"><PencilSquare /></Link>
                      <button onClick={() => onOpenModal("1")} title='Delete' className="rounded bg-red-600 text-white hover:bg-red-700 p-2 mx-1"><Trash /></button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="p-3.5 text-sm text-gray-900 dark:text-gray-400">1</td>
                  <td className="p-3.5 text-sm text-gray-700 dark:text-gray-400 whitespace-nowrap">Privacy Policy</td>
                  <td className="p-3.5 text-sm text-gray-700 dark:text-gray-400">
                    <div className="flex gap-2 items-center">
                      <div className="w-[42px] h-[42px] rounded-full border"><img src="/assets/images/user/5.jpg" alt="" className="h-full object-cover" /></div>
                    </div>
                  </td>
                  <td className="p-3.5 text-sm text-gray-700 dark:text-gray-400 line-clamp">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel esse, quos autem debitis sequi voluptas. Architecto tempora sed magnam sit unde ut minima veniam provident eveniet est. Rerum, molestiae rem.</td>
                  <td className="p-3.5 text-base text-gray-700 dark:text-gray-400 whitespace-nowrap">12-03-2025</td>
                  <td className="p-3.5 text-sm text-[#3bedb2] whitespace-nowrap">Publish</td>
                  <td className="p-3.5 text-sm text-[#3bedb2]">
                    <div className="flex items-center gap-2">
                      <Link href='/dashboard/pages/1' title='View' className="rounded bg-emerald-600 text-white hover:bg-emerald-700 p-2 mx-1"><Eye /></Link>
                      <Link href='/dashboard/pages/edit/1' title='Edit' className="rounded bg-lime-600 text-white hover:bg-lime-700 p-2 mx-1"><PencilSquare /></Link>
                      <button onClick={() => onOpenModal("1")} title='Delete' className="rounded bg-red-600 text-white hover:bg-red-700 p-2 mx-1"><Trash /></button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="p-3.5 text-sm text-gray-900 dark:text-gray-400">1</td>
                  <td className="p-3.5 text-sm text-gray-700 dark:text-gray-400 whitespace-nowrap">Privacy Policy</td>
                  <td className="p-3.5 text-sm text-gray-700 dark:text-gray-400">
                    <div className="flex gap-2 items-center">
                      <div className="w-[42px] h-[42px] rounded-full border"><img src="/assets/images/user/5.jpg" alt="" className="h-full object-cover" /></div>
                    </div>
                  </td>
                  <td className="p-3.5 text-sm text-gray-700 dark:text-gray-400 line-clamp">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel esse, quos autem debitis sequi voluptas. Architecto tempora sed magnam sit unde ut minima veniam provident eveniet est. Rerum, molestiae rem.</td>
                  <td className="p-3.5 text-base text-gray-700 dark:text-gray-400 whitespace-nowrap">12-03-2025</td>
                  <td className="p-3.5 text-sm text-[#3bedb2] whitespace-nowrap">Publish</td>
                  <td className="p-3.5 text-sm text-[#3bedb2]">
                    <div className="flex items-center gap-2">
                      <Link href='/dashboard/pages/1' title='View' className="rounded bg-emerald-600 text-white hover:bg-emerald-700 p-2 mx-1"><Eye /></Link>
                      <Link href='/dashboard/pages/edit/1' title='Edit' className="rounded bg-lime-600 text-white hover:bg-lime-700 p-2 mx-1"><PencilSquare /></Link>
                      <button onClick={() => onOpenModal("1")} title='Delete' className="rounded bg-red-600 text-white hover:bg-red-700 p-2 mx-1"><Trash /></button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="p-3.5 text-sm text-gray-900 dark:text-gray-400">1</td>
                  <td className="p-3.5 text-sm text-gray-700 dark:text-gray-400 whitespace-nowrap">Privacy Policy</td>
                  <td className="p-3.5 text-sm text-gray-700 dark:text-gray-400">
                    <div className="flex gap-2 items-center">
                      <div className="w-[42px] h-[42px] rounded-full border"><img src="/assets/images/user/5.jpg" alt="" className="h-full object-cover" /></div>
                    </div>
                  </td>
                  <td className="p-3.5 text-sm text-gray-700 dark:text-gray-400 line-clamp">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel esse, quos autem debitis sequi voluptas. Architecto tempora sed magnam sit unde ut minima veniam provident eveniet est. Rerum, molestiae rem.</td>
                  <td className="p-3.5 text-base text-gray-700 dark:text-gray-400 whitespace-nowrap">12-03-2025</td>
                  <td className="p-3.5 text-sm text-[#3bedb2] whitespace-nowrap">Publish</td>
                  <td className="p-3.5 text-sm text-[#3bedb2]">
                    <div className="flex items-center gap-2">
                      <Link href='/dashboard/pages/1' title='View' className="rounded bg-emerald-600 text-white hover:bg-emerald-700 p-2 mx-1"><Eye /></Link>
                      <Link href='/dashboard/pages/edit/1' title='Edit' className="rounded bg-lime-600 text-white hover:bg-lime-700 p-2 mx-1"><PencilSquare /></Link>
                      <button onClick={() => onOpenModal("1")} title='Delete' className="rounded bg-red-600 text-white hover:bg-red-700 p-2 mx-1"><Trash /></button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="p-3.5 text-sm text-gray-900 dark:text-gray-400">1</td>
                  <td className="p-3.5 text-sm text-gray-700 dark:text-gray-400 whitespace-nowrap">Privacy Policy</td>
                  <td className="p-3.5 text-sm text-gray-700 dark:text-gray-400">
                    <div className="flex gap-2 items-center">
                      <div className="w-[42px] h-[42px] rounded-full border"><img src="/assets/images/user/5.jpg" alt="" className="h-full object-cover" /></div>
                    </div>
                  </td>
                  <td className="p-3.5 text-sm text-gray-700 dark:text-gray-400 line-clamp">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel esse, quos autem debitis sequi voluptas. Architecto tempora sed magnam sit unde ut minima veniam provident eveniet est. Rerum, molestiae rem.</td>
                  <td className="p-3.5 text-base text-gray-700 dark:text-gray-400 whitespace-nowrap">12-03-2025</td>
                  <td className="p-3.5 text-sm text-[#3bedb2] whitespace-nowrap">Publish</td>
                  <td className="p-3.5 text-sm text-[#3bedb2]">
                    <div className="flex items-center gap-2">
                      <Link href='/dashboard/pages/1' title='View' className="rounded bg-emerald-600 text-white hover:bg-emerald-700 p-2 mx-1"><Eye /></Link>
                      <Link href='/dashboard/pages/edit/1' title='Edit' className="rounded bg-lime-600 text-white hover:bg-lime-700 p-2 mx-1"><PencilSquare /></Link>
                      <button onClick={() => onOpenModal("1")} title='Delete' className="rounded bg-red-600 text-white hover:bg-red-700 p-2 mx-1"><Trash /></button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>

            <div className="flex bg-[#141d2a] justify-end items-center px-3 py-2 mt-5 gap-3">
              <div className="row_per_page flex items-center gap-3">
                <p className='mb-0 border-none text-base'>Rows per page</p>
                <select name="" className='border-none outline-none focus:outline-none bg-[#141d2a] text-white'>
                  <option value="5">5</option>
                  <option value="10">10</option>
                  <option value="15">15</option>
                  <option value="20">20</option>
                  <option value="25">25</option>
                  <option value="30">30</option>
                  <option value="50">50</option>
                  <option value="100">100</option>
                </select>
              </div>
              <div className="count flex">
                <p className='mb-0 border-none'>1-10 of 20</p>
              </div>
              <div className="next_preview flex items-center gap-3">
                <button className="rounded-md border border-gray-500 p-2.5 text-sm transition-all shadow-sm hover:shadow-lg text-gray-600 hover:text-white hover:bg-gray-800 disabled:opacity-50"><ChevronLeft /></button>
                <button className="rounded-md border border-gray-500 p-2.5 text-sm transition-all shadow-sm hover:shadow-lg text-gray-600 hover:text-white hover:bg-gray-800 disabled:opacity-50"><ChevronRight /></button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <DeleteModal show={show} onClose={onCloseModal} onDelete={handleDelete} />
    </div>
  )
}

export default Pages