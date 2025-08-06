import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Search, X, Loader2 } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ProductService from "@/services/productService";
import { useDebounce } from "@/hooks/use-debounce";
import { getImageUrl } from "@/utils/imageHelpers";

interface SearchDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

const SearchDialog = ({ isOpen, onClose }: SearchDialogProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const debouncedQuery = useDebounce(searchQuery, 500);
  
  useEffect(() => {
    const searchProducts = async () => {
      if (debouncedQuery.trim().length < 2) {
        setProducts([]);
        return;
      }
      
      setIsLoading(true);
      try {
        const response = await ProductService.getAllProducts({ keyword: debouncedQuery });
        setProducts(response.products || []);
      } catch (error) {
        console.error("Error searching products:", error);
        setProducts([]);
      } finally {
        setIsLoading(false);
      }
    };
    
    searchProducts();
  }, [debouncedQuery]);
  
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px]">
        <div className="flex items-center border rounded-md">
          <Search className="w-5 h-5 ml-3 text-gray-400" />
          <Input
            type="search"
            placeholder="Search for digital products..."
            className="border-0 focus-visible:ring-0"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            autoFocus
          />
          {searchQuery && (
            <button 
              onClick={() => setSearchQuery("")}
              className="mr-2 p-1 rounded-full hover:bg-gray-100"
            >
              <X className="w-4 h-4 text-gray-500" />
            </button>
          )}
        </div>
        
        {searchQuery && (
          <div className="mt-4 space-y-2">
            {isLoading ? (
              <div className="flex justify-center items-center py-8">
                <Loader2 className="h-6 w-6 text-ct-blue-500 animate-spin" />
              </div>
            ) : products.length > 0 ? (
              products.map((product) => (
                <Link
                  key={product._id}
                  to={`/product/${product.slug}`}
                  className="flex items-center p-2 hover:bg-gray-50 rounded-md"
                  onClick={onClose}
                >
                  <img
                    src={getImageUrl(product.images?.[0])}
                    alt={product.name}
                    className="w-12 h-12 object-cover rounded"
                  />
                  <div className="ml-3">
                    <h4 className="font-medium">{product.name}</h4>
                    <p className="text-sm text-gray-500">{product.category?.name || 'General'}</p>
                  </div>
                  <div className="ml-auto font-medium">
                    {new Intl.NumberFormat('si-LK', {
                      style: 'currency',
                      currency: 'LKR',
                      minimumFractionDigits: 0
                    }).format(product.price)}
                  </div>
                </Link>
              ))
            ) : debouncedQuery.trim().length >= 2 ? (
              <p className="text-center text-gray-500 py-4">
                No products found for "{searchQuery}"
              </p>
            ) : null}
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default SearchDialog;
