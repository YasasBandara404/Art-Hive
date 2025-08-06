import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "@/components/common/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useApiQuery } from "@/hooks/useFetch";
import OrderService from "@/services/orderService";
import { getImageUrl } from "@/utils/imageHelpers";

const formatPrice = (price: number) => {
  return new Intl.NumberFormat('si-LK', { 
    style: 'currency', 
    currency: 'LKR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0 
  }).format(price);
};

const OrdersPage = () => {
  const navigate = useNavigate();
  
  const { data: orders, isLoading, error } = useApiQuery(
    ['myOrders'],
    () => OrderService.getMyOrders(),
  );
  
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric', 
      month: 'short', 
      day: 'numeric'
    });
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">My Orders</h1>
        
        {isLoading ? (
          <div className="text-center py-8">
            <p className="text-gray-500">Loading your orders...</p>
          </div>
        ) : error ? (
          <div className="text-center py-8">
            <p className="text-red-500 mb-4">There was an error loading your orders.</p>
            <Button onClick={() => window.location.reload()} className="bg-ct-blue-500 hover:bg-ct-blue-600">
              Try Again
            </Button>
          </div>
        ) : !orders || orders.length === 0 ? (
          <Card>
            <CardContent className="text-center py-12">
              <p className="text-gray-500 mb-4">You haven't placed any orders yet.</p>
              <Button 
                onClick={() => navigate('/products')} 
                className="bg-ct-blue-500 hover:bg-ct-blue-600"
              >
                Browse Products
              </Button>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-4">
            {orders.map((order) => (
              <Card key={order._id} className="overflow-hidden">
                <CardHeader className="bg-gray-50 p-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm text-gray-500">Order ID</p>
                      <p className="font-medium">#{order._id.slice(-8)}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Date</p>
                      <p className="font-medium">{formatDate(order.createdAt)}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Total</p>
                      <p className="font-medium">{formatPrice(order.totalPrice)}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Status</p>
                      <p className={`font-medium ${
                        order.status === 'completed' 
                          ? 'text-green-600' 
                          : order.status === 'processing' 
                          ? 'text-blue-600'
                          : 'text-yellow-600'
                      }`}>
                        {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-4">
                  <div className="flex flex-wrap gap-4">
                    {order.orderItems.map((item, idx) => (
                      <div key={idx} className="flex items-center">
                        <div className="w-12 h-12 bg-gray-100 rounded flex-shrink-0 mr-3">
                          {/* If image is available */}
                          {item.image && (
                            <img 
                              src={getImageUrl(item.image)}
                              alt={item.name} 
                              className="w-full h-full object-cover rounded"
                            />
                          )}
                        </div>
                        <div>
                          <p className="font-medium">{item.name}</p>
                          <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 flex justify-end">
                    <Button 
                      onClick={() => navigate(`/orders/${order._id}`)}
                      className="bg-ct-blue-500 hover:bg-ct-blue-600"
                    >
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
};

export default OrdersPage;