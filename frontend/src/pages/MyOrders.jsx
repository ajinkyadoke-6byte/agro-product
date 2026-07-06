// // import { useState, useMemo } from "react";
// // import { ChevronRight, Search, Calendar, RotateCcw, Truck, XCircle, Download } from "lucide-react";


// // // ---------------------------------------------------------------------------
// // // PRODUCT IMAGES — your 25 product images, imported once here.
// // // ---------------------------------------------------------------------------
// // import shineStarImg from "../assets/shineStarImg.jpeg";
// // import crownGoldImg from "../assets/crownGoldImg.jpeg";
// // import rootwellImg from "../assets/rootwellImg.jpeg";
// // import silcoatImg from "../assets/silcoatImg.jpeg";
// // import cMakeImg from "../assets/cMakeImg.jpeg";
// // import gNineImg from "../assets/gNineImg.jpeg";
// // import expludosImg from "../assets/expludosImg.jpeg";
// // import aSilamImg from "../assets/aSilamImg.jpeg";
// // import tonsImg from "../assets/tonsImg.jpeg";
// // import kStartImg from "../assets/kStartImg.jpeg";
// // import blueStarImg from "../assets/blueStarImg.jpeg";
// // import aBacteryNanImg from "../assets/aBacteryNanImg.jpeg";
// // import agroAmezaImg from "../assets/agroAmezaImg.jpeg";
// // import allStarPowderImg from "../assets/allStarPowderImg.jpeg";
// // import lorvillockImg from "../assets/lorvillockImg.jpeg";
// // import aBossImg from "../assets/aBossImg.jpeg";
// // import advaltImg from "../assets/advaltImg.jpeg";
// // import apex80Img from "../assets/apex80Img.jpeg";
// // import greenStarImg from "../assets/greenStarImg.jpeg";
// // import ultimateKStartImg from "../assets/ultimateKStartImg.jpeg";
// // import asset47Img from "../assets/asset47Img.jpeg";
// // import againstImg from "../assets/againstImg.jpeg";
// // import bio60Img from "../assets/bio60Img.jpeg";
// // import superOnionImg from "../assets/superOnionImg.jpeg";
// // import bordemarImg from "../assets/bordemarImg.jpeg";

// // // Lookup table so any order item can reference an image by product name,
// // // instead of hardcoding a string path. Use this same object anywhere else
// // // in your app (Products page, Cart, Wishlist) so all 25 images stay in
// // // one place.
// // export const PRODUCT_IMAGES = {
// //   shineStar: shineStarImg,
// //   crownGold: crownGoldImg,
// //   rootwell: rootwellImg,
// //   silcoat: silcoatImg,
// //   cMake: cMakeImg,
// //   gNine: gNineImg,
// //   expludos: expludosImg,
// //   aSilam: aSilamImg,
// //   tons: tonsImg,
// //   kStart: kStartImg,
// //   blueStar: blueStarImg,
// //   aBacteryNan: aBacteryNanImg,
// //   agroAmeza: agroAmezaImg,
// //   allStarPowder: allStarPowderImg,
// //   lorvillock: lorvillockImg,
// //   aBoss: aBossImg,
// //   advalt: advaltImg,
// //   apex80: apex80Img,
// //   greenStar: greenStarImg,
// //   ultimateKStart: ultimateKStartImg,
// //   asset47: asset47Img,
// //   against: againstImg,
// //   bio60: bio60Img,
// //   superOnion: superOnionImg,
// //   bordemar: bordemarImg,
// // };

// // // ---------------------------------------------------------------------------
// // // 1. MOCK DATA — replace this with your API call (e.g. GET /api/orders)
// // //    Each order references a productId from your 25-product catalog.
// // //    `image` now points at a real imported product image instead of a
// // //    placeholder string path.
// // // ---------------------------------------------------------------------------
// // const ORDERS = [
// //   {
// //     id: "ORD12345",
// //     date: "2024-05-25T10:30:00",
// //     items: [{ name: "Shine Star", image: PRODUCT_IMAGES.shineStar }],
// //     itemCount: 3,
// //     status: "Delivered",
// //     deliveredOn: "2024-05-28",
// //     total: 1560,
// //     paymentMode: "COD",
// //   },
// //   {
// //     id: "ORD12310",
// //     date: "2024-05-18T16:15:00",
// //     items: [{ name: "Crown Gold", image: PRODUCT_IMAGES.crownGold }],
// //     itemCount: 2,
// //     status: "Delivered",
// //     deliveredOn: "2024-05-20",
// //     total: 310,
// //     paymentMode: "UPI",
// //   },
// //   {
// //     id: "ORD12285",
// //     date: "2024-05-10T11:20:00",
// //     items: [{ name: "Rootwell", image: PRODUCT_IMAGES.rootwell }],
// //     itemCount: 1,
// //     status: "Shipped",
// //     expectedDelivery: "2024-05-12",
// //     total: 180,
// //     paymentMode: "Online",
// //   },
// //   {
// //     id: "ORD12210",
// //     date: "2024-05-02T09:45:00",
// //     items: [{ name: "Silcoat", image: PRODUCT_IMAGES.silcoat }],
// //     itemCount: 4,
// //     status: "Processing",
// //     total: 2450,
// //     paymentMode: "Razorpay",
// //   },
// // ];

// // const ROWS_PER_PAGE_OPTIONS = [5, 10, 20, 50];
// // const STATUS_FILTERS = ["All Orders", "Processing", "Shipped", "Delivered", "Cancelled"];

// // // ---------------------------------------------------------------------------
// // // 2. STATUS BADGE — single source of truth for colors so every place
// // //    (table, filters, etc.) stays visually consistent.
// // // ---------------------------------------------------------------------------
// // const STATUS_CLASS = {
// //   Delivered: "status-badge status-delivered",
// //   Shipped: "status-badge status-shipped",
// //   Processing: "status-badge status-processing",
// //   Cancelled: "status-badge status-cancelled",
// // };

// // function StatusBadge({ status }) {
// //   return <span className={STATUS_CLASS[status] || "status-badge status-default"}>{status}</span>;
// // }

// // function formatDate(iso) {
// //   const d = new Date(iso);
// //   return {
// //     day: d.toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" }),
// //     time: d.toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" }),
// //   };
// // }

// // function formatCurrency(n) {
// //   return `₹${n.toLocaleString("en-IN")}`;
// // }

// // // ---------------------------------------------------------------------------
// // // 3. ACTION BUTTONS — behaviour differs per status, so it's isolated here
// // //    instead of being an if/else chain inline in the row markup.
// // // ---------------------------------------------------------------------------
// // function OrderActions({ order, onOrderAgain, onTrackOrder, onCancelOrder, onViewInvoice, onViewDetails }) {
// //   const primaryByStatus = {
// //     Delivered: (
// //       <button onClick={() => onOrderAgain(order.id)} className="btn-action btn-reorder">
// //         <RotateCcw size={14} /> Order Again
// //       </button>
// //     ),
// //     Shipped: (
// //       <button onClick={() => onTrackOrder(order.id)} className="btn-action btn-track">
// //         <Truck size={14} /> Track Order
// //       </button>
// //     ),
// //     Processing: (
// //       <button onClick={() => onCancelOrder(order.id)} className="btn-action btn-cancel">
// //         <XCircle size={14} /> Cancel Order
// //       </button>
// //     ),
// //   };

// //   const secondaryByStatus = {
// //     Delivered: (
// //       <button onClick={() => onViewInvoice(order.id)} className="btn-link-secondary">
// //         View Invoice <Download size={12} />
// //       </button>
// //     ),
// //     Shipped: (
// //       <button onClick={() => onViewInvoice(order.id)} className="btn-link-secondary">
// //         View Invoice <Download size={12} />
// //       </button>
// //     ),
// //     Processing: (
// //       <button onClick={() => onViewDetails(order.id)} className="btn-link-secondary">
// //         View Details <ChevronRight size={12} />
// //       </button>
// //     ),
// //   };

// //   return (
// //     <div className="order-actions">
// //       {primaryByStatus[order.status] || null}
// //       {secondaryByStatus[order.status] || null}
// //     </div>
// //   );
// // }

// // // ---------------------------------------------------------------------------
// // // 4. MAIN PAGE COMPONENT
// // // ---------------------------------------------------------------------------
// // export default function MyOrders() {
// //   const [statusFilter, setStatusFilter] = useState("All Orders");
// //   const [searchTerm, setSearchTerm] = useState("");
// //   const [page, setPage] = useState(1);
// //   const [rowsPerPage, setRowsPerPage] = useState(10);

// //   // --- Filtering + searching, memoized so it only recalculates when inputs change
// //   const filteredOrders = useMemo(() => {
// //     return ORDERS.filter((order) => {
// //       const matchesStatus = statusFilter === "All Orders" || order.status === statusFilter;
// //       const matchesSearch =
// //         searchTerm.trim() === "" ||
// //         order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
// //         order.items.some((it) => it.name.toLowerCase().includes(searchTerm.toLowerCase()));
// //       return matchesStatus && matchesSearch;
// //     });
// //   }, [statusFilter, searchTerm]);

// //   // --- Pagination math derived from the filtered list
// //   const totalPages = Math.max(1, Math.ceil(filteredOrders.length / rowsPerPage));
// //   const currentPage = Math.min(page, totalPages);
// //   const startIdx = (currentPage - 1) * rowsPerPage;
// //   const paginatedOrders = filteredOrders.slice(startIdx, startIdx + rowsPerPage);

// //   // --- Action handlers — wire these to your real API calls
// //   const handleOrderAgain = (id) => console.log("Re-order:", id); // POST /api/orders/:id/reorder
// //   const handleTrackOrder = (id) => console.log("Track:", id);   // navigate to /track-order/:id
// //   const handleCancelOrder = (id) => {
// //     if (window.confirm(`Cancel order ${id}?`)) console.log("Cancel:", id); // PATCH /api/orders/:id/cancel
// //   };
// //   const handleViewInvoice = (id) => console.log("Download invoice:", id); // GET /api/orders/:id/invoice
// //   const handleViewDetails = (id) => console.log("View details:", id);    // navigate to /orders/:id

// //   return (
// //     <div className="orders-page">
// //       {/* Breadcrumb */}
// //       <div className="breadcrumb">
// //         <span>Home</span> <ChevronRight size={14} />
// //         <span>Account</span> <ChevronRight size={14} />
// //         <span className="breadcrumb-active">My Orders</span>
// //       </div>

// //       {/* Header + controls */}
// //       <div className="orders-header">
// //         <div className="orders-header-title">
// //           <h1>My Orders</h1>
// //           <p>View and track all your orders</p>
// //         </div>

// //         <div className="orders-controls">
// //           <select
// //             value={statusFilter}
// //             onChange={(e) => {
// //               setStatusFilter(e.target.value);
// //               setPage(1); // reset to page 1 whenever the filter changes
// //             }}
// //             className="status-select"
// //           >
// //             {STATUS_FILTERS.map((s) => (
// //               <option key={s} value={s}>{s}</option>
// //             ))}
// //           </select>

