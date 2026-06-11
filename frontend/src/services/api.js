// API Configuration and Service
const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

/**
 * Fetch movie recommendations based on mood
 * @param {Object} params - Query parameters
 * @param {string} params.mood - User's mood or description
 * @param {string} params.language - Movie language (default: "en")
 * @param {number} params.rating - Minimum rating (default: 6.0)
 * @param {number} params.top_n - Number of recommendations (default: 8)
 * @returns {Promise<Array>} Array of movie recommendations
 */
export const getRecommendations = async (params) => {
    try {
        const response = await fetch(`${API_BASE_URL}/api/recommend`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                mood: params.mood || "",
                language: params.language || "en",
                rating: params.rating || 6.0,
                top_n: params.top_n || 8,
            }),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error("Error fetching recommendations:", error);
        throw error;
    }
};

/**
 * Fetch top-rated movies
 * @param {Object} params - Optional parameters
 * @param {number} params.limit - Number of movies to fetch (default: 10)
 * @returns {Promise<Array>} Array of top-rated movies
 */
export const getTopRatedMovies = async (params = {}) => {
    try {
        const limit = params.limit || 10;
        const response = await fetch(`${API_BASE_URL}/api/top-rated?limit=${limit}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error("Error fetching top-rated movies:", error);
        throw error;
    }
};