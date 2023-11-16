import React, { useEffect, useState } from 'react'
import { FaSearch } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';

const Search = () => {

    const [isAvailable , setIslAvailable] = useState(false);
    const [searchQuery, setSearchQuery] = useState('')

    const location = useLocation();

    console.log({location})
    useEffect(() => {
   if(location.pathname==='/'){
setIslAvailable(true)
   }else{
    setIslAvailable(false)
   }
    }, [location.pathname])
    

    
    const handleSearch = (e) => {
        e.preventDefault();
    }



    return (
        <>
        {
            isAvailable ? <div className='fixed  w-full h-16 bg-blue-700 top-20 left-0 z-[-1]  flex items-center justify-center'>
            <form onSubmit={handleSearch} className='flex justify-center items-center  gap-5 w-full mx-auto '>

                <div className='w-full  flex items-center justify-center sm:mx-16 mx-4 lg:gap-10 gap-4'>
                    <div className='lg:w-2/5  w-full '>
                        <input type="text" className='h-full w-full rounded-lg px-2 py-3' value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
                    </div>

                    <div className='h-full '>
                        <button type='submit' className='text-2xl text-center text-white font-bold'><FaSearch /></button>
                    </div>
                </div>
            </form>

        </div> : null
}
        </>
    )
}

export default Search