
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-100 px-4">

            <div className="text-center">

                {/* 404 Text */}
                <h1 className="text-7xl md:text-9xl font-extrabold text-gray-800">
                    404
                </h1>

                {/* Message */}
                <h2 className="mt-4 text-2xl md:text-3xl font-semibold text-gray-700">
                    Oops! Page Not Found
                </h2>

                <p className="mt-2 text-gray-500 max-w-md mx-auto">
                    The page you are looking for might have been removed,
                    had its name changed, or is temporarily unavailable.
                </p>

                {/* Button */}
                <div className="mt-6">
                    <Link
                        to="/"
                        className="inline-block px-6 py-3 text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
                    >
                        Go Back Home
                    </Link>
                </div>
            </div>

        </div>
    );
};

export default NotFound;