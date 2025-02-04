
"use client";
import React, { useState } from "react";
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