// //           <div className="search-wrapper">
// //             <Search size={16} className="search-icon" />
// //             <input
// //               type="text"
// //               placeholder="Search by order ID, product..."
// //               value={searchTerm}
// //               onChange={(e) => {
// //                 setSearchTerm(e.target.value);
// //                 setPage(1);
// //               }}
// //               className="search-input"
// //             />
// //           </div>
// //         </div>
// //       </div>

// //       {/* Orders table */}
// //       <div className="orders-table-wrapper">
// //         <div className="orders-table-scroll">
// //           <table className="orders-table">
// //             <thead>
// //               <tr>
// //                 <th>Order Details</th>
// //                 <th>Date</th>
// //                 <th>Status</th>
// //                 <th>Total</th>
// //                 <th>Action</th>
// //               </tr>
// //             </thead>
// //             <tbody>
// //               {paginatedOrders.length === 0 ? (
// //                 <tr>
// //                   <td colSpan={5} className="empty-state">
// //                     No orders match your search.
// //                   </td>
// //                 </tr>
// //               ) : (
// //                 paginatedOrders.map((order) => {
// //                   const { day, time } = formatDate(order.date);
// //                   return (
// //                     <tr key={order.id} className="order-row">
// //                       <td>
// //                         <div className="order-details-cell">
// //                           <img
// //                             src={order.items[0].image}
// //                             alt={order.items[0].name}
// //                             className="order-thumb"
// //                           />
// //                           <div className="order-info">
// //                             <p className="order-id">Order ID: #{order.id}</p>
// //                             <p className="order-item-count">
// //                               {order.itemCount} Item{order.itemCount > 1 ? "s" : ""}
// //                             </p>
// //                             <button onClick={() => handleViewDetails(order.id)} className="view-details-link">
// //                               View Details <ChevronRight size={12} />
// //                             </button>
// //                           </div>
// //                         </div>
// //                       </td>
// //                       <td>
// //                         <div className="order-date-cell">
// //                           <Calendar size={14} className="date-icon" />
// //                           <div>
// //                             <p className="date-day">{day}</p>
// //                             <p className="date-time">{time}</p>
// //                           </div>
// //                         </div>
// //                       </td>
// //                       <td>
// //                         <StatusBadge status={order.status} />
// //                         <p className="status-note">
// //                           {order.status === "Delivered" && `Delivered on ${formatDate(order.deliveredOn).day}`}
// //                           {order.status === "Shipped" && `Expected ${formatDate(order.expectedDelivery).day}`}
// //                           {order.status === "Processing" && "Your order is being processed"}
// //                         </p>
// //                       </td>
// //                       <td>
// //                         <p className="order-total">{formatCurrency(order.total)}</p>
// //                         <p className="order-payment">Paid via {order.paymentMode}</p>
// //                       </td>
// //                       <td>
// //                         <OrderActions
// //                           order={order}
// //                           onOrderAgain={handleOrderAgain}
// //                           onTrackOrder={handleTrackOrder}
// //                           onCancelOrder={handleCancelOrder}
// //                           onViewInvoice={handleViewInvoice}
// //                           onViewDetails={handleViewDetails}
// //                         />
// //                       </td>
// //                     </tr>
// //                   );
// //                 })
// //               )}
// //             </tbody>
// //           </table>
// //         </div>

// //         {/* Footer: pagination */}
// //         <div className="table-footer">
// //           <p className="footer-summary">
// //             Showing {filteredOrders.length === 0 ? 0 : startIdx + 1} to{" "}
// //             {Math.min(startIdx + rowsPerPage, filteredOrders.length)} of {filteredOrders.length} orders
// //           </p>

// //           <div className="pagination">
// //             <button
// //               disabled={currentPage === 1}
// //               onClick={() => setPage((p) => Math.max(1, p - 1))}
// //               className="pagination-btn"
// //             >
// //               ←
// //             </button>
// //             {Array.from({ length: totalPages }, (_, i) => i + 1)
// //               .slice(0, 5) // simple windowing; extend with ellipsis logic if you expect many pages
// //               .map((n) => (
// //                 <button
// //                   key={n}
// //                   onClick={() => setPage(n)}
// //                   className={`pagination-btn ${n === currentPage ? "pagination-btn-active" : ""}`}
// //                 >
// //                   {n}
// //                 </button>
// //               ))}
// //             <button
// //               disabled={currentPage === totalPages}
// //               onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
// //               className="pagination-btn"
// //             >
// //               →
// //             </button>
// //           </div>

// //           <div className="rows-per-page">
// //             <span>Rows per page:</span>
// //             <select
// //               value={rowsPerPage}
// //               onChange={(e) => {
// //                 setRowsPerPage(Number(e.target.value));
// //                 setPage(1);
// //               }}
// //             >
// //               {ROWS_PER_PAGE_OPTIONS.map((n) => (
// //                 <option key={n} value={n}>{n}</option>
// //               ))}
// //             </select>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }


// // import { useState, useMemo } from "react";
// // import { ChevronRight, Search, Calendar, RotateCcw, Truck, XCircle, Download } from "lucide-react";


// // // ---------------------------------------------------------------------------
// // // PRODUCT IMAGES — your 25 product images, imported once here.
// // // ---------------------------------------------------------------------------
// // import shineStarImg from "../assets/shineStarImg.jpeg";
// // import crownGoldImg from "../assets/crownGoldImg.jpeg";
// // import rootwellImg from "../assets/rootwellImg.jpeg";
// // import silcoatImg from "../assets/silcoatImg.jpeg";
// // import cMakeImg from "../assets/cMakeImg.jpeg";
// // import gNineImg from "../assets/gNineImg.jpeg";
// // import expludosImg from "../assets/expludosImg.jpeg";
// // import aSilamImg from "../assets/aSilamImg.jpeg";
// // import tonsImg from "../assets/tonsImg.jpeg";
// // import kStartImg from "../assets/kStartImg.jpeg";
// // import blueStarImg from "../assets/blueStarImg.jpeg";
// // import aBacteryNanImg from "../assets/aBacteryNanImg.jpeg";
// // import agroAmezaImg from "../assets/agroAmezaImg.jpeg";
// // import allStarPowderImg from "../assets/allStarPowderImg.jpeg";
// // import lorvillockImg from "../assets/lorvillockImg.jpeg";
// // import aBossImg from "../assets/aBossImg.jpeg";
// // import advaltImg from "../assets/advaltImg.jpeg";
// // import apex80Img from "../assets/apex80Img.jpeg";
// // import greenStarImg from "../assets/greenStarImg.jpeg";
// // import ultimateKStartImg from "../assets/ultimateKStartImg.jpeg";
// // import asset47Img from "../assets/asset47Img.jpeg";
// // import againstImg from "../assets/againstImg.jpeg";
// // import bio60Img from "../assets/bio60Img.jpeg";
// // import superOnionImg from "../assets/superOnionImg.jpeg";
// // import bordemarImg from "../assets/bordemarImg.jpeg";

// // // Lookup table so any order item can reference an image by product name,
// // // instead of hardcoding a string path. Use this same object anywhere else
// // // in your app (Products page, Cart, Wishlist) so all 25 images stay in
// // // one place.
// // export const PRODUCT_IMAGES = {
// //   shineStar: shineStarImg,
// //   crownGold: crownGoldImg,
// //   rootwell: rootwellImg,
// //   silcoat: silcoatImg,
// //   cMake: cMakeImg,
// //   gNine: gNineImg,
// //   expludos: expludosImg,
// //   aSilam: aSilamImg,
// //   tons: tonsImg,
// //   kStart: kStartImg,
// //   blueStar: blueStarImg,
// //   aBacteryNan: aBacteryNanImg,
// //   agroAmeza: agroAmezaImg,
// //   allStarPowder: allStarPowderImg,
// //   lorvillock: lorvillockImg,
// //   aBoss: aBossImg,
// //   advalt: advaltImg,
// //   apex80: apex80Img,
// //   greenStar: greenStarImg,
// //   ultimateKStart: ultimateKStartImg,
// //   asset47: asset47Img,
// //   against: againstImg,
// //   bio60: bio60Img,
// //   superOnion: superOnionImg,
// //   bordemar: bordemarImg,
// // };

// // // ---------------------------------------------------------------------------
// // // 1. MOCK DATA — replace this with your API call (e.g. GET /api/orders)
// // //    Each order references a productId from your 25-product catalog.
// // //    `image` now points at a real imported product image instead of a
// // //    placeholder string path.
// // // ---------------------------------------------------------------------------
// // const ORDERS = [
// //   {
// //     id: "ORD12345",
// //     date: "2024-05-25T10:30:00",
// //     items: [{ name: "Shine Star", image: PRODUCT_IMAGES.shineStar }],
// //     itemCount: 3,
// //     status: "Delivered",
// //     deliveredOn: "2024-05-28",
// //     total: 1560,
// //     paymentMode: "COD",
// //   },
// //   {
// //     id: "ORD12310",
// //     date: "2024-05-18T16:15:00",
// //     items: [{ name: "Crown Gold", image: PRODUCT_IMAGES.crownGold }],
// //     itemCount: 2,
// //     status: "Delivered",
// //     deliveredOn: "2024-05-20",
// //     total: 310,
// //     paymentMode: "UPI",
// //   },
// //   {
// //     id: "ORD12285",
// //     date: "2024-05-10T11:20:00",
// //     items: [{ name: "Rootwell", image: PRODUCT_IMAGES.rootwell }],
// //     itemCount: 1,
// //     status: "Shipped",
// //     expectedDelivery: "2024-05-12",
// //     total: 180,
// //     paymentMode: "Online",
// //   },
// //   {
// //     id: "ORD12210",
// //     date: "2024-05-02T09:45:00",
// //     items: [{ name: "Silcoat", image: PRODUCT_IMAGES.silcoat }],
// //     itemCount: 4,
// //     status: "Processing",
// //     total: 2450,
// //     paymentMode: "Razorpay",
// //   },
// // ];

// // const ROWS_PER_PAGE_OPTIONS = [5, 10, 20, 50];
// // const STATUS_FILTERS = ["All Orders", "Processing", "Shipped", "Delivered", "Cancelled"];

// // // ---------------------------------------------------------------------------
// // // 2. STATUS BADGE — single source of truth for colors so every place
// // //    (table, filters, etc.) stays visually consistent.
// // // ---------------------------------------------------------------------------
// // const STATUS_CLASS = {
// //   Delivered: "status-badge status-delivered",
// //   Shipped: "status-badge status-shipped",
// //   Processing: "status-badge status-processing",
// //   Cancelled: "status-badge status-cancelled",
// // };

// // function StatusBadge({ status }) {
// //   return <span className={STATUS_CLASS[status] || "status-badge status-default"}>{status}</span>;
// // }

// // function formatDate(iso) {
// //   const d = new Date(iso);
// //   return {
// //     day: d.toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" }),
// //     time: d.toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit", hour12: true }),
// //   };
// // }

