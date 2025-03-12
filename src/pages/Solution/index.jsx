import HeroBanner from "@/components/HeroBanner";
import Footer from "@/components/Footer";
import Detail from "@/components/Detail";

export default function Solution() {
  const overlay = false;
  const heroBannerData = {
    heading: "Welcome! We are Clear Digital",
    title: "Solution",
    styles: "h-full",
  };
  return (
    <div>
      <HeroBanner overlay={overlay} heroBannerData={heroBannerData} />
      <Detail />
      <Footer />
    </div>
  );
}
