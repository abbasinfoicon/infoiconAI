import { BarChart, DoughnutChart, LineArea, LineChart, PieChart } from '@/components/admin/AllChart'
import BreadCrumb from '@/components/admin/BreadCrumb'
import SearchForm from '@/components/admin/SearchForm'
import React from 'react'
import { GraphUpArrow } from 'react-bootstrap-icons'

const Analytics = () => {
  return (
    <div className='analytics-pg'>
      <div className="mb-8 grid grid-cols-1 col-span-2 gap-6">
        <div className="relative flex flex-col bg-clip-border bg-[#141d2a] text-gray-700 shadow-md overflow-hidden xl:col-span-2 p-4">
          <div className="flex flex-col-reverse justify-between gap-6 md:flex-row md:items-center">
            <div className="capitalize">
              <BreadCrumb title="Analytics" />
            </div>

            <div className="flex items-center justify-end text-right w-full place-items-center flex-col gap-4 sm:flex-row">
              <SearchForm searchQuery={""} setSearchQuery={"setSearchQuery"} />

              <button className="middle center flex max-[640px]:w-full items-center gap-2 custom_btn py-2 px-6 font-sans text-xs font-bold uppercase shadow-md shadow-green-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                <GraphUpArrow className="text-xl" /> Download
              </button>
            </div>
          </div>
        </div>
      </div>


      <div className="row">
        <div className="col-md-3 mb-3">
          <div className="shadow-md bg-[#141d2a] p-3">
            <div className="relative bg-clip-border rounded-xl overflow-hidden bg-transparent text-gray-700 shadow-none m-0 flex items-center justify-between p-6">
              <div>
                <h6 className="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-[#3bedb2] mb-1">All Sales History</h6>
              </div>
            </div>

            <PieChart />
          </div>
        </div>

        <div className="col-md-6 mb-3">
          <div className="shadow-md bg-[#141d2a] p-3">
            <div className="relative bg-clip-border rounded-xl overflow-hidden bg-transparent text-gray-700 shadow-none m-0 flex items-center justify-between p-6">
              <div>
                <h6 className="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-[#3bedb2] mb-1">Monthly Sales History</h6>
              </div>
            </div>

            <BarChart />
          </div>
        </div>

        <div className="col-md-3 mb-3">
          <div className="shadow-md bg-[#141d2a] p-3">
            <div className="relative bg-clip-border rounded-xl overflow-hidden bg-transparent text-gray-700 shadow-none m-0 flex items-center justify-between p-6">
              <div>
                <h6 className="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-[#3bedb2] mb-1">Projects By Stage</h6>
              </div>
            </div>

            <DoughnutChart />
          </div>
        </div>

        <div className="col-md-6 mb-3">
          <div className="shadow-md bg-[#141d2a] p-3">
            <div className="relative bg-clip-border rounded-xl overflow-hidden bg-transparent text-gray-700 shadow-none m-0 flex items-center justify-between p-6">
              <div>
                <h6 className="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-[#3bedb2] mb-1">Projects By Stage</h6>
              </div>
            </div>

            <LineChart />
          </div>
        </div>

        <div className="col-md-6 mb-3">
          <div className="shadow-md bg-[#141d2a] p-3">
            <div className="relative bg-clip-border rounded-xl overflow-hidden bg-transparent text-gray-700 shadow-none m-0 flex items-center justify-between p-6">
              <div>
                <h6 className="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-[#3bedb2] mb-1">Projects By Stage</h6>
              </div>
            </div>

            <LineArea />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Analytics