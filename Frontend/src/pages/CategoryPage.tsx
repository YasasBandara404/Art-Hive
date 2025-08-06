import { useParams } from "react-router-dom";
import { useState } from "react";
import Layout from "@/components/common/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Heart, ShoppingCart, SlidersHorizontal } from "lucide-react";
import { useApiQuery } from "@/hooks/useFetch";
import CategoryService from "@/services/categoryService";
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

const CategoryPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const { isAuthenticated } = useAuth();
  const { toast } = useToast();
  const { refreshCart } = useCart();
  const [filters, setFilters] = useState({
    minPrice: 0,
    maxPrice: 20000,
    rating: 0,
    tags: [] as string[]
  });

  // Fetch category and its products
  const { data, isLoading, error } = useApiQuery(
    ['category', slug],
    () => CategoryService.getCategoryBySlug(slug || ''),
    {
      enabled: !!slug,
    }
  );

  const handleAddToCart = async (productId: string) => {
    if (!isAuthenticated) {
      toast({
        title: "Authentication required",
        description: "Please log in to add items to your cart",
        variant: "destructive",
      });
      return;
    }

    try {
      await CartService.addToCart(productId, 1);
      refreshCart(); // Refresh the cart count
      toast({
        title: "Success!",
        description: "Product added to cart",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Could not add product to cart",
        variant: "destructive",
      });
    }
  };

  if (isLoading) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-12">
          <div className="text-center">
            <p className="text-gray-600">Loading category...</p>
          </div>
        </div>
      </Layout>
    );
  }

  if (error || !data) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-12">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Category Not Found</h2>
            <p className="text-gray-600 mb-6">
              The category you are looking for does not exist.
            </p>
            <Button asChild className="bg-ct-blue-500 hover:bg-ct-blue-600">
              <Link to="/">Return to Home</Link>
            </Button>
          </div>
        </div>
      </Layout>
    );
  }

  const { category, products } = data;

  // Extract unique tags from products
  const availableTags = [...new Set(products.flatMap(p => p.tags || []))];

  return (
    <Layout>
      {/* Main container */}
      <div className="bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 py-8">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2 dark:text-white">{category.name}</h1>
            <p className="text-gray-600 dark:text-gray-400">
              {category.description || `Explore our collection of high-quality ${category.name.toLowerCase()} created by talented designers and artists.`}
            </p>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar filters */}
            <aside className="lg:w-64">
              <Card className="dark:bg-gray-800 dark:border-gray-700">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="font-semibold dark:text-white">Filters</h3>
                    <SlidersHorizontal className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                  </div>
                  
                  <div className="space-y-6">
                    {/* Price Range */}
                    <div>
                      <h4 className="text-sm font-medium mb-4 dark:text-gray-300">Price Range</h4>
                      <div className="flex items-center">
                        <input
                          type="range"
                          className="w-full h-2 rounded-lg appearance-none cursor-pointer bg-gray-200 dark:bg-gray-700"
                          min="0"
                          max="20000"
                          step="1000"
                          defaultValue="10000"
                          onChange={(e) => setFilters(prev => ({
                            ...prev, 
                            maxPrice: parseInt(e.target.value)
                          }))}
                        />
                      </div>
                      <div className="flex justify-between text-sm mt-2 dark:text-gray-400">
                        <span>LKR 0</span>
                        <span>LKR {filters.maxPrice}+</span>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-medium mb-3">Rating</h4>
                      <div className="space-y-2">
                        {[5, 4, 3, 2, 1].map((rating) => (
                          <label key={rating} className="flex items-center">
                            <input 
                              type="radio" 
                              name="rating"
                              className="rounded border-gray-300 text-ct-blue-500 focus:ring-ct-blue-500 mr-2"
                              onChange={() => setFilters(prev => ({...prev, rating}))}
                              checked={filters.rating === rating}
                            />
                            <div className="flex text-amber-400">
                              {[...Array(5)].map((_, i) => (
                                <svg
                                  key={i}
                                  className={`w-4 h-4 ${i < rating ? "fill-current" : "text-gray-300"}`}
                                  viewBox="0 0 20 20"
                                >
                                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                </svg>
                              ))}
                              <span className="ml-1 text-gray-700">& Up</span>
                            </div>
                          </label>
                        ))}
                      </div>
                    </div>
                    
                    {availableTags.length > 0 && (
                      <div>
                        <h4 className="text-sm font-medium mb-3">Tags</h4>
                        <div className="flex flex-wrap gap-2">
                          {availableTags.map((tag) => (
                            <label key={tag} className="flex items-center">
                              <input 
                                type="checkbox" 
                                className="rounded border-gray-300 text-ct-blue-500 focus:ring-ct-blue-500 mr-2"
                                onChange={(e) => {
                                  if (e.target.checked) {
                                    setFilters(prev => ({
                                      ...prev, 
                                      tags: [...prev.tags, tag]
                                    }));
                                  } else {
                                    setFilters(prev => ({
                                      ...prev, 
                                      tags: prev.tags.filter(t => t !== tag)
                                    }));
                                  }
                                }}
                              />
                              <span className="text-sm">{tag}</span>
                            </label>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    <Button 
                      className="w-full bg-ct-blue-500 hover:bg-ct-blue-600"
                      onClick={() => {
                        // Reset filters
                        setFilters({
                          minPrice: 0,
                          maxPrice: 20000,
                          rating: 0,
                          tags: []
                        });
                      }}
                    >
                      Reset Filters
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </aside>
            
            {/* Main content */}
            <div className="flex-1">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <span className="text-gray-600">Showing {products.length} results</span>
                </div>
                <div className="flex items-center">
                  <span className="text-sm text-gray-600 mr-2">Sort by:</span>
                  <select className="h-10 rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ct-blue-500">
                    <option value="popular">Most Popular</option>
                    <option value="newest">Newest</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                  </select>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.length > 0 ? (
                  // Filter products based on filters
                  products
                    .filter(product => 
                      product.price >= filters.minPrice && 
                      product.price <= filters.maxPrice &&
                      (filters.rating === 0 || product.rating >= filters.rating) &&
                      (filters.tags.length === 0 || 
                        filters.tags.some(tag => product.tags?.includes(tag)))
                    )
                    .map((product) => (
                      <Card key={product._id} className="overflow-hidden group transition-all duration-300 hover:shadow-md bg-white dark:bg-gray-800 border dark:border-gray-700 rounded-lg shadow-sm">
                        <div className="relative">
                          <Link to={`/product/${product.slug}`}>
                            <img 
                              src={getImageUrl(product.images && product.images[0])}
                              alt={product.name} 
                              className="w-full aspect-[4/3] object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                          </Link>
                          <button className="absolute top-3 right-3 p-1.5 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full hover:bg-white dark:hover:bg-gray-700">
                            <Heart className="h-4 w-4 dark:text-gray-300" />
                          </button>
                        </div>
                        
                        <CardContent className="p-4">
                          <Link 
                            to={`/product/${product.slug}`}
                            className="text-lg font-semibold line-clamp-2 hover:text-ct-blue-500 dark:text-white dark:hover:text-ct-blue-400 transition-colors"
                          >
                            {product.name}
                          </Link>
                          <div className="flex items-center mt-2 mb-1">
                            <div className="flex items-center text-amber-400">
                              {[...Array(5)].map((_, i) => (
                                <svg
                                  key={i}
                                  className={`w-3 h-3 ${i < Math.floor(product.rating) ? "fill-current" : "stroke-current fill-none"}`}
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
                            <span className="text-xs text-gray-500 ml-1">
                              ({product.numReviews || 0})
                            </span>
                          </div>
                          <p className="mt-1 text-sm text-gray-500 line-clamp-2">{product.description}</p>
                        </CardContent>
                        
                        <CardFooter className="p-4 pt-0 flex justify-between">
                          <div className="font-semibold">{formatPrice(product.price)}</div>
                          <Button 
                            size="sm" 
                            className="gap-1 bg-ct-blue-500 hover:bg-ct-blue-600"
                            onClick={() => handleAddToCart(product._id)}
                          >
                            <ShoppingCart className="h-3.5 w-3.5" />
                            <span>Add to Cart</span>
                          </Button>
                        </CardFooter>
                      </Card>
                    ))
                ) : (
                  <div className="col-span-3 py-12 text-center">
                    <p className="text-gray-500 mb-4">No products found in this category.</p>
                    <Button asChild className="bg-ct-blue-500 hover:bg-ct-blue-600">
                      <Link to="/">Browse All Products</Link>
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CategoryPage;
