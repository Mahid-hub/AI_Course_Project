import { useEffect, useState } from "react";
import { FaRobot, FaStar } from "react-icons/fa";
import { getTrendingMovies, getTopRatedMovies } from "./services/api.js";
import NavBar from "./Components/NavBar.jsx";
import MovieCards from "./Components/MovieCards.jsx";
import Footer from "./Components/Footer.jsx";

function MoviePage() {
    const [trendingMovies, setTrendingMovies] = useState([]);
    const [topRatedMovies, setTopRatedMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                setLoading(true);
                const [trending, topRated] = await Promise.all([
                    getTrendingMovies({ limit: 10 }),
                    getTopRatedMovies({ limit: 10 })
                ]);
                setTrendingMovies(trending || []);
                setTopRatedMovies(topRated || []);
                setError("");
            } catch (err) {
                console.error("Error fetching movies:", err);
                setError("Failed to load movies. Please try again later.");
            } finally {
                setLoading(false);
            }
        };

        fetchMovies();
    }, []);

    return (
        <>
            <div className="bg-black">
                {/* Navbar */}
                <NavBar bgClr="bg-white/5 backdrop-blur-md" textClr="text-white" />

                {error && (
                    <div className="bg-red-500/20 border border-red-500 m-5 rounded-2xl px-4 py-3 text-red-400">
                        {error}
                    </div>
                )}

                {loading ? (
                    <div className="py-16 px-5 text-center text-white text-xl">
                        Loading movies...
                    </div>
                ) : (
                    <>
                        {/* Trending Section */}
                        <div className="py-16 px-5">

                            <div className="flex gap-6">
                                <FaStar className="text-yellow-400 text-3xl mt-6" />
                                <h1 className="text-4xl text-white font-bold leading-loose">
                                    Trending Now
                                </h1>
                            </div>

                            <div className="flex gap-6 overflow-x-auto no-scrollbar">
                                {trendingMovies.map((movie, index) => (
                                    <div key={index} className="flex-shrink-0">
                                        <MovieCards
                                            imageSrc={movie.poster_path || "./public/Bg.jpg"}
                                            movieName={movie.title}
                                            rating={movie.vote_average}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Top Rated Section */}
                        <div className="pb-5 px-5">

                            <div className="flex gap-6">
                                <FaStar className="text-yellow-400 text-3xl mt-6" />
                                <h1 className="text-4xl text-white font-bold leading-loose">
                                    Top Rated
                                </h1>
                            </div>


                            <div className="flex gap-6 overflow-x-auto no-scrollbar">
                                {topRatedMovies.map((movie, index) => (
                                    <div key={index} className="flex-shrink-0">
                                        <MovieCards
                                            imageSrc={movie.poster_path || "/Bg.jpg"}
                                            movieName={movie.title}
                                            rating={movie.vote_average}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </>
                )}

                {/* Footer */}
                <Footer />
            </div>
        </>
    )
}

export default MoviePage;