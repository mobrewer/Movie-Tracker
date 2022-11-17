import React from "react"
import { Link } from "react-router-dom"

// Creating links for each page
 export const Header = () => {
  return (
    <header>
        <div className="contianer">
            <div className="inner-content">
                <div className="brand">
                    <Link to="/">Watch List</Link>
                </div>
                <ul className="nav-links">
                    <li>
                        <Link to="/">Watch List</Link>
                    </li>
                    <li>
                        <Link to="/watched">Watched</Link>
                    </li>
                    <li>
                        <Link to="/add" className="btn">+ Add</Link>
                    </li>
                </ul>
            </div>
        </div>
    </header>
  )
}