// // function formatCurrency(n) {
// //   return `₹${n.toLocaleString("en-IN")}`;
// // }

// // // ---------------------------------------------------------------------------
// // // 3. ACTION BUTTONS — behavior differs per status, so it's isolated here
// // //    instead of being an if/else chain inline in the row markup.
// // // ---------------------------------------------------------------------------
// // function OrderActions({ order, onOrderAgain, onTrackOrder, onCancelOrder, onViewInvoice, onViewDetails }) {
// //   const primaryByStatus = {
// //     Delivered: (
// //       <button onClick={() => onOrderAgain(order.id)} className="btn-action btn-reorder">
// //         <RotateCcw size={14} /> Order Again
// //       </button>
// //     ),
// //     Shipped: (
// //       <button onClick={() => onTrackOrder(order.id)} className="btn-action btn-track">
// //         <Truck size={14} /> Track Order
// //       </button>
// //     ),
// //     Processing: (
// //       <button onClick={() => onCancelOrder(order.id)} className="btn-action btn-cancel">
// //         <XCircle size={14} /> Cancel Order
// //       </button>
// //     ),
// //   };

// //   const secondaryByStatus = {
// //     Delivered: (
// //       <button onClick={() => onViewInvoice(order.id)} className="btn-link-secondary">
// //         View Invoice <Download size={12} />
// //       </button>
// //     ),
// //     Shipped: (
// //       <button onClick={() => onViewInvoice(order.id)} className="btn-link-secondary">
// //         View Invoice <Download size={12} />
// //       </button>
// //     ),
// //     Processing: (
// //       <button onClick={() => onViewDetails(order.id)} className="btn-link-secondary">
// //         View Details <ChevronRight size={12} />
// //       </button>
// //     ),
// //     Cancelled: (
// //       <button onClick={() => onViewDetails(order.id)} className="btn-link-secondary">
// //         View Details <ChevronRight size={12} />
// //       </button>
// //     ),
// //   };

// //   return (
// //     <div className="order-actions">
// //       {primaryByStatus[order.status] || null}
// //       {secondaryByStatus[order.status] || null}
// //     </div>
// //   );
// // }

// // // ---------------------------------------------------------------------------
// // // 4. MAIN PAGE COMPONENT
// // // ---------------------------------------------------------------------------
// // export default function MyOrders() {
// //   const [statusFilter, setStatusFilter] = useState("All Orders");
// //   const [searchTerm, setSearchTerm] = useState("");
// //   const [page, setPage] = useState(1);
// //   const [rowsPerPage, setRowsPerPage] = useState(10);

// //   // --- Filtering + searching, memoized so it only recalculates when inputs change
// //   const filteredOrders = useMemo(() => {
// //     return ORDERS.filter((order) => {
// //       const matchesStatus = statusFilter === "All Orders" || order.status === statusFilter;
// //       const matchesSearch =
// //         searchTerm.trim() === "" ||
// //         order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
// //         order.items.some((it) => it.name.toLowerCase().includes(searchTerm.toLowerCase()));
// //       return matchesStatus && matchesSearch;
// //     });
// //   }, [statusFilter, searchTerm]);

// //   // --- Pagination math derived from the filtered list
// //   const totalPages = Math.max(1, Math.ceil(filteredOrders.length / rowsPerPage));
// //   const currentPage = Math.min(page, totalPages);
// //   const startIdx = (currentPage - 1) * rowsPerPage;
// //   const paginatedOrders = filteredOrders.slice(startIdx, startIdx + rowsPerPage);

// //   // --- Action handlers — wire these to your real API calls
// //   const handleOrderAgain = (id) => console.log("Re-order:", id); // POST /api/orders/:id/reorder
// //   const handleTrackOrder = (id) => console.log("Track:", id);   // navigate to /track-order/:id
// //   const handleCancelOrder = (id) => {
// //     if (window.confirm(`Cancel order ${id}?`)) console.log("Cancel:", id); // PATCH /api/orders/:id/cancel
// //   };
// //   const handleViewInvoice = (id) => console.log("Download invoice:", id); // GET /api/orders/:id/invoice
// //   const handleViewDetails = (id) => console.log("View details:", id);    // navigate to /orders/:id

// //   return (
// //     <div className="orders-page">
// //       {/* Breadcrumb */}
// //       <div className="breadcrumb">
// //         <span>Home</span> <ChevronRight size={14} />
// //         <span>Account</span> <ChevronRight size={14} />
// //         <span className="breadcrumb-active">My Orders</span>
// //       </div>

// //       {/* Header + controls */}
// //       <div className="orders-header">
// //         <div className="orders-header-title">
// //           <h1>My Orders</h1>
// //           <p>View and track all your orders</p>
// //         </div>

// //         <div className="orders-controls">
// //           <select
// //             value={statusFilter}
// //             onChange={(e) => {
// //               setStatusFilter(e.target.value);
// //               setPage(1); // reset to page 1 whenever the filter changes
// //             }}
// //             className="status-select"
// //           >
// //             {STATUS_FILTERS.map((s) => (
// //               <option key={s} value={s}>{s}</option>
// //             ))}
// //           </select>

// //           <div className="search-wrapper">
// //             <Search size={16} className="search-icon" />
// //             <input
// //               type="text"
// //               placeholder="Search by order ID, product..."
// //               value={searchTerm}
// //               onChange={(e) => {
// //                 setSearchTerm(e.target.value);
// //                 setPage(1);
// //               }}
// //               className="search-input"
// //             />
// //           </div>
// //         </div>
// //       </div>

// //       {/* Orders table */}
// //       <div className="orders-table-wrapper">
// //         <div className="orders-table-scroll">
// //           <table className="orders-table">
// //             <thead>
// //               <tr>
// //                 <th>ORDER DETAILS</th>
// //                 <th>DATE</th>
// //                 <th>STATUS</th>
// //                 <th>TOTAL</th>
// //                 <th>ACTION</th>
// //               </tr>
// //             </thead>
// //             <tbody>
// //               {paginatedOrders.length === 0 ? (
// //                 <tr>
// //                   <td colSpan={5} className="empty-state">
// //                     No orders match your search.
// //                   </td>
// //                 </tr>
// //               ) : (
// //                 paginatedOrders.map((order) => {
// //                   const { day, time } = formatDate(order.date);
// //                   return (
// //                     <tr key={order.id} className="order-row">
// //                       <td>
// //                         <div className="order-details-cell">
// //                           <img
// //                             src={order.items[0].image}
// //                             alt={order.items[0].name}
// //                             className="order-thumb"
// //                           />
// //                           <div className="order-info">
// //                             <p className="order-id">Order ID: #{order.id}</p>
// //                             <p className="order-item-count">
// //                               {order.itemCount} Item{order.itemCount > 1 ? "s" : ""}
// //                             </p>
// //                             <button onClick={() => handleViewDetails(order.id)} className="view-details-link">
// //                               View Details <ChevronRight size={12} />
// //                             </button>
// //                           </div>
// //                         </div>
// //                       </td>
// //                       <td>
// //                         <div className="order-date-cell">
// //                           <Calendar size={14} className="date-icon" />
// //                           <div>
// //                             <p className="date-day">{day}</p>
// //                             <p className="date-time">{time}</p>
// //                           </div>
// //                         </div>
// //                       </td>
// //                       <td>

// //                         <div className="status-cell-wrapper">
// //                           <StatusBadge status={order.status} />
// //                           <p className="status-note">
// //                             {order.status === "Delivered" && `Delivered on \n ${formatDate(order.deliveredOn).day}`}
// //                             {order.status === "Shipped" && `Expected Delivery \n ${formatDate(order.expectedDelivery).day}`}
// //                             {order.status === "Processing" && "Your order is being \n processed"}
// //                           </p>
// //                         </div>
// //                       </td>
// //                       <td>
// //                         <p className="order-total">{formatCurrency(order.total)}</p>
// //                         <p className="order-payment">Paid via {order.paymentMode}</p>
// //                       </td>
// //                       <td>
// //                         <OrderActions
// //                           order={order}
// //                           onOrderAgain={handleOrderAgain}
// //                           onTrackOrder={handleTrackOrder}
// //                           onCancelOrder={handleCancelOrder}
// //                           onViewInvoice={handleViewInvoice}
// //                           onViewDetails={handleViewDetails}
// //                         />
// //                       </td>
// //                     </tr>
// //                   );
// //                 })
// //               )}
// //             </tbody>
// //           </table>
// //         </div>

// //         {/* Footer: pagination */}
// //         <div className="table-footer">
// //           <p className="footer-summary">
// //             Showing {filteredOrders.length === 0 ? 0 : startIdx + 1} to{" "}
// //             {Math.min(startIdx + rowsPerPage, filteredOrders.length)} of {filteredOrders.length} orders
// //           </p>

// //           <div className="pagination">
// //             <button
// //               disabled={currentPage === 1}
// //               onClick={() => setPage((p) => Math.max(1, p - 1))}
// //               className="pagination-btn"
// //             >
// //               ←
// //             </button>
// //             {Array.from({ length: totalPages }, (_, i) => i + 1)
// //               .slice(0, 5)
// //               .map((n) => (
// //                 <button
// //                   key={n}
// //                   onClick={() => setPage(n)}
// //                   className={`pagination-btn ${n === currentPage ? "pagination-btn-active" : ""}`}
// //                 >
// //                   {n}
// //                 </button>
// //               ))}
// //             <button
// //               disabled={currentPage === totalPages}
// //               onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
// //               className="pagination-btn"
// //             >
// //               →
// //             </button>
// //           </div>

// //           <div className="rows-per-page">
// //             <span>Rows per page:</span>
// //             <select
// //               value={rowsPerPage}
// //               onChange={(e) => {
// //                 setRowsPerPage(Number(e.target.value));
// //                 setPage(1);
// //               }}
// //             >
// //               {ROWS_PER_PAGE_OPTIONS.map((n) => (
// //                 <option key={n} value={n}>{n}</option>
// //               ))}
// //             </select>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }


// import { useState, useMemo } from "react";
// import { ChevronRight, Search, Calendar, RotateCcw, Truck, XCircle, Download } from "lucide-react";


