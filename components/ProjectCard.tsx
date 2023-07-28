"use client"

import React,{useState, useEffect} from 'react'
import Image from 'next/image'
import Link from 'next/link'

type Props = {
  id?: string,
  image: string,
  title: string,
  createdBy: string,
  creatorImage: string,
  creatorEmail: string,
  creator? : string
}


const ProjectCard = ({ id, image, title, createdBy, creatorEmail, creatorImage, creator }: Props) => {
  const [randomLikes, setRandomLikes] = useState<number>(0);
  const [randomViews, setRandomViews] = useState<string>("");

  useEffect(() => {
    setRandomLikes(Math.floor(Math.random() * 10000));
    setRandomViews((Math.floor(Math.random() * 10000)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
  }, [])




  return (
    <div className='flexCenter drop-shadow-card flex-col rounded-2xl'>
      <Link href={`/project/${id}`} className= "flexCenter group relative w-full h-full">
        <Image 
        src={image}
        alt="Project Image"
        width={414}
        height={314}
        className = "w-full h-full object-cover rounded-2xl"

         />
         <div className='hidden group-hover:flex
         profile_card-title'>
          <p className='w-full'>
            {title}
          </p>
         </div>
      </Link>
      <div className='flexBetween w-full px-2 mt-3 font-semibold text-sm'>
       <Link href={`/profile/${creator}`}>
          <div className='flexCenter gap-2'>
            <Image 
            src={creatorImage}
            alt="Creator Image"
            width={24}
            height={24}
            className = "rounded-full"
            />
            <p>
              {createdBy}
            </p>
          </div>
        </Link>

        <div className='flexCenter gap-3'>
        <div className='flexCenter gap-2'>
          <Image src='./hearth.svg' alt='heart' width={16} height={16} />
          <p className='text-sm'>
            {randomLikes} 
          </p>

        </div>


        <div className='flexCenter gap-2'>
          <Image src='./eye.svg' alt='eye' width={16} height={16} />
          <p className='text-sm'>
            {randomViews} 
          </p>

        </div>
        </div>
      </div>
      </div>
  )
}

export default ProjectCard