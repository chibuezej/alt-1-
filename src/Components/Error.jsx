import React from "react";
import Error from "./500";

class ErrorBoundary extends React.Component {
 
    state = { error: null, errorInfo: null };
  
static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { errorInfo: true };
  }
  
  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo,
    });
  }

  render() {
    if (this.state.errorInfo) {
      return (
        <Error/>

      );
    }

    return this.props.children;
  }
}
export default ErrorBoundary;