// // ---------------------------------------------------------------------------
// // PRODUCT IMAGES — your 25 product images, imported once here.
// // ---------------------------------------------------------------------------
// import shineStarImg from "../assets/shineStarImg.jpeg";
// import crownGoldImg from "../assets/crownGoldImg.jpeg";
// import rootwellImg from "../assets/rootwellImg.jpeg";
// import silcoatImg from "../assets/silcoatImg.jpeg";
// import cMakeImg from "../assets/cMakeImg.jpeg";
// import gNineImg from "../assets/gNineImg.jpeg";
// import expludosImg from "../assets/expludosImg.jpeg";
// import aSilamImg from "../assets/aSilamImg.jpeg";
// import tonsImg from "../assets/tonsImg.jpeg";
// import kStartImg from "../assets/kStartImg.jpeg";
// import blueStarImg from "../assets/blueStarImg.jpeg";
// import aBacteryNanImg from "../assets/aBacteryNanImg.jpeg";
// import agroAmezaImg from "../assets/agroAmezaImg.jpeg";
// import allStarPowderImg from "../assets/allStarPowderImg.jpeg";
// import lorvillockImg from "../assets/lorvillockImg.jpeg";
// import aBossImg from "../assets/aBossImg.jpeg";
// import advaltImg from "../assets/advaltImg.jpeg";
// // import apex80Img = from "../assets/apex80Img.jpeg";
//  import apex80Img from "../assets/apex80Img.jpeg";
// import greenStarImg from "../assets/greenStarImg.jpeg";
// import ultimateKStartImg from "../assets/ultimateKStartImg.jpeg";
// import asset47Img from "../assets/asset47Img.jpeg";
// import againstImg from "../assets/againstImg.jpeg";
// import bio60Img from "../assets/bio60Img.jpeg";
// import superOnionImg from "../assets/superOnionImg.jpeg";
// import bordemarImg from "../assets/bordemarImg.jpeg";

// // Lookup table so any order item can reference an image by product name,
// // instead of hardcoding a string path. Use this same object anywhere else
// // in your app (Products page, Cart, Wishlist) so all 25 images stay in
// // one place.
// export const PRODUCT_IMAGES = {
//   shineStar: shineStarImg,
//   crownGold: crownGoldImg,
//   rootwell: rootwellImg,
//   silcoat: silcoatImg,
//   cMake: cMakeImg,
//   gNine: gNineImg,
//   expludos: expludosImg,
//   aSilam: aSilamImg,
//   tons: tonsImg,
//   kStart: kStartImg,
//   blueStar: blueStarImg,
//   aBacteryNan: aBacteryNanImg,
//   agroAmeza: agroAmezaImg,
//   allStarPowder: allStarPowderImg,
//   lorvillock: lorvillockImg,
//   aBoss: aBossImg,
//   advalt: advaltImg,
//   apex80: apex80Img,
//   greenStar: greenStarImg,
//   ultimateKStart: ultimateKStartImg,
//   asset47: asset47Img,
//   against: againstImg,
//   bio60: bio60Img,
//   superOnion: superOnionImg,
//   bordemar: bordemarImg,
// };

// // ---------------------------------------------------------------------------
// // 1. MOCK DATA — replace this with your API call (e.g. GET /api/orders)
// //    Each order references a productId from your 25-product catalog.
// //    `image` now points at a real imported product image instead of a
// //    placeholder string path.
// // ---------------------------------------------------------------------------
// const ORDERS = [
//   {
//     id: "ORD12345",
//     date: "2024-05-25T10:30:00",
//     items: [{ name: "Shine Star", image: PRODUCT_IMAGES.shineStar }],
//     itemCount: 3,
//     status: "Delivered",
//     deliveredOn: "2024-05-28",
//     total: 1560,
//     paymentMode: "COD",
//   },
//   {
//     id: "ORD12310",
//     date: "2024-05-18T16:15:00",
//     items: [{ name: "Crown Gold", image: PRODUCT_IMAGES.crownGold }],
//     itemCount: 2,
//     status: "Delivered",
//     deliveredOn: "2024-05-20",
//     total: 310,
//     paymentMode: "UPI",
//   },
//   {
//     id: "ORD12285",
//     date: "2024-05-10T11:20:00",
//     items: [{ name: "Rootwell", image: PRODUCT_IMAGES.rootwell }],
//     itemCount: 1,
//     status: "Shipped",
//     expectedDelivery: "2024-05-12",
//     total: 180,
//     paymentMode: "Online",
//   },
//   {
//     id: "ORD12210",
//     date: "2024-05-02T09:45:00",
//     items: [{ name: "Silcoat", image: PRODUCT_IMAGES.silcoat }],
//     itemCount: 4,
//     status: "Processing",
//     total: 2450,
//     paymentMode: "Razorpay",
//   },
// ];

// const ROWS_PER_PAGE_OPTIONS = [5, 10, 20, 50];
// const STATUS_FILTERS = ["All Orders", "Processing", "Shipped", "Delivered", "Cancelled"];

// // ---------------------------------------------------------------------------
// // 2. STATUS BADGE — single source of truth for colors so every place
// //    (table, filters, etc.) stays visually consistent.
// // ---------------------------------------------------------------------------
// const STATUS_CLASS = {
//   Delivered: "status-badge status-delivered",
//   Shipped: "status-badge status-shipped",
//   Processing: "status-badge status-processing",
//   Cancelled: "status-badge status-cancelled",
// };

// function StatusBadge({ status }) {
//   return <span className={STATUS_CLASS[status] || "status-badge status-default"}>{status}</span>;
// }

// function formatDate(iso) {
//   const d = new Date(iso);
//   return {
//     day: d.toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" }),
//     time: d.toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit", hour12: true }),
//   };
// }

// function formatCurrency(n) {
//   return `₹${n.toLocaleString("en-IN")}`;
// }

// // ---------------------------------------------------------------------------
// // 3. ACTION BUTTONS — behaviour differs per status, so it's isolated here
// //    instead of being an if/else chain inline in the row markup.
// // ---------------------------------------------------------------------------
// function OrderActions({ order, onOrderAgain, onTrackOrder, onCancelOrder, onViewInvoice, onViewDetails }) {
//   const primaryByStatus = {
//     Delivered: (
//       <button onClick={() => onOrderAgain(order.id)} className="btn-action btn-reorder">
//         <RotateCcw size={14} /> Order Again
//       </button>
//     ),
//     Shipped: (
//       <button onClick={() => onTrackOrder(order.id)} className="btn-action btn-track">
//         <Truck size={14} /> Track Order
//       </button>
//     ),
//     Processing: (
//       <button onClick={() => onCancelOrder(order.id)} className="btn-action btn-cancel">
//         <XCircle size={14} /> Cancel Order
//       </button>
//     ),
//   };

//   const secondaryByStatus = {
//     Delivered: (
//       <button onClick={() => onViewInvoice(order.id)} className="btn-link-secondary">
//         View Invoice <Download size={12} />
//       </button>
//     ),
//     Shipped: (
//       <button onClick={() => onViewInvoice(order.id)} className="btn-link-secondary">
//         View Invoice <Download size={12} />
//       </button>
//     ),
//     Processing: (
//       <button onClick={() => onViewDetails(order.id)} className="btn-link-secondary">
//         View Details <ChevronRight size={12} />
//       </button>
//     ),
//     Cancelled: (
//       <button onClick={() => onViewDetails(order.id)} className="btn-link-secondary">
//         View Details <ChevronRight size={12} />
//       </button>
//     ),
//   };

//   return (
//     <div className="order-actions">
//       {primaryByStatus[order.status] || null}
//       {secondaryByStatus[order.status] || null}
//     </div>
//   );
// }

// // ---------------------------------------------------------------------------
// // 4. MAIN PAGE COMPONENT
// // ---------------------------------------------------------------------------
// export default function MyOrders() {
//   const [statusFilter, setStatusFilter] = useState("All Orders");
//   const [searchTerm, setSearchTerm] = useState("");
//   const [page, setPage] = useState(1);
//   const [rowsPerPage, setRowsPerPage] = useState(10);

//   // --- Filtering + searching, memoized so it only recalculates when inputs change
//   const filteredOrders = useMemo(() => {
//     return ORDERS.filter((order) => {
//       const matchesStatus = statusFilter === "All Orders" || order.status === statusFilter;
//       const matchesSearch =
//         searchTerm.trim() === "" ||
//         order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         order.items.some((it) => it.name.toLowerCase().includes(searchTerm.toLowerCase()));
//       return matchesStatus && matchesSearch;
//     });
//   }, [statusFilter, searchTerm]);

//   // --- Pagination math derived from the filtered list
//   const totalPages = Math.max(1, Math.ceil(filteredOrders.length / rowsPerPage));
//   const currentPage = Math.min(page, totalPages);
//   const startIdx = (currentPage - 1) * rowsPerPage;
//   const paginatedOrders = filteredOrders.slice(startIdx, startIdx + rowsPerPage);

//   // --- Action handlers — wire these to your real API calls
//   const handleOrderAgain = (id) => console.log("Re-order:", id); // POST /api/orders/:id/reorder
//   const handleTrackOrder = (id) => console.log("Track:", id);   // navigate to /track-order/:id
//   const handleCancelOrder = (id) => {
//     if (window.confirm(`Cancel order ${id}?`)) console.log("Cancel:", id); // PATCH /api/orders/:id/cancel
//   };
//   const handleViewInvoice = (id) => console.log("Download invoice:", id); // GET /api/orders/:id/invoice
//   const handleViewDetails = (id) => console.log("View details:", id);    // navigate to /orders/:id

//   return (
//     <div className="orders-page">
//       {/* Breadcrumb */}
//       <div className="breadcrumb">
//         <span>Home</span> <ChevronRight size={14} />
//         <span>Account</span> <ChevronRight size={14} />
//         <span className="breadcrumb-active">My Orders</span>
//       </div>

//       {/* Header + controls */}
//       <div className="orders-header">
//         <div className="orders-header-title">
//           <h1>My Orders</h1>
//           <p>View and track all your orders</p>
//         </div>

//         <div className="orders-controls">
//           <select
//             value={statusFilter}
//             onChange={(e) => {
//               setStatusFilter(e.target.value);
//               setPage(1); // reset to page 1 whenever the filter changes
//             }}
//             className="status-select"
//           >
//             {STATUS_FILTERS.map((s) => (
//               <option key={s} value={s}>{s}</option>
//             ))}
//           </select>

//           <div className="search-wrapper">
//             <Search size={16} className="search-icon" />
//             <input
//               type="text"
//               placeholder="Search by order ID, product..."
//               value={searchTerm}
//               onChange={(e) => {
//                 setSearchTerm(e.target.value);
//                 setPage(1);
//               }}
//               className="search-input"
//             />
//           </div>
//         </div>
//       </div>

