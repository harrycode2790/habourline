import HeroSection from "@/components/HeroSection";
import TwoColumnText from "@/components/TwoColumnText";

export default function ServicesPage() {

    return(
        <>
            <HeroSection title="Together with our carefully selected partners, we offer you global service"
            description="We provide customised transportations, forwarding and storage services as well as 
            versatile delivery management solutions everywhere in the world."
            backgroundColor="#1019C2"/>  
            <div className="container px-6 py-12 md:py-20 md:px-30">
                <TwoColumnText leftText="Transportation and special services"
                rightText={{
                    paragraphs: [`Whatever your transportation needs, you can rest assured that we will ensure timely 
                        delivery together with our competent partners, while you focus on your core business.`]
                }}/>

            </div>
        </>
    )
}