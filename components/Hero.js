const Hero = () => {
    return (
        <section className='w-screen h-screen relative flex justify-center items-center'>
            <div className=''>
                <h1 className='text-9xl text-center h-40 font-acier text-white'>Akari</h1>
                <div className='w-96 mt-6 relative'>
                    <img src="/Vector.svg" alt="Akari NFT" />
                </div>
            </div>
            <span className='absolute bottom-8 left-12 rotate-270 text-white font-acierOutline text-5xl'>.0<span>1</span></span>
        </section>
    )
}

export default Hero