//       {/* Orders table */}
//       <div className="orders-table-wrapper">
//         <div className="orders-table-scroll">
//           <table className="orders-table">
//             <thead>
//               <tr>
//                 <th>ORDER DETAILS</th>
//                 <th>DATE</th>
//                 <th>STATUS</th>
//                 <th>TOTAL</th>
//                 <th>ACTION</th>
//               </tr>
//             </thead>
//             <tbody>
//               {paginatedOrders.length === 0 ? (
//                 <tr>
//                   <td colSpan={5} className="empty-state">
//                     No orders match your search.
//                   </td>
//                 </tr>
//               ) : (
//                 paginatedOrders.map((order) => {
//                   const { day, time } = formatDate(order.date);
//                   return (
//                     <tr key={order.id} className="order-row">
//                       <td>
//                         <div className="order-details-cell">
//                           <img
//                             src={order.items[0].image}
//                             alt={order.items[0].name}
//                             className="order-thumb"
//                           />
//                           <div className="order-info">
//                             <p className="order-id">Order ID: #{order.id}</p>
//                             <p className="order-item-count">
//                               {order.itemCount} Item{order.itemCount > 1 ? "s" : ""}
//                             </p>
//                             <button onClick={() => handleViewDetails(order.id)} className="view-details-link">
//                               View Details <ChevronRight size={12} />
//                             </button>
//                           </div>
//                         </div>
//                       </td>
//                       <td>
//                         <div className="order-date-cell">
//                           <Calendar size={14} className="date-icon" />
//                           <div>
//                             <p className="date-day">{day}</p>
//                             <p className="date-time">{time}</p>
//                           </div>
//                         </div>
//                       </td>
//                       <td>
//                         <div className="status-cell-wrapper">
//                           <StatusBadge status={order.status} />
//                           <p className="status-note">
//                             {order.status === "Delivered" && `Delivered on \n ${formatDate(order.deliveredOn).day}`}
//                             {order.status === "Shipped" && `Expected Delivery \n ${formatDate(order.expectedDelivery).day}`}
//                             {order.status === "Processing" && "Your order is being \n processed"}
//                           </p>
//                         </div>
//                       </td>
//                       <td>
//                         <p className="order-total">{formatCurrency(order.total)}</p>
//                         <p className="order-payment">Paid via {order.paymentMode}</p>
//                       </td>
//                       <td>
//                         <OrderActions
//                           order={order}
//                           onOrderAgain={handleOrderAgain}
//                           onTrackOrder={handleTrackOrder}
//                           onCancelOrder={handleCancelOrder}
//                           onViewInvoice={handleViewInvoice}
//                           onViewDetails={handleViewDetails}
//                         />
//                       </td>
//                     </tr>
//                   );
//                 })
//               )}
//             </tbody>
//           </table>
//         </div>

//         {/* Footer: pagination */}
//         <div className="table-footer">
//           <p className="footer-summary">
//             Showing {filteredOrders.length === 0 ? 0 : startIdx + 1} to{" "}
//             {Math.min(startIdx + rowsPerPage, filteredOrders.length)} of {filteredOrders.length} orders
//           </p>

//           <div className="pagination">
//             <button
//               disabled={currentPage === 1}
//               onClick={() => setPage((p) => Math.max(1, p - 1))}
//               className="pagination-btn"
//             >
//               ←
//             </button>
//             {Array.from({ length: totalPages }, (_, i) => i + 1)
//               .slice(0, 5)
//               .map((n) => (
//                 <button
//                   key={n}
//                   onClick={() => setPage(n)}
//                   className={`pagination-btn ${n === currentPage ? "pagination-btn-active" : ""}`}
//                 >
//                   {n}
//                 </button>
//               ))}
//             <button
//               disabled={currentPage === totalPages}
//               onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
//               className="pagination-btn"
//             >
//               →
//             </button>
//           </div>

//           <div className="rows-per-page">
//             <span>Rows per page:</span>
//             <select
//               value={rowsPerPage}
//               onChange={(e) => {
//                 setRowsPerPage(Number(e.target.value));
//                 setPage(1);
//               }}
//             >
//               {ROWS_PER_PAGE_OPTIONS.map((n) => (
//                 <option key={n} value={n}>{n}</option>
//               ))}
//             </select>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }



// import { useState, useMemo } from "react";
// import { 
//   ChevronRight, Search, Calendar, RotateCcw, Truck, 
//   XCircle, Download, User, MapPin, Heart, MessageSquare, 
//   CreditCard, Bell, Settings, LogOut 
// } from "lucide-react";

// // ---------------------------------------------------------------------------
// // PRODUCT IMAGES — Imported correctly without the "=" syntax error
// // ---------------------------------------------------------------------------
// import shineStarImg from "./assets/shineStarImg.jpeg";
// import crownGoldImg from "./assets/crownGoldImg.jpeg";
// import rootwellImg from "./assets/rootwellImg.jpeg";
// import silcoatImg from "./assets/silcoatImg.jpeg";
// import cMakeImg from "./assets/cMakeImg.jpeg";
// import gNineImg from "./assets/gNineImg.jpeg";
// import expludosImg from "./assets/expludosImg.jpeg";
// import aSilamImg from "./assets/aSilamImg.jpeg";
// import tonsImg from "./assets/tonsImg.jpeg";
// import kStartImg from "./assets/kStartImg.jpeg";
// import blueStarImg from "./assets/blueStarImg.jpeg";
// import aBacteryNanImg from "./assets/aBacteryNanImg.jpeg";
// import agroAmezaImg from "./assets/agroAmezaImg.jpeg";
// import allStarPowderImg from "./assets/allStarPowderImg.jpeg";
// import lorvillockImg from "./assets/lorvillockImg.jpeg";
// import aBossImg from "./assets/aBossImg.jpeg";
// import advaltImg from "./assets/advaltImg.jpeg";
// import apex80Img from "./assets/apex80Img.jpeg"; // Fixed typo here
// import greenStarImg from "./assets/greenStarImg.jpeg";
// import ultimateKStartImg from "./assets/ultimateKStartImg.jpeg";
// import asset47Img from "./assets/asset47Img.jpeg";
// import againstImg from "./assets/againstImg.jpeg";
// import bio60Img from "./assets/bio60Img.jpeg";
// import superOnionImg from "./assets/superOnionImg.jpeg";
// import bordemarImg from "./assets/bordemarImg.jpeg";

// export const PRODUCT_IMAGES = {
//   shineStar: shineStarImg,
//   crownGold: crownGoldImg,
//   rootwell: rootwellImg,
//   silcoat: silcoatImg,
//   cMake: cMakeImg,
//   gNine: gNineImg,
//   expludos: expludosImg,
//   aSilam: aSilamImg,
//   tons: tonsImg,
//   kStart: kStartImg,
//   blueStar: blueStarImg,
//   aBacteryNan: aBacteryNanImg,
//   agroAmeza: agroAmezaImg,
//   allStarPowder: allStarPowderImg,
//   lorvillock: lorvillockImg,
//   aBoss: aBossImg,
//   advalt: advaltImg,
//   apex80: apex80Img,
//   greenStar: greenStarImg,
//   ultimateKStart: ultimateKStartImg,
//   asset47: asset47Img,
//   against: againstImg,
//   bio60: bio60Img,
//   superOnion: superOnionImg,
//   bordemar: bordemarImg,
// };

// // ---------------------------------------------------------------------------
// // MOCK DATA FOR ORDERS
// // ---------------------------------------------------------------------------
// const ORDERS = [
//   {
//     id: "ORD12345",
//     date: "2024-05-25T10:30:00",
//     items: [{ name: "Shine Star", image: PRODUCT_IMAGES.shineStar }],
//     itemCount: 3,
//     status: "Delivered",
//     deliveredOn: "2024-05-28",
//     total: 1560,
//     paymentMode: "COD",
//   },
//   {
//     id: "ORD12310",
//     date: "2024-05-18T16:15:00",
//     items: [{ name: "Crown Gold", image: PRODUCT_IMAGES.crownGold }],
//     itemCount: 2,
//     status: "Delivered",
//     deliveredOn: "2024-05-20",
//     total: 310,
//     paymentMode: "UPI",
//   },
//   {
//     id: "ORD12285",
//     date: "2024-05-10T11:20:00",
//     items: [{ name: "Rootwell", image: PRODUCT_IMAGES.rootwell }],
//     itemCount: 1,
//     status: "Shipped",
//     expectedDelivery: "2024-05-12",
//     total: 180,
//     paymentMode: "Online",
//   },
//   {
//     id: "ORD12210",
//     date: "2024-05-02T09:45:00",
//     items: [{ name: "Silcoat", image: PRODUCT_IMAGES.silcoat }],
//     itemCount: 4,
//     status: "Processing",
//     total: 2450,
//     paymentMode: "Razorpay",
//   },
// ];

// const ROWS_PER_PAGE_OPTIONS = [5, 10, 20, 50];
// const STATUS_FILTERS = ["All Orders", "Processing", "Shipped", "Delivered", "Cancelled"];

// const STATUS_CLASS = {
//   Delivered: "status-badge status-delivered",
//   Shipped: "status-badge status-shipped",
//   Processing: "status-badge status-processing",
//   Cancelled: "status-badge status-cancelled",
// };

// function StatusBadge({ status }) {
//   return <span className={STATUS_CLASS[status] || "status-badge status-default"}>{status}</span>;
// }

// function formatDate(iso) {
//   const d = new Date(iso);
//   return {
//     day: d.toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" }),
//     time: d.toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit", hour12: true }),
//   };
// }

// function formatCurrency(n) {
//   return `₹${n.toLocaleString("en-IN")}`;
// }

// function OrderActions({ order }) {
//   const primaryByStatus = {
//     Delivered: (
//       <button className="btn-action btn-reorder">
//         <RotateCcw size={14} /> Order Again
//       </button>
//     ),
//     Shipped: (
//       <button className="btn-action btn-track">
//         <Truck size={14} /> Track Order
//       </button>
//     ),
//     Processing: (
//       <button className="btn-action btn-cancel">
//         <XCircle size={14} /> Cancel Order
//       </button>
//     ),
//   };

//   const secondaryByStatus = {
//     Delivered: (
//       <button className="btn-link-secondary">
//         View Invoice <Download size={12} />
//       </button>
//     ),
//     Shipped: (
//       <button className="btn-link-secondary">
//         View Invoice <Download size={12} />
//       </button>
//     ),
//     Processing: (
//       <button className="btn-link-secondary">
//         View Details <ChevronRight size={12} />
//       </button>
//     ),
//     Cancelled: (
//       <button className="btn-link-secondary">
//         View Details <ChevronRight size={12} />
//       </button>
//     ),
//   };

//   return (
//     <div className="order-actions">
//       {primaryByStatus[order.status] || null}
//       {secondaryByStatus[order.status] || null}
//     </div>
//   );
// }

// // ---------------------------------------------------------------------------
// // SUB-COMPONENT: MY ORDERS TABLE VIEW
// // ---------------------------------------------------------------------------
// function MyOrdersView() {
//   const [statusFilter, setStatusFilter] = useState("All Orders");
//   const [searchTerm, setSearchTerm] = useState("");
//   const [page, setPage] = useState(1);
//   const [rowsPerPage, setRowsPerPage] = useState(10);

//   const filteredOrders = useMemo(() => {
//     return ORDERS.filter((order) => {
//       const matchesStatus = statusFilter === "All Orders" || order.status === statusFilter;
//       const matchesSearch =
//         searchTerm.trim() === "" ||
//         order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         order.items.some((it) => it.name.toLowerCase().includes(searchTerm.toLowerCase()));
//       return matchesStatus && matchesSearch;
//     });
//   }, [statusFilter, searchTerm]);

//   const totalPages = Math.max(1, Math.ceil(filteredOrders.length / rowsPerPage));
//   const currentPage = Math.min(page, totalPages);
//   const startIdx = (currentPage - 1) * rowsPerPage;
//   const paginatedOrders = filteredOrders.slice(startIdx, startIdx + rowsPerPage);

