import { FaBars } from 'react-icons/fa'
import { useState } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Link from 'next/link'

import Sidebar from './Sidebar'

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    const toggle = () => setMenuOpen(!menuOpen)

    return (
        <nav className='w-screen z-100 text-white h-24 px-12 py-7 flex justify-between align-center fixed top-0'>
            <Link href="/" passHref><h3 className='text-3xl font-acierOutline transition-all hover:text-yellow-200 cursor-pointer'>Akari</h3></Link>
            <ul className='hidden md:flex list-none justify-between w-80 pt-1 3xl:d-none'>
                <li><AnchorLink href="#home" className="transition-all hover:text-yellow-200" passHref>HOME</AnchorLink></li>
                <li><AnchorLink href="#about" className="transition-all hover:text-yellow-200">ABOUT</AnchorLink></li>
                <li><AnchorLink href="#team" className="transition-all hover:text-yellow-200" passHref>TEAM</AnchorLink></li>
                <li><AnchorLink href="#roadmap" className="transition-all hover:text-yellow-200" passHref>ROADMAP</AnchorLink></li>
            </ul>
            <FaBars onClick={() => setMenuOpen(true)} className='text-2xl md:hidden cursor-pointer hover:text-yellow-200'/>
            <Sidebar toggle={toggle} setMenuOpen={setMenuOpen} menuOpen={menuOpen}/>
        </nav>
    )
}

export default Navbar