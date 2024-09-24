import { newList } from "../../data";
import Link from "next/link";

const New = () => {
  return (
    <section className="new-section p-4 lg:max-w-sm md:h-full">
      <article className="p-6 flex flex-col gap-6 bg-very-dark-blue text-off-white lg:px-8 lg:py-10">
        <h2 className="text-soft-orange font-bold text-4xl ">New</h2>
        {newList.map((item, index) => (
          <div
            key={index}
            className="border-b-2 border-dark-grayish-blue pb-2 last:border-b-0 lg:pb-8"
          >
            <Link href="#">
              <h3 className="text-xl font-extrabold hover:text-soft-orange cursor-pointer ">
                {item.title}
              </h3>
            </Link>

            <span className="text-grayish-blue text-sm font-normal">
              {item.description}
            </span>
          </div>
        ))}
      </article>
    </section>
  );
};

export default New;
