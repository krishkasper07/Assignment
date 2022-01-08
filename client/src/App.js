import './App.css';
import Login from './login/login';
import Register from './register/register';
import {Route, Switch } from "react-router-dom";
function App() {
  return (
    <div>
     <Switch>
         <Route exact path='/' component={Login}/>
         <Route exact path='/login' component={Login}/>
         <Route exact path='/register' component={Register}/>
     </Switch>
    </div>
  );
}

export default App;
