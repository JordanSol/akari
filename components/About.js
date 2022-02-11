import FadeInLeft from './FadeInLeft'
import FadeInRight from './FadeInRight'
import Image from 'next/image'

const About = () => {

    return (
        <section  className='w-screen min-h-screen flex justify-center pt-24'>
        <container className='max-w-[1280px] w-full px-12'>
        <div className='flex flex-col md:flex-row'>
            <div>
            <FadeInLeft>
                <h2 className='text-white w-full text-3xl md:text-5xl lg:text-6xl mb-3'>What is <span className='text-yellow-300'>Akari?</span></h2>
            </FadeInLeft>
            <FadeInLeft>
                <p className='md:w-3/4'>
                Akari is a Solana NFT project drawing heavy inspiration from anime, japanese culture, 
                fashion, and grunge.
                </p>
            </FadeInLeft>
            </div>
            <FadeInRight>
                <Image width={510} height={724} src='/Yellow Card.png' alt='Akari NFT'
                    className='relative before:content-[""] before:absolute before:w-full before:h-2 before:bottom-0 before:left-0 before:bg-sitePurple'
                />
            </FadeInRight>
        </div>
        </container>
        </section>
    )
}

export default About