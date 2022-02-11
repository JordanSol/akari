import { useInView } from 'react-intersection-observer'
import { useAnimation, motion, useSpring } from 'framer-motion'
import { useEffect } from 'react'

const fadeInRight = {
    visible: { opacity: 1, x: 0, transition: {duration: .9, delay: .5, type: 'spring', bounce: .5}},
    hidden: { opacity: 0, x: 100}
}


const FadeInRight = ({ variant, children }) => {
    const [ ref, inView ] = useInView()
    const controls = useAnimation()

    useEffect(() => {
        console.log('in view')
        if (inView) {
            controls.start('visible')
        }
    }, [controls, inView])

    return (
        <motion.div 
        ref={ref} 
        initial="hidden" 
        animate={controls} 
        variants={fadeInRight}>
            {children}
        </motion.div>
    )
}

export default FadeInRight