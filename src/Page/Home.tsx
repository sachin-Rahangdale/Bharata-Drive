import React from 'react'
import { NewsData } from '../Data/NewsData'
import NewsCard from './NewsCard'

const Home = () => {
  return (
    <>
      {NewsData.map((news) => (
        <NewsCard
          key={news.id}
          id={news.id}
          title={news.title}
          image={news.image}
          category={news.category}
          date={news.date}
          summary={news.summary}
        />
      ))}
    </>
  );
};

export default Home;
