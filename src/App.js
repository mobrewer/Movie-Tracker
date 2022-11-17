// App is meant to be able to add movies you look up to your watchlist or your watched list. So there will be options to be able to search for movies, view the movies you have in your watched to watchlist
// For this to work I plan on creating buttons for these pages and their own components, will have to use routes and links I believe because those buttons should take you to a different page based on what you selected
// But there should be an option to be able to move the movie that was added to a list to a different list. For this I assume I would have to create a function so that when a certain button is clicked it will take that movie out of that specific page or get it added to a specifc page
// The search function will have the ability to pull the data that is requested from the API to be able to get movies added to the pages

import React from "react";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Header } from "./Components/Header";
import { WatchList } from "./Components/WatchList";
import { Watched } from "./Components/Watched";
import { Add } from "./Components/Add";
import { GlobalProvider } from "./Context/GlobalContext";
import './App.css'
import './lib/font-awesome/css/all.min.css'

function App() {
 return(
    <GlobalProvider> 

    <Router>
        <Header />
{/* These routes are what is needed in order to click on a page and it link to the corresponding page */}
        <Routes>
            <Route exact path="/" element = { <WatchList />}/>

            <Route path="/watched" element = {<Watched />}/>
            <Route path="/add" element = {<Add />}/>
        </Routes>
    </Router>
    </GlobalProvider>
 )
}

export default App;
