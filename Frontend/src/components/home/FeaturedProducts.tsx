import { useState } from "react";
import { useApiQuery } from "../../hooks/useFetch";
import ProductService from "../../services/productService";
import { Link } from "react-router-dom";
import { getImageUrl } from "@/utils/imageHelpers";

const FeaturedProducts = () => {
  const [page, setPage] = useState(1);
  
  const { data, isLoading, error } = useApiQuery(
    ['products', page],
    () => ProductService.getAllProducts({ page, sort: 'newest' }),
  );
  
  if (isLoading) return <div className="py-12 text-center dark:text-gray-200">Loading products...</div>;
  
  if (error) return <div className="py-12 text-center dark:text-gray-200">Error loading products</div>;
  
  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10 dark:text-white">Featured Products</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {data?.products?.map((product) => (
            <Link 
              to={`/product/${product.slug}`}
              key={product._id} 
              className="bg-white dark:bg-gray-800 border dark:border-gray-700 rounded-lg shadow-sm"
            >
              <div className="aspect-square overflow-hidden">
                <img 
                  src={getImageUrl(product.images && product.images[0])}
                  alt={product.name} 
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2 truncate dark:text-white">{product.name}</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm mb-2 truncate">{product.category.name}</p>
                <p className="font-bold text-ct-blue-600 dark:text-ct-blue-400">{`LKR ${product.price.toLocaleString()}`}</p>
              </div>
            </Link>
          ))}
        </div>
        
        {data?.pages > 1 && (
          <div className="flex justify-center mt-10">
            <nav className="inline-flex" aria-label="Pagination">
              <button 
                onClick={() => setPage(p => Math.max(p - 1, 1))}
                disabled={page === 1} 
                className="px-3 py-1 rounded-l-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
              >
                Previous
              </button>
              <div className="px-3 py-1 border-t border-b border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-sm font-medium text-gray-700 dark:text-gray-300">
                {`${page} of ${data.pages}`}
              </div>
              <button 
                onClick={() => setPage(p => Math.min(p + 1, data.pages))}
                disabled={page === data.pages} 
                className="px-3 py-1 rounded-r-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
              >
                Next
              </button>
            </nav>
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturedProducts;
