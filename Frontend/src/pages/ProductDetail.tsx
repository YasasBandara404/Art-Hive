import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Layout from "@/components/common/Layout";
import { Button } from "@/components/ui/button";
import { Heart, ShoppingCart, Share2, AlertCircle, CheckCircle } from "lucide-react";
import { useApiQuery, useApiMutation } from "@/hooks/useFetch";
import ProductService from "@/services/productService";
import CartService from "@/services/cartService";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/components/ui/use-toast";
import { useCart } from "@/contexts/CartContext";
import { getImageUrl } from "@/utils/imageHelpers";

const formatPrice = (price: number) => {
  return new Intl.NumberFormat('si-LK', { 
    style: 'currency', 
    currency: 'LKR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0 
  }).format(price);
};

const ProductDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedTab, setSelectedTab] = useState<'description' | 'reviews' | 'related'>('description');
  const { isAuthenticated } = useAuth();
  const { toast } = useToast();
  const { refreshCart } = useCart();
  
  // Fetch product data with better error handling
  const { 
    data: product, 
    isLoading, 
    error,
    refetch 
  } = useApiQuery(
    ['product', slug],
    () => ProductService.getProductBySlug(slug || ''),
    {
      enabled: !!slug,
      retry: 2,
      onError: (err) => {
        console.error("Error fetching product:", err);
      }
    }
  );
  
  // Related products
  const { data: relatedProducts } = useApiQuery(
    ['products', { category: product?.category?.slug }],
    () => ProductService.getAllProducts({ category: product?.category?.slug }),
    {
      enabled: !!product?.category?.slug,
      onError: (err) => {
        console.error("Error fetching related products:", err);
      }
    }
  );

  // Handle add to cart
  const addToCartMutation = useApiMutation(
    ({ productId, quantity }: { productId: string; quantity: number }) => 
      CartService.addToCart(productId, quantity),
    {
      onSuccess: () => {
        refreshCart(); // This will trigger the cart to update
        toast({
          title: "Added to cart",
          description: "Product has been added to your cart",
        });
      },
      onError: (err) => {
        console.error("Error adding to cart:", err);
        toast({
          title: "Failed to add product",
          description: "There was an error adding this product to your cart",
          variant: "destructive",
        });
      }
    }
  );
  
  const handleAddToCart = () => {
    if (!isAuthenticated) {
      toast({
        title: "Authentication required",
        description: "Please log in to add items to your cart",
        variant: "destructive",
      });
      return;
    }

    if (product) {
      addToCartMutation.mutate({ productId: product._id, quantity: 1 });
    }
  };
  
  // Handle buy now
  const handleBuyNow = () => {
    if (!isAuthenticated) {
      toast({
        title: "Authentication required",
        description: "Please log in to purchase items",
        variant: "destructive",
      });
      return;
    }

    if (product) {
      addToCartMutation.mutate({ 
        productId: product._id, 
        quantity: 1 
      }, {
        onSuccess: () => {
          navigate('/checkout');
        }
      });
    }
  };
  
  if (isLoading) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-12">
          <div className="text-center">
            <p className="text-gray-600">Loading product...</p>
          </div>
        </div>
      </Layout>
    );
  }
  
  if (error || !product) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-12">
          <div className="bg-red-50 border border-red-200 rounded-md p-6 text-center">
            <AlertCircle className="mx-auto h-12 w-12 text-red-400 mb-4" />
            <h2 className="text-xl font-bold text-red-700 mb-2">Product Not Found</h2>
            <p className="text-red-600 mb-4">The product you're looking for doesn't exist or has been removed.</p>
            <div className="space-x-4">
              <Button 
                onClick={() => refetch()} 
                variant="outline" 
                className="mr-2"
              >
                Try Again
              </Button>
              <Button asChild className="bg-ct-blue-500 hover:bg-ct-blue-600">
                <Link to="/products">Browse Products</Link>
              </Button>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="mb-6 text-sm">
          <Link to="/" className="text-gray-500 dark:text-gray-400 hover:text-ct-blue-500 dark:hover:text-ct-blue-400">Home</Link>
          <span className="mx-2 text-gray-400 dark:text-gray-500">/</span>
          <Link to="/products" className="text-gray-500 dark:text-gray-400 hover:text-ct-blue-500 dark:hover:text-ct-blue-400">Products</Link>
          <span className="mx-2 text-gray-400 dark:text-gray-500">/</span>
          <Link to={`/category/${product.category.slug}`} className="text-gray-500 dark:text-gray-400 hover:text-ct-blue-500 dark:hover:text-ct-blue-400">
            {product.category.name}
          </Link>
          <span className="mx-2 text-gray-400 dark:text-gray-500">/</span>
          <span className="text-gray-700 dark:text-gray-300">{product.name}</span>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Product Images */}
          <div>
            <div className="border dark:border-gray-700 rounded-lg overflow-hidden mb-4 bg-white dark:bg-gray-800 relative group">
              <img 
                src={getImageUrl(product.images && product.images[selectedImage])} 
                alt={product.name} 
                className="w-full aspect-square object-cover"
              />
              <div className="absolute top-4 right-4 flex space-x-2">
                <Button variant="outline" size="icon" className="rounded-full bg-white dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600">
                  <Heart className="h-4 w-4 dark:text-gray-300" />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full bg-white dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600">
                  <Share2 className="h-4 w-4 dark:text-gray-300" />
                </Button>
              </div>
            </div>
            
            {product.images.length > 1 && (
              <div className="grid grid-cols-5 gap-2 mt-4">
                {product.images.map((image, index) => (
                  <div 
                    key={index} 
                    className={`border rounded-md overflow-hidden cursor-pointer hover:border-ct-blue-500 ${
                      selectedImage === index ? 'border-ct-blue-500' : 'border-gray-200 dark:border-gray-700'
                    }`}
                    onClick={() => setSelectedImage(index)}
                  >
                    <img 
                      src={getImageUrl(image)} 
                      alt={`${product.name} thumbnail ${index + 1}`} 
                      className="w-full aspect-square object-cover"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
          
          {/* Product Info */}
          <div>
            <div className="mb-6">
              <div className="flex items-center mb-2">
                <span className="inline-block px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 rounded-full dark:text-gray-300">
                  {product.category.name}
                </span>
              </div>
              <h1 className="text-2xl md:text-3xl font-bold mb-3 dark:text-white">{product.name}</h1>
              <div className="flex items-center mb-4">
                <div className="flex items-center text-amber-400 mr-2">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-4 h-4 ${i < Math.floor(product.rating) ? "fill-current" : "stroke-current fill-none"}`}
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                      />
                    </svg>
                  ))}
                </div>
                <span className="text-gray-600 text-sm">
                  {product.rating?.toFixed(1) || "0.0"} ({product.numReviews || 0} reviews)
                </span>
              </div>
              <div className="text-2xl font-bold text-ct-blue-600 dark:text-ct-blue-400 mb-4">
                {formatPrice(product.price)}
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-6">{product.description}</p>
              
              <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mb-8">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                <span>Digital download • Instant delivery</span>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button 
                  className="bg-ct-blue-500 hover:bg-ct-blue-600 flex-1"
                  onClick={handleAddToCart}
                  disabled={addToCartMutation.isLoading || product.stock <= 0}
                >
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  Add to Cart
                </Button>
                <Button 
                  variant="outline" 
                  className="flex-1"
                  onClick={handleBuyNow}
                  disabled={addToCartMutation.isLoading || product.stock <= 0}
                >
                  Buy Now
                </Button>
              </div>
              
              <div className="border-t border-b py-4">
                {product.stock > 0 ? (
                  <div className="flex items-center text-green-600">
                    <CheckCircle className="h-4 w-4 mr-2" />
                    <span>In Stock ({product.stock} available)</span>
                  </div>
                ) : (
                  <div className="flex items-center text-red-600">
                    <AlertCircle className="h-4 w-4 mr-2" />
                    <span>Out of Stock</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        
        {/* Product tabs */}
        <div className="mt-12">
          <div className="border-b dark:border-gray-700 mb-6">
            <div className="flex -mb-px">
              {['description', 'reviews', 'related'].map((tab) => (
                <button
                  key={tab}
                  className={`py-3 px-4 font-medium border-b-2 ${
                    selectedTab === tab as any
                      ? 'border-ct-blue-500 text-ct-blue-500 dark:text-ct-blue-400' 
                      : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
                  }`}
                  onClick={() => setSelectedTab(tab as any)}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
          </div>
          
          {selectedTab === 'description' && (
            <div className="prose dark:prose-invert max-w-none">
              <p className="mb-4 dark:text-gray-300">
                {product.description}
              </p>
              <p className="mb-4 dark:text-gray-300">
                This is a digital product, which means after purchase you'll receive immediate access to download the files.
                No physical items will be shipped to you.
              </p>
              <h3 className="text-xl font-semibold mb-3 dark:text-white">Features</h3>
              <ul className="list-disc pl-5 mb-4 dark:text-gray-300">
                <li>High-quality digital content</li>
                <li>Instant download after purchase</li>
                <li>Created by professional designers</li>
                <li>Regular updates included</li>
              </ul>
            </div>
          )}
          
          {selectedTab === 'reviews' && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold dark:text-white">Customer Reviews</h3>
                <Button variant="outline" className="dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-600">Write a Review</Button>
              </div>
              
              {product.reviews && product.reviews.length > 0 ? (
                <div className="space-y-6">
                  {product.reviews.map((review, i) => (
                    <div key={i} className="border-b dark:border-gray-700 pb-6">
                      <div className="flex justify-between mb-2">
                        <div className="flex items-center">
                          <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 mr-3 flex items-center justify-center dark:text-gray-300">
                            {review.name.charAt(0).toUpperCase()}
                          </div>
                          <div>
                            <p className="font-medium dark:text-white">{review.name}</p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                              {new Date(review.createdAt).toLocaleDateString()}
                            </p>
                          </div>
                        </div>
                        <div className="flex text-amber-400">
                          {[...Array(5)].map((_, j) => (
                            <svg
                              key={j}
                              className={`w-4 h-4 ${j < review.rating ? "fill-current" : "stroke-current fill-none"}`}
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                              />
                            </svg>
                          ))}
                        </div>
                      </div>
                      <p className="dark:text-gray-300">{review.comment}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <p className="text-gray-500 dark:text-gray-400 mb-4">No reviews yet. Be the first to review this product!</p>
                  <Button className="bg-ct-blue-500 hover:bg-ct-blue-600">Write a Review</Button>
                </div>
              )}
            </div>
          )}
          
          {selectedTab === 'related' && (
            <div>
              <h3 className="text-xl font-semibold mb-6 dark:text-white">Related Products</h3>
              
              {relatedProducts?.products && relatedProducts.products.length > 1 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {relatedProducts.products
                    .filter(p => p._id !== product._id)
                    .slice(0, 4)
                    .map((relatedProduct) => (
                      <div 
                        key={relatedProduct._id} 
                        className="border dark:border-gray-700 rounded-lg overflow-hidden bg-white dark:bg-gray-800 group"
                      >
                        <Link to={`/product/${relatedProduct.slug}`} className="block relative">
                          <img 
                            src={getImageUrl(relatedProduct.images[0])} 
                            alt={relatedProduct.name} 
                            className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-opacity"></div>
                        </Link>
                        <div className="p-4">
                          <h4 className="font-medium mb-1 line-clamp-1 dark:text-white">
                            <Link 
                              to={`/product/${relatedProduct.slug}`} 
                              className="hover:text-ct-blue-500 dark:hover:text-ct-blue-400"
                            >
                              {relatedProduct.name}
                            </Link>
                          </h4>
                          <div className="text-ct-blue-600 dark:text-ct-blue-400 font-medium">
                            {formatPrice(relatedProduct.price)}
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              ) : (
                <p className="text-center text-gray-500 dark:text-gray-400 py-8">
                  No related products found.
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetail;
