import Navbar from './Navbar'

export default function Layout({ children }) {
    return (
        <main className='w-full overflow-hidden'>
            <Navbar/>
            {children}
        </main>
    )
}