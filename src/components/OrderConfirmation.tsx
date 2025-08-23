import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { CheckCircle, Package, Truck, Clock } from 'lucide-react';

const OrderConfirmation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const orderDetails = location.state?.orderDetails;

  if (!orderDetails) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">No order found</h2>
          <button
            onClick={() => navigate('/home')}
            className="bg-rose-500 text-white px-6 py-2 rounded-lg hover:bg-rose-600 transition-colors"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Success Header */}
        <div className="text-center mb-8">
          <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Order Confirmed!</h1>
          <p className="text-gray-600">Thank you for your purchase. We're processing your order.</p>
        </div>

        {/* Order Details Card */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="border-b pb-4 mb-4">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Order Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-gray-600">Order ID:</span>
                <span className="font-mono font-medium ml-2">{orderDetails.orderId}</span>
              </div>
              <div>
                <span className="text-gray-600">Order Date:</span>
                <span className="ml-2">{new Date().toLocaleDateString()}</span>
              </div>
              <div>
                <span className="text-gray-600">Total Amount:</span>
                <span className="font-bold text-rose-600 ml-2">₹{orderDetails.total + Math.round(orderDetails.total * 0.05)}</span>
              </div>
              <div>
                <span className="text-gray-600">Payment Status:</span>
                <span className="text-green-600 font-medium ml-2">Confirmed</span>
              </div>
            </div>
          </div>

          {/* Order Progress */}
          <div className="mb-6">
            <h3 className="font-semibold text-gray-800 mb-4">Order Status</h3>
            <div className="flex items-center space-x-8">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white">
                  <CheckCircle className="w-5 h-5" />
                </div>
                <span className="text-sm text-green-600 font-medium mt-2">Confirmed</span>
              </div>
              <div className="flex-1 h-0.5 bg-gray-300"></div>
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center text-white">
                  <Package className="w-5 h-5" />
                </div>
                <span className="text-sm text-yellow-600 font-medium mt-2">Processing</span>
              </div>
              <div className="flex-1 h-0.5 bg-gray-300"></div>
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-white">
                  <Truck className="w-5 h-5" />
                </div>
                <span className="text-sm text-gray-500 mt-2">Shipped</span>
              </div>
              <div className="flex-1 h-0.5 bg-gray-300"></div>
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-white">
                  <Clock className="w-5 h-5" />
                </div>
                <span className="text-sm text-gray-500 mt-2">Delivered</span>
              </div>
            </div>
          </div>

          {/* Estimated Delivery */}
          <div className="bg-blue-50 p-4 rounded-lg mb-4">
            <div className="flex items-center">
              <Truck className="w-5 h-5 text-blue-600 mr-2" />
              <div>
                <p className="font-medium text-blue-800">Estimated Delivery</p>
                <p className="text-sm text-blue-600">
                  {new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toLocaleDateString()} - 
                  {new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toLocaleDateString()}
                </p>
              </div>
            </div>
          </div>

          {/* Shipping Address */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-2">Shipping Address</h3>
            <div className="bg-gray-50 p-3 rounded-lg text-sm">
              <p className="font-medium">{orderDetails.shippingAddress.firstName} {orderDetails.shippingAddress.lastName}</p>
              <p>{orderDetails.shippingAddress.address}</p>
              <p>{orderDetails.shippingAddress.city}, {orderDetails.shippingAddress.state} {orderDetails.shippingAddress.pincode}</p>
              <p>Phone: {orderDetails.shippingAddress.phone}</p>
            </div>
          </div>
        </div>

        {/* Order Items */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h3 className="font-semibold text-gray-800 mb-4">Items Ordered</h3>
          <div className="space-y-4">
            {orderDetails.items.map((item: any) => (
              <div key={item.id} className="flex items-center space-x-4 pb-4 border-b border-gray-100 last:border-b-0">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded-md"
                />
                <div className="flex-1">
                  <h4 className="font-medium text-gray-800 text-sm line-clamp-2">{item.name}</h4>
                  <p className="text-gray-600 text-sm">Quantity: {item.quantity}</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-rose-600">₹{item.price * item.quantity}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => navigate('/home')}
            className="px-8 py-3 bg-rose-500 text-white rounded-lg font-medium hover:bg-rose-600 transition-colors"
          >
            Continue Shopping
          </button>
          <button
            onClick={() => window.print()}
            className="px-8 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors"
          >
            Print Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;