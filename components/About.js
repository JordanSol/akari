import FadeInLeft from './FadeInLeft'
import FadeInRight from './FadeInRight'
import Image from 'next/image'

const About = () => {

    return (
        <section  className='w-screen relative flex justify-center pt-24'>
        <div className='max-w-[1280px] w-full px-12'>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-10'>
            <div className=''>
                <FadeInLeft>
                    <h2 className='text-white w-full text-4xl md:text-5xl lg:text-6xl mb-4 lg:mb-6'>What is <span className='text-yellow-300'>Akari?</span></h2>
                </FadeInLeft>
                <FadeInLeft>
                    <p className=''>
                    We are Akari, a ray of light, a peek into the future of the decentralized movement that is web3. A collection of 2222 Deliquents that call the Solana Blockchain their home. You are either in, or out, and there is no going back.
                    </p>
                </FadeInLeft>
            </div>
            <div className='row-span-2'>
                <FadeInRight>
                    <Image width={509} height={655} src='/YellowCard.png' alt='Akari NFT'
                        className='relative'
                    />
                    <div className='absolute bottom-0 w-full h-1/6 bg-gradient-to-b from-transparent to-sitePurple'/> 
                </FadeInRight>
            </div>
        </div>
        </div>
        </section>
    )
}

export default About