import { Component } from "react";
import { Link } from "@tanstack/react-router";


class ErrorBoundary extends Component {
    constructor(props) {
    super(props);
    }
state={hasError:false}
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      <div className="error-ErrorBoundary">
        <h2>Something went wrong</h2>
<p>
    THere was an error in the application. <Link to="/">Click here</Link> to go back to the home page or wait a few seconds.
</p>
      </div> 
    }
    return this.props.children;
  }
}

export default ErrorBoundary;