import React from 'react'
import { useParams } from 'react-router-dom'


export default function Images() {
  const {searchInput} = useParams();
  console.log(JSON.stringify(searchInput))
  return (
    <section className='grid place-items-center h-[calc(100vh-48px)] p-3'>
      images
      {JSON.stringify(searchInput)}
    </section>
  )
}
