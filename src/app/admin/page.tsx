// // app/admin/page.tsx
// "use client";
// import { useState, useEffect } from "react";
// import { client } from "@/sanity/lib/client";
// import { useRouter } from "next/navigation";

// interface Product {
//   _id: string;
//   productName: string;
//   price: number;
//   inventory: number;
//   colors: string[];
// }

// interface Order {
//   _id: string;
//   firstName: string;
//   lastName: string;
//   email: string;
//   total: number;
//   orderDate: string;
//   cartItems: any[];
// }

// const AdminDashboard = () => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [loginData, setLoginData] = useState({ username: "", password: "" });
//   const [products, setProducts] = useState<Product[]>([]);
//   const [orders, setOrders] = useState<Order[]>([]);
//   const [activeTab, setActiveTab] = useState("products");
//   const router = useRouter();

//   // Replace these with your secure credentials (preferably stored in environment variables)
//   const ADMIN_USERNAME = process.env.NEXT_PUBLIC_ADMIN_USERNAME;
//   const ADMIN_PASSWORD = process.env.NEXT_PUBLIC_ADMIN_PASSWORD;

//   useEffect(() => {
//     // Check if admin is already authenticated
//     const authStatus = localStorage.getItem("adminAuth");
//     if (authStatus === "true") {
//       setIsAuthenticated(true);
//       fetchData();
//     }
//   }, []);

//   const handleLogin = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (
//       loginData.username === ADMIN_USERNAME &&
//       loginData.password === ADMIN_PASSWORD
//     ) {
//       setIsAuthenticated(true);
//       localStorage.setItem("adminAuth", "true");
//       fetchData();
//     } else {
//       alert("Invalid credentials");
//     }
//   };

//   const handleLogout = () => {
//     setIsAuthenticated(false);
//     localStorage.removeItem("adminAuth");
//     router.push("/admin");
//   };

//   const fetchData = async () => {
//     try {
//       // Fetch products
//       const productsQuery = `*[_type == "product"]{
//         _id,
//         productName,
//         price,
//         inventory,
//         colors
//       }`;
//       const productsData = await client.fetch(productsQuery);
//       setProducts(productsData);

//       // Fetch orders
//       const ordersQuery = `*[_type == "order"] | order(orderDate desc){
//         _id,
//         firstName,
//         lastName,
//         email,
//         total,
//         orderDate,
//         cartItems
//       }`;
//       const ordersData = await client.fetch(ordersQuery);
//       setOrders(ordersData);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

//   if (!isAuthenticated) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gray-100">
//         <div className="bg-white p-8 rounded-lg shadow-md w-96">
//           <h1 className="text-2xl font-bold mb-6 text-center">Admin Login</h1>
//           <form onSubmit={handleLogin} className="space-y-4">
//             <div>
//               <label className="block text-sm font-medium text-gray-700">
//                 Username
//               </label>
//               <input
//                 type="text"
//                 value={loginData.username}
//                 onChange={(e) =>
//                   setLoginData({ ...loginData, username: e.target.value })
//                 }
//                 className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
//                 required
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700">
//                 Password
//               </label>
//               <input
//                 type="password"
//                 value={loginData.password}
//                 onChange={(e) =>
//                   setLoginData({ ...loginData, password: e.target.value })
//                 }
//                 className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
//                 required
//               />
//             </div>
//             <button
//               type="submit"
//               className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
//             >
//               Login
//             </button>
//           </form>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gray-100">
//       <nav className="bg-white shadow-md">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between h-16">
//             <div className="flex items-center">
//               <h1 className="text-xl font-bold">Admin Dashboard</h1>
//             </div>
//             <div className="flex items-center">
//               <button
//                 onClick={handleLogout}
//                 className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700"
//               >
//                 Logout
//               </button>
//             </div>
//           </div>
//         </div>
//       </nav>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//         <div className="mb-6">
//           <div className="border-b border-gray-200">
//             <nav className="-mb-px flex space-x-8">
//               <button
//                 onClick={() => setActiveTab("products")}
//                 className={`${
//                   activeTab === "products"
//                     ? "border-blue-500 text-blue-600"
//                     : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
//                 } whitespace-nowrap py-4 px-1 border-b-2 font-medium`}
//               >
//                 Products
//               </button>
//               <button
//                 onClick={() => setActiveTab("orders")}
//                 className={`${
//                   activeTab === "orders"
//                     ? "border-blue-500 text-blue-600"
//                     : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
//                 } whitespace-nowrap py-4 px-1 border-b-2 font-medium`}
//               >
//                 Orders
//               </button>
//             </nav>
//           </div>
//         </div>

