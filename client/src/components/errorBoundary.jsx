// client/src/components/ErrorBoundary.jsx
import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, info: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    // Send to console and optionally to remote logging service
    console.error("ErrorBoundary caught:", error, info);
    // You could POST to an errors API here
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-6 text-center">
          <h2 className="text-2xl font-bold text-red-600">Something went wrong</h2>
          <p className="mt-2 text-gray-700">
            Please refresh the page or contact support if the problem persists.
          </p>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
