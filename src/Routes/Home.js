import React, { useEffect, useState } from "react";
import axios from "axios";
import Movie from "../Components/Movie";
// import "./Home.css";

const Home = () => {
    const [isLoading, setisLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchUsers = async () => {
        try {
            setisLoading(true);
            const rep = await axios.get(
            "https://yts.mx/api/v2/list_movies.json?sort_by=rating"
            );
            setMovies(rep.data.data.movies);
        } catch {
            setError("error");
        } finally {
            setisLoading(false);
        }
        };
        fetchUsers();
    }, []);

    if (isLoading) return <div>로딩 중 //////</div>;
    console.log(movies);
    return (
        <section className="container">
          {isLoading 
          ? (<div className="loader">
            <span className="loader_text">Loading...</span>
          </div> 
          ) : (
            <div className="movies">
              {movies.map(movie => (
                <Movie 
                key={movie.id}
                id={movie.id} 
                year={movie.year} 
                title={movie.title} 
                summary={movie.summary} 
                poster={movie.medium_cover_image}
                genres={movie.genres} 
                />
              ))}
            </div>
    
          )}
        </section>
    )
}

export default Home;


