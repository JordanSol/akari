import { motion } from 'framer-motion'

const loaderVariants = {
    animationOne: {
        rotate: 360,
        transition: {
            rotate: {
                repeat: Infinity,
                duration: .5,
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