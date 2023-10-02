import Testimonials from "./Testimonials"
import Specials from "./Specials"
import About from "./About"


function HomepageMain() {
    return (
        <main className="main grid-container">
            <Specials/>
            <Testimonials/>
            <About/>
        </main>
    )
}

export default HomepageMain;