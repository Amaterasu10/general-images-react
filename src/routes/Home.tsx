import React, { useState } from 'react'
import { GoSearch } from 'react-icons/go';
import { FaRandom } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';


export default function Home() {
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState(null);
  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    setSearchInput(e.currentTarget.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate(`/gallery/${searchInput}`);
  }
  console.log(import.meta.env.VITE_UNSPLASH_SECRET_KEY)
  return (
    <div id="home">
      <section className='landing-screen'>
        <div className='w-full grid place-items-center'>
          <h1 className='text-3xl md:text-5xl '>General Images</h1>
          <form 
            action='gallery'
            className='search-form rounded-full bg-slate-100 hover:bg-slate-200 shadow-inner mt-9 focus-within:bg-slate-200'
            onSubmit={handleSubmit}
          >
            { 
              searchInput && 
              <button type="submit" className='p-2 rounded-l-full'>
                <GoSearch size="1.2em"/>
              </button>
            }
            <input 
              type="text" 
              name="search-input" 
              className='w-full p-3 focus-visible:outline-0 bg-transparent  pl-5 rounded-l-full'
              onChange={(e)=>onChange(e)}
            />
            <button type="submit" className='p-2 rounded-r-full'>
              <FaRandom size="1.2em"/>
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}
