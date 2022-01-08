import './App.css';
import Login from './login/login';
import Register from './register/register';
import {Route, Switch } from "react-router-dom";
import ProtectedRouter from './protectedRouter/protected';
import Uploader from './uploader/uploader';
function App() {
  return (
    <div>
     <Switch>
         <Route exact path='/' component={Login}/>
         <Route exact path='/login' component={Login}/>
         <Route exact path='/register' component={Register}/>
         <ProtectedRouter path='/uploader' component={Uploader}/>
     </Switch>
    </div>
  );
}

export default App;
