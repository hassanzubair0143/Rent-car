import React from 'react'

function ThirdSecCard({img, username , city, country}) {
  return (
    <div>
       <div className='flex flex-row shadow-lg justify-around pb-4 mb-3 rounded-md justify-start items-center'>
            <div><img src={img} alt="" /></div>
            <div className='flex flex-col '>
              <p className='font-Rubik font-medium text-[24px] leading-[36px]'>{username}</p>
              <p className='font-medium text-[20px] leading-[30px]'>757-947-5015</p>
              <p>City: {city}</p>
              <p>Country: {country}</p>
              <div className='' >
              <button className='bg-[#B8DBCA] text-center rounded-md px-2' >Available</button>
            </div>
            </div>
            <div>
            <button className='bg-[#242E69] text-white px-4 rounded-md'>Select</button>
            </div>
          </div>
    </div>
  )
}

export default ThirdSecCard
