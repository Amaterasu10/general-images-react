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
    <section className='landing-screen'>
      <div 
      className={
        images.length && `grid place-items-center place-content-center grid-flow-row md:grid-cols-3`
      }

      >
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
                  `shadow-lg p-3 m-5 ${image.width > image.height ? "horizontal": "vertical"}`
                }  
              >
                <img 
                  src={image?.urls.small_s3} 
                  alt={image?.alt_description} 
                  className="max-w-full h-auto align-middle inline-block"
                />
                <p>{image.alt_description}</p>
              </div>
            )
          })
        }

        { 
          !isLoading && !images.length &&
          <p className='text-center'>{`No search result for "${searchInput}`}</p>
        }
      </div>
    </section>
  )
}
