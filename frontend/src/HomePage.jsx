import { FaRobot } from "react-icons/fa";
import NavBar from "./Components/NavBar.jsx";
import Button from "./Components/Button.jsx";
import Footer from "./Components/Footer.jsx";
import { Link } from "react-router-dom";

function HomePage() {
    return (
        <>
            {/* Main Container */}
            <div className="min-h-screen bg-cover bg-center bg-fixed bg-[url('/Bg.jpg')] flex flex-col">

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/70"></div>

                {/* Content */}
                <div className="relative z-10 flex flex-col min-h-screen">

                    {/* Navbar */}
                    <NavBar bgClr="bg-white/5 backdrop-blur-md" textClr="text-white" />

                    {/* Hero Section */}
                    <div className="flex-1 flex items-center px-6 md:px-16 pt-24">

                        <div className="text-white max-w-2xl space-y-6">

                            {/* Heading */}
                            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                                Discover Your Next
                                <span className="text-red-500">
                                    {" "}Favorite Movie
                                </span>
                            </h1>

                            {/* Paragraph */}
                            <p className="text-gray-300 text-lg leading-8">
                                Get personalized AI recommendations based on your taste.
                                Explore thousands of movies and find exactly what
                                you're looking for.
                            </p>

                            {/* Buttons */}
                            <div className="flex flex-wrap gap-5 pt-2">

                                <Link to="/recommendations">
                                    <Button
                                        bgClr="bg-red-500"
                                        bgHover="hover:bg-red-600"
                                        textClr="text-white"
                                        text="Get AI Recommendations"
                                        icon={<FaRobot />}
                                    />
                                </Link>
                                <Link to="/movies">
                                    <Button
                                        bgClr="bg-transparent border border-white"
                                        bgHover="hover:bg-white hover:text-black"
                                        textClr="text-white"
                                        text="Top Rated Movies"
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Footer */}
            <Footer />
        </>
    );
}

export default HomePage;