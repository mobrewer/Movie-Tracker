import React, {createContext, useRouter, useEffect, useReducer} from "react";
import AppReducer from "./AppReducer";


let initialState = {
    watchlist: [],
    watched: [],    
}

export const GlobalContext = createContext(initialState)


 export const GlobalProvider = props => {
    const [state, dispatch] = useReducer(AppReducer, initialState)


localStorage.getItem("watchlist") ? initialState.watchlist = JSON.parse(localStorage.getItem("watchlist")) : initialState.watchlist = []
localStorage.getItem("watched") ? initialState.watched = JSON.parse(localStorage.getItem("watched")) : initialState.watched = []



    useEffect(() => {
        localStorage.setItem("watchlist", JSON.stringify(state.watchlist))
        localStorage.setItem("watched", JSON.stringify(state.watched))
    }, [state])

   
    const addMovieToWatchList = (movie) => {
        dispatch({type: "ADD_MOVIE_TO_WATCHLIST", payload: movie})
    }

    const removeMovieFromWatchlist = (id) => {
        dispatch({type: "REMOVE_MOVIE_FROM_WATCHLIST", payload: id})
    }

    const addMovieToWatched = (movie) => {
        dispatch({type: "ADD_MOVIE_TO_WATCHED", payload: movie})
    }

    const moveToWatchlist = (movie) => {
        dispatch({type: "MOVE_TO_WATCHLIST", payload: movie})
    }
    
    const removeFromWatched = (id) => {
        dispatch({type: "REMOVE_FROM_WATCHED", payload: id})
    }
    
    return (
        <GlobalContext.Provider value={{
            watchlist: state.watchlist, 
            watched: state.watched, 
            addMovieToWatchList,
            removeMovieFromWatchlist,
            addMovieToWatched,
            moveToWatchlist,
            removeFromWatched,
            }}>
            {props.children}
        </GlobalContext.Provider>
    )
}

// set up intial state
// setting up empty arrays because we want out movies to be set up as arrays
// added local storage here so that it checks to see if there is anything in the local storage in wachlist or watched

// creating context, exporting so we can use it later 
// provider components, this makes it so we cab access the global context from other variables
 // use effect is triggered whenver the state is changed in our provider, so whenever this is triggered we want it saved to our local storage

 // actions, providing the movie data, dispatching a type, payload is the movie data
// using global provide to wrap it around all other components so they can use the global context
    // adding watchlist etc... so we can access it in this 'store' where we have stored this data