//         {activeTab === "products" ? (
//           <div className="bg-white shadow-md rounded-lg">
//             <div className="px-4 py-5 sm:px-6">
//               <h2 className="text-lg font-medium">Products Inventory</h2>
//             </div>
//             <div className="border-t border-gray-200">
//               <table className="min-w-full divide-y divide-gray-200">
//                 <thead className="bg-gray-50">
//                   <tr>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                       Product Name
//                     </th>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                       Price
//                     </th>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                       Stock
//                     </th>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                       Colors
//                     </th>
//                   </tr>
//                 </thead>
//                 <tbody className="bg-white divide-y divide-gray-200">
//                   {products.map((product) => (
//                     <tr key={product._id}>
//                       <td className="px-6 py-4 whitespace-nowrap">
//                         {product.productName}
//                       </td>
//                       <td className="px-6 py-4 whitespace-nowrap">
//                         €{product.price}
//                       </td>
//                       <td className="px-6 py-4 whitespace-nowrap">
//                         <span
//                           className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
//                             product.inventory > 10
//                               ? "bg-green-100 text-green-800"
//                               : "bg-red-100 text-red-800"
//                           }`}
//                         >
//                           {product.inventory}
//                         </span>
//                       </td>
//                       <td className="px-6 py-4 whitespace-nowrap">
//                         {product.colors.join(", ")}
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         ) : (
//           <div className="bg-white shadow-md rounded-lg">
//             <div className="px-4 py-5 sm:px-6">
//               <h2 className="text-lg font-medium">Recent Orders</h2>
//             </div>
//             <div className="border-t border-gray-200">
//               <table className="min-w-full divide-y divide-gray-200">
//                 <thead className="bg-gray-50">
//                   <tr>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                       Order Date
//                     </th>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                       Customer
//                     </th>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                       Email
//                     </th>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                       Total
//                     </th>
//                   </tr>
//                 </thead>
//                 <tbody className="bg-white divide-y divide-gray-200">
//                   {orders.map((order) => (
//                     <tr key={order._id}>
//                       <td className="px-6 py-4 whitespace-nowrap">
//                         {new Date(order.orderDate).toLocaleDateString()}
//                       </td>
//                       <td className="px-6 py-4 whitespace-nowrap">
//                         {order.firstName} {order.lastName}
//                       </td>
//                       <td className="px-6 py-4 whitespace-nowrap">
//                         {order.email}
//                       </td>
//                       <td className="px-6 py-4 whitespace-nowrap">
//                         €{order.total}
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;

// "use client"
// import { useState, useEffect } from "react";
// import {client} from "@/sanity/lib/client";

// const AdminPage = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [inventory, setInventory] = useState<any[]>([]);
//   const [orders, setOrders] = useState<any[]>([]);
//   const [error, setError] = useState("");

//   const handleLogin = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setError("");
//     try {
//       const res = await fetch("/api/auth/login", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ username, password }),
//       });

//       const data = await res.json();

//       if (res.ok && data.success) {
//         setIsLoggedIn(true);
//         fetchInventoryAndOrders();
//       } else {
//         setError(data.message);
//       }
//     } catch (err) {
//       setError("Login failed. Please try again.");
//     }
//   };

//   const fetchInventoryAndOrders = async () => {
//     try {
//       const productsQuery = `*[_type == "product"]{
//         _id,
//         productName,
//         category,
//         price,
//         inventory,
//         status,
//         "imageUrl": image.asset->url
//       }`;

//       const ordersQuery = `*[_type == "order"]{
//         _id,
//         firstName,
//         lastName,
//         total,
//         status,
//         orderDate
//       }`;

//       const [products, ordersData] = await Promise.all([
//         client.fetch(productsQuery),
//         client.fetch(ordersQuery),
//       ]);

//       setInventory(products);
//       setOrders(ordersData);
//     } catch (err) {
//       console.error("Error fetching data:", err);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-r from-blue-100 to-blue-300 flex flex-col items-center justify-center p-4">
//       {!isLoggedIn ? (
//         <form
//           onSubmit={handleLogin}
//           className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md space-y-6"
//         >
//           <h2 className="text-3xl font-bold text-center text-gray-800">
//             Admin Login
//           </h2>
//           {error && <p className="text-red-500 text-sm text-center">{error}</p>}
//           <div>
//             <label className="block text-gray-700 font-medium mb-2">
//               Username
//             </label>
//             <input
//               type="text"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
//               required
//             />
//           </div>
//           <div>
//             <label className="block text-gray-700 font-medium mb-2">
//               Password
//             </label>
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
//               required
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-blue-500 text-white py-3 rounded-xl font-semibold hover:bg-blue-600 transition duration-300"
//           >
//             Login
//           </button>
//         </form>
//       ) : (
//         <div className="w-full max-w-6xl space-y-10">
//           <h2 className="text-4xl font-bold text-center text-gray-800">
//             Admin Dashboard
//           </h2>
//           <section>
//             <h3 className="text-2xl font-semibold text-gray-700 mb-4">
//               Inventory
//             </h3>
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//               {inventory.map((item) => (
//                 <div
//                   key={item._id}
//                   className="p-6 bg-white rounded-2xl shadow-md border transform transition hover:scale-105"
//                 >
//                   <h4 className="text-xl font-semibold mb-2 text-gray-800">
//                     {item.productName}
//                   </h4>
//                   <p className="text-gray-600">Category: {item.category}</p>
//                   <p className="text-gray-600">Price: ${item.price}</p>
//                   <p className="text-gray-600">Inventory: {item.inventory}</p>
//                   <p className="text-gray-600">Status: {item.status}</p>
//                   {item.imageUrl && (
//                     <img
//                       src={item.imageUrl}
//                       alt={item.productName}
//                       className="w-full h-40 object-cover rounded-lg mt-4"
//                     />
//                   )}
//                 </div>
//               ))}
//             </div>
//           </section>
//           <section>
//             <h3 className="text-2xl font-semibold text-gray-700 mb-4">
//               Orders
//             </h3>
//             <div className="space-y-6">
//               {orders.map((order) => (
//                 <div
//                   key={order._id}
//                   className="p-6 bg-white rounded-2xl shadow-md border transform transition hover:scale-105"
//                 >
//                   <p className="text-gray-800 font-medium">
//                     Order ID: {order._id}
//                   </p>
//                   <p className="text-gray-600">
//                     Customer: {order.firstName} {order.lastName}
//                   </p>
//                   <p className="text-gray-600">Total: ${order.total}</p>
//                   <p className="text-gray-600">Status: {order.status}</p>
//                   <p className="text-gray-600">
//                     Date: {new Date(order.orderDate).toLocaleDateString()}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           </section>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AdminPage;
// "use client"
// import React, { useState, useEffect } from "react";
// import { client } from "@/sanity/lib/client";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import {
//   LayoutDashboard,
//   Package,
//   ShoppingCart,
//   Users,
//   Settings,
//   LogOut,
// } from "lucide-react";
// import {  Product,Order} from "@/types/types";


// const AdminDashboard = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [inventory, setInventory] = useState<Product[]>([]);
//   const [orders, setOrders] = useState<Order[]>([]);
//   const [error, setError] = useState("");
//   const [activeTab, setActiveTab] = useState("dashboard");
//   const [loading, setLoading] = useState(false);

//   const handleLogin = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setError("");
//     setLoading(true);
//     try {
//       const res = await fetch("/api/auth/login", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ username, password }),
//       });

//       const data = await res.json();

//       if (res.ok && data.success) {
//         setIsLoggedIn(true);
//         fetchInventoryAndOrders();
//       } else {
//         setError(data.message);
//       }
//     } catch (err) {
//       setError("Login failed. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const fetchInventoryAndOrders = async () => {
//     try {
//       const productsQuery = `*[_type == "product"]{
//         _id,
//         productName,
//         category,
//         price,
//         inventory,
//         colors,
//         status,
//         description,
//         image {
//           asset,
//           "url": asset->url
//         }
//       }`;

//       const ordersQuery = `*[_type == "order"]{
//         _id,
//         firstName,
//         lastName,
//         total,
//         status,
//         orderDate
//       }`;

//       const [products, ordersData] = await Promise.all([
//         client.fetch(productsQuery),
//         client.fetch(ordersQuery),
//       ]);

//       setInventory(products);
//       setOrders(ordersData);
//     } catch (err) {
//       console.error("Error fetching data:", err);
//     }
//   };

//   const DashboardContent = () => {
//     const totalRevenue = orders.reduce((sum, order) => sum + order.total, 0);
//     const totalProducts = inventory.length;
//     const totalOrders = orders.length;

//     return (
//       <div className="space-y-6">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           <Card>
//             <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
//               <CardTitle className="text-sm font-medium">
//                 Total Revenue
//               </CardTitle>
//               <ShoppingCart className="h-4 w-4 text-gray-500" />
//             </CardHeader>
//             <CardContent>
//               <div className="text-2xl font-bold">
//                 ${totalRevenue.toFixed(2)}
//               </div>
//             </CardContent>
//           </Card>
//           <Card>
//             <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
//               <CardTitle className="text-sm font-medium">Products</CardTitle>
//               <Package className="h-4 w-4 text-gray-500" />
//             </CardHeader>
//             <CardContent>
//               <div className="text-2xl font-bold">{totalProducts}</div>
//             </CardContent>
//           </Card>
//           <Card>
//             <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
//               <CardTitle className="text-sm font-medium">
//                 Total Orders
//               </CardTitle>
//               <Users className="h-4 w-4 text-gray-500" />
//             </CardHeader>
//             <CardContent>
//               <div className="text-2xl font-bold">{totalOrders}</div>
//             </CardContent>
//           </Card>
//         </div>
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//           <Card>
//             <CardHeader>
//               <CardTitle>Recent Orders</CardTitle>
//             </CardHeader>
//             <CardContent>
//               <div className="space-y-4">
//                 {orders.slice(0, 5).map((order) => (
//                   <div
//                     key={order._id}
//                     className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
//                   >
//                     <div>
//                       <p className="font-medium">
//                         {order.firstName} {order.lastName}
//                       </p>
//                       <p className="text-sm text-gray-500">
//                         {new Date(order.orderDate).toLocaleDateString()}
//                       </p>
//                     </div>
//                     <div className="text-right">
//                       <p className="font-medium">${order.total}</p>
//                       <span className="inline-block px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">
//                         {order.status}
//                       </span>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </CardContent>
//           </Card>
//           <Card>
//             <CardHeader>
//               <CardTitle>Low Stock Products</CardTitle>
//             </CardHeader>
//             <CardContent>
//               <div className="space-y-4">
//                 {inventory
//                   .filter((item) => item.inventory < 10)
//                   .slice(0, 5)
//                   .map((item) => (
//                     <div
//                       key={item._id}
//                       className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
//                     >
//                       <div className="flex items-center space-x-4">
//                         <div className="w-12 h-12">
//                           <img
//                             src={item.image.url || "/api/placeholder/48/48"}
//                             alt={item.productName}
//                             className="w-full h-full object-cover rounded-lg"
//                           />
//                         </div>
//                         <div>
//                           <p className="font-medium">{item.productName}</p>
//                           <p className="text-sm text-gray-500">
//                             {item.category}
//                           </p>
//                         </div>
//                       </div>
//                       <div className="text-right">
//                         <p className="font-medium">${item.price}</p>
//                         <p className="text-sm text-red-500">
//                           Stock: {item.inventory}
//                         </p>
//                       </div>
//                     </div>
//                   ))}
//               </div>
//             </CardContent>
//           </Card>
//         </div>
//       </div>
//     );
//   };

//   const InventoryContent = () => (
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//       {inventory.map((item) => (
//         <Card key={item._id}>
//           <CardContent className="p-6">
//             {item.image?.url && (
//               <img
//                 src={item.image.url}
//                 alt={item.productName}
//                 className="w-full h-48 object-cover rounded-lg mb-4"
//               />
//             )}
//             <h4 className="text-xl font-semibold mb-2">{item.productName}</h4>
//             <div className="space-y-2 text-gray-600">
//               <p>Category: {item.category}</p>
//               <p>Price: ${item.price}</p>
//               <p
//                 className={`font-medium ${item.inventory < 10 ? "text-red-500" : ""}`}
//               >
//                 Stock: {item.inventory}
//               </p>
//               <div className="flex flex-wrap gap-2 my-2">
//                 {item.colors?.map((color, index) => (
//                   <span
//                     key={index}
//                     className="px-2 py-1 text-xs bg-gray-100 rounded-full"
//                   >
//                     {color}
//                   </span>
//                 ))}
//               </div>
//               <p className="text-sm line-clamp-2">{item.description}</p>
//               <span
//                 className={`inline-block px-2 py-1 text-xs rounded-full ${
//                   item.status === "active"
//                     ? "bg-green-100 text-green-800"
//                     : "bg-red-100 text-red-800"
//                 }`}
//               >
//                 {item.status}
//               </span>
//             </div>
//           </CardContent>
//         </Card>
//       ))}
//     </div>
//   );

//   const OrdersContent = () => (
//     <div className="space-y-6">
//       {orders.map((order) => (
//         <Card key={order._id}>
//           <CardContent className="p-6">
//             <div className="flex justify-between items-center">
//               <div>
//                 <h4 className="text-lg font-semibold mb-2">
//                   {order.firstName} {order.lastName}
//                 </h4>
//                 <p className="text-gray-600">Order ID: {order._id}</p>
//                 <p className="text-gray-600">
//                   Date: {new Date(order.orderDate).toLocaleDateString()}
//                 </p>
//               </div>
//               <div className="text-right">
//                 <p className="text-xl font-bold">${order.total}</p>
//                 <span
//                   className={`inline-block px-2 py-1 text-xs rounded-full ${
//                     order.status === "completed"
//                       ? "bg-green-100 text-green-800"
//                       : "bg-blue-100 text-blue-800"
//                   }`}
//                 >
//                   {order.status}
//                 </span>
//               </div>
//             </div>
//           </CardContent>
//         </Card>
//       ))}
//     </div>
//   );

//   if (!isLoggedIn) {
//     return (
//       <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
//         <Card className="w-full max-w-md">
//           <CardHeader>
//             <CardTitle className="text-2xl text-center">Admin Login</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <form onSubmit={handleLogin} className="space-y-4">
//               {error && (
//                 <div className="p-3 text-sm text-red-500 bg-red-50 rounded-lg">
//                   {error}
//                 </div>
//               )}
//               <div className="space-y-2">
//                 <label className="text-sm font-medium">Username</label>
//                 <input
//                   type="text"
//                   value={username}
//                   onChange={(e) => setUsername(e.target.value)}
//                   className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
//                   required
//                 />
//               </div>
//               <div className="space-y-2">
//                 <label className="text-sm font-medium">Password</label>
//                 <input
//                   type="password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
//                   required
//                 />
//               </div>
//               <button
//                 type="submit"
//                 disabled={loading}
//                 className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200 disabled:opacity-50"
//               >
//                 {loading ? "Logging in..." : "Login"}
//               </button>
//             </form>
//           </CardContent>
//         </Card>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gray-50 flex">
//       {/* Sidebar */}
//       <div className="w-64 bg-white border-r shadow-sm">
//         <div className="p-6">
//           <h1 className="text-xl font-bold">Admin Panel</h1>
//         </div>
//         <nav className="space-y-1 px-3">
//           {[
//             { id: "dashboard", icon: LayoutDashboard, label: "Dashboard" },
//             { id: "inventory", icon: Package, label: "Inventory" },
//             { id: "orders", icon: ShoppingCart, label: "Orders" },
//             { id: "settings", icon: Settings, label: "Settings" },
//           ].map((item) => (
//             <button
//               key={item.id}
//               onClick={() => setActiveTab(item.id)}
//               className={`w-full flex items-center space-x-3 px-4 py-2 rounded-lg transition-colors ${
//                 activeTab === item.id
//                   ? "bg-blue-50 text-blue-600"
//                   : "text-gray-600 hover:bg-gray-50"
//               }`}
//             >
//               <item.icon className="w-5 h-5" />
//               <span>{item.label}</span>
//             </button>
//           ))}
//         </nav>
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 overflow-auto">
//         <header className="bg-white border-b shadow-sm">
//           <div className="flex items-center justify-between px-6 py-4">
//             <h2 className="text-2xl font-semibold">
//               {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
//             </h2>
//             <button
//               onClick={() => setIsLoggedIn(false)}
//               className="flex items-center space-x-2 text-gray-600 hover:text-gray-800"
//             >
//               <LogOut className="w-5 h-5" />
//               <span>Logout</span>
//             </button>
//           </div>
//         </header>

//         <main className="p-6">
//           {activeTab === "dashboard" && <DashboardContent />}
//           {activeTab === "inventory" && <InventoryContent />}
//           {activeTab === "orders" && <OrdersContent />}
//           {activeTab === "settings" && (
//             <Card>
//               <CardContent className="p-6">
//                 <h3 className="text-lg font-medium">
//                   Settings page coming soon...
//                 </h3>
//               </CardContent>
//             </Card>
//           )}
//         </main>
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;



"use client";
import React, { useState, useEffect } from "react";
import { client } from "@/sanity/lib/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  Users,
  Settings,
  LogOut,
} from "lucide-react";
import { Product, Order } from "@/types/types";

