'use client'
import BreadCrumb from '@/components/admin/BreadCrumb'
import DeleteModal from '@/components/admin/DeleteModal'
import FetchData from '@/components/FetchApi'
import SearchForm from '@/components/admin/SearchForm'
import Link from 'next/link'
import React, { useState } from 'react'
import { ArrowClockwise, ArrowRepeat, Check2All, Eye, PencilSquare, StarFill, Stars, Trash } from 'react-bootstrap-icons'
import { toast } from 'react-toastify'

const Rating = () => {
  const [show, setShow] = useState(false);
  const [itemIdToDelete, setItemIdToDelete] = useState(null);
  
  const [openView, setOpenView] = useState(false);

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

  const onOpenView = (itemId) => {
    setOpenView(!openView);
  };

  return (
    <div className='rating-pg'>
      <div className="mb-8 grid grid-cols-1 col-span-2 gap-6">
        <div className="relative flex flex-col bg-clip-border bg-[#141d2a] text-gray-700 shadow-md overflow-hidden xl:col-span-2 p-4">
          <div className="flex flex-col-reverse justify-between gap-6 md:flex-row md:items-center">
            <div className="capitalize">
              <BreadCrumb title="Rating" />
            </div>

            <div className="flex items-center justify-end text-right w-full place-items-center flex-col gap-4 sm:flex-row">
              <SearchForm searchQuery={""} setSearchQuery={"setSearchQuery"} />

              <Link href='/dashboard/rating/edit/1' className="middle center flex max-[640px]:w-full items-center gap-2 custom_btn py-2 px-6 font-sans text-xs font-bold uppercase shadow-md shadow-green-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                <Stars className="text-xl" /> Edit Rating
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-6">
        <div className="flex justify-between items-center bg-[#141d2a] shadow-md p-4 rounded-none">
          <div className="flex space-x-4">
            <select className="form-select px-4 ps-2 py-2 border !rounded-none focus:outline-none bg-[#141d2a]">
              <option value="">Sort by</option>
              <option value="newest">Newest</option>
              <option value="oldest">Oldest</option>
              <option value="highest">Highest Rating</option>
              <option value="lowest">Lowest Rating</option>
            </select>

            <select className="form-select px-4 ps-2 py-2 border !rounded-none focus:outline-none">
              <option value="">Status Filter</option>
              <option value="unapproved">Unapproved</option>
              <option value="approved">Approved</option>
            </select>
          </div>

          <button className="px-4 py-2 bg-[#0b1523] rounded-none hover:bg-[#141d2a] flex items-center gap-2 text-gray-300 border border-gray-800"><ArrowClockwise /> Reset Filters</button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3 gap-6">
        <div className="bg-[#141d2a] shadow-md rounded-none p-4 flex flex-col space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src="https://i.pravatar.cc/150?img=${index + 1}" alt="Reviewer" className="w-10 h-10 rounded-full" />

              <div>
                <h4 className="font-semibold text-[#3bedb2]">Abbas Abiid</h4>
                <p className="text-sm text-gray-400 mb-0">uid3@infoiocn.in - <small className='text-[#3bedb2]'>(Admin)</small></p>
              </div>
            </div>

            <div className="flex items-center gap-1 text-yellow-400">
              {[...Array(5)].map((_, starIndex) => (
                <StarFill key={starIndex} className={starIndex < Math.round(5) ? "text-yellow-400" : "text-gray-300"} />
              ))}
            </div>
          </div>

          <div className="editor_html text-sm text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A quos iure nihil fuga labore eum facere sit dolore nisi? Facere magni, ipsum in id molestiae harum. Hic necessitatibus eveniet autem!</div>

          <div className="flex gap-4 items-center">
            <button onClick={() => onOpenView("1")} className="text-emerald-500 flex items-center gap-2 hover:text-emerald-600"><Eye /> View</button>
            <button className="text-green-500 flex items-center gap-2 hover:text-green-600"><PencilSquare /> Edit</button>
            <button className={`flex items-center gap-2 text-yellow-500 hover:text-yellow-600`}><Check2All /> Approved</button>
            <button onClick={() => onOpenModal("1")} className="text-red-500 flex items-center gap-2 hover:text-red-600"><Trash /> Delete</button>
          </div>
        </div>

        <div className="bg-[#141d2a] shadow-md rounded-none p-4 flex flex-col space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src="https://i.pravatar.cc/150?img=${index + 1}" alt="Reviewer" className="w-10 h-10 rounded-full" />

              <div>
                <h4 className="font-semibold text-[#3bedb2]">Abbas Abiid</h4>
                <p className="text-sm text-gray-400 mb-0">uid3@infoiocn.in - <small className='text-[#3bedb2]'>(Admin)</small></p>
              </div>
            </div>

            <div className="flex items-center gap-1 text-yellow-400">
              {[...Array(5)].map((_, starIndex) => (
                <StarFill key={starIndex} className={starIndex < Math.round(5) ? "text-yellow-400" : "text-gray-300"} />
              ))}
            </div>
          </div>

          <div className="editor_html text-sm text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A quos iure nihil fuga labore eum facere sit dolore nisi? Facere magni, ipsum in id molestiae harum. Hic necessitatibus eveniet autem!</div>

          <div className="flex gap-4 items-center">
            <button onClick={() => onOpenView("1")} className="text-emerald-500 flex items-center gap-2 hover:text-emerald-600"><Eye /> View</button>
            <button className="text-green-500 flex items-center gap-2 hover:text-green-600"><PencilSquare /> Edit</button>
            <button className={`flex items-center gap-2 text-yellow-500 hover:text-yellow-600`}><Check2All /> Approved</button>
            <button onClick={() => onOpenModal("1")} className="text-red-500 flex items-center gap-2 hover:text-red-600"><Trash /> Delete</button>
          </div>
        </div>

        <div className="bg-[#141d2a] shadow-md rounded-none p-4 flex flex-col space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src="https://i.pravatar.cc/150?img=${index + 1}" alt="Reviewer" className="w-10 h-10 rounded-full" />

              <div>
                <h4 className="font-semibold text-[#3bedb2]">Abbas Abiid</h4>
                <p className="text-sm text-gray-400 mb-0">uid3@infoiocn.in - <small className='text-[#3bedb2]'>(Admin)</small></p>
              </div>
            </div>

            <div className="flex items-center gap-1 text-yellow-400">
              {[...Array(5)].map((_, starIndex) => (
                <StarFill key={starIndex} className={starIndex < Math.round(5) ? "text-yellow-400" : "text-gray-300"} />
              ))}
            </div>
          </div>

          <div className="editor_html text-sm text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A quos iure nihil fuga labore eum facere sit dolore nisi? Facere magni, ipsum in id molestiae harum. Hic necessitatibus eveniet autem!</div>

          <div className="flex gap-4 items-center">
            <button onClick={() => onOpenView("1")} className="text-emerald-500 flex items-center gap-2 hover:text-emerald-600"><Eye /> View</button>
            <button className="text-green-500 flex items-center gap-2 hover:text-green-600"><PencilSquare /> Edit</button>
            <button className={`flex items-center gap-2 text-yellow-500 hover:text-yellow-600`}><Check2All /> Approved</button>
            <button onClick={() => onOpenModal("1")} className="text-red-500 flex items-center gap-2 hover:text-red-600"><Trash /> Delete</button>
          </div>
        </div>

        <div className="bg-[#141d2a] shadow-md rounded-none p-4 flex flex-col space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src="https://i.pravatar.cc/150?img=${index + 1}" alt="Reviewer" className="w-10 h-10 rounded-full" />

              <div>
                <h4 className="font-semibold text-[#3bedb2]">Abbas Abiid</h4>
                <p className="text-sm text-gray-400 mb-0">uid3@infoiocn.in - <small className='text-[#3bedb2]'>(Admin)</small></p>
              </div>
            </div>

            <div className="flex items-center gap-1 text-yellow-400">
              {[...Array(5)].map((_, starIndex) => (
                <StarFill key={starIndex} className={starIndex < Math.round(5) ? "text-yellow-400" : "text-gray-300"} />
              ))}
            </div>
          </div>

          <div className="editor_html text-sm text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A quos iure nihil fuga labore eum facere sit dolore nisi? Facere magni, ipsum in id molestiae harum. Hic necessitatibus eveniet autem!</div>

          <div className="flex gap-4 items-center">
            <button onClick={() => onOpenView("1")} className="text-emerald-500 flex items-center gap-2 hover:text-emerald-600"><Eye /> View</button>
            <button className="text-green-500 flex items-center gap-2 hover:text-green-600"><PencilSquare /> Edit</button>
            <button className={`flex items-center gap-2 text-yellow-500 hover:text-yellow-600`}><Check2All /> Approved</button>
            <button onClick={() => onOpenModal("1")} className="text-red-500 flex items-center gap-2 hover:text-red-600"><Trash /> Delete</button>
          </div>
        </div>

        <div className="bg-[#141d2a] shadow-md rounded-none p-4 flex flex-col space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src="https://i.pravatar.cc/150?img=${index + 1}" alt="Reviewer" className="w-10 h-10 rounded-full" />

              <div>
                <h4 className="font-semibold text-[#3bedb2]">Abbas Abiid</h4>
                <p className="text-sm text-gray-400 mb-0">uid3@infoiocn.in - <small className='text-[#3bedb2]'>(Admin)</small></p>
              </div>
            </div>

            <div className="flex items-center gap-1 text-yellow-400">
              {[...Array(5)].map((_, starIndex) => (
                <StarFill key={starIndex} className={starIndex < Math.round(5) ? "text-yellow-400" : "text-gray-300"} />
              ))}
            </div>
          </div>

          <div className="editor_html text-sm text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A quos iure nihil fuga labore eum facere sit dolore nisi? Facere magni, ipsum in id molestiae harum. Hic necessitatibus eveniet autem!</div>

          <div className="flex gap-4 items-center">
            <button onClick={() => onOpenView("1")} className="text-emerald-500 flex items-center gap-2 hover:text-emerald-600"><Eye /> View</button>
            <button className="text-green-500 flex items-center gap-2 hover:text-green-600"><PencilSquare /> Edit</button>
            <button className={`flex items-center gap-2 text-yellow-500 hover:text-yellow-600`}><Check2All /> Approved</button>
            <button onClick={() => onOpenModal("1")} className="text-red-500 flex items-center gap-2 hover:text-red-600"><Trash /> Delete</button>
          </div>
        </div>

        <div className="bg-[#141d2a] shadow-md rounded-none p-4 flex flex-col space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src="https://i.pravatar.cc/150?img=${index + 1}" alt="Reviewer" className="w-10 h-10 rounded-full" />

              <div>
                <h4 className="font-semibold text-[#3bedb2]">Abbas Abiid</h4>
                <p className="text-sm text-gray-400 mb-0">uid3@infoiocn.in - <small className='text-[#3bedb2]'>(Admin)</small></p>
              </div>
            </div>

            <div className="flex items-center gap-1 text-yellow-400">
              {[...Array(5)].map((_, starIndex) => (
                <StarFill key={starIndex} className={starIndex < Math.round(5) ? "text-yellow-400" : "text-gray-300"} />
              ))}
            </div>
          </div>

          <div className="editor_html text-sm text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A quos iure nihil fuga labore eum facere sit dolore nisi? Facere magni, ipsum in id molestiae harum. Hic necessitatibus eveniet autem!</div>

          <div className="flex gap-4 items-center">
            <button onClick={() => onOpenView("1")} className="text-emerald-500 flex items-center gap-2 hover:text-emerald-600"><Eye /> View</button>
            <button className="text-green-500 flex items-center gap-2 hover:text-green-600"><PencilSquare /> Edit</button>
            <button className={`flex items-center gap-2 text-yellow-500 hover:text-yellow-600`}><Check2All /> Approved</button>
            <button onClick={() => onOpenModal("1")} className="text-red-500 flex items-center gap-2 hover:text-red-600"><Trash /> Delete</button>
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

      {openView &&
        <div className="fixed w-full h-full top-0 left-0 bg-black bg-opacity-50 z-10 flex items-center justify-center">
          <div className="bg-white shadow-md rounded-none p-4 flex flex-col space-y-4 w-2/4 2xl:w-1/4 m-auto">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div>
                  <h4 className="font-semibold">Gyanendra Prakash</h4>
                  <p className="text-sm text-gray-500 mb-0">gyanendra.prakash@infoicon.in - <small className='text-green-700'>(User)</small></p>

                  <h4 className={`text-green-500 font-semibold text-capitalize`}>Pending...</h4>
                  <p className="text-sm text-gray-500 mb-0">Price: 100</p>
                </div>
              </div>

              <div className="flex items-center gap-1 text-yellow-400">
                {[...Array(5)].map((_, starIndex) => (
                  <StarFill key={starIndex} className={starIndex < Math.round(5) ? "text-yellow-400" : "text-gray-300"} />
                ))}
              </div>
            </div>

            <p className="text-base text-gray-600">Session Name: <strong>lorem sad s sdfsdaf</strong></p>

            <h4 className="font-semibold mt-3">Comment:</h4>
            <div className="text-sm text-gray-600">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod at iste reprehenderit perferendis, consequuntur sed?</div>


            <button onClick={() => setOpenView(false)} className="text-white text-sm custom_btn hover:text-white hover:bg-amber-600 hover:border-amber-600 px-8 py-2 mr-2"> Close</button>
          </div>
        </div>
      }

      <DeleteModal show={show} onClose={onCloseModal} onDelete={handleDelete} />
    </div>
  )
}

export default Rating