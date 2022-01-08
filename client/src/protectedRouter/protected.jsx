import { Redirect, Route } from "react-router-dom";

const ProtectedRouter = ({component,...rest}) => {
    let RenderComponent=component;
    return (<Route 
       {...rest}
        render={props=>{
            return false ?(<RenderComponent {...props}/>) :(<Redirect to={{pathname:'login'}}/>)
        }}
    />);
}
 
export default ProtectedRouter;