//   return (
//     <div className="orders-container-block">
//       <div className="orders-header">
//         <div className="orders-header-title">
//           <h1 style={{ fontSize: "24px", fontWeight: "600", margin: "0 0 4px 0" }}>My Orders</h1>
//           <p style={{ color: "#666", fontSize: "14px", margin: 0 }}>View and track all your orders</p>
//         </div>

//         <div className="orders-controls" style={{ display: "flex", gap: "12px" }}>
//           <select
//             value={statusFilter}
//             onChange={(e) => { setStatusFilter(e.target.value); setPage(1); }}
//             className="status-select"
//           >
//             {STATUS_FILTERS.map((s) => <option key={s} value={s}>{s}</option>)}
//           </select>

//           <div className="search-wrapper" style={{ position: "relative" }}>
//             <Search size={16} className="search-icon" style={{ position: "absolute", left: "10px", top: "50%", transform: "translateY(-50%)", color: "#888" }} />
//             <input
//               type="text"
//               placeholder="Search by order ID, product..."
//               value={searchTerm}
//               onChange={(e) => { setSearchTerm(e.target.value); setPage(1); }}
//               className="search-input"
//               style={{ paddingLeft: "32px" }}
//             />
//           </div>
//         </div>
//       </div>

//       <div className="orders-table-wrapper" style={{ marginTop: "20px", background: "#fff", borderRadius: "8px", border: "1px solid #e0e0e0" }}>
//         <table className="orders-table" style={{ width: "100%", borderCollapse: "collapse" }}>
//           <thead>
//             <tr style={{ borderBottom: "1px solid #e0e0e0", background: "#f9f9f9", textAlign: "left" }}>
//               <th style={{ padding: "12px 16px", fontSize: "12px", color: "#666" }}>ORDER DETAILS</th>
//               <th style={{ padding: "12px 16px", fontSize: "12px", color: "#666" }}>DATE</th>
//               <th style={{ padding: "12px 16px", fontSize: "12px", color: "#666" }}>STATUS</th>
//               <th style={{ padding: "12px 16px", fontSize: "12px", color: "#666" }}>TOTAL</th>
//               <th style={{ padding: "12px 16px", fontSize: "12px", color: "#666" }}>ACTION</th>
//             </tr>
//           </thead>
//           <tbody>
//             {paginatedOrders.map((order) => {
//               const { day, time } = formatDate(order.date);
//               return (
//                 <tr key={order.id} style={{ borderBottom: "1px solid #eee" }}>
//                   <td style={{ padding: "16px" }}>
//                     <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
//                       <img src={order.items[0].image} alt={order.items[0].name} style={{ width: "50px", height: "50px", borderRadius: "4px", objectFit: "cover" }} />
//                       <div>
//                         <p style={{ margin: "0 0 4px 0", fontWeight: "600" }}>Order ID: #{order.id}</p>
//                         <p style={{ margin: "0 0 4px 0", fontSize: "13px", color: "#666" }}>{order.itemCount} Items</p>
//                         <span style={{ color: "green", fontSize: "13px", cursor: "pointer", display: "inline-flex", alignItems: "center" }}>
//                           View Details <ChevronRight size={14} />
//                         </span>
//                       </div>
//                     </div>
//                   </td>
//                   <td style={{ padding: "16px", fontSize: "14px" }}>
//                     <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
//                       <Calendar size={14} color="#666" />
//                       <div>
//                         <p style={{ margin: 0 }}>{day}</p>
//                         <p style={{ margin: 0, color: "#888", fontSize: "12px" }}>{time}</p>
//                       </div>
//                     </div>
//                   </td>
//                   <td style={{ padding: "16px" }}>
//                     <StatusBadge status={order.status} />
//                     <p style={{ margin: "4px 0 0 0", fontSize: "12px", color: "#666", whiteSpace: "pre-line" }}>
//                       {order.status === "Delivered" && `Delivered on\n${formatDate(order.deliveredOn).day}`}
//                       {order.status === "Shipped" && `Expected Delivery\n${formatDate(order.expectedDelivery).day}`}
//                       {order.status === "Processing" && "Your order is being\nprocessed"}
//                     </p>
//                   </td>
//                   <td style={{ padding: "16px" }}>
//                     <p style={{ margin: "0 0 4px 0", fontWeight: "600" }}>{formatCurrency(order.total)}</p>
//                     <p style={{ margin: 0, fontSize: "12px", color: "#666" }}>Paid via {order.paymentMode}</p>
//                   </td>
//                   <td style={{ padding: "16px" }}>
//                     <OrderActions order={order} />
//                   </td>
//                 </tr>
//               );
//             })}
//           </tbody>
//         </table>
        
//         {/* Simple Table Footer Pagination matching design layout */}
//         <div style={{ display: "flex", justifyContent: "space-between", padding: "12px 16px", alignItems: "center", background: "#f9f9f9", borderTop: "1px solid #e0e0e0" }}>
//           <span style={{ fontSize: "13px", color: "#666" }}>Showing 1 to {paginatedOrders.length} of {filteredOrders.length} orders</span>
//           <div style={{ display: "flex", gap: "6px" }}>
//             <button style={{ padding: "4px 8px", border: "1px solid #ccc", background: "#fff", borderRadius: "4px" }}>&lt;</button>
//             <button style={{ padding: "4px 10px", border: "1px solid #0b6623", background: "#0b6623", color: "#fff", borderRadius: "4px" }}>1</button>
//             <button style={{ padding: "4px 8px", border: "1px solid #ccc", background: "#fff", borderRadius: "4px" }}>&gt;</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// // ---------------------------------------------------------------------------
// // SUB-COMPONENT: STATIC PROFILE VIEW (WHAT YOU CURRENTLY HAVE)
// // ---------------------------------------------------------------------------
// function MyProfileView() {
//   return (
//     <div>
//       <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
//         <div>
//           <h1 style={{ fontSize: "24px", fontWeight: "600", margin: "0 0 4px 0" }}>My Profile</h1>
//           <p style={{ color: "#666", fontSize: "14px", margin: 0 }}>Manage your personal information</p>
//         </div>
//         <button style={{ padding: "6px 16px", border: "1px solid green", color: "green", borderRadius: "4px", background: "none" }}>Edit</button>
//       </div>

//       <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", maxWidth: "700px" }}>
//         <div>
//           <label style={{ display: "block", fontSize: "13px", fontWeight: "500", marginBottom: "6px" }}>Full Name</label>
//           <input type="text" value="Rohan Kumar" readOnly style={{ width: "100%", padding: "10px", border: "1px solid #ccc", borderRadius: "6px", background: "#fdfdfd" }} />
//         </div>
//         <div>
//           <label style={{ display: "block", fontSize: "13px", fontWeight: "500", marginBottom: "6px" }}>Mobile Number</label>
//           <input type="text" value="+91 98765 43210" readOnly style={{ width: "100%", padding: "10px", border: "1px solid #ccc", borderRadius: "6px", background: "#fdfdfd" }} />
//         </div>
//         <div style={{ gridColumn: "span 2" }}>
//           <label style={{ display: "block", fontSize: "13px", fontWeight: "500", marginBottom: "6px" }}>Email Address</label>
//           <input type="text" value="rohan.kumar@email.com" readOnly style={{ width: "100%", padding: "10px", border: "1px solid #ccc", borderRadius: "6px", background: "#fdfdfd" }} />
//         </div>
//       </div>
//     </div>
//   );
// }

// // ---------------------------------------------------------------------------
// // MAIN LAYOUT APP COMPONENT (UNIFIED SIDEBAR ROUTER)
// // ---------------------------------------------------------------------------
// export default function App() {
//   const [activeTab, setActiveTab] = useState("My Orders"); // Defaulting to My Orders as requested

//   const menuItems = [
//     { name: "My Profile", icon: <User size={16} /> },
//     { name: "My Orders", icon: <Calendar size={16} /> },
//     { name: "My Addresses", icon: <MapPin size={16} /> },
//     { name: "Wishlist", icon: <Heart size={16} /> },
//     { name: "My Reviews", icon: <MessageSquare size={16} /> },
//     { name: "Track Order", icon: <Truck size={16} /> },
//     { name: "Payment Methods", icon: <CreditCard size={16} /> },
//     { name: "Notification Preferences", icon: <Bell size={16} /> },
//     { name: "Account Settings", icon: <Settings size={16} /> },
//   ];

//   return (
//     <div className="app-container" style={{ fontFamily: "sans-serif", background: "#fbfbfb", minHeight: "100vh" }}>
//       {/* Top Navbar Header Dummy Row */}
//       <div style={{ background: "green", color: "white", padding: "10px 40px", display: "flex", justifyContent: "space-between", fontSize: "13px" }}>
//         <span>AgroMart</span>
//         <span>Need Help? +91 98765 43210</span>
//       </div>

//       {/* Main Framework Dashboard Layout wrapper */}
//       <div style={{ display: "flex", padding: "40px", gap: "30px", maxWidth: "1400px", margin: "0 auto" }}>
        
//         {/* SIDEBAR PANEL */}
//         <div style={{ width: "260px", background: "#fff", borderRadius: "8px", border: "1px solid #e0e0e0", padding: "20px" }}>
//           <div style={{ textAlign: "center", marginBottom: "20px", borderBottom: "1px solid #eee", paddingBottom: "20px" }}>
//             <div style={{ width: "60px", height: "60px", background: "#e2e8f0", borderRadius: "50%", margin: "0 auto 10px", display: "flex", alignItems: "center", justifyContent: "center" }}>
//               <User size={30} color="#718096" />
//             </div>
//             <h3 style={{ margin: "0 0 4px 0", fontSize: "16px" }}>Rohan Kumar</h3>
//             <p style={{ margin: "0 0 8px 0", fontSize: "12px", color: "#666" }}>rohan.kumar@email.com</p>
//             <span style={{ background: "#eaf5ea", color: "green", fontSize: "11px", padding: "2px 8px", borderRadius: "12px", fontWeight: "600" }}>★ Premium Member</span>
//           </div>

//           <p style={{ fontSize: "11px", color: "#999", fontWeight: "700", textTransform: "uppercase", margin: "0 0 10px 4px" }}>My Account</p>
//           <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
//             {menuItems.map((item) => (
//               <button
//                 key={item.name}
//                 onClick={() => setActiveTab(item.name)}
//                 style={{
//                   display: "flex",
//                   alignItems: "center",
//                   gap: "10px",
//                   width: "100%",
//                   padding: "10px 12px",
//                   border: "none",
//                   borderRadius: "6px",
//                   fontSize: "14px",
//                   textAlign: "left",
//                   cursor: "pointer",
//                   background: activeTab === item.name ? "#eaf5ea" : "transparent",
//                   color: activeTab === item.name ? "green" : "#333",
//                   fontWeight: activeTab === item.name ? "600" : "400",
//                 }}
//               >
//                 {item.icon}
//                 {item.name}
//               </button>
//             ))}
//             <button style={{ display: "flex", alignItems: "center", gap: "10px", width: "100%", padding: "10px 12px", border: "none", background: "none", color: "red", fontSize: "14px", textAlign: "left", marginTop: "10px", cursor: "pointer" }}>
//               <LogOut size={16} />
//               Logout
//             </button>
//           </div>
//         </div>

