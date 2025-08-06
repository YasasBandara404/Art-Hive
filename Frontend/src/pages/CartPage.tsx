import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "@/components/common/Layout";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Trash2, Plus, Minus } from "lucide-react";
import { useApiQuery, useApiMutation } from "@/hooks/useFetch";
import CartService from "@/services/cartService";
import { Link } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";
import { useAuth } from "@/contexts/AuthContext";
import { useCart } from "@/contexts/CartContext";
import { getImageUrl } from "@/utils/imageHelpers";

const formatPrice = (price: number) => {
  return new Intl.NumberFormat("si-LK", {
    style: "currency",
    currency: "LKR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
};

const CartPage = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const { refreshCart } = useCart();

  // Redirect to login if not authenticated
  if (!isAuthenticated) {
    navigate("/auth");
    return null;
  }

  const [isProcessing, setIsProcessing] = useState(false);

  const {
    data: cart,
    isLoading,
    error,
    refetch,
  } = useApiQuery(["cart"], () => CartService.getCart(), {
    enabled: isAuthenticated,
  });

  const updateCartItemMutation = useApiMutation(
    ({ productId, quantity }: { productId: string; quantity: number }) =>
      CartService.updateCartItem(productId, quantity),
    {
      onSuccess: () => {
        refetch();
        refreshCart();
      },
      onError: (error) => {
        toast({
          title: "Failed to update cart",
          description: "There was an error updating your cart item",
          variant: "destructive",
        });
      },
    }
  );

  const removeFromCartMutation = useApiMutation(
    (productId: string) => CartService.removeFromCart(productId),
    {
      onSuccess: () => {
        refetch();
        refreshCart();
        toast({
          title: "Item removed",
          description: "The item has been removed from your cart",
        });
      },
      onError: (error) => {
        toast({
          title: "Failed to remove item",
          description: "There was an error removing the item from your cart",
          variant: "destructive",
        });
      },
    }
  );

  const clearCartMutation = useApiMutation(() => CartService.clearCart(), {
    onSuccess: () => {
      refetch();
      refreshCart();
      toast({
        title: "Cart cleared",
        description: "All items have been removed from your cart",
      });
    },
  });

  const handleQuantityChange = (productId: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    updateCartItemMutation.mutate({ productId, quantity: newQuantity });
  };

  const handleRemoveItem = (productId: string) => {
    removeFromCartMutation.mutate(productId);
  };

  const handleClearCart = () => {
    clearCartMutation.mutate();
  };

  const handleCheckout = () => {
    setIsProcessing(true);
    setTimeout(() => {
      navigate("/checkout");
    }, 500);
  };

  if (isLoading) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-2xl font-bold mb-6 dark:text-white">Your Cart</h1>
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400">Loading your cart...</p>
          </div>
        </div>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-2xl font-bold mb-6 dark:text-white">Your Cart</h1>
          <div className="text-center py-12">
            <p className="text-red-500 dark:text-red-400 mb-4">Error loading your cart</p>
            <Button
              onClick={() => refetch()}
              className="bg-ct-blue-500 hover:bg-ct-blue-600"
            >
              Try Again
            </Button>
          </div>
        </div>
      </Layout>
    );
  }

  const hasItems = cart && cart.items && cart.items.length > 0;

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6 dark:text-white">Your Cart</h1>

        {!hasItems ? (
          <div className="text-center py-12 bg-white dark:bg-gray-800 rounded-lg border dark:border-gray-700 shadow-sm">
            <ShoppingCart className="mx-auto h-12 w-12 text-gray-400 dark:text-gray-500 mb-4" />
            <h2 className="text-xl font-bold mb-2 dark:text-white">
              Your cart is empty
            </h2>
            <p className="text-gray-500 dark:text-gray-400 mb-6">
              Looks like you haven't added any products to your cart yet.
            </p>
            <Button asChild className="bg-ct-blue-500 hover:bg-ct-blue-600">
              <Link to="/">Start Shopping</Link>
            </Button>
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <div className="bg-white dark:bg-gray-800 rounded-lg border dark:border-gray-700 shadow-sm divide-y dark:divide-gray-700">
                {cart.items.map((item) => (
                  <div key={item.product._id} className="p-4 flex items-center">
                    <div className="w-20 h-20 flex-shrink-0 rounded overflow-hidden bg-gray-100 dark:bg-gray-700">
                      <img
                        src={getImageUrl(item.product.images && item.product.images[0])}
                        alt={item.product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="ml-4 flex-grow">
                      <Link
                        to={`/product/${item.product.slug}`}
                        className="font-semibold hover:text-ct-blue-500 dark:text-white dark:hover:text-ct-blue-400 transition-colors"
                      >
                        {item.product.name}
                      </Link>
                      <p className="text-ct-blue-600 dark:text-ct-blue-400 font-medium">
                        {formatPrice(item.product.price)}
                      </p>
                    </div>

                    <div className="flex items-center ml-4">
                      <button
                        onClick={() => handleQuantityChange(item.product._id, item.quantity - 1)}
                        className="p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-gray-300"
                        disabled={item.quantity <= 1}
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="w-8 text-center dark:text-gray-300">{item.quantity}</span>
                      <button
                        onClick={() => handleQuantityChange(item.product._id, item.quantity + 1)}
                        className="p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-gray-300"
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>

                    <div className="ml-4 text-right">
                      <p className="font-semibold dark:text-white">
                        {formatPrice(item.product.price * item.quantity)}
                      </p>
                    </div>

                    <button
                      onClick={() => handleRemoveItem(item.product._id)}
                      className="ml-4 p-1 text-red-500 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-900/20 rounded"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                ))}

                <div className="p-4 flex justify-end">
                  <Button
                    variant="outline"
                    onClick={handleClearCart}
                    disabled={clearCartMutation.isLoading}
                    className="dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 dark:border-gray-600"
                  >
                    Clear Cart
                  </Button>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-white dark:bg-gray-800 rounded-lg border dark:border-gray-700 shadow-sm p-6">
                <h3 className="text-lg font-semibold mb-4 dark:text-white">Order Summary</h3>

                <div className="space-y-2 mb-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Subtotal</span>
                    <span className="dark:text-white">{formatPrice(cart.totalPrice)}</span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Taxes</span>
                    <span className="dark:text-white">Free</span>
                  </div>

                  <div className="border-t dark:border-gray-700 pt-2 mt-2 flex justify-between font-semibold">
                    <span className="dark:text-white">Total</span>
                    <span className="text-ct-blue-600 dark:text-ct-blue-400">
                      {formatPrice(cart.totalPrice)}
                    </span>
                  </div>
                </div>

                <Button
                  onClick={handleCheckout}
                  className="w-full bg-ct-blue-500 hover:bg-ct-blue-600"
                  disabled={isProcessing}
                >
                  {isProcessing ? "Processing..." : "Proceed to Checkout"}
                </Button>

                <p className="mt-4 text-xs text-gray-500 dark:text-gray-400 text-center">
                  By proceeding, you agree to our Terms of Service and Privacy Policy
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default CartPage;
