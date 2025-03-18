import BreadCrumb from '@/components/admin/BreadCrumb'
import SearchForm from '@/components/admin/SearchForm'
import React from 'react'
import { ArrowRepeat, CalendarCheck, ClockHistory } from 'react-bootstrap-icons'

const History = () => {
  return (
    <div className='history-pg'>
      <div className="mb-8 grid grid-cols-1 col-span-2 gap-6">
        <div className="relative flex flex-col bg-clip-border bg-[#141d2a] text-gray-700 shadow-md overflow-hidden xl:col-span-2 p-4">
          <div className="flex flex-col-reverse justify-between gap-6 md:flex-row md:items-center">
            <div className="capitalize">
              <BreadCrumb title="History" />
            </div>

            <div className="flex items-center justify-end text-right w-full place-items-center flex-col gap-4 sm:flex-row">
              <SearchForm searchQuery={""} setSearchQuery={"setSearchQuery"} />

              <button className="middle center flex max-[640px]:w-full items-center gap-2 custom_btn py-2 px-6 font-sans text-xs font-bold uppercase shadow-md shadow-green-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                <ClockHistory className="text-xl" /> Download
              </button>
            </div>
          </div>
        </div>
      </div>


      <div className="mt-8 mb-12">
        <div className="rounded-none bg-[#141d2a] shadow-md py-6 px-5 md:py-10 md:px-20">

          <ol className="relative logs-list">
            <li className="pb-10 ps-6 md:ps-10 border-s border-gray-700 ml-3">
              <span className="absolute flex items-center justify-center w-12 h-12 bg-[#3bedb2] rounded-full -left-6 ring-8 ring-[#199f73]">
                <CalendarCheck className='w-5 h-5 text-[#141d2a]' />
              </span>

              <h3 className="flex items-center mb-1 text-lg font-semibold text-[#3bedb2] justify-between">Login <span className="bg-[#3bedb2] text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 ms-3">12-05-2025</span></h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400">Performed on 13-04-2025</time>

              <div className="mb-4 text-base font-normal text-gray-500">
                <div><strong className="text-white">By:</strong> <span>Abbas <small>(Admin)</small> | uid3@infoicon.in</span></div>
              </div>

              <div className="mb-4 text-base font-normal text-gray-500">
                <div>
                  <strong className='text-white'>Status:</strong> <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam doloribus consectetur minima blanditiis natus nemo molestias soluta aliquam veniam aut doloremque quisquam voluptatem vitae voluptate adipisci, earum quis, possimus quasi. </span>
                </div>
              </div>
            </li>
            <li className="pb-10 ps-6 md:ps-10 border-s border-gray-700 ml-3">
              <span className="absolute flex items-center justify-center w-12 h-12 bg-[#3bedb2] rounded-full -left-6 ring-8 ring-[#199f73]">
                <CalendarCheck className='w-5 h-5 text-[#141d2a]' />
              </span>

              <h3 className="flex items-center mb-1 text-lg font-semibold text-[#3bedb2] justify-between">Login <span className="bg-[#3bedb2] text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 ms-3">12-05-2025</span></h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400">Performed on 13-04-2025</time>

              <div className="mb-4 text-base font-normal text-gray-500">
                <div><strong className="text-white">By:</strong> <span>Abbas <small>(Admin)</small> | uid3@infoicon.in</span></div>
              </div>

              <div className="mb-4 text-base font-normal text-gray-500">
                <div>
                  <strong className='text-white'>Status:</strong> <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam doloribus consectetur minima blanditiis natus nemo molestias soluta aliquam veniam aut doloremque quisquam voluptatem vitae voluptate adipisci, earum quis, possimus quasi. </span>
                </div>
              </div>
            </li>
            <li className="pb-10 ps-6 md:ps-10 border-s border-gray-700 ml-3">
              <span className="absolute flex items-center justify-center w-12 h-12 bg-[#3bedb2] rounded-full -left-6 ring-8 ring-[#199f73]">
                <CalendarCheck className='w-5 h-5 text-[#141d2a]' />
              </span>

              <h3 className="flex items-center mb-1 text-lg font-semibold text-[#3bedb2] justify-between">Login <span className="bg-[#3bedb2] text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 ms-3">12-05-2025</span></h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400">Performed on 13-04-2025</time>

              <div className="mb-4 text-base font-normal text-gray-500">
                <div><strong className="text-white">By:</strong> <span>Abbas <small>(Admin)</small> | uid3@infoicon.in</span></div>
              </div>

              <div className="mb-4 text-base font-normal text-gray-500">
                <div>
                  <strong className='text-white'>Status:</strong> <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam doloribus consectetur minima blanditiis natus nemo molestias soluta aliquam veniam aut doloremque quisquam voluptatem vitae voluptate adipisci, earum quis, possimus quasi. </span>
                </div>
              </div>
            </li>
            <li className="pb-10 ps-6 md:ps-10 border-s border-gray-700 ml-3">
              <span className="absolute flex items-center justify-center w-12 h-12 bg-[#3bedb2] rounded-full -left-6 ring-8 ring-[#199f73]">
                <CalendarCheck className='w-5 h-5 text-[#141d2a]' />
              </span>

              <h3 className="flex items-center mb-1 text-lg font-semibold text-[#3bedb2] justify-between">Login <span className="bg-[#3bedb2] text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 ms-3">12-05-2025</span></h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400">Performed on 13-04-2025</time>

              <div className="mb-4 text-base font-normal text-gray-500">
                <div><strong className="text-white">By:</strong> <span>Abbas <small>(Admin)</small> | uid3@infoicon.in</span></div>
              </div>

              <div className="mb-4 text-base font-normal text-gray-500">
                <div>
                  <strong className='text-white'>Status:</strong> <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam doloribus consectetur minima blanditiis natus nemo molestias soluta aliquam veniam aut doloremque quisquam voluptatem vitae voluptate adipisci, earum quis, possimus quasi. </span>
                </div>
              </div>
            </li>
            <li className="pb-10 ps-6 md:ps-10 border-s border-gray-700 ml-3">
              <span className="absolute flex items-center justify-center w-12 h-12 bg-[#3bedb2] rounded-full -left-6 ring-8 ring-[#199f73]">
                <CalendarCheck className='w-5 h-5 text-[#141d2a]' />
              </span>

              <h3 className="flex items-center mb-1 text-lg font-semibold text-[#3bedb2] justify-between">Login <span className="bg-[#3bedb2] text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 ms-3">12-05-2025</span></h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400">Performed on 13-04-2025</time>

              <div className="mb-4 text-base font-normal text-gray-500">
                <div><strong className="text-white">By:</strong> <span>Abbas <small>(Admin)</small> | uid3@infoicon.in</span></div>
              </div>

              <div className="mb-4 text-base font-normal text-gray-500">
                <div>
                  <strong className='text-white'>Status:</strong> <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam doloribus consectetur minima blanditiis natus nemo molestias soluta aliquam veniam aut doloremque quisquam voluptatem vitae voluptate adipisci, earum quis, possimus quasi. </span>
                </div>
              </div>
            </li>
            <li className="pb-10 ps-6 md:ps-10 border-s border-gray-700 ml-3">
              <span className="absolute flex items-center justify-center w-12 h-12 bg-[#3bedb2] rounded-full -left-6 ring-8 ring-[#199f73]">
                <CalendarCheck className='w-5 h-5 text-[#141d2a]' />
              </span>

              <h3 className="flex items-center mb-1 text-lg font-semibold text-[#3bedb2] justify-between">Login <span className="bg-[#3bedb2] text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 ms-3">12-05-2025</span></h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400">Performed on 13-04-2025</time>

              <div className="mb-4 text-base font-normal text-gray-500">
                <div><strong className="text-white">By:</strong> <span>Abbas <small>(Admin)</small> | uid3@infoicon.in</span></div>
              </div>

              <div className="mb-4 text-base font-normal text-gray-500">
                <div>
                  <strong className='text-white'>Status:</strong> <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam doloribus consectetur minima blanditiis natus nemo molestias soluta aliquam veniam aut doloremque quisquam voluptatem vitae voluptate adipisci, earum quis, possimus quasi. </span>
                </div>
              </div>
            </li>
            <li className="pb-10 ps-6 md:ps-10 border-s border-gray-700 ml-3">
              <span className="absolute flex items-center justify-center w-12 h-12 bg-[#3bedb2] rounded-full -left-6 ring-8 ring-[#199f73]">
                <CalendarCheck className='w-5 h-5 text-[#141d2a]' />
              </span>

              <h3 className="flex items-center mb-1 text-lg font-semibold text-[#3bedb2] justify-between">Login <span className="bg-[#3bedb2] text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 ms-3">12-05-2025</span></h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400">Performed on 13-04-2025</time>

              <div className="mb-4 text-base font-normal text-gray-500">
                <div><strong className="text-white">By:</strong> <span>Abbas <small>(Admin)</small> | uid3@infoicon.in</span></div>
              </div>

              <div className="mb-4 text-base font-normal text-gray-500">
                <div>
                  <strong className='text-white'>Status:</strong> <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam doloribus consectetur minima blanditiis natus nemo molestias soluta aliquam veniam aut doloremque quisquam voluptatem vitae voluptate adipisci, earum quis, possimus quasi. </span>
                </div>
              </div>
            </li>
            <li className="pb-10 ps-6 md:ps-10 border-s border-gray-700 ml-3">
              <span className="absolute flex items-center justify-center w-12 h-12 bg-[#3bedb2] rounded-full -left-6 ring-8 ring-[#199f73]">
                <CalendarCheck className='w-5 h-5 text-[#141d2a]' />
              </span>

              <h3 className="flex items-center mb-1 text-lg font-semibold text-[#3bedb2] justify-between">Login <span className="bg-[#3bedb2] text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 ms-3">12-05-2025</span></h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400">Performed on 13-04-2025</time>

              <div className="mb-4 text-base font-normal text-gray-500">
                <div><strong className="text-white">By:</strong> <span>Abbas <small>(Admin)</small> | uid3@infoicon.in</span></div>
              </div>

              <div className="mb-4 text-base font-normal text-gray-500">
                <div>
                  <strong className='text-white'>Status:</strong> <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam doloribus consectetur minima blanditiis natus nemo molestias soluta aliquam veniam aut doloremque quisquam voluptatem vitae voluptate adipisci, earum quis, possimus quasi. </span>
                </div>
              </div>
            </li>
            <li className="pb-10 ps-6 md:ps-10 border-s border-gray-700 ml-3">
              <span className="absolute flex items-center justify-center w-12 h-12 bg-[#3bedb2] rounded-full -left-6 ring-8 ring-[#199f73]">
                <CalendarCheck className='w-5 h-5 text-[#141d2a]' />
              </span>

              <h3 className="flex items-center mb-1 text-lg font-semibold text-[#3bedb2] justify-between">Login <span className="bg-[#3bedb2] text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 ms-3">12-05-2025</span></h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400">Performed on 13-04-2025</time>

              <div className="mb-4 text-base font-normal text-gray-500">
                <div><strong className="text-white">By:</strong> <span>Abbas <small>(Admin)</small> | uid3@infoicon.in</span></div>
              </div>

              <div className="mb-4 text-base font-normal text-gray-500">
                <div>
                  <strong className='text-white'>Status:</strong> <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam doloribus consectetur minima blanditiis natus nemo molestias soluta aliquam veniam aut doloremque quisquam voluptatem vitae voluptate adipisci, earum quis, possimus quasi. </span>
                </div>
              </div>
            </li>
            <li className="pb-10 ps-6 md:ps-10 border-s border-gray-700 ml-3">
              <span className="absolute flex items-center justify-center w-12 h-12 bg-[#3bedb2] rounded-full -left-6 ring-8 ring-[#199f73]">
                <CalendarCheck className='w-5 h-5 text-[#141d2a]' />
              </span>

              <h3 className="flex items-center mb-1 text-lg font-semibold text-[#3bedb2] justify-between">Login <span className="bg-[#3bedb2] text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 ms-3">12-05-2025</span></h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400">Performed on 13-04-2025</time>

              <div className="mb-4 text-base font-normal text-gray-500">
                <div><strong className="text-white">By:</strong> <span>Abbas <small>(Admin)</small> | uid3@infoicon.in</span></div>
              </div>

              <div className="mb-4 text-base font-normal text-gray-500">
                <div>
                  <strong className='text-white'>Status:</strong> <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam doloribus consectetur minima blanditiis natus nemo molestias soluta aliquam veniam aut doloremque quisquam voluptatem vitae voluptate adipisci, earum quis, possimus quasi. </span>
                </div>
              </div>
            </li>

            <div className="col-md-12">
              <div className="flex items-center gap-8 justify-center my-5">
                <button className="btn-arrow">
                  <div className="icon-arrow"><ArrowRepeat className="iconsax" /></div> Load More
                </button>
              </div>
            </div>
          </ol>

        </div>
      </div>
    </div>
  )
}

export default History