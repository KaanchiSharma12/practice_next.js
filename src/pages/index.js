import ColThreeCard from "@/components/ColThreeCard";
import HeroBanner from "@/components/HeroBanner";
import ImageWithContent from "@/components/ImageWithContent";
import IntroBlock from "@/components/IntroBlock";
import Cta from "@/components/Cta";
import Footer from "@/components/Footer";
import CaseStudies from "@/components/CaseStudies";
import ResourceFilter from "@/components/ResourceFilter";
import banner from "@/components/Banner";

export default function Home() {
  const overlay = true;
  const heroBannerData = {
    heading: "Hello! We are Clear Digital",
    title: "kaanchi sharma",

    heading: "lorem ipsum",
    title: "React is a JavaScript library",
  };
  return (
    <div>
      <HeroBanner overlay={overlay} heroBannerData={heroBannerData} />
      {/* <ColThreeCard /> */}
      {/* <ImageWithContent /> */}
      <IntroBlock />
      <CaseStudies />
      {/* <CaseStudies />
      <Cta />
      {/* <Footer /> */}
    </div>
  );
}
