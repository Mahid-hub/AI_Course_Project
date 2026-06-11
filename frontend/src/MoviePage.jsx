import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { getTopRatedMovies } from "./services/api.js";
import NavBar from "./Components/NavBar.jsx";
import MovieCards from "./Components/MovieCards.jsx";
import Footer from "./Components/Footer.jsx";

function MoviePage() {
    const [topRatedMovies, setTopRatedMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                setLoading(true);
                const [topRated] = await Promise.all([
                    getTopRatedMovies({ limit: 10 })
                ]);
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
            <div className="bg-black min-h-screen">
                {/* Navbar */}
                <NavBar bgClr="bg-white/5 backdrop-blur-md" textClr="text-white" />

                {error && (
                    <div className="bg-red-500/20 border border-red-500 m-5 rounded-2xl px-4 py-3 text-red-400">
                        {error}
                    </div>
                )}

                {loading ? (
                    <div className="py-20 px-5 text-center text-white font-bold text-xl">
                        Loading movies...
                    </div>
                ) : (
                    <>
                        {/* Top Rated Section */}
                        <div className="py-20 px-5">

                            <div className="flex gap-6">
                                <FaStar className="text-yellow-400 text-3xl mt-6" />
                                <h1 className="text-4xl text-white font-bold leading-loose">
                                    Top Rated
                                </h1>
                            </div>


                            <div className="flex gap-6 overflow-x-auto no-scrollbar py-8">
                                {topRatedMovies.map((movie, index) => (
                                    <div key={index} className="flex-shrink-0">
                                        <MovieCards
                                            imageSrc={movie.poster_path}
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