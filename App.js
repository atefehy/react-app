import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import React from 'react';
import Verification from './Verification';
import Users from './Users';
import Products from './Products';
function App (){
  return (
 
    ///////
    <Router>
    <button class="button"><Link class="a" to='/users'>user</Link></button> 
    <button class="button"><Link class="a" to='/products'>products</Link></button>
    <button class="button"><Link class="a" to='/Verification'>Verification</Link></button>
     <Routes>
     <Route path='/users' element={<Users/>} />
     <Route path='/products' element={<Products/>} />
     <Route path='/Verification' element={<Verification/>} />
     </Routes>
     </Router>
   
  );
};

export default App;

