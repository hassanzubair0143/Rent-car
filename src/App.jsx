import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SideBar from './components/sidebar-content-dive'
import Group271 from './assets/images/Group 271.png'
import Sidebarcar from './assets/images/sidebar_car.png'
import Calendar from './assets/images/calendar-icon.png'
import Customer from './assets/images/cusomer-icon.png'
import Reservation from './assets/images/reservation-icon.png'
import Vehicle from './assets/images/vehicle-icon.png'
import Tracking from './assets/images/tracking-icon.png'
import Offer from './assets/images/offer-icon.png'
import Menu from './assets/images/navbar-menu-icon.png'
import  Bell from './assets/images/bell-icon.png'
import Profile from './assets/images/profile-icon.png'
import CarCard from './assets/images/Rectangle 10931.png'
import Cards from './components/cards'
import CardMan from './assets/images/man.png'
import ThirdSecCard from './components/thirdSecCard'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <div className='flex flex-row m-0 p-0'>
     {/* sidebar */}
     <div className='w-[302px] h-[2594px] border border-[#D9D9D9]'>
      <div className='flex h-[94px] w-[299] justify-center justify-items-center items-center border border-[#D9D9D9] border-slate-400'>
        <img src={Sidebarcar} alt="sidebar car" className='h-[45px] w-[118px]' />
      </div>
      {/* sidebar content */}
    <div className='pt-10'>
       
     <SideBar image={Group271} heading="DashBoard" className='mt-4'/>
     
     <SideBar image={Calendar} heading="Calendar" />
     
     <SideBar image={Customer} heading="Customer" />
     
     <SideBar image={Reservation} heading="Reservation" />
     
     <SideBar image={Vehicle} heading="Vehicles" />
     
     <SideBar image={Tracking} heading="Tracking" />
     <SideBar image={Offer} heading="Offer Generator" />
     <div className='h-[97px] w-[223px] ml-[60px] mr-4'>
      <p>All Offers</p>
      <br/>
      <div className='bg-[#242E69] rounded-lg'><button className='text-white p-2 border-none'>Make New Offer</button></div>
     </div>
    </div>

     </div>

     {/* section 2 */}
    
     <div className='flex flex-col w-[100%]'>
       {/* navebar */}
      <div className='flex flex-row justify-between justify-center items-center px-4 h-[94px] w-{100%} border border-[#D9D9D9]'>
        <div><img src={Menu} alt="" /></div>
        <div className='flex flex-row gap-2'>
         <div><img src={Bell} alt="" /></div>
         <div><img src={Profile} alt="" /></div>
        </div>
      </div>
     {/* content */}
     <h1 className='font-Rubik font-bold font-[600px] textt-[25px] leading-[37px] ml-[45px]'>Make New Offers</h1>
     <p className='font-Rubik font-[400] text-[18px] leading-[21px] text-[#808080] ml-12'>Offer Generater / Make New Offer</p>
      
      <div className=' flex flex-col mx-[50px] my-[50px] bg-[#F9F9F9] border border-[#D9D9D9] rounded-md border-slate-400 border-opacity-50 pb-[60px] '>
    
    
       {/* input section */}

       <div className='bg-white mx-10  mt-[37px] border-[#D9D9D9] border rounded-md pb-[80px]'>
       <p className='font-Rubik font-bold text-[25px] m-[24px]'>General Information</p>
        {/* input grid system */}
       <div className='grid grid-cols-2 grid-row-5 gap-7 mt-8 mx-[23px]'>

        <div className='flex flex-col gap-2'><label htmlFor="" className='font-medium'>Customer Name</label>
        <input type="text" placeholder='Enter your name' className='border bg-[#F9F9F9] rounded-md p-2'/></div>

        <div className='flex flex-col gap-2'><label htmlFor="" className='font-medium'>Current Date</label>
        <input type="Date" placeholder='MM/DD/YY' className='border bg-[#F9F9F9] rounded-md p-2'/></div>

        <div className='flex flex-col gap-2'><label htmlFor="" className='font-medium'>Pick Up Address</label>
        <input type="text" placeholder='Enter pick up address' className='border bg-[#F9F9F9] rounded-md p-2'/></div>

        <div className='flex flex-row w-[100%] gap-3'>
        <div className='flex flex-col gap-2 w-[60%]'><label htmlFor="" className='font-medium'>Pick Up Date</label>
        <input type="Date" placeholder='MM/DD/YY' className='border bg-[#F9F9F9] rounded-md p-2'/></div>

        <div className='flex flex-col gap-2 w-[40%]'><label htmlFor="" className='font-medium'>Pick Up Time</label>
        <input type="time" placeholder='Enter your name' className='border bg-[#F9F9F9] rounded-md p-2'/></div>
        </div>

        <div className='flex flex-col gap-2'><label htmlFor="" className='font-medium'>Drop Off Address</label>
        <input type="text" placeholder='Enter drop off address' className='border bg-[#F9F9F9] rounded-md p-2'/></div>

        <div className='flex flex-row w-[100%] gap-3'>
        <div className='flex flex-col gap-2 w-[60%]'><label htmlFor="" className='font-medium'>drop off Date</label>
        <input type="Date" placeholder='MM/DD/YY' className='border bg-[#F9F9F9] rounded-md p-2'/></div>

        <div className='flex flex-col gap-2 w-[40%]'><label htmlFor="" className='font-medium'>Drop Off Time</label>
        <input type="time" placeholder='Enter your name' className='border bg-[#F9F9F9] rounded-md p-2'/></div>
        </div>

        <div className='flex flex-col gap-2'><label htmlFor="" className='font-medium'>Discount</label>
        <input type="text" placeholder='discount is here' className='border bg-[#F9F9F9] rounded-md p-2'/></div>
       </div>
       </div>
      
      {/* input section 2 cards wala */}
      <div className='bg-white mx-10 mt-[30px] border border-[#D9D9D9] rounded-md  p-[23px]'>
        <h1 className='font-bold text-[25px]'>Select Vehicles</h1>
        <div className='flex flex-row gap-2 w-[50%] mt-3'>
          <div className='flex flex-col w-[50%] '>
            <label htmlFor="">Make</label>
            <select name="" id="" className='w-[100%] border bg-[#F9F9F9] rounded-md p-2'>
              <option value="">Suzuki</option>
              <option value="">Mehran</option>
              <option value="">Civic</option>
            </select>
          </div>

          <div className='flex flex-col w-[50%]'>
            <label htmlFor="">Model</label>
            <select name="" id="" className='w-[100%] border bg-[#F9F9F9] rounded-md p-2'>
              <option value="">Suzuki</option>
              <option value="">Mehran</option>
              <option value="">Civic</option>
            </select>
          </div>
        </div>

       {/* car cards */}
       <div className='grid grid-cols-2  grid-rows-2 gap-3 mt-[40px] pb-[30px] w-full sm:grid-cols-1 md:grid-flow-col-1 lg:grid-cols-1 xl:grid-cols-2 2xl:grid-cols-2'>
      
       <Cards username={"Suzuki Swift"} city={"dera"} model={"LEM 123"} img={CarCard} year={"2024"}  />
       <Cards username={"Carola"} city={"dera"} model={"GDK 8694"} img={CarCard} year={"2024"}  />
       <Cards username={"Bolan"} city={"dera"} model={"MLR 9956"} img={CarCard} year={"2024"}  />
       <Cards username={"KIA"} city={"dera"} model={"ASF 3440"} img={CarCard} year={"2024"}  />
       </div>
        
      </div>
      
      {/* third section */}
      <div className='bg-white mx-10 mt-[30px] border border-[#D9D9D9] rounded-md  p-[23px]'>
        <h1 className='font-bold text-[25px]'>Select Chauffeur</h1>
        <div className='w-[100%] flex flex-row gap-3 mt-[14px] '>
          <div className='flex flex-row justify-between items-center gap-4 bg-[#F9F9F9] rounded-md p-2'>
          <input type="radio" name="check" id="" className='h-5 w-5' />
          <p className='font-bold'>With Chauffeur</p>
          </div>
          <div className='flex flex-row justify-between items-center gap-4 bg-[#F9F9F9] rounded-md p-2'>
          <input type="radio" name="check" id="" className='h-5 w-5' />
          <p className='font-bold'>With Chauffeur</p>
          </div>
          
        </div>

        {/* search chauffeur */}
        <div className='flex flex-col gap-2 mt-[40px] w-full'><label htmlFor="" className='font-medium'>Search Chauffeur</label>
        <input type="text" placeholder='search' className='border  bg-[#F9F9F9] w-[50%] rounded-md p-2'/></div>

        {/* cards */}
        <div className='grid grid-cols-2 mt-[40px] gap-3  pb-[50px] sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2'>
          {/* 1st card */}
         <ThirdSecCard img={CardMan} username={"John Glean"} city={"Tokyo"} country={"London"}/>
         <ThirdSecCard img={CardMan} username={"John Glean"} city={"Tokyo"} country={"London"}/>
        </div>
        
        </div>

        {/* fourth section */}
        <div className='bg-white mx-10 mt-[30px] border border-[#D9D9D9] rounded-md  p-[23px]'>
        <h1 className='font-bold text-[25px]'>Terms & Conditions</h1>
        <p className='mt-[30px]'>Terms and Conditions here</p>
        <textarea name="" id="" placeholder='Type Here' className='h-[100px] w-full rounded-md mt-2 border' ></textarea>
        </div>
        {/* submit button */}
        <div className='flex flex-row justify-end  w-full mt-[50px] '><button className='bg-[#242E69] text-white px-5 py-1 rounded-md mr-[40px]'>Generate Offer</button></div>


      </div>



     </div>
    
   </div>
    

    </>
  )
}

export default App
