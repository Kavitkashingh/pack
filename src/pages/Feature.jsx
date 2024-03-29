import React from 'react'
import img from '../assets/pizza.png'
import imgs from '../assets/pizzah.png'


const Feature = () => {

    return (
        // <div className=' grid grid-cols-5 xs:grid-cols-1 w-[100%] m-2 flex-wrap mx-auto justify-center items-center bg-[#d9d9d9] h-[450px]'>
        <div className='grid grid-cols-5 sm:grid-cols-2 xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 md-lg:grid-cols-3 gap-7 p-2'>

            <div className='h-[257px]  grid pl-5 grid-cols-2 w-auto  bg-white items-center justify-center mt-[2rem] rounded-l-2xl'>
                <div className='h-[126px] w-[126px] rounded-full bg-slate-400 ml-3  '><img className='sm:w-full   bg-slate-400 rounded-full' src={img} alt="product images" /></div>
                <div className='h-[126px] w-[126px] rounded-full bg-slate-400 ml-3  '><img className='sm:w-full   bg-slate-400 rounded-full' src={imgs} alt="product images" /></div>
            </div>

            <div className='h-[257px] pl-4 grid grid-cols-2 w-auto bg-white items-center justify-center mt-[2rem] '>
                <div className='h-[126px] w-[126px] rounded-full bg-slate-400 ml-3  '><img className='sm:w-full   bg-slate-400 rounded-full' src={img} alt="product images" /></div>
                
                <div className='h-[126px] w-[126px] rounded-full bg-slate-400 ml-3  '><img className='sm:w-full   bg-slate-400 rounded-full' src={img} alt="product images" /></div>
            </div>

            <div className='h-[397px] w-auto bg-white flex-wrap mx-auto justify-center items-center rounded-xl  text-center'>
                <div className='relative overflow-hidden p-3'>
                    <img className='sm:w-full w-[264px] h-[291px] bg-slate-400 rounded-xl' src={img} alt="product images" />
                </div>
                <span >Name</span><br/>
                <span>Product</span>
            </div>

            <div className='h-[397px] w-auto bg-white rounded-xl m-4 flex-wrap mx-auto justify-center items-center text-center'>
                <div className='relative overflow-hidden p-3'>
                    <img className='sm:w-full w-[264px] h-[291px] bg-slate-400 rounded-xl' src={img} alt="product images" />
                </div>
                <span>Name</span><br/>
                <span>Product</span>
            </div>

            <div className='h-[397px] w-auto bg-white flex-wrap mx-auto justify-center items-center rounded-xl text-center'>
                <div className='relative overflow-hidden p-3'>
                    <img className='sm:w-full w-[264px] h-[291px] bg-slate-400 rounded-xl' src={img} alt="product images" />
                </div>
                <span>Name</span><br/>
                <span>Product</span>
            </div>

        </div>
    )
}

export default Feature
