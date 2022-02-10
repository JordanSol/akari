import { useParallax } from 'react-scroll-parallax'

const Background = ({children, speed = 10, z = 0}) => {
    const { ref } = useParallax({ speed: speed})
    return (
        <div ref={ref} className={`w-screen h-screen absolute top-0 left-0 z-${z}`}>
            {children}
        </div>
    )
}

export default Background