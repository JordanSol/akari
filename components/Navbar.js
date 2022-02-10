import { FaBars } from 'react-icons/fa'
import { useState } from 'react'
import Link from 'next/link'

import Sidebar from './Sidebar'

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <nav className='w-screen z-40 text-white h-24 px-12 py-7 flex justify-between align-center fixed top-0'>
            <Link href="/" passHref><h3 className='text-3xl font-acierOutline transition-all hover:text-yellow-200 cursor-pointer'>Akari</h3></Link>
            <ul className='hidden md:flex list-none justify-between w-80 pt-1 3xl:d-none'>
                <li><Link href="#home" className="transition-all hover:text-yellow-200">Home</Link></li>
                <li><Link href="/" className="transition-all hover:text-yellow-200">About</Link></li>
                <li><Link href="/" className="transition-all hover:text-yellow-200">Roadmap</Link></li>
                <li><Link href="/" className="transition-all hover:text-yellow-200">Team</Link></li>
            </ul>
            <FaBars onClick={() => setMenuOpen(true)} className='text-2xl md:hidden cursor-pointer hover:text-yellow-200'/>
            <Sidebar setMenuOpen={setMenuOpen} menuOpen={menuOpen}/>
        </nav>
    )
}

export default Navbar