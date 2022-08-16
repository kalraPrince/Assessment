import LogIn from "./LogIn";
import { useNavigate } from "react-router-dom";
import "./Signup.css"
function Signup() {
    let navigate = useNavigate();

    return (<div id="formContainer">
    <form id="form" >
      <fieldset>
        <h1>Create New Account!!</h1>
        <div id="fullName">
          <input type="text" name="fName" id="fName" placeholder="First Name" required />
          <input type="text" name="lName" id="lName" placeholder="Last Name" required />
        </div>
        <div id="otherInputs">
          <input type="address" name="address" id="address" placeholder="Home Address" required />
          <input type="tel" name="phone" id="phone" placeholder="Personal Phone Number" required />
          <input type="email" name="email" id="email" placeholder="Email Address" required />
        </div>
        <br /><br />
        <button id="submit" onClick={()=>navigate("/LogIn")}>SignUp</button>
      </fieldset>

    </form>
  

  </div>)
}
export default Signup;