import React from 'react'

const AboutUs = () => {
  return (
    <div className='bg-[linear-gradient(to_right,_#613E61,_#390D39)] flex flex-row px-16 py-20 h-155'>
      <div className='flex flex-col w-[50%]'>
            <h1 className='text-amber-300 text-lg font-bold mb-5'>
                About Us
            </h1>
            <h1 className='text-amber-50 text-5xl mb-5 '>
                "We Collaborate With <span className='text-amber-300'>Global DJs.</span>"
            </h1>
            <p className='text-amber-50 text-lg leading-6 mb-5'>
                Revolutionize your music mixing with innovative tools such as Auto Sync and Auto BPM.
                Designed with beginners in mind, You DJ is the ultimate choice for aspiring DJs 
                worldwide, offering unparalleled ease of use and professional-quality results.
            </p>
      </div>

      <div className='flex flex-col w-[50%] pl-10'>

            <div className='flex flex-row'>
                <img className="w-10 h-10 -pl-15" src='/images/plane-ticket.png'/>
                <h1 className='text-amber-300 text-3xl pl-5 mb-4'>
                    Night Spirit
                </h1>
            </div>
            
            <p className='text-amber-50 text-md pl-15 mb-4'>
                Immerse yourself in the mystical aura of the Night Spirit with our latest collection, 
                crafted to ignite imagination and evoke wonder in hearts around the world.
            </p>

            <div className='flex flex-row'>
                <img className="w-9 h-9 -pl-15" src='/images/emoji.png'/>
                <h1 className='text-amber-300 text-3xl pl-5 mb-4'>
                    Musical Merriments
                </h1>
            </div>
            
            <p className='text-amber-50 text-md pl-15 mb-4'>
                Experience the joyous harmony of Musical Merriments with our latest selection,
                designed to uplift spirits and create memorable moments for music lovers worldwide.
            </p>

            <div className='flex flex-row'>
                <img className="w-10 h-10 -pl-15" src='/images/music.png'/>
                <h1 className='text-amber-300 text-3xl pl-5 mb-4'>
                    Music Mastered
                </h1>
            </div>
            
            <p className='text-amber-50 text-md pl-15 mb-4'>
                Explore the artistry of Music Mastered through our latest releases, curated to delight
                discerning ears and inspire creativity in musicians across the globe.
            </p>
      </div>
    </div>
  )
}

export default AboutUs
