import React, { useState } from 'react'
import { GoSearch } from 'react-icons/go';
import { BsSearch } from 'react-icons/bs';


export default function Home() {
  const [search, setSearch] = useState(null);

  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    setSearch(e.currentTarget.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target[0].value)
  }
    
  return (
    <div id="home">
      <section className='grid place-items-center h-[calc(100vh-48px)] p-3'>
        <form 
          className='search-form rounded-full bg-slate-50 hover:bg-slate-100 shadow-inner'
        >
          <button type="submit" className='p-2'>
            <GoSearch size="1.2em"/>
          </button>
          <input 
          type="text" 
          name="search-input" 
          className='w-full p-1 focus-visible:outline-0 bg-transparent'
          onChange={(e)=>onChange(e)}
          />
        </form>
      </section>
    </div>
  )
}
