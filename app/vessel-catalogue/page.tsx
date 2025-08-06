import FooterPage from '@/components/FooterPage'
import Header from '@/components/Header'
import VesselsSection from '@/components/vesselsSection'



const vesselPage = () => {
    return (
        <>
            <Header />

            <div className="px-6 py-12 md:py-20 md:px-50">

                <p className="text-4xl md:text-5xl font-bold text-center md:text-start">Vessel Catalogue</p>
                <VesselsSection />
                <FooterPage />
            </div>
        </>
    )
}

export default vesselPage
