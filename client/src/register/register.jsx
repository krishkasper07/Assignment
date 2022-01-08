import "./register.css"
import {useFormik} from 'formik'
import {Link} from 'react-router-dom';
import * as yup from "yup";

const Register = (props) => {
  const formik=useFormik({
    initialValues:{
      name:'',
      email:'',
      password:'',
      confirmPassword:''
    },
    validationSchema:yup.object({
      name:yup.string()
      .strict()
      .trim()
      .required('Name is required*')
      .min(3,'minimum of 3 characters required')
      .max(15,'maximum 15 characters only'),
      email:yup.string()
      .strict()
      .trim()
      .email('Enter vaild Email Address')
      .required('Email is required*'),
      password:yup.string()
      .strict()
      .min(5,'minimum of 5 characters required')
      .max(15,'maximum 15 characters only')
      .required('Password is required*'),
      confirmPassword:yup.string()
      .oneOf([yup.ref('password'),null],'Confirm Password Must be same as Password')
      .required('Confirm Password is required*')
    }),
    onSubmit:(userdata)=>{
             console.log(userdata);
    }
  })
    return ( <div className="register">
    <form className="registerform" onSubmit={formik.handleSubmit}>
    <h1>Register</h1>
    <div className="mb-3">
      <label>Name</label>
      <input className="form-control"
      autoComplete="off"
      type="text"
      name="name" 
      onChange={formik.handleChange}
      value={formik.values.name}/>
      {formik.errors.name ? <div className="danger-text">{formik.errors.name}</div>:null}
    </div>
    <div className="mb-3">
      <label>Email</label>
      <input className="form-control"
      autoComplete="off"
      type="text"
      name="email" 
      onChange={formik.handleChange}
      value={formik.values.email}/>
      {formik.errors.email ? <div className="danger-text">{formik.errors.email}</div>:null}
    </div>
    <div className="mb-3">
      <label>Password</label>
      <input className="form-control"
      autoComplete="off"
      type="password"
      name="password" 
      onChange={formik.handleChange}
      value={formik.values.password}/>
      {formik.errors.password ? <div className="danger-text">{formik.errors.password}</div>:null}
    </div>
    
    <div className="mb-3">
      <label>Confirm Password</label>
      <input className="form-control"
      autoComplete="off"
      type="password"
      name="confirmPassword"  
      onChange={formik.handleChange}
      value={formik.values.confirmPassword}/>
      {formik.errors.confirmPassword ? <div className="danger-text">{formik.errors.confirmPassword}</div>:null}
    </div>
    <button type="submit" className="btn btn-primary">Submit</button>
    <div className="alreadyuser">
    Already Registered User? Click here to
    <Link to="/">Login</Link>
    </div>
  </form>
    </div> );
}
 
export default Register;
