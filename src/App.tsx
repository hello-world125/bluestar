import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import WhyBlueStar from './components/WhyBlueStar'
import Process from './components/Process'
import About from './components/About'
import Testimonials from './components/Testimonials'
import CtaBanner from './components/CtaBanner'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <a
        href="#main"
        className="sr-only z-[100] rounded-full bg-white px-4 py-2 font-semibold text-midnight focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <Services />
        <WhyBlueStar />
        <Process />
        <About />
        <Testimonials />
        <CtaBanner />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
