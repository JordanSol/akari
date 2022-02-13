import Image from 'next/image'
import { motion } from 'framer-motion'


const TeamCard = ({image, name, title, children}) => {
    return (
        <motion.div className='w-full shadow-sm h-full flex flex-col justify-start items-center px-6 pb-10 bg-gray-400/10 border-[1px] border-white/10 rounded backdrop-filter backdrop-blur-lg'
            whileHover={{scale: 1.02, y: -10, transition: {duration: 0.3, type: 'spring', bounce: .5}}}
        >
            <div className='w-[100px] h-[100px] rounded-full overflow-hidden border-[1px] border-gray-500 bg-yellow-300 mt-[-50px]'>
                <Image src={image} width='100' height='100' alt='team member'
                />
            </div>
            <h4 className='text-xl sm:text-2xl mt-2'>{name}</h4>
            <span className='text-gray-400 text-sm text-center italic mb-2'>{title}</span>
            <hr className='w-20 rounded border-[1px] border-white/20 mb-2'/>
            <p className='text-center text-gray-200'>{children}</p>
        </motion.div>
    )
}

export default TeamCard
