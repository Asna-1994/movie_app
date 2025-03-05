import  { useEffect, useState } from 'react';
import { getFavorites } from '../services/api';
import { Movie } from './Home';
import MovieCard from '../components/MovieCard/MovieCard';
import Header from '../components/Header/Header';
import toast from 'react-hot-toast';



const Favorites = () => {
  const [favorites, setFavorites] = useState<Movie[]>([]);


useEffect(() => {
    const fetchFavorites = async () => {
        try {
            const response = await getFavorites();
            if(response){
                const favorites = response.data
                setFavorites(favorites); 
            }
  
        } catch (error) {
            console.error('Error fetching favorites:', error);
            toast.error("Error fetching favorites")
        }
    };

    fetchFavorites();
}, []); 


  return (
    <div>
        <Header/>
        <h1 className='text-center p-10 text-3xl font-bold'>Favorites</h1>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-10">
        {favorites.map((fav) => (
<MovieCard  key={fav.imdbID} movie={fav} setFavorites={setFavorites} />
        ))}
      </ul>
    </div>
  );
};

export default Favorites;