import { motion, useAnimation } from 'framer-motion'
import React from 'react'
import { use } from 'react'

export const Featured = () => {
 
  return (
    <div className='w-full py-20'>
      <div className='w-full px-20 border-b-[1px] border-zinc-700 pb-20'>
     <h1 className='text-8xl font=["Neue_Montreal"] tracking-tight' >Featured Projects</h1>
      </div>
      <div className='px-20'>
      <div className='cards w-full flex gap-10 mt-10'>
<div className='cardcontainer relative w-1/2 h-[75vh]'>
<h1 className='absolute text-[#CDEA68] overflow-hidden left-full -translate-x-1/2 top-1/2 -translate-y-1/2  z-[9] leading-none tracking-tighter text-8xl'>{"FYDE".split('').map((item, index)=> <span >{item}</span>)}</h1>
<div className='card w-full h-full rounded-xl oveflow-hidden '>
<img className='w-full h-full bg-cover' src='https://ochi.design/wp-content/uploads/2025/02/Salience_Website_cover-1326x1101.png' alt=''></img>
</div>
</div>
<div className='cardcontainer relative w-1/2 h-[75vh]' >
<div className='card w-full h-full rounded-xl oveflow-hidden'>
<h1 className='absolute text-[#CDEA68] right-full translate-x-1/2 top-1/2 -translate-y-1/2  z-[9] leading-none tracking-tighter text-8xl'>{"VISE".split("").map((item, index)=> <span>{item}</span>)}</h1>
  <img className='w-full h-full bg-cover' src='https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-1326x1101.png' alt=''></img>
</div>
</div>
     </div>
      </div>
    </div>
  )
}

