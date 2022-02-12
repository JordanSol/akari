import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout({ children }) {
    return (
        <main className='w-full overflow-hidden'>
            <Navbar/>
            {children}
            <Footer/>
        </main>
    )
}