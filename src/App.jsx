import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Services from './components/sections/Services';
import WhyChooseUs from './components/sections/WhyChooseUs';
import Gallery from './components/sections/Gallery';
import Process from './components/sections/Process';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';
import FloatingContactButtons from './components/layout/FloatingContactButtons';

function App() {
  return (
    <div className="font-sans antialiased text-gray-900 bg-gray-50">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyChooseUs />
        <Gallery />
        <Process />
        <Contact />
      </main>
      <Footer />
      <FloatingContactButtons />
    </div>
  );
}

export default App;
