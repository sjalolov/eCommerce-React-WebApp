import "./App.css";
import Header from "./Components/Header/Header.js";
import Checkout from "./Components/Checkout/Checkout.js";
import Home from "./Components/Home/Home.js";
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
         <Switch>
           <Route exact path="/checkout">
             <Header/>
             <Checkout/>
           </Route>
           <Route  exact path="/">
             <Header/>
             <Home/>
           </Route> 
         </Switch>
      </Router>
    </div>
  );
}

export default App;
