import { FaDiscord, FaTwitter } from 'react-icons/fa'

const Footer = () => {
    return (
        <footer className='w-100 h-60 bg-darkPurple flex items-center justify-center'>
            <div className='w-full max-w-screen-xl flex justify-between px-12'>
                <h5 className='text-2xl font-acierOutline'>Akari</h5>
                <div className='flex text-2xl justify-between w-16'>
                    <FaDiscord/>
                    <FaTwitter/>
                </div>
            </div>
        </footer>
    )
}

export default Footer