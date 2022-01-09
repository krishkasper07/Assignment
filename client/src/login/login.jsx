import "./login.css"
import { Link } from "react-router-dom";
const Login = () => {
    return ( <div className="login">
        <form className="loginform">
        <h1>Login</h1>
        <div className="mb-3">
          <label>Email address</label>
          <input type="email" className="form-control"/>
          </div>
        <div className="mb-3">
          <label>Password</label>
          <input type="text" className="form-control"/>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
        <div className="registeruser">
         Click here to
        <Link to="/register">Register</Link>
        </div>
      </form>
        </div> );
}
 
export default Login;