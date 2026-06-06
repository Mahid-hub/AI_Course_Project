from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
from sklearn.metrics.pairwise import cosine_similarity

app = Flask(__name__)
CORS(app)

# Load saved files
movies_dataset = joblib.load("movies_dataset.pkl")
tfidf_vectorizer = joblib.load("tfidf_vectorizer.pkl")
tfidf_matrix = joblib.load("tfidf_matrix.pkl")

print("✅ Model Loaded Successfully")

@app.route("/")
def home():
    return jsonify({"message": "Movie Recommendation API Running"})

@app.route("/api/recommend", methods=["POST"])
def recommend_movies():
    try:
        data = request.get_json()
        mood = data.get("mood", "")
        language = data.get("language", "")
        min_rating = float(data.get("rating", 6.0))
        top_n = int(data.get("top_n", 8))

        if mood == "":
            return jsonify([])

        # Convert user text into TF-IDF vector
        mood_vector = tfidf_vectorizer.transform([mood])

        # Calculate similarity
        similarity_scores = cosine_similarity(mood_vector, tfidf_matrix).flatten()

        movies_dataset["similarity_score"] = similarity_scores

        # Rating filter
        filtered_movies = movies_dataset[movies_dataset["vote_average"] >= min_rating]

        # Language filter (optional)
        if language and "original_language" in filtered_movies.columns:
            filtered_movies = filtered_movies[filtered_movies["original_language"].str.lower() == language.lower()]

        # Sort by similarity
        recommendations = filtered_movies.sort_values(by="similarity_score", ascending=False).head(top_n)
        results = []

        for _, movie in recommendations.iterrows():

            results.append({
                "title": str(movie.get("title", "")),
                "vote_average": float(movie.get("vote_average", 0)),
                "poster_path": str(movie.get("poster_path", ""))
            })

        return jsonify(results)

    except Exception as e:
        return jsonify({
            "error": str(e)
        }), 500

@app.route("/api/trending", methods=["GET"])
def get_trending_movies():
    try:
        limit = request.args.get("limit", default=10, type=int)
        
        # Get top movies by popularity (assuming popularity column exists)
        # If not available, use vote count as proxy
        if "popularity" in movies_dataset.columns:
            trending = movies_dataset.nlargest(limit, "popularity")
        else:
            trending = movies_dataset.nlargest(limit, "vote_count")
        
        results = []
        for _, movie in trending.iterrows():
            results.append({
                "title": str(movie.get("title", "")),
                "vote_average": float(movie.get("vote_average", 0)),
                "overview": str(movie.get("overview", "")),
                "poster_path": str(movie.get("poster_path", ""))
            })
        
        return jsonify(results)
    
    except Exception as e:
        return jsonify({
            "error": str(e)
        }), 500

@app.route("/api/top-rated", methods=["GET"])
def get_top_rated_movies():
    try:
        limit = request.args.get("limit", default=10, type=int)
        
        # Get movies with highest ratings and minimum vote count
        min_votes = movies_dataset["vote_count"].quantile(0.75)
        qualified_movies = movies_dataset[movies_dataset["vote_count"] >= min_votes]
        top_rated = qualified_movies.nlargest(limit, "vote_average")
        
        results = []
        for _, movie in top_rated.iterrows():
            results.append({
                "title": str(movie.get("title", "")),
                "vote_average": float(movie.get("vote_average", 0)),
                "overview": str(movie.get("overview", "")),
                "poster_path": str(movie.get("poster_path", ""))
            })
        
        return jsonify(results)
    
    except Exception as e:
        return jsonify({
            "error": str(e)
        }), 500

if __name__ == "__main__":
    app.run(
        host="0.0.0.0",
        port=5000,
        debug=True
    )