# Frontend-Backend Integration Guide

## ✅ What's Been Set Up

### Backend Changes
1. **Created `/api/trending` endpoint** - Returns trending movies
2. **Created `/api/top-rated` endpoint** - Returns top-rated movies
3. **Enhanced `/api/recommend` endpoint** - Uses the new API service

### Frontend Changes
1. **Created `src/services/api.js`** - Centralized API service with:
   - `getRecommendations()` - Fetch recommendations based on mood
   - `getTrendingMovies()` - Fetch trending movies
   - `getTopRatedMovies()` - Fetch top-rated movies
   - `healthCheck()` - Verify backend connection

2. **Updated `RecommendationPage.jsx`**:
   - Uses new API service
   - Added error handling and validation
   - Added Enter key support
   - Loading states with user feedback

3. **Updated `MoviePage.jsx`**:
   - Fetches dynamic trending and top-rated movies
   - Shows loading state while fetching
   - Error handling with user-friendly messages
   - Displays ratings and genres from backend

4. **Environment Configuration**:
   - Created `.env.local` with API URL
   - Created `.env.example` as template

## 🚀 How to Run

### 1. Start the Backend
```bash
cd backend
python app.py
```
Backend runs on `http://localhost:5000`

### 2. Start the Frontend
```bash
cd frontend
npm install  # If not already done
npm run dev
```
Frontend runs on `http://localhost:5173` (or as shown in terminal)

## 📋 Requirements

### Backend
- Python 3.x
- Flask with CORS enabled
- Pre-loaded pickle files:
  - `movies_dataset.pkl`
  - `tfidf_vectorizer.pkl`
  - `tfidf_matrix.pkl`

### Frontend
- Node.js & npm
- React 19+
- Vite

## 🔧 API Endpoints

### GET `/` 
Health check
```bash
curl http://localhost:5000/
```

### POST `/api/recommend`
Get movie recommendations based on mood
```bash
curl -X POST http://localhost:5000/api/recommend \
  -H "Content-Type: application/json" \
  -d '{"mood":"action thriller","language":"en","rating":6.0,"top_n":8}'
```

**Parameters:**
- `mood` (string): Description of mood/preference
- `language` (string, optional): Movie language (default: "en")
- `rating` (number, optional): Minimum rating (default: 6.0)
- `top_n` (number, optional): Number of results (default: 8)

### GET `/api/trending`
Get trending movies
```bash
curl http://localhost:5000/api/trending?limit=10
```

**Parameters:**
- `limit` (number, optional): Number of results (default: 10)

### GET `/api/top-rated`
Get top-rated movies
```bash
curl http://localhost:5000/api/top-rated?limit=10
```

**Parameters:**
- `limit` (number, optional): Number of results (default: 10)

## 📁 Response Format

All endpoints return JSON:
```json
[
  {
    "title": "Movie Title",
    "genres": "Action, Thriller",
    "vote_average": 8.5,
    "overview": "Movie description...",
    "poster_path": "/path/to/poster.jpg"
  }
]
```

## ⚙️ Configuration

### Change API URL
Edit `frontend/.env.local`:
```
VITE_API_URL=http://your-api-domain.com
```

### Change Backend Port
In `backend/app.py`:
```python
app.run(
    host="0.0.0.0",
    port=YOUR_PORT,  # Change this
    debug=True
)
```
Then update `VITE_API_URL` accordingly.

## 🐛 Troubleshooting

### Backend not starting
- Ensure Python is installed: `python --version`
- Install dependencies: `pip install flask flask-cors joblib scikit-learn`
- Verify pickle files exist in backend directory

### API calls failing with CORS error
- CORS is enabled in backend, but check browser console
- Verify correct API URL in `.env.local`
- Backend must be running on correct port

### Movies not loading on MoviePage
- Check browser console for errors
- Verify backend `/api/trending` and `/api/top-rated` are working:
  ```bash
  curl http://localhost:5000/api/trending
  ```

### Getting empty results
- Ensure pickle files contain movie data
- Check backend console for errors
- Verify dataset columns (title, genres, vote_average, etc.)

## 📝 Development Tips

1. **Check API responses**: Use Postman or curl to test endpoints independently
2. **Monitor backend console**: Errors and warnings print to console
3. **Browser DevTools**: Check Network tab to see API calls and responses
4. **React DevTools**: Install extension to debug component state

## 🔐 Security Notes (For Production)

- Set `debug=False` in backend production
- Use environment variables for sensitive data
- Add authentication/authorization if needed
- Implement rate limiting
- Add input validation
- Use HTTPS in production
- Set proper CORS origins (not '*')

## ✨ Next Steps

1. Test all endpoints using the provided curl commands
2. Verify movies display correctly on all pages
3. Test error scenarios (empty input, network errors)
4. Deploy to production when ready
5. Monitor API response times and error rates
