import About from "../components/About"
import Hero from "../components/Hero"
import NoSsr from "../components/no-ssr"

const HomePage = () => {
    return (
        <container className=''>
            <NoSsr>
                <Hero/>
            </NoSsr>
            <About/>
        </container>
    )
}

export default HomePage