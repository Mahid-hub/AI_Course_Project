import { FaRobot, FaStar, FaPlay } from "react-icons/fa";
import MovieCards from "./Components/MovieCards.jsx";
import NavBar from "./Components/NavBar.jsx";
import Footer from "./Components/Footer.jsx";

function RecommendationPage() {
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
                        placeholder="Search movies..."
                        className="w-full bg-zinc-900 border border-zinc-800 rounded-2xl px-6 py-5 text-lg outline-none focus:border-red-500"
                    />
                </div>

                {/* Categories */}
                <div className="flex gap-5 mt-10">

                    <button className="bg-red-500 px-6 py-3 rounded-2xl font-semibold text-lg">
                        All
                    </button>

                    <button className="bg-zinc-900 hover:bg-zinc-800 transition px-6 py-3 rounded-2xl text-lg">
                        Action
                    </button>

                    <button className="bg-zinc-900 hover:bg-zinc-800 transition px-6 py-3 rounded-2xl text-lg">
                        Sci-Fi
                    </button>

                    <button className="bg-zinc-900 hover:bg-zinc-800 transition px-6 py-3 rounded-2xl text-lg">
                        Thriller
                    </button>

                    <button className="bg-zinc-900 hover:bg-zinc-800 transition px-6 py-3 rounded-2xl text-lg">
                        Comedy
                    </button>

                </div>

                {/* Movies Section */}
                <div className="mt-14">

                    <div className="flex items-center gap-4 mb-10">
                        <FaStar className="text-yellow-400 text-3xl" />

                        <h2 className="text-4xl font-bold">
                            Top Picks For You
                        </h2>
                    </div>

                    {/* Grid */}
                    <div className="grid grid-cols-4 gap-10">

                        <MovieCards
                            imageSrc="/Bg.jpg"
                            movieName="Avengers Endgame"
                        />

                        <MovieCards
                            imageSrc="/Bg.jpg"
                            movieName="Interstellar"
                        />

                        <MovieCards
                            imageSrc="/Bg.jpg"
                            movieName="Batman"
                        />

                        <MovieCards
                            imageSrc="/Bg.jpg"
                            movieName="John Wick"
                        />

                        <MovieCards
                            imageSrc="/Bg.jpg"
                            movieName="Inception"
                        />

                        <MovieCards
                            imageSrc="/Bg.jpg"
                            movieName="Titanic"
                        />

                        <MovieCards
                            imageSrc="/Bg.jpg"
                            movieName="Avatar"
                        />

                        <MovieCards
                            imageSrc="/Bg.jpg"
                            movieName="Joker"
                        />

                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default RecommendationPage;