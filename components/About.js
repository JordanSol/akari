import FadeInLeft from './FadeInLeft'
import FadeInRight from './FadeInRight'
import Image from 'next/image'

const About = () => {

    return (
        <section  className='w-screen min-h-screen flex justify-center pt-24'>
        <div className='max-w-[1280px] w-full px-12'>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-10'>
            <div className=''>
                <FadeInLeft>
                    <h2 className='text-white w-full text-3xl md:text-5xl lg:text-6xl mb-3'>What is <span className='text-yellow-300'>Akari?</span></h2>
                </FadeInLeft>
                <FadeInLeft>
                    <p className=''>
                    Akari is a Solana NFT project drawing heavy inspiration from anime, japanese culture, 
                    fashion, and grunge.
                    </p>
                </FadeInLeft>
            </div>
            <div className='row-span-2'>
                <FadeInRight>
                    <Image width={509} height={655} src='/YellowCard.png' alt='Akari NFT'
                        className='relative'
                    />
                </FadeInRight>
            </div>
        </div>
        </div>
        </section>
    )
}

export default About