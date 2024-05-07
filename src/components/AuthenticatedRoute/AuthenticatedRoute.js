import { Navigate } from "react-router-dom";

export default function AuthenticatedRoute(props){

    if (!props.isAuthenticated) {
        return <Navigate to="/zaloguj" replace />;
      }
    
      return props.children;
}