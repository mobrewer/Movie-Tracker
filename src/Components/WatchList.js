import React, {useContext} from "react"
import { GlobalContext } from "../Context/GlobalContext"
import { MovieCard } from "./MovieCard"

export const WatchList = () => {
    const {watchlist} = useContext(GlobalContext)
  return (
    <div className="movie-page">
        <div className="container">
            <div className="header">
                <h1 className="heading">My Watchlist</h1>
                {/* Function to show how many movies are added */}
                <span className="count-pill">
                    {watchlist.length} {watchlist.length === 1 ? "Movie" : "Movies"}
                </span>
            </div>
            {/* If else statement */}
            {watchlist.length > 0 ? (
                <div className="movie-grid">
                {watchlist.map(movie => (
                    <MovieCard movie={movie} type="watchlist"  />
                ))}
                </div>
            ) : (
                <h2 className="no-movies">No movies in your watchlist! Add some!</h2>
            )}
        </div>
    </div>
  )
}