import React, {useContext} from "react";
import { GlobalContext } from "../Context/GlobalContext";


export const ResultCard = ({movie}) => {
    const { addMovieToWatchList, addMovieToWatched, watchlist, watched } = useContext(GlobalContext)
    
    let storedMovie = watchlist.find(o => o.id === movie.id)
    let storedMovieWatched = watched.find((o) => o.id === movie.id)

    const watchlistDisabled = storedMovie ? true : storedMovieWatched ? true : false
    const watchedDisabled = storedMovieWatched ? true : false

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
            <div className="info">
                <div className="header">
                    <h3 className="title">{movie.title}</h3>
                    <h4 className="release-date">{movie.release_date ? movie.release_date.substring(0, 4) : "-"}</h4>
                </div>
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

// passing movie as a prop so we can access it later in the code
// this makes it so we have access to the add movie watchlist action we have created, so we can then tie it to the button we wil create
// we are wanting to make it so that you can only add a movie once to the watchlist, not multiple times
// searching watchlist called out above to see if any objects have an equal id
// o is short for object
// if there is something returned then it will be true then disable it, but if theres nothing there then it will be false
/* containing our poster */
// if tere is no image to display we will just get a blank div
/* Adding text so that the title of the movie is displayed and made it so the year the movie is released rather than the year, day and month. Used substring to get the year specifically. Added and or/else so that if a  movie doesn't have a specifc year the it will show a - */
/* added button to be able to add the movie to the watchlist */
/* also added a disabled action so when the button is clicked it is grayed out and cannot be clicked again */
