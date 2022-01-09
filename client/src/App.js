import './App.css';
import Login from './login/login';
import Register from './register/register';
import {Route, Switch } from "react-router-dom";
import ProtectedRouter from './protectedRouter/protected';
import Uploader from './uploader/uploader';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <div>
     <Switch>
         <Route exact path='/' component={Login}/>
         <Route exact path='/login' component={Login}/>
         <Route exact path='/register' component={Register}/>
         <ProtectedRouter path='/uploader' component={Uploader}/>
     </Switch>
     <ToastContainer/>
    </div>
  );
}

export default App;
