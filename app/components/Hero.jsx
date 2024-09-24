import Image from "next/image";

const Hero = () => {
  return (
    <section className="hero-section flex flex-col p-4 gap-8">
      <div className="hero-image">
        {/* Image for small screens */}
        <div className="block lg:hidden">
          <Image
            src="/assets/images/image-web-3-mobile.jpg"
            width={343}
            height={300}
            alt="hero image for mobile"
            sizes="(max-width: 600px) 100vw"
            priority={true}
          />
        </div>

        {/* Image for large screens */}
        <div className="hidden lg:block">
          <Image
            src="/assets/images/image-web-3-desktop.jpg"
            width={730}
            height={300}
            alt="hero image for desktop"
            sizes="(min-width: 1024px) 50vw"
            priority={true}
          />
        </div>
      </div>
      <div className="md:flex md:justify-between">
        <div className="hero-heading text-very-dark-blue text-4xl font-extrabold pr-12 md:max-w-xs md:pr-4 lg:text-5xl lg:leading-[56px]">
          <h1>The Bright Future of Web 3.0?</h1>
        </div>
        <div className="hero-messsage space-y-4 md:max-w-xs">
          <p className="font-normal text-base leading-6 text-gunmetal">
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise?
          </p>
          <button className="bg-soft-red px-6 py-2 text-very-dark-blue text-sm font-bold leading-6 tracking-widest hover:text-white hover:bg-very-dark-blue">
            READ MORE
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
