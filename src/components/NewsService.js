const API_KEY = import.meta.env.VITE_API_KEY;
export const fetchTopHeadlines = async (category = "general") => {
  const url = `https://gnews.io/api/v4/top-headlines?category=${category}&lang=en&country=in&max=5&apikey=${API_KEY}`;
  try {
    const response = await fetch(url, { cache: "no-cache" });
    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }
    const data = await response.json();
    return data.articles;
  } catch (error) {
    console.error(`Error fetching top headlines: ${error.message}`);
    return [];
  }
};

export const fetchAllNews = async () => {
  const url = `https://gnews.io/api/v4/top-headlines?lang=en&country=us&max=10&apikey=${API_KEY}`;
  try {
    const response = await fetch(url, { cache: "no-cache" });
    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }
    const data = await response.json();
    return data.articles;
  } catch (error) {
    console.error(`Error fetching all news: ${error.message}`);
    return [];
  }
};

export const searchNews = async (query) => {
  const url = `https://gnews.io/api/v4/search?q=${query}&lang=en&country=us&max=10&apikey=${API_KEY}`;
  try {
    const response = await fetch(url, { cache: "no-cache" });
    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }
    const data = await response.json();
    return data.articles;
  } catch (error) {
    console.error(`Error searching news: ${error.message}`);
    return [];
  }
};
