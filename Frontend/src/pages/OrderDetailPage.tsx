import { useParams, useNavigate } from "react-router-dom";
import Layout from "@/components/common/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useApiQuery } from "@/hooks/useFetch";
import OrderService from "@/services/orderService";
import { AlertCircle, Check, Clock, Download } from "lucide-react";
import { getImageUrl } from "@/utils/imageHelpers";

const formatPrice = (price: number) => {
  return new Intl.NumberFormat('si-LK', { 
    style: 'currency', 
    currency: 'LKR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0 
  }).format(price);
};

const OrderDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const { data: order, isLoading, error } = useApiQuery(
    ['order', id],
    () => OrderService.getOrderDetails(id || ''),
    {
      enabled: !!id,
    }
  );
  
  const formatDate = (dateString: string | undefined) => {
    if (!dateString) return 'N/A';
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric', 
      month: 'short', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (isLoading) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <p className="text-gray-500">Loading order details...</p>
          </div>
        </div>
      </Layout>
    );
  }

  if (error || !order) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <h2 className="text-xl font-bold text-red-600 mb-2">Order Not Found</h2>
            <p className="text-gray-500 mb-6">
              We couldn't find the order details you're looking for.
            </p>
            <Button 
              onClick={() => navigate('/orders')} 
              className="bg-ct-blue-500 hover:bg-ct-blue-600"
            >
              Back to Orders
            </Button>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Order #{order._id.slice(-8)}</h1>
          <Button 
            variant="outline" 
            onClick={() => navigate('/orders')}
          >
            Back to Orders
          </Button>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2 space-y-6">
            {/* Order Status */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Order Status</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center">
                  {order.status === 'completed' ? (
                    <div className="flex items-center text-green-600">
                      <Check className="mr-2 h-5 w-5" />
                      <span className="font-medium">Completed</span>
                    </div>
                  ) : order.status === 'processing' ? (
                    <div className="flex items-center text-blue-600">
                      <Clock className="mr-2 h-5 w-5" />
                      <span className="font-medium">Processing</span>
                    </div>
                  ) : (
                    <div className="flex items-center text-yellow-600">
                      <Clock className="mr-2 h-5 w-5" />
                      <span className="font-medium">Pending</span>
                    </div>
                  )}
                </div>
                
                <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-gray-500">Order Date</p>
                    <p className="font-medium">{formatDate(order.createdAt.toString())}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Payment Method</p>
                    <p className="font-medium">{order.paymentMethod}</p>
                  </div>
                  {order.isPaid && (
                    <div>
                      <p className="text-gray-500">Payment Date</p>
                      <p className="font-medium">{formatDate(order.paidAt?.toString())}</p>
                    </div>
                  )}
                  {order.status === 'completed' && (
                    <div>
                      <p className="text-gray-500">Delivery Date</p>
                      <p className="font-medium">{formatDate(order.deliveredAt?.toString())}</p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
            
            {/* Order Items */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Order Items</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="divide-y">
                  {order.orderItems.map((item, idx) => (
                    <div key={idx} className="py-4 flex">
                      <div className="w-16 h-16 bg-gray-100 rounded flex-shrink-0">
                        {item.image && (
                          <img 
                            src={getImageUrl(item.image)}
                            alt={item.name} 
                            className="w-full h-full object-cover rounded"
                          />
                        )}
                      </div>
                      <div className="ml-4 flex-grow">
                        <p className="font-medium">{item.name}</p>
                        <p className="text-sm text-gray-500">
                          {formatPrice(item.price)} x {item.quantity}
                        </p>
                      </div>
                      <div className="ml-4 text-right">
                        <p className="font-medium">{formatPrice(item.price * item.quantity)}</p>
                        
                        {/* Download button for digital products */}
                        {order.status === 'completed' && (
                          <Button 
                            variant="outline" 
                            size="sm" 
                            className="mt-2 text-ct-blue-500 border-ct-blue-500"
                          >
                            <Download className="h-4 w-4 mr-1" />
                            Download
                          </Button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Order Summary */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Order Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span>{formatPrice(order.totalPrice)}</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-gray-600">Taxes</span>
                    <span>Free</span>
                  </div>
                  
                  <div className="border-t pt-2 mt-2 flex justify-between font-semibold">
                    <span>Total</span>
                    <span className="text-ct-blue-600">{formatPrice(order.totalPrice)}</span>
                  </div>
                </div>
                
                {order.status === 'completed' ? (
                  <div className="mt-6 bg-green-50 border border-green-100 rounded-md p-3 flex items-start">
                    <Check className="h-5 w-5 text-green-500 mt-0.5 mr-2" />
                    <div>
                      <p className="font-medium text-green-700">Order Complete</p>
                      <p className="text-sm text-green-600">Your purchase has been completed. You can download the products from the links above.</p>
                    </div>
                  </div>
                ) : (
                  <div className="mt-6 bg-blue-50 border border-blue-100 rounded-md p-3 flex items-start">
                    <AlertCircle className="h-5 w-5 text-blue-500 mt-0.5 mr-2" />
                    <div>
                      <p className="font-medium text-blue-700">Order Processing</p>
                      <p className="text-sm text-blue-600">Your order is being processed. We'll notify you once it's complete.</p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
            
            {/* Need Help */}
            <div className="mt-4">
              <Button 
                variant="outline" 
                className="w-full"
                onClick={() => navigate('/contact', { state: { orderReference: order._id } })}
              >
                Need Help With Your Order?
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default OrderDetailPage;