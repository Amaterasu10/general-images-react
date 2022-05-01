import React from 'react'
import { useParams } from 'react-router-dom'


export default function Images() {
  const {searchInput} = useParams();
  console.log(JSON.stringify(searchInput))
  return (
    <section className='landing-screen'>
      images
      {JSON.stringify(searchInput)}
    </section>
  )
}
