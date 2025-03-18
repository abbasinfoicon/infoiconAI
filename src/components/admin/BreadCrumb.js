import Link from 'next/link'
import React from 'react'
import { HouseFill } from 'react-bootstrap-icons'

const BreadCrumb = ({ title, parent, grandparent }) => {
    return (
        <nav aria-label="breadcrumb" className="w-max">
            <ol className="flex flex-wrap items-center w-full bg-opacity-60 rounded-md bg-transparent p-0 transition-all mb-0">
                <li className="flex items-center text-emerald-gray-900 antialiased font-sans text-sm font-normal leading-normal cursor-pointer transition-colors duration-300 hover:text-light-emerald-500">
                    <Link href="/dashboard"><p className="flex items-center gap-1 antialiased font-sans text-sm leading-normal text-emerald-gray-900 font-normal opacity-50 transition-all hover:text-emerald-500 hover:opacity-100 mb-0"><HouseFill /> Dashboard</p></Link>
                    {title && <span className="text-emerald-gray-500 text-sm antialiased font-sans font-normal leading-normal mx-2 pointer-events-none select-none">/</span>}
                </li>
                {
                    grandparent ?
                        <>
                            <li className="flex items-center text-emerald-gray-900 antialiased font-sans text-sm font-normal leading-normal cursor-pointer transition-colors duration-300 hover:text-light-emerald-500">
                                <Link href={`/dashboard/${grandparent}`}><p className="flex items-center gap-1 antialiased font-sans text-sm leading-normal text-emerald-gray-900 font-normal opacity-50 transition-all hover:text-emerald-500 hover:opacity-100 mb-0 capitalize"> {grandparent}</p></Link>
                                <span className="text-emerald-gray-500 text-sm antialiased font-sans font-normal leading-normal mx-2 pointer-events-none select-none">/</span>
                            </li>
                            <li className="flex items-center text-emerald-gray-900 antialiased font-sans text-sm font-normal leading-normal cursor-pointer transition-colors duration-300 hover:text-light-emerald-500">
                                <Link href={`/dashboard/${grandparent}/${parent}`}><p className="flex items-center gap-1 antialiased font-sans text-sm leading-normal text-emerald-gray-900 font-normal opacity-50 transition-all hover:text-emerald-500 hover:opacity-100 mb-0 capitalize"> {parent}</p></Link>
                                <span className="text-emerald-gray-500 text-sm antialiased font-sans font-normal leading-normal mx-2 pointer-events-none select-none">/</span>
                            </li>
                        </>
                        : parent && <li className="flex items-center text-emerald-gray-900 antialiased font-sans text-sm font-normal leading-normal cursor-pointer transition-colors duration-300 hover:text-light-emerald-500">
                            <Link href={`/dashboard/${parent}`}><p className="flex items-center gap-1 antialiased font-sans text-sm leading-normal text-emerald-gray-900 font-normal opacity-50 transition-all hover:text-emerald-500 hover:opacity-100 mb-0 capitalize"> {parent}</p></Link>
                            <span className="text-emerald-gray-500 text-sm antialiased font-sans font-normal leading-normal mx-2 pointer-events-none select-none">/</span>
                        </li>
                }
                {
                    title && <li className="flex items-center text-emerald-gray-900 antialiased font-sans text-sm font-normal leading-normal cursor-pointer transition-colors duration-300 hover:text-light-emerald-500">
                        <p className="block antialiased font-sans text-sm leading-normal text-emerald-gray-900 font-normal mb-0">{title}</p>
                    </li>
                }
            </ol>
        </nav>
    )
}

export default BreadCrumb