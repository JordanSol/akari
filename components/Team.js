import TeamCard from "./TeamCard"
import corvidd from '../assets/corvidd.png'
import aime from '../assets/Aime.png'
import jaykwa from '../assets/Jaykwa.png'
import octillion from '../assets/Octillion.png'
import { useInView } from 'react-intersection-observer'
import { useAnimation, m } from 'framer-motion'
import { useEffect } from 'react'

const fadeIn = {
    visible: { opacity: 1, y: 0, transition: {duration: .5, delay: .5, type: 'spring', bounce: .25}},
    hidden: { opacity: 0, y: 50}
}

const fadeInRight = {
    visible: { opacity: 1, x: 0, transition: {duration: .9, delay: .5, type: 'spring', bounce: .5}},
    hidden: { opacity: 0, x: 100}
}

const Team = () => {
    const [ ref, inView ] = useInView()
    const controls = useAnimation()

    useEffect(() => {
        if (inView) {
            controls.start('visible')
        }
    }, [controls, inView])

    return (
        <section id='team' className='z-10 relative w-screen bg-darkPurple shadow-innerLg flex justify-center py-20 bg-teambg bg-center bg-cover border-yellow-300 border-t-4 border-b-4'>
            <div className='max-w-screen-xl w-full px-12 flex flex-col justify-start items-center'>
                <div ref={ref} className='w-full'>
                    <m.div
                        initial='hidden'
                        animate={controls}
                        variants={fadeInRight}
                    >
                            <h3 className='text-4xl md:text-5xl lg:text-6xl w-full text-right'><span className='text-yellow-300'>Our </span>Team</h3>
                    </m.div>
                </div>
                <m.div className='grid gap-14 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full pb-6 py-20'
                    initial='hidden'
                    animate={controls}
                    variants={fadeIn}
                >   
                        <TeamCard name='Octillion' image={octillion} title='Founder'>
                            Octillion is a Founder of Akari, keeping the continued development on track for success and our community thriving.
                        </TeamCard>
                        <TeamCard name='Aime' image={aime} title='Founder / Developer'>
                            Aime is a Founder and Developer, working hard to ensure the continued growth of 
                            our community.
                        </TeamCard>
                        <TeamCard name='Jaykwa' image={jaykwa} title='Artist'>
                            Jaykwa is the talent behind the entire aesthetic of Akari. She delivers consistenly 
                            excellent artwork for us all to enjoy.
                        </TeamCard>
                        <TeamCard name='Corvidd' image={corvidd} title='Web Developer'>
                            Corvidd is the Frontend Web Developer at Akari, delivering our message in a sleek package.
                        </TeamCard>
                </m.div>
            </div>
        </section>
    )
}

export default Team