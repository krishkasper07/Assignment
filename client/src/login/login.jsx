import "./login.css"
const Login = () => {
    return ( <div className="login">
        <form className="loginform">
        <h1>Login</h1>
        <div className="mb-3">
          <label  className="form-label">Email address</label>
          <input type="email" className="form-control"/>
          </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input type="text" className="form-control"/>
        </div>
        <div className="mb-3 form-check">
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
        </div> );
}
 
export default Login;