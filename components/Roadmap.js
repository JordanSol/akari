import Image from 'next/image'
import Sticky from 'react-sticky-el'
import RoadmapCard from "./RoadmapCard"
import FadeInLeft from "./FadeInLeft"
import FadeInRight from "./FadeInRight"
import leaning from '../assets/leaning.png'

const Roadmap = () => {
    return (
        <section id='roadmap' className='w-screen min-h-screen py-20 flex flex-col items-center bg-sitePurple'>
            <div className='max-w-screen-xl px-12 w-full'><FadeInLeft><h2 className='w-full text-4xl md:text-5xl lg:text-6xl mb-5 lg:mb-6'>Road<span className='text-yellow-300'>map</span></h2></FadeInLeft></div>
            <div className='relative max-w-screen-xl px-12 w-full grid gap-20 grid-cols-1 sm:grid-cols-3 lg:grid-cols-4'>
                <div className='sm:col-span-2'>
                    <FadeInLeft>     
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
                            </p>
                        </RoadmapCard>
                        <RoadmapCard title='Bloom' number='2'>
                            <p>
                            We will be applying for listing immediately upon sellout, and shortly after that holder verification will be set up in the discord. Holders of Akari will have access to exclusive Alpha channels run by the owners and can share their own information for a chance to obtain more important roles within the community. Akari holders will influence the future of the project by community votes and ideas. 
                            </p>
                        </RoadmapCard>
                        <RoadmapCard title='Flourish' number='3'>
                            <p>The sky is not the limit, there is nowhere the light cannot reach. To be revealed.</p>
                            <br/>
                            <p className='font-bold'>Potentials / Exploring / Considering</p>
                            <ul className="list-disc ml-5">
                                <li>Japanese Visual Novel</li>
                                <li>Staking with customization</li>
                                <li>DAO</li>
                            </ul>
                        </RoadmapCard>
                    </FadeInLeft>
                </div>
                <div className='hidden sm:flex flex-col flex-start sm:col-span-1 lg:col-span-2 scrollarea'>
                    <Sticky boundaryElement='.scrollarea'>
                        <FadeInRight>
                            <Image layout='intrinsic' src={leaning} width={540} height={960} alt='Akari Leaning'/>
                        </FadeInRight>
                    </Sticky>
                </div>
            </div>
        </section>
    )
}

export default Roadmap