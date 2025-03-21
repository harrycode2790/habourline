import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import TwoColumnText from "@/components/TwoColumnText";
import LifeInside from "./life-inside";
import AboutInfoSection from "./about-info";
import FooterPage from "@/components/FooterPage";

export default function AboutPage() {
    const stats = [
        { value: "320k +", title: "People working at Generix" },
        { value: "1,035k", title: "Parcels delivered per year" },
        { value: "409", title: "Territories served" },
        ];

    return (
        <>
       
        <HeroSection
            title="Habourline – supporting your needs with logistics"
            description="Sometimes features require a short description. This can be detailed description or just a short text."
            backgroundImage="/images/about-top.png"
        />

        <div className="container px-6 py-12 md:py-20 md:px-50">
            <StatsSection stats= {stats} />
            <TwoColumnText
            leftText="We are the digital logistics company for Nigeria"
            rightText={{
            bold: "We want to lead the way towards sustainable DIGITAL logistics – we strive to run efficient operations by being a highly trusted company and partner that protect the environment, provide an ideal place to work for all.",
            paragraphs: [
                "With well-working logistics, your business also runs smoother. This goal guides our everyday actions.",
                "We are a rapidly growing domestic family business, and one of Finland’s largest businesses in the logistics field. We offer customised transportation, forwarding and storage services as well as versatile delivery chain management solutions everywhere in the world.",
                "Our workdays are filled with new transportations and logistics services, and new opportunities like your commission. We will handle it carefully and on time, together with our trusted partners."
            ],
            }}
            />
            <LifeInside />

            <AboutInfoSection />

            <FooterPage />
        </div>
       
        </>
    );
}
