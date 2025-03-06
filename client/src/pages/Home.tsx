import { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import { fetchMovies } from "../services/api";
import MovieCard from "../components/MovieCard/MovieCard";
import toast from "react-hot-toast";

export interface Movie {
  title: string;
  poster: string;
  type: string;
  imdbID: string;
  year: string;
}

const Home = () => {
  const [query, setQuery] = useState<string>("");
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const timeOutId = setTimeout(async () => {
     
          if (typeof query !== "string") {
            toast.error("Query must be a string")
            return
           }

      if (query) {
        try {
          setLoading(true);
          setError(null); 
          const response = await fetchMovies(query);
          if(response){
            const movieData = response.data;
console.log(movieData)
            if (movieData.length === 0) {
              setMovies([]);
              toast.error("No search results found 😞");
            } else {
              setMovies(movieData);
            }
          }

        } catch (err) {
          console.error("Error fetching movies:", err);
          setError("Failed to fetch movies. Try again!");
          toast.error("Error fetching movies! 🚨");
        } finally {
          setLoading(false);
        }
      } else {
        setMovies([]);
      }
    }, 500);

    return () => clearTimeout(timeOutId);
  }, [query]);

  return (
    <>
      <Header />
      <div>
        {/* Search Input */}
        <section className="p-5 flex justify-center">
          <div>
            <input
              className="p-2 rounded border outline-none"
              type="text"
              placeholder="Search for movies..."
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
        </section>

        {/* Loading State */}
        {loading && (
          <p className="text-center text-gray-500">Loading movies...</p>
        )}

        {/* Error State */}
        {error && <p className="text-center text-red-500">{error}</p>}

        {/* No Results Found */}
        {!loading && movies.length === 0 && query && !error && (
          <p className="text-center text-gray-500">No search results found.</p>
        )}

        {/* Movie List */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-5">
          {movies.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))}
        </ul>
      </div>
    </>
  );
};

export default Home;
