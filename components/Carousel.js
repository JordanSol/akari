import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import images from './carouselmages'

const Carousel = () => {
    const [width, setWidth] = useState(0)
    const carousel = useRef()

    useEffect(() => {
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth + 32)
    },[])

    return (
        <section id='Showcase' className='relative w-screen bg-darkPurple shadow-innerLg flex justify-center py-8 bg-carouselbg bg-center bg-cover border-yellow-300 border-t-4 border-b-4'>
            <motion.div ref={carousel} whileTap={{pointer: 'grabbing'}} className='cursor-grab overflow-x-hidden'>
                <motion.div drag='x' dragConstraints={{right:0, left: -width}} className='flex justify-between w-inherit pl-4'>
                    {images.map(image => {
                        return (
                            <motion.div key={image.id}
                            className='mx-4 z-2 relative overflow-hidden min-w-[200px] md:min-w-[300px] lg:min-w-[400px]'
                            > 
                                <Image src={image} placeholder='blur' width={400} height={400} layout='intrinsic' alt="Akari Preview" className='z-1 pointer-events-none rounded-md'/>
                                <div className='w-full h-full absolute top-0 left-0'/>
                            </motion.div>
                        )
                    })}
                </motion.div>
            </motion.div>
        </section>
    )
}

export default Carousel