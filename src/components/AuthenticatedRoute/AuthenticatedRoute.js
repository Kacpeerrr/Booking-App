import { Navigate } from "react-router-dom";

export default function AuthenticatedRoute(props){

    if (!props.user) {
        return <Navigate to="/zaloguj" replace />;
      }
    
      return props.children;
}