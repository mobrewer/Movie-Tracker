import React, {useContext} from "react";
import { GlobalContext } from "../Context/GlobalContext";

// UseContext function being used to access GlobalContext component
export const ResultCard = ({movie}) => {
    const { addMovieToWatchList, addMovieToWatched, watchlist, watched } = useContext(GlobalContext)
    
    // Funtion to find if the movie id is being used
    let storedMovie = watchlist.find(o => o.id === movie.id)
    let storedMovieWatched = watched.find((o) => o.id === movie.id)

    // Function to disable the buttons once clicked on
    const watchlistDisabled = storedMovie ? true : storedMovieWatched ? true : false
    const watchedDisabled = storedMovieWatched ? true : false
// Function to get poster images and movie titles
    return (
        <div className="result-card">
            <div className="poster-wrapper">
                {movie.poster_path ? (
                    <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} 
                    alt={`${movie.title} Poster`}/>
                ) : (
                    <div className="filler-poster"></div>
                )}
            </div>
            {/* Function to add get movie title and release date displayed in results */}
            <div className="info">
                <div className="header">
                    <h3 className="title">{movie.title}</h3>
                    <h4 className="release-date">{movie.release_date ? movie.release_date.substring(0, 4) : "-"}</h4>
                </div>
                {/* Adding buttons and onClick */}
                <div className="controls">
                    <button className="btn"
                    disabled={watchlistDisabled}
                    onClick={() => addMovieToWatchList(movie)}>Add to Watchlist</button>

                    <button className="btn"
                        disabled={watchedDisabled}
                        onClick={() => addMovieToWatched(movie)}>Add to Watched</button>
                </div>
            </div>
        </div>
    )
}
