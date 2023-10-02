
import { Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid'
import logo from '../components/Categories/assets/WhatsApp Image 2023-08-25 at 10.46.58 PM.jpeg'
import { Link, useNavigate } from 'react-router-dom';
import { MainContext } from '../components/context/PostContext';
import { useContext, useEffect, useState } from 'react';
import { base_url } from '../../base_url/Base_url';
import axios from 'axios';
import Swal from 'sweetalert2'


const Nav = () => {


    const { posts, account,setAccount } = useContext(MainContext)
    const [isUserHaveProfile, setIsUserHaveProfile] = useState(false)
    const ProfileText = account?.name?.charAt(0)

    const navigate = useNavigate()
   
    useEffect(() => {
        
    }, [])
    

    const [isDropDownOpen , setIsDropDownOpen] = useState(false)



    let Links = [
        { name: "International", link: "international" },
        { name: "National", link: "national" },
        { name: "Playing", link: "playing" },
        { name: "Entertainment", link: "entertainment" },
        { name: "Social", link: "social" },
        { name: "Video", link: "video" },
        <i className="fa-brands fa-square-facebook"></i>


    ];
    let [open, setOpen] = useState(false);



const singOutUser = async() => {
await axios.get(`${base_url}/signout`,{withCredentials:true}).then((res) =>{
    console.log(res)

    if(res.status ===200) {
        Swal.fire({
            title: 'Success!',
            text: res.data.message,
            icon: 'success',
            confirmButtonText: 'Confirm'
        })
        navigate('/')
        setAccount({})
    }else{
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
          })
    }
}).catch(err => {
    console.log(err)
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
      })
})
}






    return (
        <div className='shadow-md w-full fixed top-0 left-0 z-20'>
            <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
                {/* logo section */}
                <div className='font-bold text-2xl cursor-pointer flex items-center gap-1'>
                    <Link to={'/'}><img src={logo} alt='' className='object-cover w-28 h-12'></img></Link>
                </div>
                {/* Menu icon */}
                <div onClick={() => setOpen(!open)} className='absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7'>
                    {
                        open ? <XMarkIcon key={1} /> : <Bars3BottomRightIcon key={2} />
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
                    {!account ? <Link to={'/signup'}>
                        <button className='btn bg-blue-600 text-white md:ml-8 font-semibold px-3 py-1 rounded duration-500 md:static'>Get Started</button>
                    </Link>
                        : <li>
                            <div className='cursor-pointer' onClick={() => setIsDropDownOpen(!isDropDownOpen)}>

                                {account?.photoURL ?
                                    <img style={{ height: '45px' }} roundedcircle src={user?.photoURL}></img>
                                    : <span className='text-white bg-blue-600 hover:bg-blue-800 p-4 rounded-full font-medium'>{ProfileText}</span>
                                   
                                }
                            </div>
                        </li>
                    }

                    <div id="dropdown" className={`z-10  absolute  md:right-0 md:top-20 ${isDropDownOpen ? 'block ' : 'hidden'} bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}>
                        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" onClick={()=>setIsDropDownOpen(false)}>
                            {account?.role === 'admin'  && <li>
                                <Link to={'/dashboard'} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white ">Dashboard</Link>
                            </li>}
                            <li>
                                <Link to={'/profile'} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">profile</Link>
                            </li>
                            <li>
                                <span onClick={singOutUser} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</span>
                            </li>
                        </ul>
                    </div>


                </ul>
                {/* button */}
            </div>
        </div>
    );
};

export default Nav;      