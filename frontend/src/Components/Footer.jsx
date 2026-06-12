import { Film } from "lucide-react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="bg-black text-white py-12 px-6">

            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

                {/* Brand Section */}
                <div>
                    <div className="flex items-center gap-2 mb-3">
                        <Film className="w-7 h-7 text-red-500" />
                        <span className="text-xl font-bold">CineAI</span>
                    </div>

                    <p className="text-gray-400 text-sm leading-6">
                        Your AI-powered movie recommendation companion. Discover your next favorite film.
                    </p>
                </div>

                {/* Navigation */}
                <div>
                    <h3 className="font-semibold mb-4">Navigation</h3>
                    <ul className="space-y-2 text-gray-400">
                        <li className="hover:text-white cursor-pointer">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="hover:text-white cursor-pointer">
                            <Link to="/movies">Movies</Link>
                        </li>
                        <li className="hover:text-white cursor-pointer">
                            <Link to="/recommendations">Recommendations</Link>
                        </li>
                        <li className="hover:text-white cursor-pointer">
                            <Link to="/about">About</Link>
                        </li>
                    </ul>
                </div>

                {/* Support */}
                <div>
                    <h3 className="font-semibold mb-4">Support</h3>
                    <ul className="space-y-2 text-gray-400">
                        <li className="hover:text-white cursor-pointer"> <a href="/"> Help Center </a></li>
                        <li className="hover:text-white cursor-pointer"> <a href="/">Terms of Service</a></li>
                        <li className="hover:text-white cursor-pointer"> <a href="/">Privacy Policy</a></li>
                        <li className="hover:text-white cursor-pointer"> <a href="/">Contact Us</a></li>
                    </ul>
                </div>

                {/* Social */}
                <div>
                    <h3 className="font-semibold mb-4">Follow Us</h3>
                    <div className="flex gap-4">
                        <a className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 hover:scale-110 transition" href="/">
                            <FaFacebookF />
                        </a>

                        <a className="w-10 h-10 flex items-center justify-center rounded-full bg-pink-500 hover:scale-110 transition" href="https://www.instagram.com/cinee_ai?igsh=a3g0YWxiM2txbnlv&utm_source=qr">
                            <FaInstagram />
                        </a>

                        <a className="w-10 h-10 flex items-center justify-center rounded-full bg-sky-500 hover:scale-110 transition" href="/">
                            <FaTwitter />
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom line */}
            <div className="text-center text-gray-500 text-sm mt-10 border-t border-gray-800 pt-5">
                Developed as an AI Semester Project | © 2026 CineAI. All rights reserved.
            </div>

        </footer>
    );
}

export default Footer;