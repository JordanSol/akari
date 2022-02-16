import Image from 'next/image'
import Sticky from 'react-sticky-el'
import RoadmapCard from "./RoadmapCard"
import leaning from '../assets/leaning.png'

import { useInView } from 'react-intersection-observer'
import { useAnimation, motion } from 'framer-motion'
import { useEffect } from 'react'

const fadeInLeft = {
    visible: { opacity: 1, transition: {duration: .9, delay: .5, type: 'spring', bounce: .5}},
    hidden: { opacity: 0 }
}

const fadeInRight = {
    visible: { opacity: 1, x: 0, transition: {duration: .9, delay: .5, type: 'spring', bounce: .5}},
    hidden: { opacity: 0, x: 100}
}

const Roadmap = () => {
    const [ ref, inView ] = useInView()
    const controls = useAnimation()

    useEffect(() => {
        if (inView) {
            controls.start('visible')
        }
    }, [controls, inView])

    return (
        <section id='roadmap' ref={ref} className='w-screen min-h-screen relative py-20 flex flex-col items-center bg-sitePurple'>
            <div className='max-w-screen-xl px-12 w-full'><motion.div initial='hidden' animate={controls} variants={fadeInLeft}><h2 className='w-full text-4xl md:text-5xl lg:text-6xl mb-5 lg:mb-6'>Road<span className='text-yellow-300'>map</span></h2></motion.div></div>
            <div className='relative max-w-screen-xl px-12 w-full grid gap-20 grid-cols-1 sm:grid-cols-3 lg:grid-cols-4'>
                <div className='sm:col-span-2'>
                    <motion.div
                        initial='hidden'
                        animate={controls}
                        variants={fadeInLeft}
                    >     
                        <RoadmapCard title='A Seed' number='0'>
                            <p>
                            Our focus first and foremost is the community. Using social media, we hope to grow the Akari brand and community into something everyone can find a place in. We are taking the fundamentals of web3 and decentralization into account here. The community is and always will be our foundation. We are planting our seeds in the right places to make this project spectacular. 
                            </p>
                            <br/>
                            <p>
                            Prominent members and early supporters in the community will earn a whitelist as a reward for their dedication. We will also be offering whitelist through games and objectives held regularly in the discord. 
                            </p>
                        </RoadmapCard>
                        <RoadmapCard title='Growth' number='1'>
                            <p>
                            Pre-sale access will be given to whitelisted members of the community. We firmly believe in rewarding those that take part and make themselves involved. We also recognize that the NFT space is large and expanding at an alarming rate. Sometimes you miss getting into a project early, so we are making sure to set aside a portion for public sale, so everyone has a chance to hop on for the ride. 
                            On the date of <span className="blur-sm">-REDACTED-</span> we will be launching on <span className="blur-sm">-REDACTED-</span> for a mint price of <span className="blur-sm">-REDACTED-</span>.
                            </p>
                        </RoadmapCard>
                        <RoadmapCard title='Bloom' number='2'>
                            <p>
                            We will be applying for listing immediately upon sellout, and shortly after that holder verification will be set up in the discord. Holders of Akari will have access to exclusive Alpha channels run by the owners and can share their own information for a chance to obtain more important roles within the community. 
                            <br/>
                            <br/>
                            The Akari project was initially centered around the art, and we still believe that it speaks for itself, but with the amount of support we have received and calls from the community we believe it can be something more. Akari holders will then get the chance to influence the future of the project by rallying together their ideas and voting.
                            </p>
                        </RoadmapCard>
                        <RoadmapCard title='Flourish' number='3'>
                            <p>
                            The sky is not the limit, there is nowhere the light cannot reach. To be voted upon by the community.
                            </p>
                        </RoadmapCard>
                    </motion.div>
                </div>
                <div className='hidden sm:flex flex-col flex-start sm:col-span-1 lg:col-span-2 scrollarea'>
                    <Sticky boundaryElement='.scrollarea'>
                        <motion.div
                            initial='hidden'
                            animate={controls}
                            variants={fadeInRight}
                        >
                            <div className='pt-10 3xl:pt-4'>                         
                                <Image layout='intrinsic' placeholder='blur' src={leaning} width={540} height={960} className='brightness-110' alt='Akari Leaning'/>
                            </div>
                        </motion.div>
                    </Sticky>
                </div>
            </div>
        </section>
    )
}

export default Roadmap