import BreadCrumb from '@/components/admin/BreadCrumb'
import SearchForm from '@/components/admin/SearchForm'
import Link from 'next/link'
import React from 'react'
import { PencilSquare } from 'react-bootstrap-icons'

const Profile = () => {
  return (
    <div className='profile-pg'>
      <div className="mb-8 grid grid-cols-1 col-span-2 gap-6">
        <div className="relative flex flex-col bg-clip-border bg-[#141d2a] text-gray-700 shadow-md overflow-hidden xl:col-span-2 p-4">
          <div className="flex flex-col-reverse justify-between gap-6 md:flex-row md:items-center">
            <div className="capitalize">
              <BreadCrumb title="Profile" />
            </div>

            <div className="flex items-center justify-end text-right w-full place-items-center flex-col gap-4 sm:flex-row">
              <SearchForm searchQuery={""} setSearchQuery={"setSearchQuery"} />

              <Link href='/' className="middle center flex max-[640px]:w-full items-center gap-2 custom_btn py-2 px-6 font-sans text-xs font-bold uppercase shadow-md shadow-green-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                <PencilSquare className="text-xl" /> Edit
              </Link>
            </div>
          </div>
        </div>
      </div>


      <div className="main-section d-flex gap-4 flex-column !py-0">
        <div className="card p-0">
          <div className="card-header">
            <h3 className="text-white">My account</h3>
          </div>

          <div className="card-body px-sm-4 px-3">
            <div className="my-account">
              <div className="user-detail"></div>
              <div className="user-main">
                <div className="user-profile">
                  <img src="../assets/images/user/4.jpg" className="img-fluid" />
                  <i className="iconsax" data-icon="camera"></i>
                </div>
                <div className="user-option">
                  <h4>Shanaya John</h4>
                  <p>shanayajohn@gmail.com</p>
                </div>
              </div>

              <form className="msger-inputarea mb-0">
                <div className="row">
                  <div className="col-sm-6 col-12">
                    <div className="mb-3">
                      <label htmlFor="firstname" className="form-label">First
                        Name</label>
                      <input type="email" className="msger-input" id="firstname"
                        placeholder="firstname@example.com" />
                    </div>
                  </div>
                  <div className="col-sm-6 col-12">
                    <div className="mb-3">
                      <label htmlFor="lastname" className="form-label">Last
                        Name</label>
                      <input type="email" className="msger-input" id="lastname"
                        placeholder="lastname@example.com" />
                    </div>
                  </div>
                  <div className="col-sm-6 col-12">
                    <div className="mb-3">
                      <label htmlFor="emailid" className="form-label">Email
                        address</label>
                      <input type="email" className="msger-input" id="emailid"
                        placeholder="emailid@example.com" />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div className="card-footer">
            <div className="setting-btn">
              <button className="select-plan ">Update
              </button>
              <button className="no-select-plan select-plan">
                Cancel
              </button>
            </div>
          </div>
        </div>

        <div className="card p-0">
          <div className="card-header">
            <h3 className="text-white">Change password</h3>
          </div>

          <div className="card-body px-sm-4 px-3">
            <div className="my-account">
              <form className="msger-inputarea mb-0">
                <div className="row">
                  <div className="col-sm-6 col-12">
                    <div className="mb-3">
                      <label htmlFor="firstname" className="form-label">New Password</label>
                      <input type="email" className="msger-input" id="firstname"
                        placeholder="firstname@example.com" />
                    </div>
                  </div>
                  <div className="col-sm-6 col-12">
                    <div className="mb-3">
                      <label htmlFor="lastname" className="form-label">Confirm password</label>
                      <input type="email" className="msger-input" id="lastname"
                        placeholder="lastname@example.com" />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div className="card-footer">
            <div className="setting-btn">
              <button className="select-plan ">Update password
              </button>
              <button className="no-select-plan select-plan">
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile