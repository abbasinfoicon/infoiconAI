import React from 'react'
import Link from 'next/link'
import { ArrowDownRight, ArrowUpRight, Calendar3, CurrencyDollar, Envelope, People, PersonAdd, PersonPlus } from 'react-bootstrap-icons'
import { BarChart, DoughnutChart, PieChart } from '@/components/admin/AllChart'
import BreadCrumb from '@/components/admin/BreadCrumb'

const Dashboard = () => {
    return (
        <div className='dashboard-pg'>
            <div className="mb-8 grid grid-cols-1 col-span-2 gap-6">
                <div className="relative flex flex-col bg-clip-border bg-[#141d2a] text-gray-700 shadow-md overflow-hidden xl:col-span-2 p-4">
                    <div className="flex flex-col-reverse justify-between gap-6 md:flex-row md:items-center">
                        <div className="capitalize">
                            <BreadCrumb title="Home" />
                        </div>

                        <div className="flex items-center justify-end text-right w-full place-items-center flex-col gap-4 sm:flex-row">
                            <Link href='/' className="middle center flex max-[640px]:w-full items-center gap-2 custom_btn py-2 px-6 font-sans text-xs font-bold uppercase shadow-md shadow-green-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                                <Calendar3 className="text-xl" /> Add Plan
                            </Link>

                            <Link href='/' className="middle center flex max-[640px]:w-full items-center gap-2 custom_btn py-2 px-6 font-sans text-xs font-bold uppercase shadow-md shadow-green-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                                <PersonPlus className="text-xl" /> Add User
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6  text-[#3bedb2] mb-4">
                {/* New Followers Card */}
                <div className="p-6 bg-[#141d2a] rounded-none shadow-md flex flex-col gap-2">
                    <div className="flex items-center gap-3">
                        <div className="p-3 bg-[#3bedb2] rounded-full">
                            <PersonAdd className="text-[#141d2a] text-2xl" />
                        </div>
                        <h3 className="text-lg font-semibold mb-0">New Followers</h3>
                    </div>
                    <p className="text-3xl font-bold text-white">4.5M</p>
                    <p className="text-sm flex items-center gap-1 text-white">
                        <ArrowUpRight className="w-4 h-4" /> 25% vs Last Month
                    </p>
                </div>

                {/* Total Visitors Card */}
                <div className="p-6 bg-[#141d2a] rounded-none shadow-md flex flex-col gap-2">
                    <div className="flex items-center gap-3">
                        <div className="p-3 bg-[#3bedb2] rounded-full">
                            <People className="text-[#141d2a] text-2xl" />
                        </div>
                        <h3 className="text-lg font-semibold mb-0">Total Visitors</h3>
                    </div>
                    <p className="text-3xl font-bold text-white">6.25M</p>
                    <p className="text-sm flex items-center gap-1 text-white">
                        <ArrowUpRight className="w-4 h-4" /> 76% vs Last Month
                    </p>
                </div>

                {/* Chat Card */}
                <div className="p-6 bg-[#141d2a] rounded-none shadow-md flex flex-col gap-2">
                    <div className="flex items-center gap-3">
                        <div className="p-3 bg-[#3bedb2] rounded-full">
                            <Envelope className="text-[#141d2a] text-2xl" />
                        </div>
                        <h3 className="text-lg font-semibold mb-0">Chat</h3>
                    </div>
                    <p className="text-3xl font-bold text-white">2M</p>
                    <p className="text-sm flex items-center gap-1 text-white">
                        <ArrowDownRight className="w-4 h-4" /> 25% vs Last Month
                    </p>
                </div>

                {/* Payment Card */}
                <div className="p-6 bg-[#141d2a] rounded-none shadow-md flex flex-col gap-2">
                    <div className="flex items-center gap-3">
                        <div className="p-3 bg-[#3bedb2] rounded-full">
                            <CurrencyDollar className="text-[#141d2a] text-2xl" />
                        </div>
                        <h3 className="text-lg font-semibold mb-0">Payment</h3>
                    </div>
                    <p className="text-3xl font-bold text-white">25K</p>
                    <p className="text-sm flex items-center gap-1 text-white">
                        <ArrowUpRight className="w-4 h-4" /> 25% vs Last Month
                    </p>
                </div>
            </div>

            <div className="row">
                <div className="col-md-3">
                    <div className="shadow-md bg-[#141d2a] p-3">
                        <div className="relative bg-clip-border rounded-xl overflow-hidden bg-transparent text-gray-700 shadow-none m-0 flex items-center justify-between p-6">
                            <div>
                                <h6 className="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-[#3bedb2] mb-1">All Sales History</h6>
                            </div>
                        </div>

                        <PieChart />
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="shadow-md bg-[#141d2a] p-3">
                        <div className="relative bg-clip-border rounded-xl overflow-hidden bg-transparent text-gray-700 shadow-none m-0 flex items-center justify-between p-6">
                            <div>
                                <h6 className="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-[#3bedb2] mb-1">Monthly Sales History</h6>
                            </div>
                        </div>

                        <BarChart />
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="shadow-md bg-[#141d2a] p-3">
                        <div className="relative bg-clip-border rounded-xl overflow-hidden bg-transparent text-gray-700 shadow-none m-0 flex items-center justify-between p-6">
                            <div>
                                <h6 className="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-[#3bedb2] mb-1">Projects By Stage</h6>
                            </div>
                        </div>

                        <DoughnutChart />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard