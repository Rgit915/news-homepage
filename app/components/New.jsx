import { newList } from "../../data";

const New = () => {
  return (
    <section className="new-section p-4">
      <article className="p-6 flex flex-col gap-6 bg-very-dark-blue text-off-white">
        <h2 className="text-soft-orange font-bold text-4xl  ">New</h2>
        {newList.map((item, index) => (
          <div key={index} className="">
            <h3 className="text-xl font-extrabold">
              {item.title}
            </h3>
              <span className="text-grayish-blue text-sm font-normal">{item.description}</span>
          </div>
        ))}
      </article>
    </section>
  );
};

export default New;
