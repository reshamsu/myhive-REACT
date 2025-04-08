import type React from "react"
import { Link } from "react-router-dom"

const NotFound: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-20 text-center">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="mb-8">The page you are looking for doesn't exist or has been moved.</p>
      <Link to="/" className="bg-yellow-600 text-white px-6 py-3 rounded-full hover:bg-yellow-500 transition-colors">
        Go Home
      </Link>
    </div>
  )
}

export default NotFound

