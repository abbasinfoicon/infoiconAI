import BreadCrumb from '@/components/admin/BreadCrumb'
import SearchForm from '@/components/admin/SearchForm'
import React from 'react'
import { ChevronLeft, ChevronRight, CurrencyDollar, Download, Search } from 'react-bootstrap-icons'

const Payment = () => {
  return (
    <div className='payment-pg'>
      <div className="mb-8 grid grid-cols-1 col-span-2 gap-6">
        <div className="relative flex flex-col bg-clip-border bg-[#141d2a] text-gray-700 shadow-md overflow-hidden xl:col-span-2 p-4">
          <div className="flex flex-col-reverse justify-between gap-6 md:flex-row md:items-center">
            <div className="capitalize">
              <BreadCrumb title="Payment" />
            </div>

            <div className="flex items-center justify-end text-right w-full place-items-center flex-col gap-4 sm:flex-row">
              <SearchForm searchQuery={""} setSearchQuery={"setSearchQuery"} />

              <button className="middle center flex max-[640px]:w-full items-center gap-2 custom_btn py-2 px-6 font-sans text-xs font-bold uppercase shadow-md shadow-emerald-500/20 transition-all hover:shadow-lg hover:shadow-emerald-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                <CurrencyDollar className="text-xl" /> Download
              </button>
            </div>
          </div>
        </div>
      </div>


      <div className="2xl:col-span-4 sm:col-span-2 bg-[#141d2a] border-none p-4">
        <div className="flex flex-col">
          <div className="relative p-6 bg-gradient-to-br from-emerald-500 to-emerald-700 text-white rounded-lg shadow-lg transition-transform duration-300 ease-in-out mb-6">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-[#141d2a] rounded-full"><CurrencyDollar /></div>
                <div className="flex flex-col">
                  <h3 className="font-bold">Payment</h3>
                  <span>Total Count : 14</span>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm uppercase font-bold tracking-wider text-[#141d2a]">Total Payment</p>
                <h2 className="text-3xl font-extrabold">€ 868</h2>
              </div>
            </div>
          </div>


          <div className="flex flex-col">
            <div className="overflow-x-auto">
              <table className="table-fixed min-w-full divide-y divide-gray-200 dark:divide-gray-600">
                <thead className="bg-gray-50 dark:bg-gray-700">
                  <tr className="text-gray-800 dark:text-gray-300">
                    <th className="p-3.5 text-sm text-start font-semibold">Payment Id</th>
                    <th className="p-3.5 text-sm text-start font-semibold">Subscription</th>
                    <th className="p-3.5 text-sm text-start font-semibold">Buyer</th>
                    <th className="p-3.5 text-sm text-start font-semibold">Purchase Date</th>
                    <th className="p-3.5 text-sm text-start font-semibold">Price</th>
                    <th className="p-3.5 text-sm text-start font-semibold">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-600">
                  <tr>
                    <td className="p-3.5 text-sm text-gray-900 dark:text-gray-400">1741006965713</td>
                    <td className="p-3.5 text-sm text-gray-700 dark:text-gray-400">Est sint placeat hi</td>
                    <td className="p-3.5 text-sm text-gray-700 dark:text-gray-400">
                      <div className="flex gap-2 items-center">
                        <div className="w-[42px] h-[42px] rounded-full border"><img src="/assets/images/user/5.jpg" alt="" className="h-full object-cover" /></div>
                        <div>Sanjay kaumr <span className="text-xs block">(Role: subscriber)</span></div>
                      </div>
                    </td>
                    <td className="p-3.5 text-sm text-gray-700 dark:text-gray-400">3 March 2025</td>
                    <td className="p-3.5 text-base font-bold text-gray-700 dark:text-gray-400">€ 2</td>
                    <td className="p-3.5 text-sm text-[#3bedb2] font-bold">completed</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 text-sm text-gray-900 dark:text-gray-400">1740996559912</td>
                    <td className="p-3.5 text-sm text-gray-700 dark:text-gray-400">testing 3/03/2025</td>
                    <td className="p-3.5 text-sm text-gray-700 dark:text-gray-400">
                      <div className="flex gap-2 items-center">
                        <div className="w-[42px] h-[42px] rounded-full border"><img src="/assets/images/user/5.jpg" alt="" className="h-full object-cover" /></div>
                        <div>Sanjay kaumr <span className="text-xs block">(Role: subscriber)</span></div>
                      </div>
                    </td>
                    <td className="p-3.5 text-sm text-gray-700 dark:text-gray-400">3 March 2025</td>
                    <td className="p-3.5 text-base font-bold text-gray-700 dark:text-gray-400">€ 200</td>
                    <td className="p-3.5 text-sm text-[#3bedb2] font-bold">completed</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 text-sm text-gray-900 dark:text-gray-400">1740994058099</td>
                    <td className="p-3.5 text-sm text-gray-700 dark:text-gray-400">testing 3/03/2025</td>
                    <td className="p-3.5 text-sm text-gray-700 dark:text-gray-400">
                      <div className="flex gap-2 items-center">
                        <div className="w-[42px] h-[42px] rounded-full border"><img src="/assets/images/user/5.jpg" alt="" className="h-full object-cover" /></div>
                        <div>Sanjay kaumr <span className="text-xs block">(Role: subscriber)</span></div>
                      </div>
                    </td>
                    <td className="p-3.5 text-sm text-gray-700 dark:text-gray-400">3 March 2025</td>
                    <td className="p-3.5 text-base font-bold text-gray-700 dark:text-gray-400">€ 200</td>
                    <td className="p-3.5 text-sm text-[#3bedb2] font-bold">completed</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 text-sm text-gray-900 dark:text-gray-400">1737097774807</td>
                    <td className="p-3.5 text-sm text-gray-700 dark:text-gray-400">testing by sanjay</td>
                    <td className="p-3.5 text-sm text-gray-700 dark:text-gray-400">
                      <div className="flex gap-2 items-center">
                        <div className="w-[42px] h-[42px] rounded-full border"><img src="/assets/images/user/5.jpg" alt="" className="h-full object-cover" /></div>
                        <div>Sanjay kaumr <span className="text-xs block">(Role: subscriber)</span></div>
                      </div>
                    </td>
                    <td className="p-3.5 text-sm text-gray-700 dark:text-gray-400">17 January 2025</td>
                    <td className="p-3.5 text-base font-bold text-gray-700 dark:text-gray-400">€ 123</td>
                    <td className="p-3.5 text-sm text-[#3bedb2] font-bold">completed</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 text-sm text-gray-900 dark:text-gray-400">1737097188469</td>
                    <td className="p-3.5 text-sm text-gray-700 dark:text-gray-400">testing by sanjay</td>
                    <td className="p-3.5 text-sm text-gray-700 dark:text-gray-400">
                      <div className="flex gap-2 items-center">
                        <div className="w-[42px] h-[42px] rounded-full border"><img src="/assets/images/user/5.jpg" alt="" className="h-full object-cover" /></div>
                        <div>Sanjay kaumr <span className="text-xs block">(Role: subscriber)</span></div>
                      </div>
                    </td>
                    <td className="p-3.5 text-sm text-gray-700 dark:text-gray-400">17 January 2025</td>
                    <td className="p-3.5 text-base font-bold text-gray-700 dark:text-gray-400">€ 123</td>
                    <td className="p-3.5 text-sm text-[#3bedb2] font-bold">completed</td>
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

              <div className="d-none none hidden flex justify-center space-x-2 mt-6">
                <button disabled="" className="px-3 py-1 text-sm font-normal text-white bg-gray-600 hover:bg-gray-800 disabled:opacity-50">Previous</button>

                <button className="px-3 py-1 text-sm font-semibold bg-[#3bedb2] text-gray-600">1</button>
                <button className="px-3 py-1 text-sm font-semibold bg-gray-600 text-white hover:bg-gray-800">2</button>
                <button className="px-3 py-1 text-sm font-semibold bg-gray-600 text-white hover:bg-gray-800">3</button>

                <button className="px-3 py-1 text-sm font-normal text-white bg-gray-600 hover:bg-gray-800 disabled:opacity-50">Next</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Payment