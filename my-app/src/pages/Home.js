import React from 'react'
import HeroSection from '../components/HeroSection'
import ImproveSkills from '../components/ImproveSkills';
import TextDetail from '../components/TextDetail'
import ChiefsSection from '../components/ChiefsSection'
import TitleTopChief from '../components/TitleTopChief';
const Home = () =>{
    return(
        <>
        <main>
            <HeroSection />
            <ImproveSkills />
            <TextDetail />
            <TitleTopChief />
            <ChiefsSection/>
        </main>
        </>
    )
}

export default Home