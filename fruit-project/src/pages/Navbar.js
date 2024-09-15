import React from "react"; 
import { Link } from 'react-router-dom';
function Navbar(){
   return(
       <div className="navbar">
        <ul>
            <Link to={'/Home'}><li>Home</li></Link>
            <Link to={'/Chat'}><li>Chatbot</li></Link>
            <Link to={'/Translator'}><li>Translator</li></Link>
            <Link to={'FAQ'}><li>FAQ's</li></Link>
            <Link to={'About'}><li>About</li></Link>
        </ul>
       </div>
   );
}
export default Navbar;