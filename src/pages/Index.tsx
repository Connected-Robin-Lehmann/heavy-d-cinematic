import HeroSection from "@/components/HeroSection";
import IdentityStrip from "@/components/IdentityStrip";
import PanelsSection from "@/components/PanelsSection";
import YoutubeSection from "@/components/YoutubeSection";
import StatsSection from "@/components/StatsSection";
import FooterSection from "@/components/FooterSection";
import { useScrollFadeIn } from "@/hooks/use-scroll-fade";

const ScrollSection = ({ children }: { children: React.ReactNode }) => {
  const { ref, className } = useScrollFadeIn();
  return <div ref={ref} className={className}>{children}</div>;
};

const Index = () => {
  return (
    <div className="film-grain bg-background min-h-screen overflow-x-hidden">
      <HeroSection />
      <ScrollSection><IdentityStrip /></ScrollSection>
      <ScrollSection><PanelsSection /></ScrollSection>
      <ScrollSection><YoutubeSection /></ScrollSection>
      <ScrollSection><StatsSection /></ScrollSection>
      <ScrollSection><FooterSection /></ScrollSection>
    </div>
  );
};

export default Index;
