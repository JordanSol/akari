import About from "../components/About"
import Hero from "../components/Hero"
import Roadmap from "../components/Roadmap"
import NoSsr from "../components/no-ssr"

const HomePage = () => {
    return (
        <container className=''>
            <Hero/>
            <About/>
            <Roadmap/>
        </container>
    )
}

export default HomePage