import { Component } from "react";
import { Link } from "react-router-dom";

class ErrorBoundary extends Component {
  state = { hasError: false };
  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // TrackJs or NewRelic
    console.error("ErrorBoundaryc component caught an error", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <h2>
          There was an error with listing.
          <Link to="/">Click here to go back to home page</Link>
        </h2>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
