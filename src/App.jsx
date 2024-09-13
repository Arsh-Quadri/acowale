import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import NewsApp from "./components/NewsApp";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { fetchAllNews, fetchTopHeadlines } from "./components/NewsService";
import Category from "./components/category";
import SearchResults from "./components/SearchResults";

function App() {
  const [articles, setArticles] = useState([]);
  const [topHeadlines, setTopHeadlines] = useState([]);

  useEffect(() => {
    const getNews = async () => {
      const headlines = await fetchAllNews();
      setArticles(headlines);
    };

    getNews();
  }, []);
  useEffect(() => {
    const getHeadlines = async () => {
      const headlines = await fetchTopHeadlines();
      setTopHeadlines(headlines);
    };

    getHeadlines();
  }, []);
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar setArticles={setArticles} />
        <Routes>
          <Route
            path="/"
            element={
              <NewsApp articles={articles} topHeadlines={topHeadlines} />
            }
          />
          <Route path="/category/:categoryName" element={<Category />} />
          <Route path="/search/:searchQuery" element={<SearchResults />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
