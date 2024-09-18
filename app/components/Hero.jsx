import Image from "next/image";

const Hero = () => {
  return (
    <section className="hero-section flex flex-col p-4 gap-4">
      <div className="hero-image">
        <Image
          src="/assets/images/image-web-3-mobile.jpg"
          width={343}
          height={300}
          alt="hero image"
          layout="responsive"
          sizes="(max-width: 600px) 100vw, (max-width:1200px) 50vw, 33vw"
          priority
        />
      </div>
      <div className="hero-heading text-very-dark-blue text-4xl font-extrabold pr-12">
        <h1>The Bright Future of Web 3.0?</h1>
      </div>
      <div className="hero-messsage space-y-4">
        <p className="font-normal text-base leading-6 text-gunmetal">
          We dive into the next evolution of the web that claims to put the
          power of the platforms back into the hands of the people. But is it
          really fulfilling its promise?
        </p>
        <button className="bg-soft-red px-6 py-2 text-very-dark-blue text-sm font-bold leading-6 tracking-widest">READ MORE</button>
      </div>
    </section>
  );
};

export default Hero;
