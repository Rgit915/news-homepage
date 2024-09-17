import { newsLink } from "../../data";

const NewsLink = () => {
  return (
    <section className="list-section">
      <article>
        {newsLink.map((news, index) => (
          <div key={index}>
            <h4>
              {news.number} {news.title}
              <span>{news.description}</span>
            </h4>
          </div>
        ))}
      </article>
    </section>
  );
};

export default NewsLink;
