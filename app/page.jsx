import Header from "./components/Header";
import Hero from "./components/Hero";
import New from "./components/New";
import NewsLink from "./components/NewsLink";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <New />
        <NewsLink/>
      </main>
    </>
  );
}
