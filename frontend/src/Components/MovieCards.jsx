import Button from "./Button";

function MovieCards({ imageSrc, movieName }) {
    return (
        <div className="w-64 bg-zinc-900 rounded-2xl overflow-hidden shadow-lg hover:scale-95 transition-all duration-300 cursor-pointer">

            {/* Movie Image */}
            <div className="h-58 overflow-hidden">
                <img
                    src={imageSrc}
                    alt={movieName}
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Movie Details */}
            <div className="p-4">
                <h2 className="text-white text-lg font-bold truncate">
                    {movieName}
                </h2>

                <p className="text-zinc-400 text-sm mt-1">
                    AI Recommended Movie
                </p>

                {/* Rating + Button */}
                <div className="flex items-center justify-between mt-4">
                    <span className="text-yellow-400 font-semibold">
                        ⭐ 8.5
                    </span>

                    <Button bgClr="bg-red-500" bgHover="hover:bg-red-600" textClr="text-white" text="Watch" />
                </div>
            </div>
        </div>
    );
}

export default MovieCards;