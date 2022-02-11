import { motion } from 'framer-motion'

const loaderVariants = {
    animationOne: {
        x: [-20, 20], 
        y: [0, -30], 
        transition: {
            x: {
                yoyo: Infinity,
                duration: 0.5
            },
            y: {
                yoyo: Infinity,
                duration: 0.25
            }
        }
    }
}

const Loader = () => {
    return (
        <div className='absolute top-0 left-0 w-screen h-screen z-[999] bg-sitePurple flex justify-center items-center'>
            <motion.h2 animate="animationOne" variants={loaderVariants} className='text-7xl'>灯</motion.h2>
        </div>
    )
}

export default Loader