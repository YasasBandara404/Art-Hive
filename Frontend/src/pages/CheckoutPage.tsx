import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "@/components/common/Layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useApiQuery, useApiMutation } from "@/hooks/useFetch";
import CartService from "@/services/cartService";
import OrderService from "@/services/orderService";
import { useToast } from "@/components/ui/use-toast";
import { useAuth } from "@/contexts/AuthContext";
import { CreditCard, Wallet } from "lucide-react";

const formatPrice = (price: number) => {
  return new Intl.NumberFormat('si-LK', { 
    style: 'currency', 
    currency: 'LKR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0 
  }).format(price);
};

const CheckoutPage = () => {
  const { isAuthenticated, user } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [paymentMethod, setPaymentMethod] = useState("credit_card");
  const [isPlacingOrder, setIsPlacingOrder] = useState(false);
  
  // Redirect to login if not authenticated
  if (!isAuthenticated) {
    navigate('/auth');
    return null;
  }
  
  // Get cart contents
  const { 
    data: cart, 
    isLoading: cartLoading, 
    error: cartError 
  } = useApiQuery(
    ['cart'],
    () => CartService.getCart(),
    {
      enabled: isAuthenticated,
    }
  );
  
  // Create order mutation
  const createOrderMutation = useApiMutation(
    (method: string) => OrderService.createOrder(method),
    {
      onSuccess: (data) => {
        toast({
          title: 'Order placed successfully',
          description: 'Thank you for your purchase!',
        });
        navigate(`/orders/${data._id}`);
      },
      onError: (error) => {
        toast({
          title: 'Failed to place order',
          description: 'Please try again later',
          variant: 'destructive',
        });
        setIsPlacingOrder(false);
      }
    }
  );
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsPlacingOrder(true);
    
    try {
      createOrderMutation.mutate(paymentMethod);
    } catch (error) {
      setIsPlacingOrder(false);
    }
  };
  
  if (cartLoading) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-2xl font-bold mb-6">Checkout</h1>
          <div className="text-center py-12">
            <p className="text-gray-500">Loading...</p>
          </div>
        </div>
      </Layout>
    );
  }
  
  if (cartError || !cart || !cart.items || cart.items.length === 0) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-2xl font-bold mb-6">Checkout</h1>
          <div className="text-center py-12">
            <p className="text-gray-500 mb-4">Your cart is empty or there was an error loading your cart.</p>
            <Button 
              onClick={() => navigate('/cart')} 
              className="bg-ct-blue-500 hover:bg-ct-blue-600"
            >
              Return to Cart
            </Button>
          </div>
        </div>
      </Layout>
    );
  }
  
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">Checkout</h1>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-6">
            <Card className="p-6">
              <h2 className="text-lg font-semibold mb-4">Billing Information</h2>
              
              <div className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      defaultValue={user?.name || ""}
                      className="w-full h-10 px-3 rounded-md border border-input focus:outline-none focus:ring-2 focus:ring-ct-blue-500"
                      disabled={isPlacingOrder}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      defaultValue={user?.email || ""}
                      className="w-full h-10 px-3 rounded-md border border-input focus:outline-none focus:ring-2 focus:ring-ct-blue-500"
                      disabled={isPlacingOrder}
                    />
                  </div>
                </div>
                
                <p className="text-sm text-gray-500 italic">
                  Note: For digital products, we don't need shipping information.
                </p>
              </div>
            </Card>
            
            <Card className="p-6">
              <h2 className="text-lg font-semibold mb-4">Payment Method</h2>
              
              <form onSubmit={handleSubmit}>
                <RadioGroup 
                  value={paymentMethod} 
                  onValueChange={setPaymentMethod}
                  className="space-y-4 mb-6"
                  disabled={isPlacingOrder}
                >
                  <div className="flex items-center space-x-2 border rounded-md p-4">
                    <RadioGroupItem value="credit_card" id="credit_card" />
                    <label htmlFor="credit_card" className="flex items-center cursor-pointer flex-1">
                      <CreditCard className="h-5 w-5 text-gray-500 mr-2" />
                      <div>
                        <span className="font-medium">Credit/Debit Card</span>
                        <p className="text-xs text-gray-500">Pay securely using your card</p>
                      </div>
                    </label>
                  </div>
                  
                  <div className="flex items-center space-x-2 border rounded-md p-4">
                    <RadioGroupItem value="paypal" id="paypal" />
                    <label htmlFor="paypal" className="flex items-center cursor-pointer flex-1">
                      <Wallet className="h-5 w-5 text-gray-500 mr-2" />
                      <div>
                        <span className="font-medium">PayPal</span>
                        <p className="text-xs text-gray-500">Pay using your PayPal account</p>
                      </div>
                    </label>
                  </div>
                </RadioGroup>
                
                {paymentMethod === 'credit_card' && (
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700 mb-1">
                        Card Number
                      </label>
                      <input
                        id="cardNumber"
                        type="text"
                        placeholder="•••• •••• •••• ••••"
                        className="w-full h-10 px-3 rounded-md border border-input focus:outline-none focus:ring-2 focus:ring-ct-blue-500"
                        disabled={isPlacingOrder}
                      />
                    </div>
                    
                    <div className="grid grid-cols-3 gap-4">
                      <div className="col-span-2">
                        <label htmlFor="expiry" className="block text-sm font-medium text-gray-700 mb-1">
                          Expiry Date
                        </label>
                        <input
                          id="expiry"
                          type="text"
                          placeholder="MM/YY"
                          className="w-full h-10 px-3 rounded-md border border-input focus:outline-none focus:ring-2 focus:ring-ct-blue-500"
                          disabled={isPlacingOrder}
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="cvc" className="block text-sm font-medium text-gray-700 mb-1">
                          CVC
                        </label>
                        <input
                          id="cvc"
                          type="text"
                          placeholder="•••"
                          className="w-full h-10 px-3 rounded-md border border-input focus:outline-none focus:ring-2 focus:ring-ct-blue-500"
                          disabled={isPlacingOrder}
                        />
                      </div>
                    </div>
                  </div>
                )}
                
                <Button 
                  type="submit"
                  className="w-full mt-6 bg-ct-blue-500 hover:bg-ct-blue-600"
                  disabled={isPlacingOrder}
                >
                  {isPlacingOrder ? "Processing..." : `Pay ${formatPrice(cart.totalPrice)}`}
                </Button>
              </form>
            </Card>
          </div>
          
          <div>
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
              
              <div className="divide-y">
                {cart.items.map((item) => (
                  <div key={item.product._id} className="py-3 flex justify-between">
                    <div>
                      <p className="font-medium">{item.product.name}</p>
                      <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                    </div>
                    <span className="font-medium">{formatPrice(item.product.price * item.quantity)}</span>
                  </div>
                ))}
              </div>
              
              <div className="border-t mt-4 pt-4 space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span>{formatPrice(cart.totalPrice)}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-600">Taxes</span>
                  <span>Free</span>
                </div>
                
                <div className="border-t pt-2 mt-2 flex justify-between font-semibold">
                  <span>Total</span>
                  <span className="text-ct-blue-600">{formatPrice(cart.totalPrice)}</span>
                </div>
              </div>
              
              <p className="mt-6 text-xs text-gray-500">
                By proceeding with your payment, you confirm that you have read and agree to our Terms of Service and Privacy Policy.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CheckoutPage;