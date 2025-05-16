import { useEffect } from 'react'
import { initSmoothScroll } from '../../libs/utils/smoothScroll'
import Header from "../../components/fragments/Header"
import Features from "../../components/fragments/Features"
import About from "../../components/fragments/About"
import Services from "../../components/fragments/Service"
import DiseaseInfo from '../../components/fragments/DiseaseInfo'
import Contact from '../../components/fragments/Contact'
import "../../App.css"

export default function HomePage() {
    useEffect(() => {
        const scroll = initSmoothScroll()

        return () => {
            scroll.destroy()
        }
    }, [])

    return (
        <main>
            <Header id="header" />

            <About id="about" />

            <Features id="features" />

            <Services id="services" />

            <DiseaseInfo id="disease-info" />

            <Contact id="contact" />
        </main>
    )
}