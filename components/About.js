import Image from 'next/image'
import { FaDiscord, FaTwitter } from 'react-icons/fa'
import YellowCard from '../assets/YellowCard.png'

const About = () => {
    return (
        <section id='about' className='w-screen relative flex justify-center pt-24'>
        <div className='max-w-screen-xl w-full px-12'>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-10'>
            <div className='row-span-2'>
                <div>
                    <h2 className='text-white w-full text-4xl md:text-5xl lg:text-6xl mb-4 lg:mb-6'>What is <span className='text-yellow-300'>Akari?</span></h2>
                    <h4 className='mb-1 text-xl'>A New Light</h4>
                    <p className=''>
                    We are Akari, a ray of light, a peek into the future of the decentralized movement that is web3. A collection of 2222 Delinquents that call the Solana Blockchain their home. You are either in, or out, and there is no going back.
                    </p>
                    <br/>
                    <h4 className='mb-1 text-xl'>The Inspiration</h4>
                    <p>
                    Azuki is a big inspiration for us, we believe in everything that they are doing on Ethereum. 
                    We wanted to make our mark on web3 as well, so we decided to create Akari on Solana. 
                    Half of the Akari team speaks Japanese, so we also wanted to take the chance to
                    stay true to the culture while still stylizing it in our own unique way. 
                    This is something we believe {"hasn't"} been done properly yet on Solana. We will be the first.
                    </p>
                    <br/>
                    <h4 className='mb-1 text-xl'>Join The Community</h4>
                    <p>
                    Get involved with the movement. Find your light.
                    <div className='flex justify-start text-2xl my-2'>
                    <a href="https://discord.gg/AkariLabs" target='_blank' rel='noreferrer'>
                    <FaDiscord className=''/>   
                    </a>
                    <a href="https://twitter.com/AkariLabs" target='_blank' rel='noreferrer'>
                    <FaTwitter className='mx-2 mb-8'/>
                    </a>
                </div>
                    </p>
                </div>
            </div>
            <div className='row-span-2 mb-[-7px]'>
                <div className='h-full flex items-end'>
                    <div>
                        <Image width={509} height={655} src={YellowCard} alt='Akari NFT'
                            placeholder='blur'
                            className='relative'
                        />
                    </div>
                </div>
            </div>
        </div>
        </div>
        </section>
    )
}

export default About