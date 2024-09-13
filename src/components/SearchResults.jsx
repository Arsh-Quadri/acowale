import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { searchNews } from "./NewsService";
import NewsList from "./NewsList";

const SearchResults = () => {
  const { searchQuery } = useParams();
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getSearchResults = async () => {
      const searchResults = await searchNews(searchQuery);
      setArticles(searchResults);
    };

    getSearchResults();
  }, [searchQuery]);

  return (
    <div className="container mx-auto p-6">
      <NewsList articles={articles} />
    </div>
  );
};

export default SearchResults;
