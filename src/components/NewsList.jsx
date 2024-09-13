import { useState } from "react";
import PropTypes from "prop-types";

const NewsList = ({ articles }) => {
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate total pages
  const totalPages = Math.ceil(articles.length / itemsPerPage);

  // Calculate index range for current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Get current page items
  const currentArticles = articles.slice(startIndex, endIndex);

  const handlePageChange = (pageNumber) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentArticles.map((article, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-md">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <h2 className="text-lg font-bold mt-4">{article.title}</h2>
            <p className="text-gray-600 mt-2">{article.description}</p>
            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 mt-4 inline-block"
            >
              Read more
            </a>
          </div>
        ))}
      </div>
      <div className="text-center mt-6 font-medium">
        <button
          onClick={() => {
            handlePageChange(currentPage - 1);
            window.scrollTo({ top: 670, behavior: "smooth" });
          }}
          disabled={currentPage === 1}
          className="bg-purple-600 text-white px-4 py-2 rounded mr-2"
        >
          Prev
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => {
            handlePageChange(currentPage + 1);
            window.scrollTo({ top: 670, behavior: "smooth" });
          }}
          disabled={currentPage === totalPages}
          className="bg-purple-600 text-white px-4 py-2 rounded ml-2"
        >
          Next
        </button>
      </div>
    </div>
  );
};

NewsList.propTypes = {
  articles: PropTypes.array.isRequired,
};

export default NewsList;
