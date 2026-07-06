// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )


import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ErrorBoundary from "./pages/ErrorBoundary";
import NotFound from "./pages/NotFound";
import { useOnlineStatus } from "./useOnlineStatus";
import "./index.css";

// Flip this to true (or wire it to an env var / API flag) to put the whole
// site into maintenance mode without touching App.jsx at all.
const MAINTENANCE_MODE = false;

function Root() {
  const isOnline = useOnlineStatus();

  if (MAINTENANCE_MODE) {
    return <NotFound type="maintenance" />;
  }

  if (!isOnline) {
    return <NotFound type="offline" />;
  }

  return (
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);