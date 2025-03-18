import BreadCrumb from '@/components/admin/BreadCrumb'
import SearchForm from '@/components/admin/SearchForm'
import React from 'react'
import { ArrowRepeat, Bell, Trash } from 'react-bootstrap-icons'

const Notification = () => {
  return (
    <div className='notification-pg'>
      <div className="mb-8 grid grid-cols-1 col-span-2 gap-6">
        <div className="relative flex flex-col bg-clip-border bg-[#141d2a] text-gray-700 shadow-md overflow-hidden xl:col-span-2 p-4">
          <div className="flex flex-col-reverse justify-between gap-6 md:flex-row md:items-center">
            <div className="capitalize">
              <BreadCrumb title="Notification" />
            </div>

            <div className="flex items-center justify-end text-right w-full place-items-center flex-col gap-4 sm:flex-row">
              <SearchForm searchQuery={""} setSearchQuery={"setSearchQuery"} />

              <button className="middle center flex max-[640px]:w-full items-center gap-2 custom_btn py-2 px-6 font-sans text-xs font-bold uppercase shadow-md shadow-green-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                <Bell className="text-xl" /> Send Notification
              </button>
            </div>
          </div>
        </div>
      </div>





      <div className="row">
        <div className="space-y-4">
          <div className="flex justify-between items-center sticky top-[-14px] bg-[#141d2a] p-4 shadow-md">
            <div className="flex items-center gap-3 justify-start">
              <p className='mb-0'>Total <strong>20</strong> Page <small className='text-emerald-500 text-[12px]'>(20 Notifications)</small></p>
            </div>

            <div className="flex items-center gap-3 justify-end">
              <button className="middle center flex max-[640px]:w-full items-center gap-2 custom_btn py-2 px-6 font-sans text-xs font-bold uppercase shadow-md shadow-green-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                <Bell /> Clear Notification
              </button>

              <select className='form-select block !rounded-none border-gray-300 shadow-sm  sm:text-sm w-auto'>
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="15">15</option>
                <option value="20">20</option>
                <option value="25">25</option>
                <option value="50">50</option>
                <option value="100">100</option>
              </select>
              <p className='mb-0'>Page 1 of <strong>20</strong></p>
            </div>
          </div>

          <div className="flex items-start bg-[#141d2a] shadow-md p-4 space-x-4">
            <img src="/assets/images/user/5.jpg" alt="" className="w-16 h-16 rounded-full" />

            <div className="flex-grow">
              <h3 className="text-lg font-semibold text-[#3bedb2] text-capitalize">Abbas Abidi</h3>
              <p className="text-sm text-gray-300 mb-2">uid3@infoicon.in</p>
              <p className="text-xs text-gray-400">12-05-2025</p>

              <div className="mt-2 text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam similique inventore tempore nisi ullam ea sit ut accusamus! Error quibusdam illum libero tempora deleniti velit earum numquam, culpa doloremque debitis!</div>
            </div>

            <button className="rounded-full bg-emerald-600 text-white antialiased font-bold hover:bg-emerald-700 p-3"><Trash /></button>
          </div>
          <div className="flex items-start bg-[#141d2a] shadow-md p-4 space-x-4">
            <img src="/assets/images/user/5.jpg" alt="" className="w-16 h-16 rounded-full" />

            <div className="flex-grow">
              <h3 className="text-lg font-semibold text-[#3bedb2] text-capitalize">Abbas Abidi</h3>
              <p className="text-sm text-gray-300 mb-2">uid3@infoicon.in</p>
              <p className="text-xs text-gray-400">12-05-2025</p>

              <div className="mt-2 text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam similique inventore tempore nisi ullam ea sit ut accusamus! Error quibusdam illum libero tempora deleniti velit earum numquam, culpa doloremque debitis!</div>
            </div>

            <button className="rounded-full bg-emerald-600 text-white antialiased font-bold hover:bg-emerald-700 p-3"><Trash /></button>
          </div>
          <div className="flex items-start bg-[#141d2a] shadow-md p-4 space-x-4">
            <img src="/assets/images/user/5.jpg" alt="" className="w-16 h-16 rounded-full" />

            <div className="flex-grow">
              <h3 className="text-lg font-semibold text-[#3bedb2] text-capitalize">Abbas Abidi</h3>
              <p className="text-sm text-gray-300 mb-2">uid3@infoicon.in</p>
              <p className="text-xs text-gray-400">12-05-2025</p>

              <div className="mt-2 text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam similique inventore tempore nisi ullam ea sit ut accusamus! Error quibusdam illum libero tempora deleniti velit earum numquam, culpa doloremque debitis!</div>
            </div>

            <button className="rounded-full bg-emerald-600 text-white antialiased font-bold hover:bg-emerald-700 p-3"><Trash /></button>
          </div>
          <div className="flex items-start bg-[#141d2a] shadow-md p-4 space-x-4">
            <img src="/assets/images/user/5.jpg" alt="" className="w-16 h-16 rounded-full" />

            <div className="flex-grow">
              <h3 className="text-lg font-semibold text-[#3bedb2] text-capitalize">Abbas Abidi</h3>
              <p className="text-sm text-gray-300 mb-2">uid3@infoicon.in</p>
              <p className="text-xs text-gray-400">12-05-2025</p>

              <div className="mt-2 text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam similique inventore tempore nisi ullam ea sit ut accusamus! Error quibusdam illum libero tempora deleniti velit earum numquam, culpa doloremque debitis!</div>
            </div>

            <button className="rounded-full bg-emerald-600 text-white antialiased font-bold hover:bg-emerald-700 p-3"><Trash /></button>
          </div>
          <div className="flex items-start bg-[#141d2a] shadow-md p-4 space-x-4">
            <img src="/assets/images/user/5.jpg" alt="" className="w-16 h-16 rounded-full" />

            <div className="flex-grow">
              <h3 className="text-lg font-semibold text-[#3bedb2] text-capitalize">Abbas Abidi</h3>
              <p className="text-sm text-gray-300 mb-2">uid3@infoicon.in</p>
              <p className="text-xs text-gray-400">12-05-2025</p>

              <div className="mt-2 text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam similique inventore tempore nisi ullam ea sit ut accusamus! Error quibusdam illum libero tempora deleniti velit earum numquam, culpa doloremque debitis!</div>
            </div>

            <button className="rounded-full bg-emerald-600 text-white antialiased font-bold hover:bg-emerald-700 p-3"><Trash /></button>
          </div>
          <div className="flex items-start bg-[#141d2a] shadow-md p-4 space-x-4">
            <img src="/assets/images/user/5.jpg" alt="" className="w-16 h-16 rounded-full" />

            <div className="flex-grow">
              <h3 className="text-lg font-semibold text-[#3bedb2] text-capitalize">Abbas Abidi</h3>
              <p className="text-sm text-gray-300 mb-2">uid3@infoicon.in</p>
              <p className="text-xs text-gray-400">12-05-2025</p>

              <div className="mt-2 text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam similique inventore tempore nisi ullam ea sit ut accusamus! Error quibusdam illum libero tempora deleniti velit earum numquam, culpa doloremque debitis!</div>
            </div>

            <button className="rounded-full bg-emerald-600 text-white antialiased font-bold hover:bg-emerald-700 p-3"><Trash /></button>
          </div>
          <div className="flex items-start bg-[#141d2a] shadow-md p-4 space-x-4">
            <img src="/assets/images/user/5.jpg" alt="" className="w-16 h-16 rounded-full" />

            <div className="flex-grow">
              <h3 className="text-lg font-semibold text-[#3bedb2] text-capitalize">Abbas Abidi</h3>
              <p className="text-sm text-gray-300 mb-2">uid3@infoicon.in</p>
              <p className="text-xs text-gray-400">12-05-2025</p>

              <div className="mt-2 text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam similique inventore tempore nisi ullam ea sit ut accusamus! Error quibusdam illum libero tempora deleniti velit earum numquam, culpa doloremque debitis!</div>
            </div>

            <button className="rounded-full bg-emerald-600 text-white antialiased font-bold hover:bg-emerald-700 p-3"><Trash /></button>
          </div>

          <div className="flex justify-between items-center my-5">
            <div className="flex items-center gap-3 justify-start">
              <p className='mb-0'>Total <strong>20</strong> Page</p>
            </div>

            <div className="text-center">
              <div className="flex items-center gap-8 justify-center my-5">
                <button className="btn-arrow">
                  <div className="icon-arrow"><ArrowRepeat className="iconsax" /></div> Load More
                </button>
              </div>
            </div>

            <div className="flex items-center gap-3 justify-end">
              <select className='form-select block !rounded-none border-gray-300 shadow-sm  sm:text-sm w-auto'>
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="15">15</option>
                <option value="20">20</option>
                <option value="25">25</option>
                <option value="50">50</option>
                <option value="100">100</option>
              </select>
              <p className='mb-0'>Page 1 of <strong>20</strong></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Notification