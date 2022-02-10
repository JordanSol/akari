import { useViewportScroll, useTransform, useSpring, motion } from 'framer-motion'
import { useState, useRef, useLayoutEffect, ReactNode } from 'react'

const Parallax = ({ z, image, children, offset = 50 }) => {
    const [elementTop, setElementTop] = useState(0)
    const [clientHeight, setClientHeight] = useState(0)
    const ref = useRef(null)

    const { scrollY } = useViewportScroll()

    const initial = elementTop - clientHeight
    
    const final = elementTop + offset

    const yRange = useTransform(scrollY, [initial, final], [offset, -offset])

    const y = useSpring(yRange, { stiffness: 400, damping: 90 })

    useLayoutEffect(() => {
        const element = ref.current

        const onResize = () => {
            setElementTop(element.getBoundingClientRect().top + window.scrollY || window.pageYOffset)
            setClientHeight(window.innerHeight)
        }
        onResize()
        window.addEventListener('resize', onResize)
        return () => window.removeEventListener('resize', onResize)
    }, [ref])

    return (
        <motion.div ref={ref} style={{y}} className={`absolute w-screen h-screen z-[${z}]`}>
            {children}
        </motion.div>
    )
}

export default Parallax