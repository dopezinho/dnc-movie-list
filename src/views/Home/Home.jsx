import { useEffect, useState } from "react";
import { MovieService } from "../../api/MovieService";
import MovieCard from "../../components/MovieCard/MovieCard"


const Home = ({ searchValueProp }) => {
  const [movies, setmovies] = useState([])

  async function getMovies() {
      const { 
        data: {results},
       } = await MovieService.getMovies();
      
       setmovies(results);
  }

  async function getMoviesSearch(movieString) {
    const { 
      data: {results},
     } = await MovieService.searchMovies(movieString);
    
     setmovies(results);
  }

  useEffect(() => {
    getMovies();  
  },[]);

  useEffect (() => {
    if (searchValueProp) {
      getMoviesSearch(searchValueProp);
    }
    if (searchValueProp === "") {
      getMovies();
    }
  }, [searchValueProp]);
  

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