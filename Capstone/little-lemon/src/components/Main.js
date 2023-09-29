import Testimonials from "./Testimonials"
import Specials from "./Specials"
import About from "./About"


function Main() {
    return (
        <main className="main grid-container">
            <Specials/>
            <Testimonials/>
            <About/>
        </main>
    )
}

export default Main;