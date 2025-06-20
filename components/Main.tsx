import React from 'react'
import Image from 'next/image'

const Main = () => {
  return (
    <div>
      <section className='flex justify-around m-20 pt-20'>
        <div className='  text-white text-6xl w-2xl'>
          Hi , My Name is <span className='text-blue-800'>Toujar</span> 
          <div>
            and I am a passionate
          </div>
          <div className='pt-2'>
             Web Developer 
          </div>
          <div className='text-xl mt-18 justify-between'>
          <button className='mr-2.5 bg-purple-500  text-white hover:bg-blue-700 font-bold py-2 px-4' >Download Resume</button>
          <button className='ml-6.5 mr-2.5 bg-blue-500 text-white hover:bg-blue-700 font-bold py-2 px-4'> Visit Github</button>
        </div>
        </div>
        
        <div className=''>
            <Image
                src="./image.png"
                alt="Toujar's Image"
                width={500}
                height={500}
                className=''
            />
        </div>
        
      </section>
      <hr className=' border-0 bg-blue-400 ml-20 mr-20 mt-10 mb-10 h-1' />
      <section className='m-auto max-w-[80vw] h-[80vh]'>
        <span className='text-gray-500 text-3xl'>What I have done so for</span>
        <h1 className='text-4xl'>Projects</h1>
        <div className='flex space-x-26 mb-1'><Image
                src="./Home.png"
                alt="Toujar's Image"
                width={50}
                height={50}
                className='ml-23 mt-18'
            />
            <Image
                src="./Whattsup.png"
                alt="Toujar's Image"
                width={50}
                height={50}
                className='ml-23 mt-18'
            />
            <Image
                src="./expense.png"
                alt="Toujar's Image"
                width={50}
                height={50}
                className='ml-23 mt-18'
            /><Image
                src="./youtube.png"
                alt="Toujar's Image"
                width={50}
                height={50}
                className='ml-22 mt-18'
            /><Image
                src="./clg.png"
                alt="Toujar's Image"
                width={50}
                height={50}
                className='ml-22 mt-18'
            /><Image
                src="./health.png"
                alt="Toujar's Image"
                width={50}
                height={50}
                className='ml-22 mt-18'
            />
            </div>
        <div className="box bg-white w-[76vw] h-0.5  mb-18 ml-0 mr-0 flex" >
          <div className="vertical h-24 w-1 bg-white mt-0 mb-0 ml-28 mr-32 text-xl">
          <div className="title relative top-26 w-40">Home/Room rent App 
            <div>(HTML,CSS,JS Project)</div>
          </div>
          <div className="desc relative top-28 w-40 text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse cumque voluptatibus quisquam a quod ab blanditiis adipisci illo! Excepturi corrupti perferendis </div>
         </div>
         <div className="vertical h-24 w-1 bg-white mt-0 mb-0 ml-28 mr-32 text-xl">
          <div className="title relative top-26 w-40">Real-Time Chat-Gard App 
            <div>(React Project)</div>
          </div>
          <div className="desc relative top-28 w-40 text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse cumque voluptatibus quisquam a quod ab blanditiis adipisci illo! Excepturi corrupti perferendis </div>
         </div>
         
         <div className="vertical h-24 w-1 bg-white mt-0 mb-0 ml-28 mr-32 text-xl">
          <div className="title relative top-26 w-40">Expense Tracker 
            <div>(Next.js Project)</div>
          </div>
          <div className="desc relative top-28 w-40 text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse cumque voluptatibus quisquam a quod ab blanditiis adipisci illo! Excepturi corrupti perferendis </div>
         </div>
         <div className="vertical h-24 w-1 bg-white mt-0 mb-0 ml-28 mr-32 text-xl">
          <div className="title relative top-26 w-40">YouTube Abstarction Layer
            <div>(Next.js Project)</div>
          </div>
          <div className="desc relative top-28 w-40 text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse cumque voluptatibus quisquam a quod ab blanditiis adipisci illo! Excepturi corrupti perferendis </div>
         </div>
         <div className="vertical h-24 w-1 bg-white mt-0 mb-0 ml-28 mr-32 text-xl">
          <div className="title relative top-26 w-40">College Management System
            <div>(Next.js Project)</div>
          </div>
          <div className="desc relative top-28 w-40 text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse cumque voluptatibus quisquam a quod ab blanditiis adipisci illo! Excepturi corrupti perferendis </div>
         </div>
         <div className="vertical h-24 w-1 bg-white mt-0 mb-0 ml-28 mr-32 text-xl">
          <div className="title relative top-26 w-40">Govt Hospital Health Tracker 
            <div>(Next.js Project)</div>
          </div>
          <div className="desc relative top-28 w-40 text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse cumque voluptatibus quisquam a quod ab blanditiis adipisci illo! Excepturi corrupti perferendis </div>
         </div>
         </div>
      </section>
      <hr className=' border-0 bg-blue-400 ml-20 mr-20 mt-10 mb-10 h-1' />
    </div>
  )
}

export default Main
