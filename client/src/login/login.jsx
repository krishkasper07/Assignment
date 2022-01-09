import "./login.css"
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import { toast } from "react-toastify";
import axios from "axios";
const Login = (props) => {
  const formik=useFormik({
    initialValues:{
      email:'',
      password:'',
    },
    validationSchema:yup.object({
      email:yup.string()
      .strict()
      .trim()
      .email('Enter vaild Email Address')
      .required('Email is required*'),
      password:yup.string()
      .strict()
      .required('Password is required*'),
    }),
    onSubmit:(userdata)=>{
             console.log(userdata);
             axios.post('http://localhost:5000/api/login',userdata)
             .then(res=>{
               localStorage.setItem('auth',JSON.stringify(res.data));
               toast.success(`sucessfully logged in ${userdata.email}`);
               props.history.push('/uploader')
             })
             .catch(err=>{
               toast.error(err.response.data)
             })
    }
  })
    return ( <div className="login">
        <form className="loginform" onSubmit={formik.handleSubmit}>
        <h1>Login</h1>
        <div className="mb-3">
          <label>Email address</label>
          <input type="email" className="form-control"
           name="email"
           autoComplete="off"
           onChange={formik.handleChange}
           value={formik.values.email}/>
          </div>
        <div className="mb-3">
          <label>Password</label>
          <input type="password" className="form-control" 
          name='password'
          autoComplete="off"
          onChange={formik.handleChange}
          value={formik.values.password}/>
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