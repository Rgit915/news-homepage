import Header from "./components/Header";
import Hero from "./components/Hero";
import New from "./components/New";
import NewsLink from "./components/NewsLink";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <div className="hero">
          <Hero />
          <New />
        </div>
        <NewsLink />
      </main>
      <footer>
      <div class="attribution text-[0.73rem] text-center opacity-80 text-[#8c8c8c] mt-12">
    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
    Coded by <a href="https://www.linkedin.com/in/rora-alem" target="_blank" class="text-[hsl(228,45%,44%)]">Rora Alem</a>.
  </div>
      </footer>
    </>
  );
}
