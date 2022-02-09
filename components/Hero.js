const Hero = () => {
    return (
        <section id='home' className='w-screen h-screen relative flex justify-center items-center'>
            <div className=''>
                <h1 className='text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-center  font-acier text-white'>Akari</h1>
                <div className='w-40 sm:w-48 md:w-72 lg:w-96 mt-2 relative'>
                    <img src="/Vector.svg" alt="Akari NFT" />
                </div>
            </div>
            <span className='absolute bottom-12 left-12 rotate-270 text-white font-acierOutline text-5xl'>.0<span>1</span></span>
        </section>
    )
}

export default Hero