import Background from './Background'
import {ParallaxProvider} from 'react-scroll-parallax'
import Image from 'next/image'

const Hero = () => {
    return (
        <>
        <ParallaxProvider>
        <section id='home' className='w-screen h-screen overflow-y-hidden relative flex justify-center items-center'>
            <Background speed={1}>
                <Image src='/bg.png' alt='background layer 1' className='h-screen object-cover'/>
            </Background>
            <Background speed={30}>
                <Image src='/layer2.png' alt='background layer 2' className='h-screen w-full object-cover'/>
            </Background>
            <Background speed={60}>
                <Image src='/layer3.png' alt='background layer 3' className='hidden md:flex w-full z-40 h-screen object-cover object-center'/>
                <Image src='/layer3mobile.png' alt='background layer 3' className='flex md:hidden w-full z-40 h-screen object-cover object-right'/>
                <div className='absolute bottom-0 w-screen h-1/5 bg-gradient-to-b from-transparent to-sitePurple'/>
                <div className='w-screen h-screen bg-sitePurple'></div>
            </Background>
            <Background speed={70}>
                <span className='absolute bottom-12 left-12 rotate-270 text-white font-acierOutline text-5xl'>.0<span>1</span></span>
                <div className='absolute bottom-0 right-12  w-2 text-white flex-col justify-center'>
                    <p className='font-acier text-xs rotate-90 w-1'>{'"Scroll Down"'}</p>
                    <Image src="/Arrow 1.svg" alt='arrow vector' className='margin-0'/>
                </div>
            </Background>
            <Background speed={70}>
                <div className='relative w-screen h-screen flex justify-center items-center'>
                    <div className=''>
                        <h1 className='text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-center  font-acier text-white'>Akari</h1>
                        <div className='w-40 sm:w-48 md:w-72 lg:w-96 mt-2 relative'>
                            <Image src="/Vector.svg" alt="Akari NFT" />
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