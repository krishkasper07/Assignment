import { Redirect, Route } from "react-router-dom";

const ProtectedRouter = ({component,...rest}) => {
    let RenderComponent=component;
    let hasToken=JSON.parse(localStorage.getItem('auth'));

    return (<Route 
       {...rest}
        render={props=>{
            return hasToken !== null && hasToken !=='' ?(<RenderComponent {...props}/>) :(<Redirect to={{pathname:'login'}}/>)
        }}
    />);
}
 
export default ProtectedRouter;