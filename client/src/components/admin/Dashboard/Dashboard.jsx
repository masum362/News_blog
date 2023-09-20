import React from 'react'
import './Dashboard.css'
import Chart from './../Dashboard/Chart'
import Sidebar from '../sidebar/Sidebar'
import Social_visitors from './Social_visitors'
import adminImg from './../../../../public/hasan.jpg'
import { FaThLarge, FaUserAlt,FaPuzzlePiece,FaSign} from "react-icons/fa";


const Dashboard = () => {
  return (
    <div className='mt-[100px] grid sm:grid-cols-1  md:grid-cols-3 lg:grid-cols-5  hy-5 gap-4 '>
        <div className='cols-start-1 cols-end-2  p-2 bg-slate-700'>
          <Sidebar />
        </div>  

        <div className=' Right-site col-start-2 col-end-6   bg-slate-200'> 
            <div className=' heading-div h-[80px] w-[100%] text-white bg-slate-700 pr-5  lg:pl-[80px] '>
                <h1 className=' sm:text-1xl md:text-2xl lg:text-5xl pl-3 '> Admin Dashboard </h1>
                <div className='admin-div'>
                    <h4> Admin</h4>
                    <img className=' sm:w-[30px] sm:h-[30px] lg:w-[40px] lg:h-[40px] h-[30px] w-[30px]  rounded-full '  src={adminImg} alt="" />
                </div>
            </div>
             <div className=' grid lg:grid-cols-3 gap-5 px-5 mt-[50px]'>
                  <div className=' p-5 bg-white'> 
                               <div className='post-icon'> <FaSign  /> </div>         
                       <h1 className='text-3xl font-bold '>All Post </h1>
                       <p className='text-lg font-bold '> Total : 250 +</p>
                  </div>
                  <div className=' p-5 bg-white'> 
                               <div className='post-icon'> <FaUserAlt  /></div>         
                       <h1 className='text-3xl font-bold '>All Users </h1>
                       <p className='text-lg font-bold '> Total : 250 +</p>
                  </div>
                  <div className=' p-5 bg-white'> 
                               <div className='post-icon'> <FaPuzzlePiece  /></div>         
                       <h1 className='text-3xl font-bold '>All Admin </h1>
                       <p className='text-lg font-bold '> Total : 250 +</p>
                  </div>                 
             </div>
             
              <div className=' grid lg:grid-cols-3  gap-5  p-5 mt-[20px]'>
                    <div className=' lg:col-span-2 p-5 bg-white '>
                        <h1> Chart</h1>
                           <Chart/>
                      
                    </div>

                      <div className='bg-white p-5'>
                        <h1 className='text-3xl font-bold mb-[50px]'> Social Visitors </h1>
                        <Social_visitors/>
                      </div>
              </div>                   
         </div>
    </div>
  )
}

export default Dashboard