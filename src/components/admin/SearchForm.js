'use client';
import React from 'react'
import { Search } from 'react-bootstrap-icons'

const SearchForm = ({ searchQuery, setSearchQuery }) => {
    return (
        <div className="relative">
            <form action="" className="relative">
                <input value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="w-full border border-gray-300 rounded-none h-[36px] min-h-[36px] px-3 pr-10 focus:outline-none focus:none text-sm text-black" placeholder="Search here..." type="text" />
                <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
            </form>
        </div>
    )
}

export default SearchForm