'use client'
import BreadCrumb from '@/components/admin/BreadCrumb'
import DeleteModal from '@/components/admin/DeleteModal'
import SearchForm from '@/components/admin/SearchForm'
import Link from 'next/link'
import React, { useState } from 'react'
import { ArrowLeft, ArrowRepeat, ArrowRight, Envelope, Eye, GeoAlt, PencilSquare, PersonPlus, Phone, Trash } from 'react-bootstrap-icons'

const Users = () => {

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
    <div className='user-pg'>
      <div className="mb-8 grid grid-cols-1 col-span-2 gap-6">
        <div className="relative flex flex-col bg-clip-border bg-[#141d2a] text-gray-400 shadow-md overflow-hidden xl:col-span-2 p-4">
          <div className="flex flex-col-reverse justify-between gap-6 md:flex-row md:items-center">
            <div className="capitalize">
              <BreadCrumb title="User" />
            </div>

            <div className="flex items-center justify-end text-right w-full place-items-center flex-col gap-4 sm:flex-row">
              <SearchForm searchQuery={""} setSearchQuery={"setSearchQuery"} />

              <Link href='/dashboard/users/add' className="middle center flex max-[640px]:w-full items-center gap-2 custom_btn py-2 px-6 font-sans text-xs font-bold uppercase shadow-md shadow-green-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                <PersonPlus className="text-xl" /> Create New User
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-3 mb-4">
          <div className="w-full bg-[#141d2a] rounded-none overflow-hidden shadow-lg">
            <div className="px-4 pb-6">
              <div className="my-4">
                <img className="h-32 w-32 rounded-full border-4 border-white mx-auto my-4" src="/assets/images/user/5.jpg" alt="Madhuri" />
                <div className="py-2">
                  <h3 className="font-bold text-2xl text-gray-100 mb-1 text-center">Madhuri <small className='font-light text-[#3bedb2] text-xl'>(You)</small></h3>

                  <ul className="text-gray-400  items-center">
                    <li className="flex gap-2 items-center justify-center"><Envelope /> uid3@infoicon.com</li>
                    <li className="flex gap-2 items-center justify-center"><Phone /> +91-9874563698</li>
                    <li className="flex gap-2 items-center justify-center"><GeoAlt /> Delhi</li>
                  </ul>
                </div>
              </div>

              <div className="flex gap-2 px-2 justify-center">
                <Link href={`/dashboard/users/1`} className="rounded-full bg-emerald-600 text-white antialiased font-bold hover:bg-emerald-700 p-3"><Eye /></Link>
                <Link href={`/dashboard/users/edit/1`} className="rounded-full bg-lime-600 text-white antialiased font-bold hover:bg-lime-700 p-3"><PencilSquare /></Link>
                <button onClick={() => onOpenModal("1")} className="rounded-full bg-red-600 text-white antialiased font-bold hover:bg-red-700 p-3"><Trash /></button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-4">
          <div className="w-full bg-[#141d2a] rounded-none overflow-hidden shadow-lg">
            <div className="px-4 pb-6">
              <div className="my-4">
                <img className="h-32 w-32 rounded-full border-4 border-white mx-auto my-4" src="/assets/images/user/5.jpg" alt="Madhuri" />
                <div className="py-2">
                  <h3 className="font-bold text-2xl text-gray-100 mb-1 text-center">Madhuri</h3>

                  <ul className="text-gray-400  items-center">
                    <li className="flex gap-2 items-center justify-center"><Envelope /> uid3@infoicon.com</li>
                    <li className="flex gap-2 items-center justify-center"><Phone /> +91-9874563698</li>
                    <li className="flex gap-2 items-center justify-center"><GeoAlt /> Delhi</li>
                  </ul>
                </div>
              </div>

              <div className="flex gap-2 px-2 justify-center">
                <Link href={`/dashboard/users/1`} className="rounded-full bg-emerald-600 text-white antialiased font-bold hover:bg-emerald-700 p-3"><Eye /></Link>
                <Link href={`/dashboard/users/edit/1`} className="rounded-full bg-lime-600 text-white antialiased font-bold hover:bg-lime-700 p-3"><PencilSquare /></Link>
                <button onClick={() => onOpenModal("1")} className="rounded-full bg-red-600 text-white antialiased font-bold hover:bg-red-700 p-3"><Trash /></button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-4">
          <div className="w-full bg-[#141d2a] rounded-none overflow-hidden shadow-lg">
            <div className="px-4 pb-6">
              <div className="my-4">
                <img className="h-32 w-32 rounded-full border-4 border-white mx-auto my-4" src="/assets/images/user/5.jpg" alt="Madhuri" />
                <div className="py-2">
                  <h3 className="font-bold text-2xl text-gray-100 mb-1 text-center">Madhuri</h3>

                  <ul className="text-gray-400  items-center">
                    <li className="flex gap-2 items-center justify-center"><Envelope /> uid3@infoicon.com</li>
                    <li className="flex gap-2 items-center justify-center"><Phone /> +91-9874563698</li>
                    <li className="flex gap-2 items-center justify-center"><GeoAlt /> Delhi</li>
                  </ul>
                </div>
              </div>

              <div className="flex gap-2 px-2 justify-center">
                <Link href={`/dashboard/users/1`} className="rounded-full bg-emerald-600 text-white antialiased font-bold hover:bg-emerald-700 p-3"><Eye /></Link>
                <Link href={`/dashboard/users/edit/1`} className="rounded-full bg-lime-600 text-white antialiased font-bold hover:bg-lime-700 p-3"><PencilSquare /></Link>
                <button onClick={() => onOpenModal("1")} className="rounded-full bg-red-600 text-white antialiased font-bold hover:bg-red-700 p-3"><Trash /></button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-4">
          <div className="w-full bg-[#141d2a] rounded-none overflow-hidden shadow-lg">
            <div className="px-4 pb-6">
              <div className="my-4">
                <img className="h-32 w-32 rounded-full border-4 border-white mx-auto my-4" src="/assets/images/user/5.jpg" alt="Madhuri" />
                <div className="py-2">
                  <h3 className="font-bold text-2xl text-gray-100 mb-1 text-center">Madhuri</h3>

                  <ul className="text-gray-400  items-center">
                    <li className="flex gap-2 items-center justify-center"><Envelope /> uid3@infoicon.com</li>
                    <li className="flex gap-2 items-center justify-center"><Phone /> +91-9874563698</li>
                    <li className="flex gap-2 items-center justify-center"><GeoAlt /> Delhi</li>
                  </ul>
                </div>
              </div>

              <div className="flex gap-2 px-2 justify-center">
                <Link href={`/dashboard/users/1`} className="rounded-full bg-emerald-600 text-white antialiased font-bold hover:bg-emerald-700 p-3"><Eye /></Link>
                <Link href={`/dashboard/users/edit/1`} className="rounded-full bg-lime-600 text-white antialiased font-bold hover:bg-lime-700 p-3"><PencilSquare /></Link>
                <button onClick={() => onOpenModal("1")} className="rounded-full bg-red-600 text-white antialiased font-bold hover:bg-red-700 p-3"><Trash /></button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-4">
          <div className="w-full bg-[#141d2a] rounded-none overflow-hidden shadow-lg">
            <div className="px-4 pb-6">
              <div className="my-4">
                <img className="h-32 w-32 rounded-full border-4 border-white mx-auto my-4" src="/assets/images/user/5.jpg" alt="Madhuri" />
                <div className="py-2">
                  <h3 className="font-bold text-2xl text-gray-100 mb-1 text-center">Madhuri</h3>

                  <ul className="text-gray-400  items-center">
                    <li className="flex gap-2 items-center justify-center"><Envelope /> uid3@infoicon.com</li>
                    <li className="flex gap-2 items-center justify-center"><Phone /> +91-9874563698</li>
                    <li className="flex gap-2 items-center justify-center"><GeoAlt /> Delhi</li>
                  </ul>
                </div>
              </div>

              <div className="flex gap-2 px-2 justify-center">
                <Link href={`/dashboard/users/1`} className="rounded-full bg-emerald-600 text-white antialiased font-bold hover:bg-emerald-700 p-3"><Eye /></Link>
                <Link href={`/dashboard/users/edit/1`} className="rounded-full bg-lime-600 text-white antialiased font-bold hover:bg-lime-700 p-3"><PencilSquare /></Link>
                <button onClick={() => onOpenModal("1")} className="rounded-full bg-red-600 text-white antialiased font-bold hover:bg-red-700 p-3"><Trash /></button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-4">
          <div className="w-full bg-[#141d2a] rounded-none overflow-hidden shadow-lg">
            <div className="px-4 pb-6">
              <div className="my-4">
                <img className="h-32 w-32 rounded-full border-4 border-white mx-auto my-4" src="/assets/images/user/5.jpg" alt="Madhuri" />
                <div className="py-2">
                  <h3 className="font-bold text-2xl text-gray-100 mb-1 text-center">Madhuri</h3>

                  <ul className="text-gray-400  items-center">
                    <li className="flex gap-2 items-center justify-center"><Envelope /> uid3@infoicon.com</li>
                    <li className="flex gap-2 items-center justify-center"><Phone /> +91-9874563698</li>
                    <li className="flex gap-2 items-center justify-center"><GeoAlt /> Delhi</li>
                  </ul>
                </div>
              </div>

              <div className="flex gap-2 px-2 justify-center">
                <Link href={`/dashboard/users/1`} className="rounded-full bg-emerald-600 text-white antialiased font-bold hover:bg-emerald-700 p-3"><Eye /></Link>
                <Link href={`/dashboard/users/edit/1`} className="rounded-full bg-lime-600 text-white antialiased font-bold hover:bg-lime-700 p-3"><PencilSquare /></Link>
                <button onClick={() => onOpenModal("1")} className="rounded-full bg-red-600 text-white antialiased font-bold hover:bg-red-700 p-3"><Trash /></button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-4">
          <div className="w-full bg-[#141d2a] rounded-none overflow-hidden shadow-lg">
            <div className="px-4 pb-6">
              <div className="my-4">
                <img className="h-32 w-32 rounded-full border-4 border-white mx-auto my-4" src="/assets/images/user/5.jpg" alt="Madhuri" />
                <div className="py-2">
                  <h3 className="font-bold text-2xl text-gray-100 mb-1 text-center">Madhuri</h3>

                  <ul className="text-gray-400  items-center">
                    <li className="flex gap-2 items-center justify-center"><Envelope /> uid3@infoicon.com</li>
                    <li className="flex gap-2 items-center justify-center"><Phone /> +91-9874563698</li>
                    <li className="flex gap-2 items-center justify-center"><GeoAlt /> Delhi</li>
                  </ul>
                </div>
              </div>

              <div className="flex gap-2 px-2 justify-center">
                <Link href={`/dashboard/users/1`} className="rounded-full bg-emerald-600 text-white antialiased font-bold hover:bg-emerald-700 p-3"><Eye /></Link>
                <Link href={`/dashboard/users/edit/1`} className="rounded-full bg-lime-600 text-white antialiased font-bold hover:bg-lime-700 p-3"><PencilSquare /></Link>
                <button onClick={() => onOpenModal("1")} className="rounded-full bg-red-600 text-white antialiased font-bold hover:bg-red-700 p-3"><Trash /></button>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-12">
          <div className="flex items-center gap-8 justify-center my-5">
            <button className="btn-arrow">
              <div className="icon-arrow"><ArrowRepeat className="iconsax" /></div> Load More
            </button>
          </div>
        </div>

        <div className="col-md-12 d-none hidden none">
          <div className="flex items-center gap-8 justify-center my-5">
            <button className="rounded-md border border-[#3bedb2] p-2.5 text-center text-sm transition-all shadow-sm hover:shadow-lg text-[#3bedb2] hover:text-gray-400 hover:border-slate-800 focus:text-white focus:text-gray-400 focus:border-slate-800 active:border-slate-800 active:text-white active:text-gray-400 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
              <ArrowLeft />
            </button>

            <p className="text-gray-500 mb-0">
              Page <strong className="text-[#3bedb2]">1-10</strong> of&nbsp;<strong className="text-[#3bedb2]">20</strong>
            </p>

            <button className="rounded-md border border-[#3bedb2] p-2.5 text-center text-sm transition-all shadow-sm hover:shadow-lg text-[#3bedb2] hover:text-gray-400 hover:border-slate-800 focus:text-white focus:text-gray-400 focus:border-slate-800 active:border-slate-800 active:text-white active:text-gray-400 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
              <ArrowRight />
            </button>
          </div>
        </div>

      </div>

      <DeleteModal show={show} onClose={onCloseModal} onDelete={handleDelete} />

    </div>
  )
}

export default Users