import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";

import {Header} from "./Header";
import {About} from "./About"; 
import {Todos} from "./Todos";


// <About title="Bits about Gwenn Ang"/> 

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
            <div>
                 <Header />
                 <Switch>
                     <Route path="/" exact component={About} />
                     <Route path="/about" component={About} />
                     <Route path="/todos"  component={Todos} />
                 </Switch>  
            
            </div>
            </BrowserRouter>
        );      
    }
}
export default App;