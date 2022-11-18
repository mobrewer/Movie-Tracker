# Project Overview


## Project Description

This app helps keep track of movies you are wanting to watch by giving you the ability to search and add movies to a Watch List. Once you have watched those movies, you have the option to moves the movies from your watch list to your WATCHED list. This way you can stay on top of your movie watching!

## Project Links

- [GitHub Repo](https://github.com/mobrewer/Movie-Tracker)
- [Movie Tracker](https://movie-tracker-zakt-j68dvj4az-mobrewer.vercel.app/)
- [Demo Recording](https://vimeo.com/772466056/9559c1a1d5)

## Wireframes & React Component Hierarchy

- [Wireframes](https://whimsical.com/getting-started-boards-T8L9ob1vKmmxAvFVn3DW5e)
- [React Architecture](https://whimsical.com/getting-started-boards-T8L9ob1vKmmxAvFVn3DW5e)

#### MVP EXAMPLE
- Found and used an external API
- Page is interactive
- Is a react app

#### PostMVP EXAMPLE

- Added local storage
- Added icons with functionality to add, remove and move movies

## Components

| Component | Description | 
| --- | :---: |  
| App | This will pull data passed into it and include React Router| 
| Header | This will display the header, includes the links to their pages | 
| Add | This will fetch the API data, display the search bar, map function to find movies based on input |
| MovieCard | Displays the poster image and title based on input |
| MovieControls | Displays the icons, has onClick function |
| ResultCard | Displays buttons to add to watch or watched list, function to disable buttons after pressed, displays release date |
| Watched | Displays movies added to watched list, displays amount of movies added |
| WatchList | Displays movies added to watch list, displays amount of movies added |
| AppReducer | Functions for icons on the poster |
| GloablContext | Contains local storage to save what has been clicked, removed, moved. Used to be passed to most components |

## Time Frames

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Working with API | H | 3hrs| 4hrs | 4hrs |
| Links and Routes | H | 3.5hrs| 2hrs | 2hrs |
| Button Functionality | M/H | 2hrs| 3hrs | 3hrs |
| Context | H | 3.5hrs | 4.5hrs | 4.5hrs |
| Styling | H | 2 hrs | 3.5hrs| 3.5hrs |
| Total | | 14hrs| 17hrs | 17hrs |

## Additional Libraries
 Use this section to list all supporting libraries and their role in the project such as Axios, ReactStrap, D3, Bootstrap, Tailwind CSS, etc. 
 - React Router, allows to change the browser URL
 - Font-awesone for the icons

## Code Snippet

This gave the functionality to the icons to give the user the option to move, from watch list to watched (vice versa, or just remove it completely from either list!

```
switch(action.type) {
        case "ADD_MOVIE_TO_WATCHLIST":
            return {
                ...state,
                watchlist: [action.payload, ...state.watchlist]
            }
        case "ADD_MOVIE_TO_WATCHED":
             return {
                ...state,
                 watchlist: state.watchlist.filter(
                     (movie) => movie.id !== action.payload.id
                   ),
                    watched: [action.payload, ...state.watched],
                }
         case "REMOVE_FROM_WATCHED":
               return {
                    ...state,
                    watched: state.watched.filter(movie => movie.id !== action.payload)
                }
```

## Issues and Resolutions
 I was having a major issue with local storage, it was terrible. Had to re-write it as an if else statement and use dot notation properly. I wasn't using dot notation properly originally in the line of code so it wasn't showing up in the local storage

#### SAMPLE.....
**ERROR**:  Uncaught SyntaxError: Unexpected token 'o', "[object JSON]" is not valid JSON GlobalContext.js:7                              
**RESOLUTION**: Added initialState.watchllist after if to equal Json.parse etc..., and after else same with initialState.watched
