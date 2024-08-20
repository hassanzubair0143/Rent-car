import React from 'react'


const Cards = ({ img,username,model,year,city}) => {
    console.log(img);
    
  return (
    <>
      
          {/* 1st card */}
          <div className='flex flex-row justify-around items-center rounded-lg shadow-xl gap-3 p-2 '>
            {/* content*/}
         
                <div className='w-[135px] h-[125px] '>
                <img src={img} alt='' className='h-full w-full'/>
                </div>
            
            
           
            <div className='flex flex-col mb-2'>
            <p className='font-semibold text-[24px] leading-[36px]'>{username || "Mehran Suzuki"}</p>
            <p className='font-normal text-[20px] leading-[25px]'>{model || "LEM 4566"}</p>
            <div className='flex flex-row gap-2 mb-2'>
              <div>
                <p>Year : {year ||  "2024"}</p>
                <div className='flex flex-row gap-2'>
                <p>Color:</p>
                <div className= 'bg-red-400 justify-center items-center justify-items-center rounded-lg mt-2 h-[10px] w-[19px]' ></div>
                </div>
              </div>
              <div>
                <p>Type: Sedan</p>
                <p>City: {city}</p>
              </div>
            </div>
            <div className='' >
              <button className='bg-[#B8DBCA] text-center rounded-md px-2' >Available</button>
            </div>

            </div>
            <div><button className='bg-[#242E69] text-white px-4 rounded-md'>Select</button></div>
          </div>
       
    </>
  )
}

export default Cards
