export default function IntroBlock() {
  return (
    <section className="IntroBlock">
      <div className="container">
        <div className="introWrap text-center">
          <h3 className="text-black">What is NextJS used for?s</h3>
          <p className="pt-[15px] text-black">
            Next. js is a React framework that enables several extra features, including server-side rendering and static rendering. React is a JavaScript library that is traditionally used to build web applications rendered in the client's browser with JavaScript.
          </p>
          <div className="btnWrap mt-[20px]">
            <a
              href="#"
              class="pink-btn link-white text-white"
              data-cursor-expand=""
            >
              View all case studies
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
