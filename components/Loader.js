import { motion, AnimatePresence } from 'framer-motion'

const loaderVariants = {
    animationOne: {
        rotate: 360,
        transition: {
            rotate: {
                repeat: Infinity,
                duration: .5,
            }
        }
    },
}

const Loader = () => {
    return (
    <AnimatePresence>
        <motion.div className='absolute top-0 left-0 w-screen h-screen z-[999] bg-sitePurple flex justify-center items-center'
            variants={{
                hidden: {
                    opacity: 0
                }, 
                visible: {
                    opacity: 1,
                    transition: {
                        duation: .1
                    },   
                },
                initial: {
                    opacity: 1
                }
            }}
            initial='initial'
            animate='visible'
            exit='hidden'
        >
            <motion.h2 animate="animationOne" variants={loaderVariants} className='text-7xl'>灯</motion.h2>
        </motion.div>
    </AnimatePresence>
    )
}

export default Loader