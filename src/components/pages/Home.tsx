import BookingSteps from "../organs/BookingSteps"
import HeroSection from "../organs/HeroSection"
// import NewsLetter from "../organs/NewsLetter"
// import Partners from "../organs/Partners"
import Services from "../organs/Services"
import Testimonials from "../organs/Testimonials"
import TopDestination from "../organs/TopDestination"
import MyImageCarousel from "../organs/MyImageCarousel"


const Home = () => {
    return (
        <>
            <HeroSection />
            <Services />
            <TopDestination />
            <BookingSteps />
            <Testimonials />
            {/* <Partners /> */}
            <MyImageCarousel/>
            {/* <NewsLetter /> */}
            {/* newsletter ki jagah gallery ka component dalna he */}
        </>
    )
}

export default Home