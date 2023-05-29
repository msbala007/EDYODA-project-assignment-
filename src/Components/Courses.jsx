import React from 'react'
import Details from './Details'
import Payment from './Payment'

const Courses = () => {
  return (
   <>
   <section className='bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-sky-600 to-black min-h-screen'>
   <div className='flex justify-around items-center min-h-screen p-2 sm:flex-col md:flex-col '>
    <div className=''> <Details /></div>
    <div>   <Payment /></div>
   
 
   </div>
   </section>
   </>
  )
}

export default Courses

