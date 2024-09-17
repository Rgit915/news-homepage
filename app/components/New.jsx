import { newList } from "../../data";

const New = () => {
  return (
    <section className="new-section">
      <article className="">
        <h2>New</h2>
        {newList.map((item, index) => (
          <div key={index}>
            <h3>
              {item.title}
              <span>{item.description}</span>
            </h3>
          </div>
        ))}
      </article>
    </section>
  );
};

export default New;
