/* eslint-disable react/prop-types */
const TopHeadlines = ({ topHeadlines }) => {
  const handleRedirect = (url) => {
    window.location.href = url;
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-8">
      {topHeadlines.map((headline, index) => (
        <div
          key={index}
          className={`relative overflow-hidden cursor-pointer shadow-md rounded-lg ${
            index === 1
              ? "col-span-1 row-span-1 lg:col-span-2 lg:row-span-2"
              : ""
          }`}
          onClick={() => handleRedirect(headline.url)}
        >
          <img
            src={headline.image}
            alt={headline.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black via-transparent to-transparent">
            <h3 className="text-white text-lg font-semibold truncate-multiline">
              {headline.title}
            </h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TopHeadlines;
