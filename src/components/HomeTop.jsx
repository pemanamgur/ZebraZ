import React from 'react'
import { NavLink } from 'react-router-dom'

function HomeTop() {
  return (
    <section>
      
      <div className="mx-auto max-w-7xl mt-5 px-2 lg:px-0">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl lg:leading-tight">
            Zebra Zordan
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-xl text-gray-700">
          Extraordianry ballons and face painting services 
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3 md:mt-16 lg:gap-x-12">
          <div 
           className='hover:scale-105 transition ease-in-out '
          >
            <img
              className="  h-[300px] w-full rounded-md object-cover "
              src="https://static.wixstatic.com/media/593ea9_783abc8e61704e389b4d680da5d70d97~mv2.png/v1/fill/w_339,h_359,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/593ea9_783abc8e61704e389b4d680da5d70d97~mv2.png"
              alt=""
            />
          
          </div>
          <div
          className='hover:scale-105 transition ease-in-out '
          >
            <img
              className=" h-[300px] w-full rounded-md  object-cover object-top"
              src="https://scontent.fktm3-1.fna.fbcdn.net/v/t39.30808-6/276144716_838698113729827_7256713849561179996_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Qlyuh4dxgJAQ7kNvgH2AlKz&_nc_ht=scontent.fktm3-1.fna&oh=00_AYA5HC7ypBfQx6qtJifFibQM6f5a3XPz4xDCVmN3MPPbTg&oe=664AB893"
              alt=""
            />
          </div>
          <div
          className='hover:scale-105 transition ease-in-out '
          >
            <img
              className="h-[300px] w-full rounded-md object-cover"
              src="https://scontent.fktm3-1.fna.fbcdn.net/v/t39.30808-6/289164950_890688541864117_6278942714137087766_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=hdkDUuQvJ10Q7kNvgE86kEs&_nc_ht=scontent.fktm3-1.fna&oh=00_AYCdAHS2_lT7VqFND9wc93zP4i3wNE7SiGY4Z8m4P-icPw&oe=664AB9A2"
              alt=""
            />
          </div>
        </div>
        <div className="mt-8 text-center md:mt-16">
        <NavLink
          to={"/dashboard/contact"}
        >
          <button
            type="button"
            className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            Mor Info
          </button>
        </NavLink>
        </div>
      </div>
      
    </section>

  )
}

export default HomeTop
