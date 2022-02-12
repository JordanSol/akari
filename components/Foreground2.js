import { useParallax } from 'react-scroll-parallax'
import { motion, useAnimation } from 'framer-motion'
import { useEffect } from 'react'

const springIn = {
    end: { 
        scale: 1,
        transition: {
            duration: 1.35,
            delay: 0.1,
            type: "spring",
            bounce: .3
        }
    },
    start: {
        scale: 1.6
    }
}

const Foreground2 = ({loading, children, speed = 10}) => {
    const { ref } = useParallax({ speed: speed})
    const controls = useAnimation()

    useEffect(() => {
        if(!loading) {
            controls.start('end')
        }
    },[loading,controls])

    return (
        <motion.div ref={ref} className={`w-screen h-screen absolute top-0 left-0`}
            variants={springIn}
            initial='start'
            animate={controls}
        >
            {children}
        </motion.div>
    )
}

export default Foreground2