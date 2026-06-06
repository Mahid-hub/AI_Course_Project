import { FaRobot } from "react-icons/fa";
import NavBar from "./Components/NavBar.jsx"
import Button from "./Components/Button.jsx"
import MovieCards from "./Components/MovieCards.jsx";
import Footer from "./Components/Footer.jsx";
import HomePage from "./HomePage.jsx";
import MoviePage from "./MoviePage.jsx";
import RecommendationPage from "./RecommendationPage.jsx";
import AboutPage from "./AboutPage.jsx";
import { Routes, Route } from "react-router-dom";
import { Home } from "lucide-react";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/movies" element={<MoviePage/>} />
      <Route path="/recommendations" element={<RecommendationPage/>} />
      <Route path="/about" element={<AboutPage/>} />
    </Routes>
    </>
  )
}

export default App