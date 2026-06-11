import { FaStar } from "react-icons/fa";
import Button from "./Button.jsx";

function MovieCards({ imageSrc, movieName, rating }) {
    const TMDB_BASE = "https://image.tmdb.org/t/p/w500";

    // Determine final image source:
    // - falsy -> use local placeholder
    // - absolute URL or data URI -> use as-is
    // - leading slash (TMDB relative path) -> prepend TMDB base
    let src = imageSrc || "/Bg.jpg";
    if (src && !src.startsWith("http") && !src.startsWith("data:") && src.startsWith("/")) {
        src = TMDB_BASE + src;
    }

    const displayRating = typeof rating === "number" ? rating : 0;

    return (
        <div className="w-64 bg-zinc-900 rounded-2xl overflow-hidden shadow-lg hover:scale-95 hover:outline-red-500 hover:outline-1 transition-all duration-300">

            {/* Movie Image */}
            <div className="h-58 overflow-hidden">
                <img
                    src={src}
                    alt={movieName}
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Movie Details */}
            <div className="p-4">
                <h2 className="text-white text-lg font-bold truncate">
                    {movieName}
                </h2>

                {/* Rating + Button */}
                <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center gap-2">
                        <FaStar className="text-yellow-400 text-lg" />
                        <span className="font-semibold text-yellow-400">
                            {displayRating.toFixed(1)}
                        </span>
                        <span className="text-gray-400 text-sm">/10</span>
                    </div>

                    {/* <Button
                        bgClr="bg-red-500"
                        bgHover="hover:bg-red-600"
                        textClr="text-white"
                        text="Watch"
                    /> */}
                </div>
            </div>
        </div>
    );
}

export default MovieCards;