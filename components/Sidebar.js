import { motion, AnimatePresence } from 'framer-motion'
import { AiOutlineClose } from 'react-icons/ai'
import { FaDiscord, FaTwitter } from 'react-icons/fa'
import Link from 'next/link'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Sidebar = ({toggle, menuOpen }) => {
    return (
        <AnimatePresence>
        { menuOpen && (
        <div className='fixed w-screen h-screen z-50'>
            <motion.div className='fixed w-screen h-screen opacity-50 bg-black top-0 left-0'
                onClick={() => toggle()}
                key='background'
                variants= {{
                    hidden: {
                        opacity: 0,
                    },
                    visible: {
                        opacity: 0.75,
                        transition: {
                            duration: .1,
                        }
                    }
                }}
                initial='hidden'
                animate='visible'
                exit='hidden'
            />
            <motion.nav className='fixed top-0 right-0 h-screen w-screen sm:w-1/2 bg-gray-900 flex-col justify-center items-center text-center p-24'
                key='menu'
                initial={{ x: '100vh' }}
                animate={{ x: 0 }}
                transition={{ type: 'spring', damping: 15, duration: .5}}
                exit={{ x: '100vh' }}

            >
                <AiOutlineClose onClick={() => toggle()} className='absolute top-12 right-12 text-2xl'/>
                <Link href="/" passHref>
                    <h2 className='text-4xl'>Akari</h2>
                </Link>
                <hr className='my-4'/>
                <ul className=''>
                    <li className='my-4'><AnchorLink onClick={() => toggle()} href="#home" className="transition-all hover:text-yellow-200">HOME</AnchorLink></li>
                    <li className='my-4'><AnchorLink onClick={() => toggle()} href="#about" className="transition-all hover:text-yellow-200">ABOUT</AnchorLink></li>
                    <li className='my-4'><AnchorLink onClick={() => toggle()} href="#team" className="transition-all hover:text-yellow-200">TEAM</AnchorLink></li>
                    <li className='my-4'><AnchorLink onClick={() => toggle()} href="#roadmap" className="transition-all hover:text-yellow-200">ROADMAP</AnchorLink></li>
                    <li className='my-4'><AnchorLink onClick={() => toggle()} href="#Showcase" className="transition-all hover:text-yellow-200">SHOWCASE</AnchorLink></li>
                    <li><hr className='my-4'/></li>
                    <li>
                        <div className='flex justify-center text-3xl'>
                            <a href="https://discord.gg/AkariLabs" target='_blank' rel='noreferrer'>
                            <FaDiscord className='mx-2'/>   
                            </a>
                            <a href="https://twitter.com/AkariLabs" target='_blank' rel='noreferrer'>
                            <FaTwitter className='mx-2'/>
                            </a>
                        </div>
                    </li>
                </ul>
            </motion.nav>
        </div>
        )}
        </AnimatePresence>
    )
}

export default Sidebar