import styles from "@/styles/ResourceFilter.module.css";
import Image from "next/image";

export default function ResourceFilter() {
  const data = [
    {
      src: "/images/sift.jpg",
      year: "2020",
      topic: "Topic-one",
      title: "Item Title 1",
      blurb: "Description of item 1.",
    },
    {
      src: "/images/nile-banner.png",
      year: "2021",
      topic: "Topic-Two",
      title: "Item Title 2",
      blurb: "Description of item 2.",
    },
    {
      src: "/images/china.png",
      year: "2020",
      topic: "Topic-Two",
      title: "Item Title 3",
      blurb: "Description of item 3.",
    },
    {
      src: "/images/sailpoint-feature.png",
      year: "2022",
      topic: "Topic-one",
      title: "Item Title 4",
      blurb: "Description of item 4.",
    },
    {
      src: "/images/Clear_ViralNation_background_Image.png",
      year: "2023",
      topic: "Topic-Two",
      title: "Item Title 5",
      blurb: "Description of item 5.",
    },
    {
      src: "/images/surescript.png",
      year: "2024",
      topic: "Topic-one",
      title: "Item Title 6",
      blurb: "Description of item 6.",
    },
    {
      src: "/images/Default-Case-Study-Card.png",
      year: "2022",
      topic: "Topic-one",
      title: "Item Title 7",
      blurb: "Description of item 7.",
    },
    {
      src: "/images/CTA-Image-1350.jpg",
      year: "2023",
      topic: "Topic-one",
      title: "Item Title 8",
      blurb: "Description of item 8.",
    },
    {
      src: "/images/Habu-Feature-675-Opt.webp",
      year: "2025",
      topic: "Topic-Two",
      title: "Item Title 9",
      blurb: "Description of item 9.",
    },
  ];

  return (
    <section className="ResourceFilter bg-black overflow-visible">
      <div className="container">
        <div className="introWrap text-center">
          <h3 className="text-white pb-[40px]">Resource</h3>
        </div>
        <div className="outerWrap flex flex-wrap pb-[17px]">
          <h4 className="mr-[263px] text-white">LATEST</h4>
          <div className={`navWrapper ${styles.navWrapper} relative`}>
            <div className={`tableTitle ${styles.tableTitle}`}>
              <p>Year</p>
            </div>
            <ul class={`list ${styles.list}`} id="year">
              <li class="all">All</li>
              <li>
                <span>2020</span>
              </li>
              <li>
                <span>2021</span>
              </li>
              <li>
                <span>2022</span>
              </li>
              <li>
                <span>2023</span>
              </li>
              <li>
                <span>2024</span>
              </li>
              <li>
                <span>2025</span>
              </li>
            </ul>
          </div>
          <div className={`navWrapper ${styles.navWrapper}`}>
            <div className={`tableTitle ${styles.tableTitle}`}>
              <p>Topic</p>
            </div>
            <ul class={`list ${styles.list}`} id="glossary_block">
              <li class="all">All</li>
              <li>
                <span>Topic-one</span>
              </li>
              <li>
                <span>Topic-Two</span>
              </li>
              <li>
                <span>Topic-Three</span>
              </li>
              <li>
                <span>Topic-Four</span>
              </li>
            </ul>
          </div>
          <div
            className={`inputWrapper ${styles.inputWrapper} relative max-w-[373px] w-full h-[43px] bg-transparent`}
          >
            <input
              className="search w-full outline-none pl-[20px] pr-[60px] h-[46px] bg-transparent text-white"
              type="text"
              placeholder="Search"
              name="search"
              aria-label="search"
            />
            <div className="search-btn absolute right-[5px] w-[18px] h-[18px] bottom-[11px] overflow-hidden">
              <Image
                src="/images/search-white.svg"
                alt="search icon"
                width={18}
                height={18}
              />
            </div>
          </div>
        </div>
        <div className="lenthItems">
          <span className="totalReslut text-white">Results</span>
        </div>
        <div className="FilterContentWrap mt-[30px]">
          <div className="FilterBoxWrap">
            <div className="FieldWrap hidden mb-[10px]">
              <span className="FilterBadge relative inline-block text-white bg-red-700 p-[10px] mr-[27px] mb-[10px] cursor-pointer">
                2022
              </span>
            </div>
            <div className="clearBtn hidden mb-[20px]">
              <h6 className="text-white cursor-pointer">Clear All</h6>
            </div>
          </div>
          <div className="innerWrap flex flex-wrap w-[calc(100%+20px)] ml-[-10px] lg:block lg:w-full lg:mx-0">
            {data.map((ResourceFilter, index) => (
              <div className="itemWrap mb-[20px] w-[calc(33.33%-20px)] mx-[10px] lg:mb-[10px] lg:last:mb-0 lg:w-full lg:mx-0">
                <div className="contentInner">
                  <div className="imgWrap h-[280px] overflow-hidden">
                    <Image
                      src={ResourceFilter.src}
                      alt="Clear logo"
                      width={500}
                      height={500}
                      style={{ width: "100%", height: "100%" }}
                    />
                  </div>
                  <div className="bodyContent pt-[25px]">
                    <h6 className="text-white">
                      {ResourceFilter.year} | {ResourceFilter.topic}
                    </h6>
                    <h4 className="text-white pt-[10px]">
                      {ResourceFilter.title}
                    </h4>
                    <p className="text-white  pt-[10px]">
                      {ResourceFilter.blurb}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="no-result hidden">
            <h2 className="text-yellow-400">No result found</h2>
          </div>
          <div className="pagination-button py-[20px]">
            <div className="inner-wrapper text-center">
              <ul id="pagination-container" className="flex justify-center">
                <li className="disabled ml-[10px] mr-[10px]">
                  <span className="current prev">«</span>
                </li>
                <li class="active ml-[10px] mr-[10px]">
                  <span className="current">1</span>
                </li>
                <li className="ml-[10px] mr-[10px]">
                  <a href="#" className="">
                    2
                  </a>
                </li>
                <li className="ml-[10px] mr-[10px]">
                  <a href="#" className=" next">
                    »
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
