import Button from '@/components/Button'
import Image from 'next/image'
import React from 'react'
// just a fun page that i made to practice my tailwind
const Hiring = () => {
  return (
    <div
    className='
       hiring_container

        '>
        
        <div className='
        hiring_topDiv

        
        ' >

        <div className='
        mt-10
        flex
        
        
        '>
            <div className='
            
            '>
                <div>
                   <p className='
                text-red-500
                text-4xl
                text-center
                mb-[20px]
               
                
                   '>Flexi Hiring</p>
                </div>
                <div
                className='
                bg-white
                text-center
                
                ' 
                >
                    <h1
                    className='
                    text-6xl
                    text-center
                    font-bold
                    
                    mt-[70px]
                    mb-10
    
                    '

                    
                    > Hire the world's top designers </h1>
                    <p
                    className='
                    text-center
                    mb-[20px]
                    
                    '

                    
                    >Whether you prefer to actively seek out candidates using Designer Search or let designers come to you through our Job Board, Flexi Hiring makes it easier than ever to source top-notch design talent</p>
                
                    <button
                    className='
                    buttons

                    '

                    >
                        Learn More

                    </button>
                    <p>**No Risk Cancel Anytime</p>
                </div>

            </div>
            </div>
            <div className='
            
            mt-10
            mb-[75px]
            '>
           <h1> Helped some of the world's top companies</h1>
                <div className='
                
                grid
                grid-cols-3
                gap-4
                space-x-4
                w-full
                mt-10
                '>

              <Image src='/adobe-logo.png' alt='adobe' width={100} height={100} />
                <Image src='/airbnb-logo.png' alt='airbnb' width={100} height={100} />
                <Image src='/google-logo.jpg' alt='google' width={100} height={100} />
                <Image src='/logo-instagram.png' alt='instagram' width={100} height={100} />
                <Image src='/lyft-logo.png' alt='lyft' width={100} height={100} />
                <Image src='/microsoft-logo.png' alt='microsoft' width={100} height={100} />       
        </div>

        </div>
        </div>

        <div className='
      
        w-full
        mb-[75px]
    
    

        '>   
            <div className='
           
            grid
            grid-cols-2
            justify-center
            items-center
            '>
                <div 
                className='
                
                position-relative
                text-center
                flex
                flex-col
                justify-center
                items-center
                
                

                '
                >
                    <h1 className='
                    bg-blue-400
                    rounded-xl
                    w-[200px]
                    mb-10
                     
                    '>Job Board</h1>
                    <p>The #1 job board for top design talent</p>
                    <p>Our job board postings receive an average of 1.1k targeted clicks per month and are viewed by over 1 million top designers globally. With a proven track record assisting over 60,000 companies, you’ll spend less time sorting through unqualified candidates and more time hiring amazing talent.</p>
                    <button className='
                    buttons
                    
                    '>Get Started</button>

            </div>
            <div className='
          bg-orange-400
            border-29
            border-primary-purple
            rounded-xl
            p-[32px]
            m-[32px]

           
            
            
            '>
                <video
                autoPlay
                loop
                muted
              
                src="https://framerusercontent.com/modules/assets/anyiHSPP2um93testsvKwARCwiI~YnvWAnCLXVX5ggQK88HR6sJu5P-YNcaJrIQp_UB_uPs.mp4"

                />
                 
        </div>
            </div>
            </div>

            
        <div  className='
         
         w-full
         mb-[75px]
     
        '>   
            <div  className='
           
           grid
           grid-cols-2
           justify-center
           items-center
           '> 
        
          <div className='
           
           bg-green-200 
            border-29
            border-primary-purple
            rounded-xl
            p-[32px]
            m-[32px]
            '>
                <video
                autoPlay
                loop
                muted
                src="https://framerusercontent.com/modules/assets/WozDzrtXLXFW9li2N4rKlsztsKk~2oTwugE0NxCgiXJRLaeP9PlMaovqbNkY8O3XDRResCg.mp4"

                >
                 </video>
        </div>
                <div  className='   position-relative
                text-center
                flex
                flex-col
                justify-center
                items-center
                
                '>
                    <h1 className='bg-lime-400
                    rounded-xl
                    w-[200px]
                    mb-10'
                    
                    >Designer Search</h1>
                    <p>Hire faster & smarter with Designer Search</p>
                    <p>Easily find quality freelancers and full-time creatives using our powerful search engine with filters for specialty, location, experience level, and more. Search for available talent in the largest professional creative community with just a few clicks.</p>
                    <button className='
                    buttons
                    '>Get Started</button>

            </div>
      
            </div>
            </div>


            <div className='
            
            w-full
            grid
            grid-cols-2
            
            '>
                
                <div className='
              
                border-29
                border-primary-purple
                rounded-xl
                p-[10px]
                m-[16px]
                flex
                flex-col
                justify-center
                items-center

                
                '>
                <Image src="https://framerusercontent.com/images/0TtfYwyN7iamHhWxGN9PfXLFhE.svg" alt="World Class Talent" width={500} height={500} />
                </div>
        
             <div  className='
                flex
                flex-col
                justify-center
                items-center
                align-center
                text-3xl
             '>
             <h1 className='
                text-center
                mb-10
                text-primary-purple
                font-bold
                text-6xl
                '

             >Why Brands Choose Flexi</h1>
                
                <div  className='
                flex
                flex-col
                justify-center
                items-center
                align-center
                text-3xl
                mb-10

                
                '>
                    <p className='
                    mb-5
                    '>
                    💎
                    </p>
                    <p className='
                    bg-cyan-400
                    mb-5
                    '> 
                        World-Class Talent
                    </p>
                    <p>
                    From graphic design to UX/UI, our community is home to the world’s leading designers and creative agencies.
                    </p>
                </div>
                <div className='
                flex
                flex-col
                justify-center
                items-center
                align-center
                text-3xl
                mb-10
                
                '>
                    <p className='
                    mb-5
                    '>
                    💲
                    </p>
                    <p className='
                    bg-indigo-300
                    mb-5
                  
                    '>
                        No Placement Fees
                    </p>
                    <p>
                    We make the hiring process as seamless and cost-effective as possible, so you can focus on building your business.
                    </p>
                </div>
                <div className='
                flex
                flex-col
                justify-center
                items-center
                align-center
                text-3xl
                mb-10
                
                '><p className='
                mb-5
                '>
                    🌍
                    </p>
                    <p className='
                    bg-sky-400
                    mb-5
                    '>
                        Global Reach
                    </p>

                    <p>
                    With a network of designers spanning over 170 countries, we make it easy to find world-class talent, wherever you are in the world.
                    </p>
                </div>
             </div>
                </div>


               <div className='
               bg-pink-400
               w-full
                flex
                flex-col
                justify-center
                items-center
                align-center
                text-3xl
                leading-10
                mt-[75px]
                mb-[75px]
                h-[500px]


               '>
                <h1 className='
                  text-[90px]
                    mb-[80px]
                '>
                    Find your next great designer today
                </h1>
                <p className='
                mb-10
                '>
                    Tap into our ready-to-work community of over 1 million designers to find the perfect match for your business.
                </p>
                <button className='
                buttons

                '>
                    Get Started
                </button>
                <p className='
                text-sm
                text-gray-500
                '>
                    **No Risk Cancel Anytime
                </p>
                </div> 
    
    </div>
  )
}

export default Hiring