//         {/* CONTROLLER SWITCH CONTENT SCREEN */}
//         <div style={{ flex: 1, background: "#fff", borderRadius: "8px", border: "1px solid #e0e0e0", padding: "24px", minHeight: "500px" }}>
//           {activeTab === "My Profile" && <MyProfileView />}
//           {activeTab === "My Orders" && <MyOrdersView />}
//           {activeTab !== "My Profile" && activeTab !== "My Orders" && (
//             <div style={{ textAlign: "center", color: "#999", paddingTop: "60px" }}>
//               <h2>{activeTab} Section</h2>
//               <p>Content panel for {activeTab} coming soon.</p>
//             </div>
//           )}
//         </div>

//       </div>
//     </div>
//   );
// }


// import React, { useState } from 'react'
// import { products } from './Products'

// const menuItems = [
//   { icon: 'ti-user', label: 'My Profile', key: 'Profile' },
//   { icon: 'ti-shopping-bag', label: 'My Orders', key: 'MyOrders' },
//   { icon: 'ti-map-pin', label: 'My Addresses', key: 'Profile' },
//   { icon: 'ti-heart', label: 'Wishlist', key: 'Profile' },
//   { icon: 'ti-star', label: 'My Reviews', key: 'Profile' },
//   { icon: 'ti-truck', label: 'Track Order', key: 'Profile' },
//   { icon: 'ti-credit-card', label: 'Payment Methods', key: 'Profile' },
//   { icon: 'ti-bell', label: 'Notification Preferences', key: 'Profile' },
//   { icon: 'ti-settings', label: 'Account Settings', key: 'Profile' },
// ]

// // const orders = [
// //   {
// //     id: 'ORD12345', items: 3, date: '25 May 2024', time: '10:30 AM',
// //     status: 'Delivered', statusNote: 'Delivered on 28 May 2024',
// //     total: 1560, payment: 'COD', image: products[0].image,
// //   },
// //   {
// //     id: 'ORD12310', items: 2, date: '18 May 2024', time: '04:15 PM',
// //     status: 'Delivered', statusNote: 'Delivered on 20 May 2024',
// //     total: 310, payment: 'UPI', image: products[6].image,
// //   },
// //   {
// //     id: 'ORD12285', items: 1, date: '10 May 2024', time: '11:20 AM',
// //     status: 'Shipped', statusNote: 'Expected Delivery 12 May 2024',
// //     total: 180, payment: 'Online', image: products[3].image,
// //   },
// //   {
// //     id: 'ORD12210', items: 4, date: '02 May 2024', time: '09:45 AM',
// //     status: 'Processing', statusNote: 'Your order is being processed',
// //     total: 2450, payment: 'Razorpay', image: products[9].image,
// //   },
// // ]

// const orders = [
//   { id: 'ORD12345', items: 3, date: '25 May 2024', time: '10:30 AM', status: 'Delivered', statusNote: 'Delivered on 28 May 2024', total: 1560, payment: 'COD', image: products[0].img },
//   { id: 'ORD12310', items: 2, date: '18 May 2024', time: '04:15 PM', status: 'Delivered', statusNote: 'Delivered on 20 May 2024', total: 310, payment: 'UPI', image: products[6].img },
//   { id: 'ORD12285', items: 1, date: '10 May 2024', time: '11:20 AM', status: 'Shipped', statusNote: 'Expected Delivery 12 May 2024', total: 180, payment: 'Online', image: products[3].img },
//   { id: 'ORD12210', items: 4, date: '02 May 2024', time: '09:45 AM', status: 'Processing', statusNote: 'Your order is being processed', total: 2450, payment: 'Razorpay', image: products[9].img },
// ]

// const statusStyle = (status) => {
//   if (status === 'Delivered') return { background: '#e8f5e9', color: '#1d6b2e' }
//   if (status === 'Shipped') return { background: '#e3f2fd', color: '#0077cc' }
//   if (status === 'Processing') return { background: '#fff8e1', color: '#f5a623' }
//   return { background: '#fce4ec', color: '#e24b4a' }
// }

// const MyOrders = ({ onBack, onNavigate }) => {
//   const [activeMenu, setActiveMenu] = useState('MyOrders')
//   const [filter, setFilter] = useState('All Orders')
//   const [search, setSearch] = useState('')
//   const [currentPage, setCurrentPage] = useState(1)

//   const filterOptions = ['All Orders', 'Delivered', 'Shipped', 'Processing', 'Cancelled']

//   const filteredOrders = orders.filter((o) => {
//     const matchesFilter = filter === 'All Orders' || o.status === filter
//     const matchesSearch = o.id.toLowerCase().includes(search.toLowerCase())
//     return matchesFilter && matchesSearch
//   })

//   return (
//     <div className="profile-page">
//       <div className="breadcrumb">
//         <span onClick={onBack} style={{ cursor: 'pointer', color: '#1d6b2e' }}>Home</span>
//         <i className="ti ti-chevron-right"></i>
//         <span style={{ color: '#1d6b2e', cursor: 'pointer' }} onClick={() => onNavigate('Profile')}>Account</span>
//         <i className="ti ti-chevron-right"></i>
//         <span className="breadcrumb-current">My Orders</span>
//       </div>

//       <div className="profile-layout">

//         {/* Sidebar */}
//         <aside className="profile-sidebar">
//           <div className="profile-avatar-block">
//             <div className="profile-avatar">
//               <i className="ti ti-user"></i>
//             </div>
//             <div>
//               <p className="profile-name">Rohan Kumar</p>
//               <p className="profile-email">rohan.kumar@email.com</p>
//               <span className="premium-badge">
//                 <i className="ti ti-crown"></i> Premium Member
//               </span>
//             </div>
//           </div>

//           <p className="sidebar-section-label">MY ACCOUNT</p>
//           <nav className="profile-menu">
//             {menuItems.map((item) => (
//               <div
//                 key={item.label}
//                 className={`profile-menu-item ${activeMenu === item.key ? 'profile-menu-active' : ''}`}
//                 onClick={() => {
//                   setActiveMenu(item.key)
//                   onNavigate(item.key)
//                 }}
//               >
//                 <i className={`ti ${item.icon}`}></i>
//                 {item.label}
//               </div>
//             ))}
//             <div className="profile-menu-item profile-logout" onClick={onBack}>
//               <i className="ti ti-logout"></i> Logout
//             </div>
//           </nav>
//         </aside>

//         {/* Main Orders Table */}
//         <main className="profile-main" style={{ gridColumn: '2 / 4' }}>
//           <div className="orders-card">
//             <div className="orders-header">
//               <div>
//                 <h2>My Orders</h2>
//                 <p className="profile-form-subtitle">View and track all your orders</p>
//               </div>
//               <div className="orders-controls">
//                 <select
//                   className="orders-filter-select"
//                   value={filter}
//                   onChange={(e) => setFilter(e.target.value)}
//                 >
//                   {filterOptions.map((f) => (
//                     <option key={f}>{f}</option>
//                   ))}
//                 </select>
//                 <div className="orders-search-wrap">
//                   <input
//                     type="text"
//                     placeholder="Search by order ID, product..."
//                     value={search}
//                     onChange={(e) => setSearch(e.target.value)}
//                     className="orders-search-input"
//                   />
//                   <i className="ti ti-search orders-search-icon"></i>
//                 </div>
//               </div>
//             </div>

//             <div className="orders-table">
//               <div className="orders-table-head">
//                 <span>ORDER DETAILS</span>
//                 <span>DATE</span>
//                 <span>STATUS</span>
//                 <span>TOTAL</span>
//                 <span>ACTION</span>
//               </div>

//               {filteredOrders.length === 0 ? (
//                 <div className="orders-empty">
//                   <i className="ti ti-shopping-bag"></i>
//                   <p>No orders found</p>
//                 </div>
//               ) : (
//                 filteredOrders.map((order) => (
//                   <div className="orders-table-row" key={order.id}>
//                     <div className="order-details-cell">
//                       {/* <img src={order.img} alt="product" className="order-product-img" /> */}
//                       <img src={order.image} alt="product" className="order-product-img" />
//                       <div>
//                         <p className="order-id">Order ID: #{order.id}</p>
//                         <p className="order-items">{order.items} Items</p>
//                         <span className="order-view-details">
//                           View Details <i className="ti ti-chevron-right"></i>
//                         </span>
//                       </div>
//                     </div>

//                     <div className="order-date-cell">
//                       <i className="ti ti-calendar"></i>
//                       <div>
//                         <p className="order-date">{order.date}</p>
//                         <p className="order-time">{order.time}</p>
//                       </div>
//                     </div>

//                     <div className="order-status-cell">
//                       <span className="order-status-badge" style={statusStyle(order.status)}>
//                         {order.status}
//                       </span>
//                       <p className="order-status-note">{order.statusNote}</p>
//                     </div>

//                     <div className="order-total-cell">
//                       <p className="order-total-amount">₹{order.total.toLocaleString('en-IN')}</p>
//                       <p className="order-payment">Paid via {order.payment}</p>
//                     </div>

//                     <div className="order-action-cell">
//                       {order.status === 'Delivered' && (
//                         <>
//                           <button className="order-action-btn">
//                             <i className="ti ti-refresh"></i> Order Again
//                           </button>
//                           <span className="order-invoice-link">
//                             <i className="ti ti-download"></i> View Invoice
//                           </span>
//                         </>
//                       )}
//                       {order.status === 'Shipped' && (
//                         <>
//                           <button className="order-action-btn">
//                             <i className="ti ti-truck"></i> Track Order
//                           </button>
//                           <span className="order-invoice-link">
//                             <i className="ti ti-download"></i> View Invoice
//                           </span>
//                         </>
//                       )}
//                       {order.status === 'Processing' && (
//                         <>
//                           <button className="order-action-btn order-cancel-btn">
//                             <i className="ti ti-x"></i> Cancel Order
//                           </button>
//                           <span className="order-invoice-link">
//                             View Details <i className="ti ti-chevron-right"></i>
//                           </span>
//                         </>
//                       )}
//                     </div>
//                   </div>
//                 ))
//               )}
//             </div>

//             <div className="orders-footer">
//               <p className="orders-showing">Showing 1 to {filteredOrders.length} of 12 orders</p>
//               <div className="orders-pagination">
//                 <button className="page-arrow" onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}>
//                   <i className="ti ti-chevron-left"></i>
//                 </button>
//                 {[1, 2, 3].map((n) => (
//                   <button
//                     key={n}
//                     className={`page-num ${currentPage === n ? 'page-active' : ''}`}
//                     onClick={() => setCurrentPage(n)}
//                   >{n}</button>
//                 ))}
//                 <span className="page-dots">...</span>
//                 <button className="page-arrow" onClick={() => setCurrentPage((p) => Math.min(3, p + 1))}>
//                   <i className="ti ti-chevron-right"></i>
//                 </button>
//               </div>
//               <div className="orders-rows-per-page">
//                 <span>Rows per page:</span>
//                 <select><option>10</option><option>20</option></select>
//               </div>
//             </div>
//           </div>

