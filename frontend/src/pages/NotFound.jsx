// import { Home, WifiOff, Wrench, AlertTriangle, RefreshCw } from "lucide-react";
// import "./APP.css";

// // ---------------------------------------------------------------------------
// // One component, four situations. Instead of building a separate page for
// // "404", "offline", "under maintenance" and "app crashed", we drive all of
// // them off a single `type` prop — the layout is identical, only the icon,
// // heading, message and button change. This is the same reasoning as
// // OrderActions in MyOrders.jsx: a lookup object instead of if/else chains.
// // ---------------------------------------------------------------------------
// const VARIANTS = {
//   notFound: {
//     code: "404",
//     icon: null,
//     heading: "Page Not Found",
//     message: "Oops! The page you are looking for doesn't exist or has been moved.",
//     buttonText: "Go Back Home",
//     buttonIcon: Home,
//   },
//   offline: {
//     code: null,
//     icon: WifiOff,
//     heading: "You're Offline",
//     message: "We couldn't reach AgroMart. Please check your internet connection and try again.",
//     buttonText: "Retry",
//     buttonIcon: RefreshCw,
//   },
//   maintenance: {
//     code: null,
//     icon: Wrench,
//     heading: "Under Maintenance",
//     message: "We're currently performing scheduled maintenance. We'll be back online shortly.",
//     buttonText: "Refresh",
//     buttonIcon: RefreshCw,
//   },
//   crash: {
//     code: null,
//     icon: AlertTriangle,
//     heading: "Something Went Wrong",
//     message: "An unexpected error occurred on our end. Please try reloading the page.",
//     buttonText: "Reload Page",
//     buttonIcon: RefreshCw,
//   },
// };

// /**
//  * NotFound — shared fallback page for 404 / offline / maintenance / crash.
//  *
//  * Props:
//  *  - type:     "notFound" | "offline" | "maintenance" | "crash"  (default "notFound")
//  *  - onAction: function called when the button is clicked.
//  *              If not passed, sensible defaults are used per type
//  *              (go home for notFound, reload page for the rest).
//  *  - onBack:   optional — used by App.jsx's page-switcher (setPage('Home'))
//  *              so this fits the same prop pattern as your other pages.
//  */
// export default function NotFound({ type = "notFound", onAction, onBack }) {
//   const variant = VARIANTS[type] || VARIANTS.notFound;
//   const ButtonIcon = variant.buttonIcon;
//   const Icon = variant.icon;

//   const handleClick = () => {
//     if (onAction) return onAction();
//     if (onBack && type === "notFound") return onBack(); // e.g. setPage('Home')
//     window.location.reload(); // sensible default for offline / maintenance / crash
//   };

//   return (
//     <section className="notfound-page">
//       <div className="notfound-content">
//         {variant.code ? (
//           <p className="notfound-code">{variant.code}</p>
//         ) : (
//           <div className="notfound-icon-wrap">
//             <Icon size={56} strokeWidth={1.5} />
//           </div>
//         )}

//         <h1 className="notfound-heading">{variant.heading}</h1>
//         <div className="notfound-divider" aria-hidden="true" />
//         <p className="notfound-message">{variant.message}</p>

//         <button className="notfound-btn" onClick={handleClick}>
//           <ButtonIcon size={18} />
//           {variant.buttonText}
//         </button>
//       </div>

//       <div className="notfound-illustration" aria-hidden="true">
//         <FarmScene />
//       </div>
//     </section>
//   );
// }

// // A lightweight inline SVG so this page has zero dependency on an image
// // asset (nothing to import, nothing that can 404 itself). Swap this out
// // for your tractor photo any time — see the note below the component.
// function FarmScene() {
//   return (
//     <svg viewBox="0 0 400 260" className="notfound-svg" xmlns="http://www.w3.org/2000/svg">
//       <ellipse cx="200" cy="230" rx="200" ry="30" fill="#e8f3e8" />
//       <path d="M0 200 Q100 160 200 190 T400 180 V260 H0 Z" fill="#cfe8cf" />
//       <circle cx="320" cy="70" r="34" fill="#fef9c3" />
//       <g stroke="#16a34a" strokeWidth="6" strokeLinecap="round">
//         <path d="M120 210 V150" />
//         <path d="M120 160 L95 140" />
//         <path d="M120 175 L145 155" />
//       </g>
//       <ellipse cx="120" cy="140" rx="22" ry="16" fill="#16a34a" />
//       <rect x="180" y="160" width="70" height="40" rx="6" fill="#15803d" />
//       <circle cx="195" cy="205" r="16" fill="#1f2937" />
//       <circle cx="240" cy="205" r="16" fill="#1f2937" />
//       <rect x="195" y="130" width="30" height="30" rx="4" fill="#22c55e" />
//     </svg>
//   );
// }




