import {BrowserRouter as Router, Link} from 'react-router-dom';
import("./Home.css")


function Home() {
    return ( <div>
    <h1>Welcome to BookStore App!!</h1>
    <Link to="/LogIn">  <button className="login">Login</button></Link>
    <Link to="Signup">  <button>SignUp</button></Link>
  </div>)
}
export default Home;