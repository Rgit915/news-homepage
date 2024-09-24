import Image from "next/image";
import { newsLink } from "../../data";
import Link from "next/link";

const NewsLink = () => {
  return (
    <section className="list-section p-4">
      <article className="flex flex-col gap-8 mb-12 md:flex-row ">
        {newsLink.map((news, index) => (
          <div key={index} className="flex gap-4 items-center md:items-start">
            <Image src={news.image} width={100} height={129} alt={news.title} className="object-contain"/>
            <div className="flex flex-col w-full">
              <h4 className="text-soft-red font-bold text-3xl text-start">{news.number}</h4>
            <Link href="#"> <h5 className="text-very-dark-blue font-extrabold text-lg hover:text-soft-red cursor-pointer ">{news.title}</h5></Link>
              <span className="text-gunmetal font-normal text-sm md:max-w-56">{news.description}</span>
            </div>
          </div>
        ))}
      </article>
    </section>
  );
};

export default NewsLink;
