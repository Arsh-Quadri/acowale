import { useEffect, useState } from "react";
import NewsList from "./NewsList";
import { useParams } from "react-router-dom";
import { searchNews } from "./NewsService";

const Category = () => {
  const { categoryName } = useParams();
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getCategoryNews = async () => {
      const searchResults = await searchNews(categoryName);
      setArticles(searchResults);
    };
    getCategoryNews();
  }, [categoryName]);
  return (
    <div className="container mx-auto p-6">
      <NewsList articles={articles} />
    </div>
  );
};

export default Category;
