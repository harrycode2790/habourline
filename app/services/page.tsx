import Image from "next/image";
import HeroSection from "@/components/HeroSection";
import TwoColumnText from "@/components/TwoColumnText";
import ServicesList from "./services-list";
import QuoteSection from "./quote-section";
import FooterPage from "@/components/FooterPage";
import Header from "@/components/Header";

export default function ServicesPage() {

    return (
        <>
            <Header backgroundColor="#1019C2" textColor="white" hoverColor="white" imageUrl="/images/logoW.png" />
            <HeroSection title="Together with our carefully selected partners, we offer you global service"
                description="We provide customised transportations, forwarding and storage services as well as 
            versatile delivery management solutions everywhere in the world."
                backgroundColor="#1019C2" />

            <div className="px-6 py-12 md:py-20 md:px-30">

                <TwoColumnText leftText="Transportation and special services"
                    rightText={{
                        paragraphs: [`Whatever your transportation needs, you can rest assured that we will ensure timely 
                        delivery together with our competent partners, while you focus on your core business.`]
                    }} />

                <div className="flex justify-center md:mt-12">
                    <Image
                        src="/images/services-image.png"
                        alt="Shipping Containers"
                        width={900}
                        height={300}
                        className=" w-full h-auto "
                    />
                </div>

                <ServicesList />
            </div>

            <QuoteSection />

            <div className="px-6 pb-6 md:px-30">
                <FooterPage />
            </div>
        </>
    )
}