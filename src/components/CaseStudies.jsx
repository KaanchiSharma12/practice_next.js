import styles from "@/styles/CaseStudies.module.css";
export default function CaseStudies() {
  const data = [
    {
      link: "https://www.cleardigital.com/work/case-study/sift",
      imgSrc: "/images/sift.jpg",
      logoBlack: "/images/sift-black.svg",
      logoWhite: "/images/sift-white.svg",
      title: "Sift: Data management realigned and redefined",
      blurb:
        "As a pioneer in AI-powered digital risk assessment, Sift helps digital businesses grow with confidence. While their brand set the standard that many others aspired to, it.",
    },
    {
      link: "https://www.cleardigital.com/work/case-study/nile",
      imgSrc: "/images/nile-banner.png",
      logoBlack: "/images/nile-logo-black.svg",
      logoWhite: "/images/nile-white-icon.svg",
      title: "Nile Website Redesign Boosts Conversions by 42%",
      blurb:
        "Revamped Nile’s brand and website with AI-driven imagery, dynamic design, and interactive features.",
    },
    {
      link: "https://www.cleardigital.com/work/case-study/china-telecom",
      imgSrc: "/images/china.png",
      logoBlack: "/images/Case_Study_China_Telecom_White-Opt.svg",
      logoWhite: "/images/white-china.svg",
      title: "China Telecom",
      blurb:
        "Transformed CTA’s digital presence with a modern, unified site, enhancing global reach and storytelling impact.",
    },
    {
      link: "https://www.cleardigital.com/work/case-study/sailpoint",
      imgSrc: "/images/sailpoint-feature.png",
      logoBlack: "/images/Case_Study_SailPoint_White-Opt.svg",
      logoWhite: "/images/sailpoin-white.svg",
      title: "SailPoint: Enterprise identity security made simple and smart",
      blurb:
        "Revamped SailPoint's site with a comprehensive design system, content, and targeted user flows for better engagement.",
    },
    {
      link: "https://www.cleardigital.com/work/case-study/viral-nation",
      imgSrc: "/images/Clear_ViralNation_background_Image.png",
      logoBlack: "/images/Case_Study_Viral_Nation_Black.svg",
      logoWhite: "/images/Case_Study_Viral_Nation_White-Opt.svg",
      title:
        "Viral Nation’s Award-Winning Website Redesign Increases Conversions 104%",
      blurb:
        "Transformed Viral Nation’s brand with a new visual indentity and website UX, expanding its B2B focus and.",
    },
    {
      link: "https://www.cleardigital.com/work/case-study/surescripts",
      imgSrc: "/images/surescript.png",
      logoBlack: "/images/Case_Study_Surescripts_Black-Opt.svg",
      logoWhite: "/images/Case_Study_Surescripts_White-Opt.svg",
      title:
        "Surescripts Award-Winning Website Redesign Increases Page Views 81%",
      blurb:
        "Revamped Surescripts' B2B healthcare site with vibrant design, tailored UX, and optimized content for enhance.",
    },
    {
      link: "https://www.cleardigital.com/work/case-study/habu",
      imgSrc: "/images/Default-Case-Study-Card.png",
      logoBlack: "/images/Case_Study_Habu_Black.svg",
      logoWhite: "/images/Case_Study_Habu_White-Opt.svg",
      title: "Habu Website Redesign Leads to $200M Acquisition",
      blurb:
        "Developed a scalable, modular website for Habu, enhancing brand visibility and supporting its successful.",
    },
  ];

  return (
    <section className="CaseStudies no-padding">
      {data.map((outerWrap) => (
        <div
          className={`outerWrap ${styles.outerWrap} relative flex items-center min-h-[400px] sm:text-center sm:py-[30px]`}
        >
          <a href={outerWrap.link} class="no-link">
            .
          </a>
          <div
            className={`hoverImg ${styles.hoverImg} absolute top-[0] bottom-[0] left-[0] w-[100%] h-[100%]`}
          >
            <img
              className="h-[100%] w-[100%] relative"
              src={outerWrap.imgSrc}
              alt="icon"
            />
          </div>
          <div className="container">
            <div
              className={`contentWrap ${styles.contentWrap} flex items-center sm:block`}
            >
              <div className="itemWrap w-[50%] sm:w-full">
                <div className="logoWrap sm:mb-[20px]">
                  <div
                    className={`defaultLogo ${styles.defaultLogo} w-full max-w-[180px] h-[60px] overflow-hidden sm:m-auto`}
                  >
                    <img
                      className="h-[100%] w-[100%] object-contain"
                      src={outerWrap.logoBlack}
                      alt="icon"
                    />
                  </div>
                  <div
                    className={`hoverLogo ${styles.hoverLogo} w-full max-w-[180px] h-[60px] overflow-hidden sm:m-auto`}
                  >
                    <img
                      className="h-[100%] w-[100%] object-contain"
                      src={outerWrap.logoWhite}
                      alt="icon"
                    />
                  </div>
                </div>
              </div>
              <div className="itemWrap w-[50%] sm:w-full">
                <div
                  className={`introWrap pl-[20px] sm:pl-[0] ${styles.introWrap} `}
                >
                  <h4 className="text-black font-bold">{outerWrap.title}</h4>
                  <p className="text-black sm:pt-[15px]">{outerWrap.blurb}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
