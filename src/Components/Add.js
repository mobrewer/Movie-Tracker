import { useState } from "react";
import React from "react";
import { ResultCard } from "./ResultCard";

export const Add = () => {
    const [query, setQuery] = useState("")
    const [results, setResults] = useState([])

    const onChange = (e) => {
        
        e.preventDefault()
        // API fetch funcion
        setQuery(e.target.value)
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1&include_adult=false&query=${e.target.value}`)
        .then((res) => res.json())
        .then((data) => {
            // If else statememt to catch errors if any
            if(!data.errors) {
                setResults(data.results)
                console.log(data.results);
            } else {
                setResults([])
            }
        })
    }
    return (
        <div className="add-page">
            <div className="container">
                <div className="add-content">
                    <div className="input-wrapper">
                        {/* Will give search bar on page */}
                        <input 
                        type="text" 
                        placeholder="Search for movie"
                        value={query}
                        onChange={onChange}/>
                    </div>
                    {/* Map function to sort through API data, allows information to pop up when more than 1 character is inputed */}
                    {results.length > 0 && (
                        <ul className="results">
                            {results.map((movie) => (
                                <li key={movie.id}>
                                    <ResultCard movie={movie} />
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    )
}