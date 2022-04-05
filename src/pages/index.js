import React, {useState} from 'react'
import Features from '../components/Features'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'
import InfoSection from '../components/InfoSection'
import { homeObjOne, homeObjTwo, homeObjThree } from '../components/InfoSection/Data'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => {
        setIsOpen(!isOpen)
    };

  return (
    <>
    <Sidebar isOpen={isOpen} toggle={toggle} />
    <Navbar toggle={toggle}/>
    <HeroSection />
    <InfoSection{...homeObjOne} />
    <InfoSection{...homeObjTwo} />
    <Features />
    <InfoSection{...homeObjThree} />
    <Footer />
    </>
  )
}

export default Home