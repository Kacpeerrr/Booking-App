import { Component } from "react";

class ErrorBoundary extends Component{
    state = {
        hasError: false,
        error:null
    }

    static getDerivedStateFromError(error){
        return {hasError: true, error}
    }

    render(){
        if (this.state.hasError) {
            return (
                <div className="alert alert-danger">
                    <p>Wystąpił jakiś problem: {this.state.error.message}</p>
                </div>
            )
        }
        return this.props.children
    }
}
export default ErrorBoundary