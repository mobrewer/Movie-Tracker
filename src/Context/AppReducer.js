export default (state, action) => {
    switch(action.type) {
        case "ADD_MOVIE_TO_WATCHLIST":
            return {
                ...state,
                watchlist: [action.payload, ...state.watchlist]
            }
            case "REMOVE_MOVIE_FROM_WATCHLIST":
                return {
                    ...state,
                    watchlist: state.watchlist.filter(movie => movie.id !== action.payload)
                }
            case "ADD_MOVIE_TO_WATCHED":
                return {
                    ...state,
                    watchlist: state.watchlist.filter(
                        (movie) => movie.id !== action.payload.id
                    ),
                    watched: [action.payload, ...state.watched],
                }
            case "MOVE_TO_WATCHLIST":
                return {
                    ...state,
                    watched: state.watched.filter(movie => movie.id !== action.payload.id),
                    watchlist: [action.payload, ... state.watchlist]
                }
            case "REMOVE_FROM_WATCHED":
                return {
                    ...state,
                    watched: state.watched.filter(movie => movie.id !== action.payload)
                }
        default:
            return state
    }
}

// reducer is a function that returns some state data, it describes how a state is transfered to the next state
// we want to return the existing state, then make changes to it in terms of the watchlist
// we are creating new array and passing movie data payload, then spreading the original state. This sould then add the movie to the existing state

