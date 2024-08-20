import React from 'react'

function SideBar({image, heading,}) {
  return (
 
    <div className='flex flex-row gap-2 items-center  mx-[40px] py-[20px] rounded-md '> 
    <img src={image} alt="" className='w-[18px] h-[20px] ' />
    <p className='font-Rubik  font-bold text-[18px] leading-[27px]'>{heading}</p>
    </div>
  )
}

export default SideBar
