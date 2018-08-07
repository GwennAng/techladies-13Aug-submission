import React from "react"
//import {Link} from "react-router-dom";

export class Header extends React.Component {
    render () {
        return (
            <header>
               <h1>Gwenn's Site</h1>
               <nav>
                    <a href="/about">About</a>
                    <a href="/todos">Todo</a>
                </nav>
            </header>
            );
    }
};

/*
ul>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/todos">Todos</Link>
                        </li>
                    </ul>
                    */

// <img src="Gwenn-4-BW-pic.JPG" alt="Gwenn Ang's Photo" />