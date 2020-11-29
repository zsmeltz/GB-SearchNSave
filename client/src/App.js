import React from "react";
import NavBar from "./Components/Navbar.js"
import SearchPage from "./Components/Pages/SearchPage.js"
import { BrowserRouter as Router, Route } from "react-router-dom";
import Heading from "./Components/Jumbotron.js";

function App() {
  return (
   <div>
       <Router>
       <div>
       <NavBar/>
       <Heading/>
       <Route exact path="/" component={SearchPage} />
       </div>
       </Router>
   </div>

  );

};

export default App;