import Background from './Background'
import {ParallaxProvider} from 'react-scroll-parallax'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import Loader from './Loader'

const Hero = () => {
    const [loading, setLoading] = useState(true)
    const [loaded1, setLoaded1] = useState(false)
    const [loaded2, setLoaded2] = useState(false)
    const [loaded3, setLoaded3] = useState(false)
    const [loaded4, setLoaded4] = useState(false)

    useEffect(() => {
        if (loaded1 && loaded2 && loaded3 && loaded4) {
            return (
                setLoading(false)
            )
        }
    }, [loaded1, loaded2, loaded3, loaded4])

    
    return (
        <>
        {loading && <Loader/>}
        <ParallaxProvider>
        <section id='home' className='w-screen h-screen overflow-hidden relative flex justify-center items-center'>
            <Background speed={1} dur={.7} initSize={1.1} loading={loading}>
                <Image onLoadingComplete={() => setLoaded1(true)} priority quality={70} layout='fill' src='/bg.png' alt='background layer 1' className='blur-md h-screen object-cover'/>
            </Background>
            <Background speed={30} dur={.9} initSize={1.3} loading={loading}>
                <Image onLoadingComplete={() => setLoaded2(true)} priority quality={80} layout='fill' src='/layer2.png' alt='background layer 2' className='blur-sm h-screen w-full object-cover'/>
            </Background>
            <Background speed={60} dur={1.2} initSize={1.5} loading={loading}>
                <Image onLoadingComplete={() => setLoaded3(true)} priority unoptimized='true' quality={100} loading="eager" layout='fill' src='/layer3.png' alt='background layer 3' className='opacity-0 md:opacity-100 w-full z-40 h-screen object-cover object-center'/>
                <Image onLoadingComplete={() => setLoaded4(true)} priority unoptimized='true' quality={100} loading="eager" layout='fill' src='/layer3mobile.png' alt='background layer 3' className='opacity-100 md:opacity-0 w-full z-40 h-screen object-cover object-right'/>
                <div className='absolute bottom-[-100%] w-screen h-screen bg-sitePurple'></div>
                <div className='absolute z-50 bottom-0 mb-[-1px] w-screen h-1/5 bg-gradient-to-b from-transparent to-sitePurple'/>
            </Background>
            <Background speed={70} dur={1.35} initSize={1.6} loading={loading}>
                <span className='absolute bottom-12 left-12 rotate-270 text-white font-acierOutline text-5xl'>.0<span>1</span></span>
                <div className='absolute bottom-0 right-12  w-2 text-white flex-col justify-center'>
                    <p className='font-acier text-sm rotate-90 w-1'>{'"Scroll Down"'}</p>
                    <img layout='fill' src="/Arrow 1.svg" alt='arrow vector' className='margin-0'/>
                </div>
            </Background>
            <Background speed={70} dur={1.35} initSize={1.6} loading={loading}>
                <div className='relative w-screen h-screen flex justify-center items-center'>
                    <div className=''>
                        <h1 className='text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-center  font-acier text-white'>Akari</h1>
                        <div className='w-40 sm:w-48 md:w-72 lg:w-96 mt-2 relative'>
                            <img src='/Vector.svg' alt='svg' className=''/>
                            <br className='w-full'/>
                        </div>
                    </div>
                </div>
            </Background>
        </section>
        </ParallaxProvider>
        </>
    )
}

export default Hero