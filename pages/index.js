import About from "../components/About"
import Hero from "../components/Hero"
import NoSsr from "../components/no-ssr"

const HomePage = () => {
    return (
        <container className=''>
            <Hero/>
            <About/>
        </container>
    )
}

export default HomePage