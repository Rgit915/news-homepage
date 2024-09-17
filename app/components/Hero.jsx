import Image from "next/image"

const Hero = () => {
  return (
    <section className="hero-section">
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
          <div className="hero-heading">
            <div>
              <h1>The Bright Future of Web 3.0?</h1>
            </div>
          </div>
          <div className="hero-messsage">
            <p>
              We dive into the next evolution of the web that claims to put the
              power of the platforms back into the hands of the people. But is
              it really fulfilling its promise?
            </p>
            <button>READ MORE</button>
          </div>
        </section>
  )
}

export default Hero