/* eslint-disable react/prop-types */
import NewsList from "./NewsList";
import TopHeadlines from "./TopHeadlines";

const NewsApp = ({ articles, topHeadlines }) => {
  return (
    <div className="container mx-auto p-6 flex flex-col gap-10">
      <TopHeadlines topHeadlines={topHeadlines} />
      <NewsList articles={articles} />
    </div>
  );
};

export default NewsApp;
