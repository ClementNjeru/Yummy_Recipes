import React from 'react';
import Recipe from './Components/Recipe';
import './Components/style.css';
import { BrowserRouter as Routes, Route } from "react-router-dom";
// import RecipeItem from './Components/RecipeItem';


function App() {
  return (
    <>
        <Router>

          <Routes>
              <Route exact path="/" element={<RecipeItem/>}>
              </Route>            
          </Routes>
         </Router>
    </>
    
  )
}

export default App;
