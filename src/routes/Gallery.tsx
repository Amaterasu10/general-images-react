import axios from 'axios';
import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'

export default function Images() {
  const {searchInput} = useParams();
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(()=> {
    axios.get('https://api.unsplash.com/search/', {
      params: {
        query: searchInput,
        client_id: import.meta.env.VITE_UNSPLASH_ACCESS_KEY
      }
    })
    .then( response => {
      // handle success
      setImages(response.data.photos.results)
      setIsLoading(false);
      console.log(response.data.photos.results);
      // console.log(images, 1)
    })
    .catch( error => {
      // handle error
      console.log(error);
    })
    .then( () => {
      // always executed
    });
  },[searchInput])


  return (
    <>
      <section className='landing-screen bg-slate-100'>
        <div 
        className={
          images.length && `grid sm:grid-cols-masonry sm:grid-rows-masonry`
        }>
          {
            isLoading && 
            <p>Loading...</p>
          }
          { 
            images.length > 0 &&
            images.map( image => {
              return (
                <div 
                  key={image?.id} 
                  className={
                    `shadow-2xl bg-slate-100 p-3 m-5 grid place-content-center place-items-center ${image.width > image.height ? "col-span-3 row-span-2" : "col-span-3 row-span-4"}`
                  }  
                >
                  <img 
                    src={image?.urls.small_s3} 
                    alt={image?.alt_description}
                    height={image?.height}
                    width={image.width} 
                    loading="lazy"
                    className="max-w-full h-auto align-middle inline-block"
                  />
                  {/* <p>{image.alt_description}</p> */}
                </div>
              )
            })
          }

          { 
            !isLoading && !images.length &&
            <p className='text-center'>{`No search result for "${searchInput}`}</p>
          }
        </div>

        <button className='m-auto block bg-stone-900 text-white px-5 py-3 rounded-full shadow-2xl mb-5'>More</button>
      </section>
    </>
  )
}
