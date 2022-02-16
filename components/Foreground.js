import { useParallax } from 'react-scroll-parallax'
import { m, useAnimation } from 'framer-motion'
import { useEffect } from 'react'

const springIn = {
    end: { 
        scale: 1,
        transition: {
            duration: 1.2,
            delay: 0.1,
            type: "spring",
            bounce: .3
        }
    },
    start: {
        scale: 1.5
    }
}

const Foreground = ({loading, children, speed = 10}) => {
    const { ref } = useParallax({ speed: speed})
    const controls = useAnimation()

    useEffect(() => {
        if(!loading) {
            controls.start('end')
        }
    },[controls, loading])

    return (
        <m.div ref={ref} className={`w-screen h-screen absolute top-0 left-0`}
            variants={springIn}
            initial='start'
            animate={controls}
        >
            {children}
        </m.div>
    )
}

export default Foreground