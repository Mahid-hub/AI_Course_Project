import { useState } from "react";
import { FaRobot, FaStar, FaPlay } from "react-icons/fa";
import { getRecommendations } from "./services/api.js";
import MovieCards from "./Components/MovieCards.jsx";
import NavBar from "./Components/NavBar.jsx";
import Footer from "./Components/Footer.jsx";

function RecommendationPage() {
    const [mood, setMood] = useState("");
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const recommendation = async () => {
        if (!mood.trim()) {
            setError("Please describe your mood");
            return;
        }

        try {
            setLoading(true);
            setError("");
            const data = await getRecommendations({
                mood: mood,
                language: "en",
                rating: 6.5,
                top_n: 8,
            });
            setMovies(data || []);
        }
        catch (err) {
            console.error("API Error:", err);
            setError("Failed to fetch recommendations. Please try again.");
            setMovies([]);
        }
        finally {
            setLoading(false);
        }
    }

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            recommendation();
        }
    }

    return (
        <>
            {/* NavBar */}
            <NavBar bgClr="bg-white/5 backdrop-blur-md" textClr="text-white" />

            <div className="bg-black text-white px-10 pt-20 overflow-hidden">

                {/* Header */}
                <div className="flex items-center justify-between">

                    <div>
                        <h1 className="text-6xl font-bold leading-tight">
                            AI Recommendations
                        </h1>

                        <p className="text-gray-400 mt-4 text-xl max-w-2xl">
                            Discover movies perfectly matched to your taste and preferences.
                        </p>
                    </div>

                    {/* AI Box */}
                    <div className="bg-zinc-900 border border-zinc-800 rounded-3xl px-8 py-6 flex items-center gap-5 shadow-2xl">
                        <div className="bg-red-500 p-4 rounded-2xl">
                            <FaRobot className="text-3xl" />
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold">
                                Smart AI Engine
                            </h2>

                            <p className="text-gray-400">
                                Personalized Suggestions
                            </p>
                        </div>
                    </div>

                </div>

                {/* Search */}
                <div className="mt-12">
                    <input
                        type="text"
                        value={mood}
                        onChange={(e) => setMood(e.target.value)}
                        onKeyPress={handleKeyPress}
                        placeholder="Describe your mood..."
                        className="w-full bg-zinc-900 border border-zinc-800 rounded-2xl px-6 py-5 text-lg outline-none focus:border-red-500"
                    />
                </div>

                {/* Error Message */}
                {error && (
                    <div className="mt-4 bg-red-500/20 border border-red-500 rounded-2xl px-4 py-3 text-red-400">
                        {error}
                    </div>
                )}

                {/* Categories */}
                <div className="flex gap-5 mt-10">

                    <button
                        onClick={recommendation}
                        disabled={loading}
                        className="bg-red-500 px-6 py-3 rounded-2xl font-semibold text-lg hover:bg-red-600 disabled:opacity-50">
                        {loading ? "Searching..." : "Search"}
                    </button>

                </div>

                {/* Movies Section */}
                <div className="mt-14">

                    {loading && (
                        <div className="text-center text-xl py-10">
                            Finding perfect movies...
                        </div>
                    )}

                    <div className="flex items-center gap-4 mb-10">
                        <FaStar className="text-yellow-400 text-3xl" />
                        <h2 className="text-4xl font-bold">
                            Top Picks For You
                        </h2>
                    </div>

                    <div className="grid grid-cols-4 gap-10">

                        {movies.map((movie, index) => (
                            <div key={index}>
                                <MovieCards
                                    imageSrc={movie.poster_path || movie.poster}
                                    movieName={movie.title}
                                    rating={movie.vote_average}
                                />

                            </div>
                        ))}

                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default RecommendationPage;