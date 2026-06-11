import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import { Film } from "lucide-react";
import { FaRobot, FaDatabase, FaBrain } from "react-icons/fa";
import { TbBrandOpenai } from "react-icons/tb";

function AboutPage() {
    return (
        <>
            {/* NavBar */}
            <NavBar bgClr="bg-white/5 backdrop-blur-md" textClr="text-white" />
            <div className="min-h-screen bg-black text-white">

                {/* Hero Section */}
                <section className="relative h-[70vh] flex items-center justify-center">

                    <img
                        src="/Bg.jpg"
                        alt="Background"
                        className="absolute inset-0 w-full h-full object-cover"
                    />

                    <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/70 to-black"></div>

                    <div className="relative z-10 text-center max-w-4xl px-6">
                        <h1 className="text-6xl font-bold mb-6">
                            Discover Movies Smarter with
                            <span className="text-red-500"> CineAI</span>
                        </h1>
                    </div>
                </section>

                {/* About */}
                <section className="max-w-6xl mx-auto px-6 py-20">
                    <h2 className="text-4xl font-bold mb-6">
                        About Us
                    </h2>

                    <p className="text-gray-300 text-lg leading-8">
                        CineAI is an intelligent recommendation system that suggests movies based on
                        user preferences and content similarity using machine learning techniques.
                    </p>
                </section>

                {/* Stats */}
                <section className="max-w-6xl mx-auto px-6 py-10">
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-white/5 backdrop-blur-md rounded-xl p-8 border border-white/10 text-center hover:outline-red-500 hover:outline-1">
                            <h3 className="text-4xl font-bold text-red-500">5000+</h3>
                            <p className="text-gray-400 mt-2">Movies Analyzed</p>
                        </div>

                        <div className="bg-white/5 backdrop-blur-md rounded-xl p-8 border border-white/10 text-center hover:outline-red-500 hover:outline-1">
                            <h3 className="text-4xl font-bold text-red-500">AI</h3>
                            <p className="text-gray-400 mt-2">Powered Recommendations</p>
                        </div>

                        <div className="bg-white/5 backdrop-blur-md rounded-xl p-8 border border-white/10 text-center hover:outline-red-500 hover:outline-1">
                            <h3 className="text-4xl font-bold text-red-500">24/7</h3>
                            <p className="text-gray-400 mt-2">Movie Discovery</p>
                        </div>
                    </div>
                </section>

                {/* Features */}
                <section className="max-w-6xl mx-auto px-6 py-20">
                    <h2 className="text-4xl font-bold mb-10">
                        Key Features
                    </h2>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-white/5 rounded-xl p-6 border border-white/10 hover:outline-red-500 hover:outline-1">
                            🎯 Personalized Recommendations
                        </div>

                        <div className="bg-white/5 rounded-xl p-6 border border-white/10 hover:outline-red-500 hover:outline-1">
                            🔍 Smart Movie Search
                        </div>

                        <div className="bg-white/5 rounded-xl p-6 border border-white/10 hover:outline-red-500 hover:outline-1">
                            🤖 AI-Based Similar Movies
                        </div>

                        <div className="bg-white/5 rounded-xl p-6 border border-white/10 hover:outline-red-500 hover:outline-1">
                            📱 Fully Responsive Design
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    )
}

export default AboutPage;