import { FaRobot, FaStar } from "react-icons/fa";
import NavBar from "./Components/NavBar.jsx";
import MovieCards from "./Components/MovieCards.jsx";
import Footer from "./Components/Footer.jsx";

function MoviePage() {
    return (
        <>
            <div className="bg-black">
                {/* Navbar */}
                <NavBar bgClr="bg-white/5 backdrop-blur-md" textClr="text-white" />

                <div className="py-16 px-5">

                    <div className="flex gap-6">
                        <FaStar className="text-yellow-400 text-3xl mt-6" />
                        <h1 className="text-4xl text-white font-bold leading-loose">
                            Trending Now
                        </h1>
                    </div>

                    <div className="flex gap-6 overflow-x-auto no-scrollbar">
                        <div className="flex-shrink-2">
                            <MovieCards imageSrc="/Bg.jpg" movieName="Avengers Endgame" />
                        </div>
                        <div className="flex-shrink-2">
                            <MovieCards imageSrc="/Bg.jpg" movieName="Avengers Endgame" />
                        </div>
                        <div className="flex-shrink-2">
                            <MovieCards imageSrc="/Bg.jpg" movieName="Avengers Endgame" />
                        </div>
                        <div className="flex-shrink-2">
                            <MovieCards imageSrc="/Bg.jpg" movieName="Avengers Endgame" />
                        </div>
                        <div className="flex-shrink-2">
                            <MovieCards imageSrc="/Bg.jpg" movieName="Avengers Endgame" />
                        </div>
                        <div className="flex-shrink-2">
                            <MovieCards imageSrc="/Bg.jpg" movieName="Avengers Endgame" />
                        </div>
                    </div>
                </div>

                <div className="pb-5 px-5">

                    <div className="flex gap-6">
                        <FaStar className="text-yellow-400 text-3xl mt-6" />
                        <h1 className="text-4xl text-white font-bold leading-loose">
                            Top Rated
                        </h1>
                    </div>


                    <div className="flex gap-6 overflow-x-auto no-scrollbar">
                        <div className="flex-shrink-2">
                            <MovieCards imageSrc="/Bg.jpg" movieName="Avengers Endgame" />
                        </div>
                        <div className="flex-shrink-2">
                            <MovieCards imageSrc="/Bg.jpg" movieName="Avengers Endgame" />
                        </div>
                        <div className="flex-shrink-2">
                            <MovieCards imageSrc="/Bg.jpg" movieName="Avengers Endgame" />
                        </div>
                        <div className="flex-shrink-2">
                            <MovieCards imageSrc="/Bg.jpg" movieName="Avengers Endgame" />
                        </div>
                        <div className="flex-shrink-2">
                            <MovieCards imageSrc="/Bg.jpg" movieName="Avengers Endgame" />
                        </div>
                        <div className="flex-shrink-2">
                            <MovieCards imageSrc="/Bg.jpg" movieName="Avengers Endgame" />
                        </div>
                    </div>
                </div>


                {/* Footer */}
                <Footer />
            </div>
        </>
    )
}

export default MoviePage;