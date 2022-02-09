import { motion } from 'framer-motion'

const Navbar = () => {
    return (
        <nav className='w-screen z-10 text-white h-24 px-12 py-7 flex justify-between align-center fixed top-0'>
            <a href="/" className='text-3xl font-acierOutline transition-all hover:text-yellow-200'>Akari</a>
            <ul className='list-none flex justify-between w-80 pt-1 3xl:d-none'>
                <li><a href="/" className="transition-all hover:text-yellow-200">Home</a></li>
                <li><a href="/" className="transition-all hover:text-yellow-200">About</a></li>
                <li><a href="/" className="transition-all hover:text-yellow-200">Roadmap</a></li>
                <li><a href="/" className="transition-all hover:text-yellow-200">Team</a></li>
            </ul>
        </nav>
    )
}

export default Navbar