import RoadmapCard from "./RoadmapCard"
import FadeInLeft from "./FadeInLeft"
import FadeInRight from "./FadeInRight"

const Roadmap = () => {
    return (
        <section className='w-screen min-h-screen px-12 py-12 flex flex-col items-center bg-sitePurple'>
            <div className='max-w-screen-xl w-full'><FadeInLeft><h2 className='w-full text-4xl md:text-5xl lg:text-6xl mb-5 lg:mb-6'>Road<span className='text-yellow-300'>map</span></h2></FadeInLeft></div>
            <div className='max-w-screen-xl w-full grid gap-20 grid-cols-1 sm:grid-cols-3 lg:grid-cols-4'>
                <div className='col-span-2'>
                    <FadeInLeft>     
                        <RoadmapCard title='Building' number='0'>
                            <p>Our focus first and foremost is the community. Through the use of social media we hope to grow the Akari brand and community into something everyone can find a place in and be a part of. We are taking the fundamentals of web3 and decentralization into account here, the community is our foundation.</p>
                            <br/>
                            <p>Prominent members and early supporters in the community will earn a whitelist as a reward for their dedication. We will also be offering whitelistings through games and objectives held in the discord. </p>
                        </RoadmapCard>
                    </FadeInLeft>
                    <FadeInRight>
                        <RoadmapCard title='Launch Day' number='1'>
                            <p>Pre-sale access will be given to OG and Whitelisted members of the community, we believe in rewarding those that take part and get involved. We also recognize that the NFT space is large and expanding at an alarming rate, sometimes you miss getting into a project early. So we are making sure to set aside a portion for public sale so everyone has a chance to hop on for the ride.</p>
                            <br/>
                            <p>We will be launching on (me launchpad, monkelabs launchpad, our own site?) exclusively. </p>
                        </RoadmapCard>
                    </FadeInRight>
                    <FadeInLeft>
                        <RoadmapCard title='Post-Launch' number='2'>
                            <p>Secondary listing<br/>
                            Holder verification<br/>
                            Holder only - giveaways, WL opportunities, etc. 
                            Form a DAO? can set aside a portion of royalties for the community to vote on using?
                            I can provide upcoming SOL nft info, having an Akari is access to that info and the community, etc.</p>

                        </RoadmapCard>
                    </FadeInLeft>
                    <FadeInRight>
                        <RoadmapCard title='...' number='3'>
                            <p>The sky is not the limit, there is nowhere the light cannot reach.</p>
                        </RoadmapCard>
                    </FadeInRight>
                </div>
            </div>
        </section>
    )
}

export default Roadmap