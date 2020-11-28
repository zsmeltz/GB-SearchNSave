import React from "react";
import NavBar from "./Components/Navbar.js"
import Search from "./Components/Pages/Search.js"
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
   <div>
       <Router>
       <div>
       <NavBar/>
       <Route exact path="/" component={Search} />
       </div>
       </Router>
   </div>

  );

};

export default App;