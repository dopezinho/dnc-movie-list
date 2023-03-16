import { useEffect, useState } from "react";
import { MovieService } from "../../api/MovieService";
import MovieCard from "../../components/MovieCard/MovieCard"


const Home = () => {
  const [movies, setmovies] = useState([])

  async function getMovies() {
      const { 
        data: {results},
       } = await MovieService.getMovies();
      
       setmovies(results);
  }

  useEffect(() => {
    getMovies();  
  },[]);

  useEffect(() => {
    console.log(movies);
  });
  

  return (
    <section className="Home">
      {
        movies.map(movie => (
          <div key={movie.id}>
            <MovieCard movieProp={movie}/>
          </div>
        ))
      }
    </section>
  )
}

export default Home