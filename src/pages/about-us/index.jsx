import HeroBanner from "@/components/HeroBanner";
import IntroBlock from "@/components/IntroBlock";
import ColThreeCard from "@/components/ColThreeCard";
import ImageWithContent from "@/components/ImageWithContent";
import Footer from "@/components/Footer";
import CaseStudies from "@/components/CaseStudies";
export default function AboutUs() {
  const overlay = false;
  const heroBannerData = {
    heading: "Welcome! We are Clear Digital",
    title: "ajay",
  };
  return (
    <div>
      <HeroBanner overlay={overlay} heroBannerData={heroBannerData} />
      <ColThreeCard />
      <IntroBlock />
      <CaseStudies />
      <ImageWithContent />
      <Footer />
    </div>
  );
}
