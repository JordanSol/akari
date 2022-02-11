import { useParallax } from 'react-scroll-parallax'
import { motion } from 'framer-motion'

const Background = ({loading, children, speed = 10, initSize, dur, del }) => {
    const { ref } = useParallax({ speed: speed})
    return (
        <motion.div ref={ref} className={`w-screen h-screen absolute top-0 left-0`}
            initial={{
                scale: initSize,
            }}
            animate={{
                scale: 1,
                transition: {
                    duration: dur,
                    delay: 0.2,
                    type: "spring",
                    bounce: .3
                }
            }}
        >
            {children}
        </motion.div>
    )
}

export default Background