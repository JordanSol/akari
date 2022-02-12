import About from "../components/About"
import Hero from "../components/Hero"
import Roadmap from "../components/Roadmap"
import Team from '../components/Team'
import NoSsr from "../components/no-ssr"

const HomePage = () => {
    return (
        <container className=''>
            <Hero/>
            <About/>
            <Team/>
            <Roadmap/>
        </container>
    )
}

export default HomePage