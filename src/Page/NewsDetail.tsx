import { useParams } from "react-router-dom";
import { NewsData } from "../Data/NewsData";

const NewsDetails = () => {
  const { id } = useParams<{ id: string }>();

  const news = NewsData.find(
    (item) => item.id === Number(id)
  );

  if (!news) {
    return <h2>News not found</h2>;
  }

  return (
    <div>
      <h1>{news.title}</h1>
      <img src={news.image} alt={news.title} />
      <p>
        <strong>{news.category}</strong> | {news.date}
      </p>
      <p>{news.content}</p>
    </div>
  );
};

export default NewsDetails;
