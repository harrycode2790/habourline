import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";

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
        <StatsSection stats= {stats} />
        </>
    );
}
