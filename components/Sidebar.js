import { motion, AnimatePresence } from 'framer-motion'
import { AiOutlineClose } from 'react-icons/ai'
import { FaDiscord, FaTwitter } from 'react-icons/fa'

const Sidebar = ({ setMenuOpen, menuOpen }) => {
    return (
        <AnimatePresence>
        { menuOpen && (
        <container className='fixed w-screen h-screen z-50'>
            <motion.div className='fixed w-screen h-screen opacity-50 bg-black top-0 left-0'
                onClick={() => setMenuOpen(false)}
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
                initial={{ x: 1000 }}
                animate={{ x: 0 }}
                exit={{ x: 1000 }}

            >
                <AiOutlineClose onClick={() => setMenuOpen(false)} className='absolute top-12 right-12 text-2xl'/>
                <a href="/">
                    <h2 className='text-4xl'>Akari</h2>
                </a>
                <hr className='my-4'/>
                <ul className=''>
                    <li className='my-4'><a href="#home" className="transition-all hover:text-yellow-200">HOME</a></li>
                    <li className='my-4'><a href="/" className="transition-all hover:text-yellow-200">ABOUT</a></li>
                    <li className='my-4'><a href="/" className="transition-all hover:text-yellow-200">ROADMAP</a></li>
                    <li className='my-4'><a href="/" className="transition-all hover:text-yellow-200">TEAM</a></li>
                    <li><hr className='my-4'/></li>
                    <li>
                        <div className='flex justify-center text-3xl'>
                            <FaDiscord className='mx-2'/>
                            <FaTwitter className='mx-2'/>
                        </div>
                    </li>
                </ul>
            </motion.nav>
        </container>
        )}
        </AnimatePresence>
    )
}

export default Sidebar