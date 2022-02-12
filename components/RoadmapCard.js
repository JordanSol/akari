const RoadmapCard = ({children, title, number}) => {
    return (
        <div className='relative w-full h-full z-10 rounded-lg bg-darkPurple border-[1px] border-[#1f013b] pl-16 pr-8 sm:px-20 py-8 drop-shadow-xl mb-14'>
            <h3 className='text-2xl sm:text-3xl'>{title}</h3>
            <hr className='w-3/4 border-1 my-3 bg-yellow-100 border-yellow-100'/>
            {children}
            <div className='absolute top-6 right-8 opacity-20 text-violet-300 font-acier text-5xl'>
                {number}
            </div>
            <div className='absolute h-full flex flex-col items-center top-6 left-2'>
                <div className='w-[51px] h-[51px] bg-darkPurple z-30 flex justify-center items-center relative'>
                    <div className='absolute blur-[6px] w-[25px] h-[25px] rounded-full top-1/4 left-1/4 bg-yellow-100'/>
                    <div className='w-[25px] h-[25px] relative flex justify-center items-center rounded-full bg-yellow-400'>
                        <div className='w-[10px] h-[10px] rounded-full bg-yellow-600'/>
                    </div>
                </div>
                <div className='w-[3px] rounded h-full mt-1 z-20 bg-gradient-to-b from-yellow-200 to-violet-300'/>
            </div>
        </div>
    )
}

export default RoadmapCard