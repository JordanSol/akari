import { motion, AnimatePresence } from 'framer-motion'
import { AiOutlineClose } from 'react-icons/ai'

const Sidebar = ({ setMenuOpen, menuOpen }) => {
    return (
        <container className='fixed w-screen h-screen'>
            <AnimatePresence>
            <motiondiv className='fixed w-screen h-screen opacity-50 bg-black top-0 left-0'
                onClick={() => setMenuOpen(false)}
                key='background'
                initial={{ opacity: 0}}
                animate={{ opacity: 1}}
                exit={{ opacity: 0}}
            />
            <motion.nav className='fixed top-0 right-0 h-screen w-screen sm:w-1/2 bg-gray-900 flex-col justify-center items-center text-center p-24'
                key='menu'
                initial={{ x: 100 }}
                animate={{ x: 0}}
                exit={{ x: 100 }}
            >
                <AiOutlineClose onClick={() => setMenuOpen(false)} className='absolute top-12 right-12 text-2xl'/>
                <a href="/">
                    <h2 className='text-4xl'>Akari</h2>
                </a>
                <hr className='my-4'/>
                <ul className=''>
                    <li className='my-3'><a href="#home" className="transition-all hover:text-yellow-200">HOME</a></li>
                    <li className='my-3'><a href="/" className="transition-all hover:text-yellow-200">ABOUT</a></li>
                    <li className='my-3'><a href="/" className="transition-all hover:text-yellow-200">ROADMAP</a></li>
                    <li className='my-3'><a href="/" className="transition-all hover:text-yellow-200">TEAM</a></li>
                </ul>
            </motion.nav>
            </AnimatePresence>
        </container>
    )
}

export default Sidebar