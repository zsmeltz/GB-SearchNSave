import React from "react";
import NavBar from "./Components/Navbar.js"
import SearchPage from "./Components/Pages/SearchPage/SearchPage.js"
import SavedPage from "./Components/Pages/SavedPage/SavedPage.js"
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
       <Route exact path="/saved" component={SavedPage} />
       </div>
       </Router>
   </div>

  );

};

export default App;