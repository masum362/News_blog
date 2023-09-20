
import {Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid'
import logo from '../components/Categories/assets/WhatsApp Image 2023-08-25 at 10.46.58 PM.jpeg'
import { Link } from 'react-router-dom';
import { MainContext } from '../components/context/PostContext';
import { useContext, useState} from 'react';
import { AuthContext } from '../components/ContextFile/AuthProvider';
import { FaArrowRight, } from 'react-icons/fa';


const Nav = () => {
    const { user} = useContext(AuthContext)
    

const {posts} = useContext(MainContext)



    let Links =[
        {name:"International",link:"international"},
        {name:"National",link:"national"},
        {name:"Playing",link:"playing"},
        {name:"Entertainment",link:"entertainment"},
        {name:"Social",link:"social"},
        {name:"Video",link:"video"},
        <i class="fa-brands fa-square-facebook"></i>

        
      ];
      let [open, setOpen] =useState(false); 

    return (
        <div className='shadow-md w-full fixed top-0 left-0 z-20'>
           <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
            {/* logo section */}
            <div className='font-bold text-2xl cursor-pointer flex items-center gap-1'>
                <Link to={'/'}><img src={logo} alt='' className='object-cover w-28 h-12'></img></Link>
            </div>
            {/* Menu icon */}
            <div onClick={()=>setOpen(!open)} className='absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7'>
                {
                    open ? <XMarkIcon key={1}/> : <Bars3BottomRightIcon key={2} />
                }
            </div>
            {/* linke items */}
            <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-20 z-[-1]  left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-12' : 'top-[-490px]'}`}>
                
                <li className='md:ml-8 md:my-0 my-7 font-semibold' > 
                <Link to={`/`} className='text-gray-800 hover:text-blue-400 duration-500'>Home</Link>
                </li>
                {
                    Links.map((link) => (
                    <li className='md:ml-8 md:my-0 my-7 font-semibold' key={link.name}>
                        <Link to={`/category/${link.link}`} className='text-gray-800 hover:text-blue-400 duration-500'>{link.name}</Link>
                    </li>))
                }
               <Link to={'/signup'}>
               <button className='btn bg-blue-600 text-white md:ml-8 font-semibold px-3 py-1 rounded duration-500 md:static'>Get Started</button>
               </Link>
               <li>
               <Link to="/profile">
                                    {user?.photoURL ?
                                        <img style={{ height: '45px' }} roundedcircle src={user?.photoURL}></img>
                                        : <FaArrowRight></FaArrowRight>
                                    }
                                </Link>
               </li>
               
            </ul>
            {/* button */}
           </div>
        </div>
    );
};

export default Nav;      