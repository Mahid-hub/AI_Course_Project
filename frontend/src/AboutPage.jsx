import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import { FaRobot, FaDatabase, FaBrain } from "react-icons/fa";
import { TbBrandOpenai } from "react-icons/tb";

function AboutPage() {
    return (
        <>
            {/* NavBar */}
            <NavBar bgClr="bg-white/5 backdrop-blur-md" textClr="text-white" />

            <div className="min-h-screen bg-black text-white px-10 pt-16">

                {/* Hero Section */}
                <div className="flex items-center justify-between">
                    {/* Left */}
                    <div className="max-w-3xl">

                        <h1 className="text-7xl font-bold leading-tight">
                            About <span className="text-red-500"> CineAI</span>
                        </h1>

                        <p className="text-gray-400 text-xl mt-8 leading-9">
                            CineAI is your AI-powered movie recommendation companion, helping you discover your next favorite film.
                        </p>

                    </div>

                    {/* Right Icon */}
                    <div className="w-52 h-52 rounded-full bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center shadow-[0_0_80px_rgba(239,68,68,0.4)]">
                        <TbBrandOpenai className="text-8xl text-white" />
                    </div>
                </div>

                {/* Technology Section */}
                <div className="mt-24">

                    <div className="flex items-center gap-4 mb-12">
                        <FaBrain className="text-red-500 text-4xl" />

                        <h2 className="text-5xl font-bold">
                            Machine Learning Technology
                        </h2>
                    </div>

                    <p className="text-gray-400 text-xl leading-9 max-w-5xl">
                        Our recommendation system uses advanced machine learning algorithms to analyze movie content, understand similarities, and provide intelligent personalized suggestions.
                    </p>

                </div>

                {/* Cards */}
                <div className="grid grid-cols-3 gap-10 mt-16">

                    {/* Card 1 */}
                    <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-red-500 transition">

                        <div className="bg-red-500 w-fit p-4 rounded-2xl mb-6">
                            <FaRobot className="text-3xl" />
                        </div>

                        <h3 className="text-3xl font-bold">
                            TF-IDF Vectorization
                        </h3>

                        <p className="text-gray-400 text-lg leading-8 mt-5">
                            Analyzes movie descriptions, cast, genres, and keywords to convert textual data into numerical vectors for intelligent recommendations.
                        </p>

                    </div>

                    {/* Card 2 */}
                    <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-red-500 transition">

                        <div className="bg-red-500 w-fit p-4 rounded-2xl mb-6">
                            <FaBrain className="text-3xl" />
                        </div>

                        <h3 className="text-3xl font-bold">
                            Cosine Similarity
                        </h3>

                        <p className="text-gray-400 text-lg leading-8 mt-5">
                            Measures content similarity between movies by comparing feature vectors and identifying closely related movie recommendations.
                        </p>

                    </div>

                    {/* Card 3 */}
                    <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-red-500 transition">

                        <div className="bg-red-500 w-fit p-4 rounded-2xl mb-6">
                            <FaDatabase className="text-3xl" />
                        </div>

                        <h3 className="text-3xl font-bold">
                            K-Nearest Neighbors
                        </h3>

                        <p className="text-gray-400 text-lg leading-8 mt-5">
                            Finds similar movies in multi-dimensional space and recommends the closest matching titles based on user preferences.
                        </p>

                    </div>
                </div>

                {/* Dataset Section */}
                <div className="mt-24 bg-zinc-900 border border-zinc-800 rounded-[40px] p-12">

                    <div className="flex items-center gap-4 mb-8">

                        <div className="bg-red-500 p-4 rounded-2xl">
                            <FaDatabase className="text-3xl" />
                        </div>

                        <h2 className="text-5xl font-bold">
                            Dataset
                        </h2>

                    </div>

                    <p className="text-gray-400 text-xl leading-10 max-w-6xl">
                        We use the comprehensive TMDB Movies Dataset from Hugging Face containing over 1,200 movies with detailed metadata including genres, cast, ratings, popularity scores, keywords, and release dates.
                    </p>

                    {/* Stats */}
                    <div className="flex gap-16 mt-12">

                        <div>
                            <h3 className="text-5xl font-bold text-red-500">
                                1,200+
                            </h3>

                            <p className="text-gray-400 text-lg mt-2">
                                Movies
                            </p>
                        </div>

                        <div>
                            <h3 className="text-5xl font-bold text-red-500">
                                AI
                            </h3>

                            <p className="text-gray-400 text-lg mt-2">
                                Powered
                            </p>
                        </div>

                        <div>
                            <h3 className="text-5xl font-bold text-red-500">
                                ML
                            </h3>

                            <p className="text-gray-400 text-lg mt-2">
                                Algorithms
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default AboutPage;