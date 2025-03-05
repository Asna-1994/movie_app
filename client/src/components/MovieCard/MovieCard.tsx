import { useEffect, useState } from "react";
import { Movie } from "../../pages/Home";
import { Heart } from "lucide-react";
import { addToFavorites,  getFavorites, removeFromFavorites } from "../../services/api";
import toast from "react-hot-toast";

interface MovieCardProps {
  movie: Movie;
  setFavorites?: React.Dispatch<React.SetStateAction<Movie[]>>; 
}

const MovieCard: React.FC<MovieCardProps> = ({ movie, setFavorites }) => {
  const { poster, title, year, type, imdbID } = movie;
  const [isFavorite, setIsFavorite] = useState<boolean>(false);


  const fetchFavorites = async () => {
    try {
      const response = await getFavorites();
      if(response){
        const favorites = response.data
        const isFav = favorites.some((fav: Movie) => fav.imdbID === imdbID);
        setIsFavorite(isFav);
      }

    } catch (err: any) {
      console.error("Error fetching favorites:", err);
      toast.error("Error fetching favorites")
    }
  };
  useEffect(() => {

    fetchFavorites();
  }, [isFavorite]); 


  const handleFavoriteToggle = async () => {
    console.log("Button clicked");
    try {
      if (isFavorite) {
        await removeFromFavorites(imdbID);
        if (setFavorites) {
            setFavorites((prevFavorites) =>
              prevFavorites.filter((fav) => fav.imdbID !== imdbID)
            );
          }
    
          toast.success("Removed from favorites!")
      } else {
        await addToFavorites(movie);
        toast.success("Added to  favorites!")
      }
      setIsFavorite(!isFavorite);
    } catch (err) {
      console.error("Error toggling favorite:", err);
      toast.error("Error while adding or removing favorite 😞");
    }
  };

  return (
    <li className="border flex flex-col justify-center items-center p-7 shadow-md rounded-lg relative">
      {/* Heart Icon (Click to toggle) */}
      <Heart
        className={`w-6 h-6 absolute top-3 right-3 cursor-pointer transition ${
          isFavorite ? "text-red-500 fill-red-500" : "text-gray-400"
        }`}
        onClick={handleFavoriteToggle}
      />
      <img src={poster} className="w-full h-64 object-cover rounded-md" alt={title} />
      <h2 className="text-lg font-bold mt-2 text-center">{title}</h2>
      <div className="flex justify-between items-center w-full px-4 mt-2">
        <span className="text-gray-500">{year}</span>
        <span className="text-sm bg-blue-500 text-white px-2 py-1 rounded">{type}</span>
      </div>
    </li>
  );
};

export default MovieCard;