//           <div className="orders-trust-strip">
//             <div className="bottom-badge">
//               <i className="ti ti-shield-check"></i>
//               <div>
//                 <p className="bottom-badge-title">100% Genuine Products</p>
//                 <p className="bottom-badge-subtitle">Original &amp; Trusted</p>
//               </div>
//             </div>
//             <div className="bottom-badge">
//               <i className="ti ti-truck"></i>
//               <div>
//                 <p className="bottom-badge-title">Fast Delivery</p>
//                 <p className="bottom-badge-subtitle">On time, every time</p>
//               </div>
//             </div>
//             <div className="bottom-badge">
//               <i className="ti ti-lock"></i>
//               <div>
//                 <p className="bottom-badge-title">Secure Payments</p>
//                 <p className="bottom-badge-subtitle">Multiple safe payment options</p>
//               </div>
//             </div>
//             <div className="bottom-badge">
//               <i className="ti ti-rotate"></i>
//               <div>
//                 <p className="bottom-badge-title">Easy Returns</p>
//                 <p className="bottom-badge-subtitle">Hassle free returns</p>
//               </div>
//             </div>
//           </div>
//         </main>
//       </div>
//     </div>
//   )
// }

// export default MyOrders



import React, { useState } from 'react'
import shineStarImg from '../assets/shineStarImg.jpeg'
import expludosImg from '../assets/expludosImg.jpeg'
import silcoatImg from '../assets/silcoatImg.jpeg'
import kStartImg from '../assets/kStartImg.jpeg'

const menuItems = [
  { icon: 'ti-user', label: 'My Profile', key: 'Profile' },
  { icon: 'ti-shopping-bag', label: 'My Orders', key: 'MyOrders' },
  { icon: 'ti-map-pin', label: 'My Addresses', key: 'Profile' },
  { icon: 'ti-heart', label: 'Wishlist', key: 'Profile' },
  { icon: 'ti-star', label: 'My Reviews', key: 'Profile' },
  { icon: 'ti-truck', label: 'Track Order', key: 'Profile' },
  { icon: 'ti-credit-card', label: 'Payment Methods', key: 'Profile' },
  { icon: 'ti-bell', label: 'Notification Preferences', key: 'Profile' },
  { icon: 'ti-settings', label: 'Account Settings', key: 'Profile' },
]

const orders = [
  { id: 'ORD12345', items: 3, date: '25 May 2024', time: '10:30 AM', status: 'Delivered', statusNote: 'Delivered on 28 May 2024', total: 1560, payment: 'COD', image: shineStarImg },
  { id: 'ORD12310', items: 2, date: '18 May 2024', time: '04:15 PM', status: 'Delivered', statusNote: 'Delivered on 20 May 2024', total: 310, payment: 'UPI', image: expludosImg },
  { id: 'ORD12285', items: 1, date: '10 May 2024', time: '11:20 AM', status: 'Shipped', statusNote: 'Expected Delivery 12 May 2024', total: 180, payment: 'Online', image: silcoatImg },
  { id: 'ORD12210', items: 4, date: '02 May 2024', time: '09:45 AM', status: 'Processing', statusNote: 'Your order is being processed', total: 2450, payment: 'Razorpay', image: kStartImg },
]

const statusStyle = (status) => {
  if (status === 'Delivered') return { background: '#e8f5e9', color: '#1d6b2e' }
  if (status === 'Shipped') return { background: '#e3f2fd', color: '#0077cc' }
  if (status === 'Processing') return { background: '#fff8e1', color: '#f5a623' }
  return { background: '#fce4ec', color: '#e24b4a' }
}

const MyOrders = ({ onBack, onNavigate }) => {
  const [activeMenu, setActiveMenu] = useState('MyOrders')
  const [filter, setFilter] = useState('All Orders')
  const [search, setSearch] = useState('')
  const [currentPage, setCurrentPage] = useState(1)

  const filterOptions = ['All Orders', 'Delivered', 'Shipped', 'Processing', 'Cancelled']

  const filteredOrders = orders.filter((o) => {
    const matchesFilter = filter === 'All Orders' || o.status === filter
    const matchesSearch = o.id.toLowerCase().includes(search.toLowerCase())
    return matchesFilter && matchesSearch
  })

  return (
    <div className="profile-page">
      <div className="breadcrumb">
        <span onClick={onBack} style={{ cursor: 'pointer', color: '#1d6b2e' }}>Home</span>
        <i className="ti ti-chevron-right"></i>
        <span style={{ color: '#1d6b2e', cursor: 'pointer' }} onClick={() => onNavigate('Profile')}>Account</span>
        <i className="ti ti-chevron-right"></i>
        <span className="breadcrumb-current">My Orders</span>
      </div>

      <div className="profile-layout">

        <aside className="profile-sidebar">
          <div className="profile-avatar-block">
            <div className="profile-avatar">
              <i className="ti ti-user"></i>
            </div>
            <div>
              <p className="profile-name">Rohan Kumar</p>
              <p className="profile-email">rohan.kumar@email.com</p>
              <span className="premium-badge">
                <i className="ti ti-crown"></i> Premium Member
              </span>
            </div>
          </div>

          <p className="sidebar-section-label">MY ACCOUNT</p>
          <nav className="profile-menu">
            {menuItems.map((item) => (
              <div
                key={item.label}
                className={`profile-menu-item ${activeMenu === item.key ? 'profile-menu-active' : ''}`}
                onClick={() => {
                  setActiveMenu(item.key)
                  if (onNavigate) onNavigate(item.key)
                }}
              >
                <i className={`ti ${item.icon}`}></i>
                {item.label}
              </div>
            ))}
            <div className="profile-menu-item profile-logout" onClick={onBack}>
              <i className="ti ti-logout"></i> Logout
            </div>
          </nav>
        </aside>

        <main className="profile-main" style={{ gridColumn: '2 / 4' }}>
          <div className="orders-card">
            <div className="orders-header">
              <div>
                <h2>My Orders</h2>
                <p className="profile-form-subtitle">View and track all your orders</p>
              </div>
              <div className="orders-controls">
                <select
                  className="orders-filter-select"
                  value={filter}
                  onChange={(e) => setFilter(e.target.value)}
                >
                  {filterOptions.map((f) => (
                    <option key={f}>{f}</option>
                  ))}
                </select>
                <div className="orders-search-wrap">
                  <input
                    type="text"
                    placeholder="Search by order ID, product..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="orders-search-input"
                  />
                  <i className="ti ti-search orders-search-icon"></i>
                </div>
              </div>
            </div>

            <div className="orders-table">
              <div className="orders-table-head">
                <span>ORDER DETAILS</span>
                <span>DATE</span>
                <span>STATUS</span>
                <span>TOTAL</span>
                <span>ACTION</span>
              </div>

              {filteredOrders.length === 0 ? (
                <div className="orders-empty">
                  <i className="ti ti-shopping-bag"></i>
                  <p>No orders found</p>
                </div>
              ) : (
                filteredOrders.map((order) => (
                  <div className="orders-table-row" key={order.id}>
                    <div className="order-details-cell">
                      <img src={order.image} alt="product" className="order-product-img" />
                      <div>
                        <p className="order-id">Order ID: #{order.id}</p>
                        <p className="order-items">{order.items} Items</p>
                        <span className="order-view-details">
                          View Details <i className="ti ti-chevron-right"></i>
                        </span>
                      </div>
                    </div>

                    <div className="order-date-cell">
                      <i className="ti ti-calendar"></i>
                      <div>
                        <p className="order-date">{order.date}</p>
                        <p className="order-time">{order.time}</p>
                      </div>
                    </div>

                    <div className="order-status-cell">
                      <span className="order-status-badge" style={statusStyle(order.status)}>
                        {order.status}
                      </span>
                      <p className="order-status-note">{order.statusNote}</p>
                    </div>

                    <div className="order-total-cell">
                      <p className="order-total-amount">₹{order.total.toLocaleString('en-IN')}</p>
                      <p className="order-payment">Paid via {order.payment}</p>
                    </div>

                    <div className="order-action-cell">
                      {order.status === 'Delivered' && (
                        <>
                          <button className="order-action-btn">
                            <i className="ti ti-refresh"></i> Order Again
                          </button>
                          <span className="order-invoice-link">
                            <i className="ti ti-download"></i> View Invoice
                          </span>
                        </>
                      )}
                      {order.status === 'Shipped' && (
                        <>
                          <button className="order-action-btn">
                            <i className="ti ti-truck"></i> Track Order
                          </button>
                          <span className="order-invoice-link">
                            <i className="ti ti-download"></i> View Invoice
                          </span>
                        </>
                      )}
                      {order.status === 'Processing' && (
                        <>
                          <button className="order-action-btn order-cancel-btn">
                            <i className="ti ti-x"></i> Cancel Order
                          </button>
                          <span className="order-invoice-link">
                            View Details <i className="ti ti-chevron-right"></i>
                          </span>
                        </>
                      )}
                    </div>
                  </div>
                ))
              )}
            </div>

            <div className="orders-footer">
              <p className="orders-showing">Showing 1 to {filteredOrders.length} of 12 orders</p>
              <div className="orders-pagination">
                <button className="page-arrow" onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}>
                  <i className="ti ti-chevron-left"></i>
                </button>
                {[1, 2, 3].map((n) => (
                  <button
                    key={n}
                    className={`page-num ${currentPage === n ? 'page-active' : ''}`}
                    onClick={() => setCurrentPage(n)}
                  >{n}</button>
                ))}
                <span className="page-dots">...</span>
                <button className="page-arrow" onClick={() => setCurrentPage((p) => Math.min(3, p + 1))}>
                  <i className="ti ti-chevron-right"></i>
                </button>
              </div>
              <div className="orders-rows-per-page">
                <span>Rows per page:</span>
                <select><option>10</option><option>20</option></select>
              </div>
            </div>
          </div>

          <div className="orders-trust-strip">
            <div className="bottom-badge">
              <i className="ti ti-shield-check"></i>
              <div>
                <p className="bottom-badge-title">100% Genuine Products</p>
                <p className="bottom-badge-subtitle">Original &amp; Trusted</p>
              </div>
            </div>
            <div className="bottom-badge">
              <i className="ti ti-truck"></i>
              <div>
                <p className="bottom-badge-title">Fast Delivery</p>
                <p className="bottom-badge-subtitle">On time, every time</p>
              </div>
            </div>
            <div className="bottom-badge">
              <i className="ti ti-lock"></i>
              <div>
                <p className="bottom-badge-title">Secure Payments</p>
                <p className="bottom-badge-subtitle">Multiple safe payment options</p>
              </div>
            </div>
            <div className="bottom-badge">
              <i className="ti ti-rotate"></i>
              <div>
                <p className="bottom-badge-title">Easy Returns</p>
                <p className="bottom-badge-subtitle">Hassle free returns</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default MyOrders