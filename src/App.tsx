import { Category } from "./components/categories"
import { Stories } from "./components/experience"
import { Footer } from "./components/footer"
import { Hero } from "./components/hero"
import { Navbar } from "./components/navbar"
import { PopularDestination } from "./components/popDestination"
import { Testimonial } from "./components/testimonial"
import { TopDestination } from "./components/topDestination"

function App() {

  return (
    <>
      <div>
        <Navbar />
        <Hero />
        <Category />
        <Stories />
        <PopularDestination />
        {/* <TopDestination destinations={DestinationArray} /> */}
        <TopDestination/>
        <Testimonial />
        <Footer/>
        
      </div>
    </>
  )
}

export default App