import { Home, WifiOff, Wrench, AlertTriangle, RefreshCw } from "lucide-react";
import "../index.css";

// ---------------------------------------------------------------------------
// One component, four situations. Instead of building a separate page for
// "404", "offline", "under maintenance" and "app crashed", we drive all of
// them off a single `type` prop — the layout is identical, only the icon,
// heading, message and button change. This is the same reasoning as
// OrderActions in MyOrders.jsx: a lookup object instead of if/else chains.
// ---------------------------------------------------------------------------
const VARIANTS = {
  notFound: {
    code: "404",
    icon: null,
    heading: "Page Not Found",
    message: "Oops! The page you are looking for doesn't exist or has been moved.",
    buttonText: "Go Back Home",
    buttonIcon: Home,
  },
  offline: {
    code: null,
    icon: WifiOff,
    heading: "You're Offline",
    message: "We couldn't reach AgroMart. Please check your internet connection and try again.",
    buttonText: "Retry",
    buttonIcon: RefreshCw,
  },
  maintenance: {
    code: null,
    icon: Wrench,
    heading: "Under Maintenance",
    message: "We're currently performing scheduled maintenance. We'll be back online shortly.",
    buttonText: "Refresh",
    buttonIcon: RefreshCw,
  },
  crash: {
    code: null,
    icon: AlertTriangle,
    heading: "Something Went Wrong",
    message: "An unexpected error occurred on our end. Please try reloading the page.",
    buttonText: "Reload Page",
    buttonIcon: RefreshCw,
  },
};

/**
 * NotFound — shared fallback page for 404 / offline / maintenance / crash.
 *
 * Props:
 *  - type:     "notFound" | "offline" | "maintenance" | "crash"  (default "notFound")
 *  - onAction: function called when the button is clicked.
 *              If not passed, sensible defaults are used per type
 *              (go home for notFound, reload page for the rest).
 *  - onBack:   optional — used by App.jsx's page-switcher (setPage('Home'))
 *              so this fits the same prop pattern as your other pages.
 */
export default function NotFound({ type = "notFound", onAction, onBack }) {
  const variant = VARIANTS[type] || VARIANTS.notFound;
  const ButtonIcon = variant.buttonIcon;
  const Icon = variant.icon;

  const handleClick = () => {
    if (onAction) return onAction();
    if (onBack && type === "notFound") return onBack(); // e.g. setPage('Home')
    window.location.reload(); // sensible default for offline / maintenance / crash
  };

  return (
    <section className="notfound-page">
      <div className="notfound-content">
        {variant.code ? (
          <p className="notfound-code">{variant.code}</p>
        ) : (
          <div className="notfound-icon-wrap">
            <Icon size={56} strokeWidth={1.5} />
          </div>
        )}

        <h1 className="notfound-heading">{variant.heading}</h1>
        <div className="notfound-divider" aria-hidden="true" />
        <p className="notfound-message">{variant.message}</p>

        <button className="notfound-btn" onClick={handleClick}>
          <ButtonIcon size={18} />
          {variant.buttonText}
        </button>
      </div>

      <div className="notfound-illustration" aria-hidden="true">
        <FarmScene />
      </div>
    </section>
  );
}

// A lightweight inline SVG so this page has zero dependency on an image
// asset (nothing to import, nothing that can 404 itself). Swap this out
// for your tractor photo any time — see the note below the component.
function FarmScene() {
  return (
    <svg viewBox="0 0 400 260" className="notfound-svg" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="200" cy="230" rx="200" ry="30" fill="#e8f3e8" />
      <path d="M0 200 Q100 160 200 190 T400 180 V260 H0 Z" fill="#cfe8cf" />
      <circle cx="320" cy="70" r="34" fill="#fef9c3" />
      <g stroke="#16a34a" strokeWidth="6" strokeLinecap="round">
        <path d="M120 210 V150" />
        <path d="M120 160 L95 140" />
        <path d="M120 175 L145 155" />
      </g>
      <ellipse cx="120" cy="140" rx="22" ry="16" fill="#16a34a" />
      <rect x="180" y="160" width="70" height="40" rx="6" fill="#15803d" />
      <circle cx="195" cy="205" r="16" fill="#1f2937" />
      <circle cx="240" cy="205" r="16" fill="#1f2937" />
      <rect x="195" y="130" width="30" height="30" rx="4" fill="#22c55e" />
    </svg>
  );
}