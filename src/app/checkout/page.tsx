"use client";
import { Product } from "@/types/types";
import React, { useEffect, useState } from "react";
import { getCartItems } from "../CartFunction/function";
import { toast } from "sonner";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { client } from "@/sanity/lib/client";
import { useRouter } from "next/navigation"; // for redirection

const CheckoutPage = () => {
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [cartDiscount, setCartDiscount] = useState<number>(0);

  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postal: "",
  });

  const [formErrors, setFormErrors] = useState({
    firstName: false,
    lastName: false,
    email: false,
    phone: false,
    address: false,
    city: false,
    postal: false,
  });

  const router = useRouter(); // Use router for redirection

  useEffect(() => {
    setCartItems(getCartItems());
    const discount = localStorage.getItem("discount");
    if (discount) {
      setCartDiscount(Number(discount));
    }
  }, []);

  const subTotal = cartItems.reduce(
    (total, item) => total + item.price * item.inventory,
    0,
  );

  const total = subTotal - cartDiscount;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({
      ...formValues,
      [e.target.id]: e.target.value,
    });
  };

  const validateForm = () => {
    const errors = {
      firstName: !formValues.firstName,
      lastName: !formValues.lastName,
      email: !formValues.email.includes("@"),
      phone: !formValues.phone,
      address: !formValues.address,
      city: !formValues.city,
      postal: !formValues.postal,
    };
    setFormErrors(errors);
    return Object.values(errors).every((error) => !error);
  };

  const getDeliveryDate = () => {
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + 20);
    return currentDate.toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
    });
  };

  const handleSubmit = async () => {
    if (!validateForm()) {
      toast.error("Please fill in all required fields correctly");
      return;
    }

    const orderData = {
      _type: "order",
      firstName: formValues.firstName,
      lastName: formValues.lastName,
      email: formValues.email,
      phone: formValues.phone,
      address: formValues.address,
      city: formValues.city,
      postal: formValues.postal,
      cartItems: cartItems.map((item) => ({
        _type: "reference",
        _ref: item._id,
      })),
      total: total,
      discount: cartDiscount,
      orderDate: new Date().toISOString(),
    };

    try {
      await client.create(orderData);
      localStorage.removeItem("discount");
      // Clear the cart from local storage (if applicable)
      localStorage.removeItem("cartItems");
      // Reset form values
      setFormValues({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        postal: "",
      });
      // Redirect to order confirmation page
      router.push("/order-confirmation"); // Adjust the path as needed
      toast.success("Order placed successfully!");
    } catch (error) {
      console.error("Error placing order: ", error);
      toast.error("Failed to place order");
    }
  };

  return (
    <div className="flex flex-col lg:flex-row gap-8 p-6 max-w-6xl mx-auto">
      <div className="flex-1">
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 font-medium">First Name</label>
              <input
                id="firstName"
                type="text"
                className={`w-full p-2 border rounded-lg ${formErrors.firstName ? "border-red-500" : ""}`}
                value={formValues.firstName}
                onChange={handleInputChange}
              />
              {formErrors.firstName && (
                <p className="text-red-500 text-sm mt-1">
                  Please enter your first name.
                </p>
              )}
            </div>
            <div>
              <label className="block mb-1 font-medium">Last Name</label>
              <input
                id="lastName"
                type="text"
                className={`w-full p-2 border rounded-lg ${formErrors.lastName ? "border-red-500" : ""}`}
                value={formValues.lastName}
                onChange={handleInputChange}
              />
              {formErrors.lastName && (
                <p className="text-red-500 text-sm mt-1">
                  Please enter your last name.
                </p>
              )}
            </div>
          </div>

          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input
              id="email"
              type="email"
              className={`w-full p-2 border rounded-lg ${formErrors.email ? "border-red-500" : ""}`}
              value={formValues.email}
              onChange={handleInputChange}
            />
            {formErrors.email && (
              <p className="text-red-500 text-sm mt-1">
                Please enter a valid email address.
              </p>
            )}
          </div>

          <div>
            <label className="block mb-1 font-medium">Address</label>
            <input
              id="address"
              className={`w-full p-2 border rounded-lg ${formErrors.address ? "border-red-500" : ""}`}
              type="text"
              value={formValues.address}
              onChange={handleInputChange}
            />
            {formErrors.address && (
              <p className="text-red-500 text-sm mt-1">
                Please complete address selection or enter an address manually.
              </p>
            )}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 font-medium">City</label>
              <input
                id="city"
                className={`w-full p-2 border rounded-lg ${formErrors.city ? "border-red-500" : ""}`}
                value={formValues.city}
                onChange={handleInputChange}
                type="text"
              />
              {formErrors.city && (
                <p className="text-red-500 text-sm mt-1">
                  This field is required.
                </p>
              )}
            </div>
            <div>
              <label className="block mb-1 font-medium">Postal Code</label>
              <input
                id="postal"
                className={`w-full p-2 border rounded-lg ${formErrors.postal ? "border-red-500" : ""}`}
                value={formValues.postal}
                onChange={handleInputChange}
                type="tel"
              />
              {formErrors.postal && (
                <p className="text-red-500 text-sm mt-1">
                  Please enter your postal code.
                </p>
              )}
            </div>
          </div>

          <div>
            <label className="block mb-1 font-medium">Phone Number</label>
            <input
              id="phone"
              type="tel"
              className={`w-full p-2 border rounded-lg ${formErrors.phone ? "border-red-500" : ""}`}
              value={formValues.phone}
              onChange={handleInputChange}
            />
            {formErrors.phone && (
              <p className="text-red-500 text-sm mt-1">
                This field is required
              </p>
            )}
          </div>

          <button
            onClick={handleSubmit}
            className="w-full bg-black text-white py-3 rounded hover:bg-gray-800 mt-4"
          >
            Place Order
          </button>
        </div>
      </div>

      <div className="flex-1 max-w-md">
        <h2 className="text-2xl font-bold mb-4">In Your Bag</h2>
        <div className="border rounded-lg p-4">
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div
                key={item._id}
                className="border-b pb-4 flex flex-row items-start"
              >
                <Image
                  src={
                    item.image ? urlFor(item.image).url() : "/placeholder.jpg"
                  }
                  alt={item.productName}
                  className="object-cover w-16 h-16 mr-4"
                  width={64}
                  height={64}
                  priority
                />
                <div className="flex flex-col">
                  <span className="font-medium">{item.productName}</span>
                  <span className="text-sm text-gray-600">
                    Color: {item.colors}
                  </span>
                  <span className="text-sm text-gray-600">
                    Qty: {item.inventory} @ € {item.price.toFixed(2)}
                  </span>
                  <span className="text-sm text-gray-600">
                    € {(item.price * item.inventory).toFixed(2)}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 space-y-2">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>€ {subTotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Estimated Shipping</span>
              <span>€ 0.00</span>
            </div>
            <div className="flex justify-between">
              <span>Estimated Tax</span>
              <span>€ 0.00</span>
            </div>
            <div className="flex justify-between font-bold text-lg">
              <span>Total</span>
              <span>€ {total.toFixed(2)}</span>
            </div>
          </div>

          <div className="mt-4 text-sm text-gray-600">
            <p>Arrives by {getDeliveryDate()}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;