const AdminDashboard = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [inventory, setInventory] = useState<Product[]>([]);
  const [orders, setOrders] = useState<Order[]>([]);
  const [error, setError] = useState("");
  const [activeTab, setActiveTab] = useState("dashboard");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setIsLoggedIn(true);
        fetchInventoryAndOrders();
      } else {
        setError(data.message);
      }
    } catch (err) {
      setError("Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const fetchInventoryAndOrders = async () => {
    try {
      const productsQuery = `*[_type == "product"]{
        _id,
        productName,
        category,
        price,
        inventory,
        colors,
        status,
        description,
        image {
          asset,
          "url": asset->url
        }
      }`;

      const ordersQuery = `*[_type == "order"]{
        _id,
        firstName,
        lastName,
        total,
        status,
        orderDate
      }`;

      const [products, ordersData] = await Promise.all([
        client.fetch(productsQuery),
        client.fetch(ordersQuery),
      ]);

      setInventory(products);
      setOrders(ordersData);
    } catch (err) {
      console.error("Error fetching data:", err);
    }
  };

  const DashboardContent = () => {
    const totalRevenue = orders.reduce((sum, order) => sum + order.total, 0);
    const totalProducts = inventory.length;
    const totalOrders = orders.length;

    return (
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total Revenue
              </CardTitle>
              <ShoppingCart className="h-4 w-4 text-gray-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                ${totalRevenue.toFixed(2)}
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Products</CardTitle>
              <Package className="h-4 w-4 text-gray-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalProducts}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total Orders
              </CardTitle>
              <Users className="h-4 w-4 text-gray-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalOrders}</div>
            </CardContent>
          </Card>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Recent Orders</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {orders.slice(0, 5).map((order) => (
                  <div
                    key={order._id}
                    className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 bg-gray-50 rounded-lg"
                  >
                    <div>
                      <p className="font-medium">
                        {order.firstName} {order.lastName}
                      </p>
                      <p className="text-sm text-gray-500">
                        {new Date(order.orderDate).toLocaleDateString()}
                      </p>
                    </div>
                    <div className="text-right mt-2 sm:mt-0">
                      <p className="font-medium">${order.total}</p>
                      <span className="inline-block px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">
                        {order.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Low Stock Products</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {inventory
                  .filter((item) => item.inventory < 10)
                  .slice(0, 5)
                  .map((item) => (
                    <div
                      key={item._id}
                      className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 bg-gray-50 rounded-lg"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 flex-shrink-0">
                          <img
                            src={item.image.url || "/api/placeholder/48/48"}
                            alt={item.productName}
                            className="w-full h-full object-cover rounded-lg"
                          />
                        </div>
                        <div>
                          <p className="font-medium">{item.productName}</p>
                          <p className="text-sm text-gray-500">
                            {item.category}
                          </p>
                        </div>
                      </div>
                      <div className="text-right mt-2 sm:mt-0">
                        <p className="font-medium">${item.price}</p>
                        <p className="text-sm text-red-500">
                          Stock: {item.inventory}
                        </p>
                      </div>
                    </div>
                  ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  };

  const InventoryContent = () => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {inventory.map((item) => (
        <Card key={item._id}>
          <CardContent className="p-6">
            {item.image?.url && (
              <img
                src={item.image.url}
                alt={item.productName}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
            )}
            <h4 className="text-xl font-semibold mb-2">{item.productName}</h4>
            <div className="space-y-2 text-gray-600">
              <p>Category: {item.category}</p>
              <p>Price: ${item.price}</p>
              <p
                className={`font-medium ${
                  item.inventory < 10 ? "text-red-500" : ""
                }`}
              >
                Stock: {item.inventory}
              </p>
              <div className="flex flex-wrap gap-2 my-2">
                {item.colors?.map((color, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 text-xs bg-gray-100 rounded-full"
                  >
                    {color}
                  </span>
                ))}
              </div>
              <p className="text-sm line-clamp-2">{item.description}</p>
              <span
                className={`inline-block px-2 py-1 text-xs rounded-full ${
                  item.status === "success"
                    ? "bg-green-100 text-green-800"
                    : item.status === "dispatch"
                      ? "bg-blue-100 text-blue-800"
                      : "bg-red-100 text-red-800"
                }`}
              >
                {item.status}
              </span>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );

  const OrdersContent = () => (
    <div className="space-y-6">
      {orders.map((order) => (
        <Card key={order._id}>
          <CardContent className="p-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
              <div>
                <h4 className="text-lg font-semibold mb-2">
                  {order.firstName} {order.lastName}
                </h4>
                <p className="text-gray-600">Order ID: {order._id}</p>
                <p className="text-gray-600">
                  Date: {new Date(order.orderDate).toLocaleDateString()}
                </p>
              </div>
              <div className="text-right mt-2 sm:mt-0">
                <p className="text-xl font-bold">${order.total}</p>
                <span
                  className={`inline-block px-2 py-1 text-xs rounded-full ${
                    order.status === "completed"
                      ? "bg-green-100 text-green-800"
                      : "bg-blue-100 text-blue-800"
                  }`}
                >
                  {order.status}
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Admin Login</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              {error && (
                <div className="p-3 text-sm text-red-500 bg-red-50 rounded-lg">
                  {error}
                </div>
              )}
              <div className="space-y-2">
                <label className="text-sm font-medium">Username</label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
                  required
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200 disabled:opacity-50"
              >
                {loading ? "Logging in..." : "Login"}
              </button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row">
      {/* Sidebar */}
      <div className="w-full md:w-64 bg-white border-b md:border-r shadow-sm">
        <div className="p-6">
          <h1 className="text-xl font-bold">Admin Panel</h1>
        </div>
        <nav className="space-y-1 px-3">
          {[
            { id: "dashboard", icon: LayoutDashboard, label: "Dashboard" },
            { id: "inventory", icon: Package, label: "Inventory" },
            { id: "orders", icon: ShoppingCart, label: "Orders" },
            { id: "settings", icon: Settings, label: "Settings" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center space-x-3 px-4 py-2 rounded-lg transition-colors ${
                activeTab === item.id
                  ? "bg-blue-50 text-blue-600"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span>{item.label}</span>
            </button>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <header className="bg-white border-b shadow-sm">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between px-6 py-4">
            <h2 className="text-2xl font-semibold">
              {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
            </h2>
            <button
              onClick={() => setIsLoggedIn(false)}
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 mt-4 md:mt-0"
            >
              <LogOut className="w-5 h-5" />
              <span>Logout</span>
            </button>
          </div>
        </header>

        <main className="p-6">
          {activeTab === "dashboard" && <DashboardContent />}
          {activeTab === "inventory" && <InventoryContent />}
          {activeTab === "orders" && <OrdersContent />}
          {activeTab === "settings" && (
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-medium">
                  Settings page coming soon...
                </h3>
              </CardContent>
            </Card>
          )}
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
