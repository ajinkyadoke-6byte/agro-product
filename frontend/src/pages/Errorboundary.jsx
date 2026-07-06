import React from "react";
import NotFound from "./NotFound";

// ---------------------------------------------------------------------------
// React only catches render-time crashes with a class component that
// implements getDerivedStateFromError / componentDidCatch — there's no hook
// equivalent yet. This wraps <App /> so that if ANY component throws while
// rendering, the whole white-screen crash is replaced by your NotFound page
// (type="crash") instead of a blank page or a raw error stack.
// ---------------------------------------------------------------------------
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // Send this to your logging service (Sentry, LogRocket, etc.) in production.
    console.error("App crashed:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return <NotFound type="crash" onAction={() => window.location.reload()} />;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;