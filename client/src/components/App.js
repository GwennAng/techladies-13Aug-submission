import React from "react";

import {Header} from "./Header";
import {About} from "./About";
import {Todos} from "./Todos";


class App extends React.Component {
    render() {
        return (
            <div>
                 <Header />
                 <About title="Gwenn Ang"/>
                <Todos />
            </div>
        );      
    }
}
export default App;