import React, {createContext, useEffect, useReducer} from "react";
import AppReducer from "./AppReducer";

// setting initial state
let initialState = {
    watchlist: [],
    watched: [],    
}

export const GlobalContext = createContext(initialState)

// Using Reducer function to use dispatch function later on
 export const GlobalProvider = props => {
    const [state, dispatch] = useReducer(AppReducer, initialState)

// Local storage function to keep save which movies have been selected
localStorage.getItem("watchlist") ? initialState.watchlist = JSON.parse(localStorage.getItem("watchlist")) : initialState.watchlist = []
localStorage.getItem("watched") ? initialState.watched = JSON.parse(localStorage.getItem("watched")) : initialState.watched = []

// Using useEffect fucntion to setItem
    useEffect(() => {
        localStorage.setItem("watchlist", JSON.stringify(state.watchlist))
        localStorage.setItem("watched", JSON.stringify(state.watched))
    }, [state])

// Action functions imported from AppReducer
// Dispatch function to trigger state change
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
    
    // Wrapping in provider so gloabl context can be used
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

