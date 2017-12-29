import React from "react";
import ReactDOM from "react-dom";
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom';

import Home from "./home";
import Category from "./category";
import "./style.css";


class App extends React.Component{
    
    render(){
        return(
            <Router>
                <div>
                     <h1 className="one">Main page</h1>
                    
                     <ul className='menu'>                       
                        <li><button><Link to="/" className="active">Home</Link></button></li>
                        <li><Link to="/Category">Category</Link></li>
                     </ul>
                   
                     
                     <Route exact path="/" component={Home}/>
                    <Route path="/Category" component={Category}/>
            
</div>
</Router>
        );
    }
}
ReactDOM.render(<App />, document.getElementById("root"));