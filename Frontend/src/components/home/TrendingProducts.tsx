import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Users, GalleryHorizontal, PaintBucket, Image } from "lucide-react";
import { useApiQuery } from "@/hooks/useFetch";
import ProductService from "@/services/productService";
import { getImageUrl } from "@/utils/imageHelpers";

const formatPrice = (price: number) => {
  return new Intl.NumberFormat('si-LK', { 
    style: 'currency', 
    currency: 'LKR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0 
  }).format(price);
};

const getCategoryIcon = (category: string) => {
  switch(category.toLowerCase()) {
    case 'anime arts':
      return <PaintBucket className="h-4 w-4 mr-1" />;
    case 'wall arts':
      return <GalleryHorizontal className="h-4 w-4 mr-1" />;
    case 'wallpapers':
      return <Image className="h-4 w-4 mr-1" />;
    default:
      return <PaintBucket className="h-4 w-4 mr-1" />;
  }
};

const TrendingProducts = () => {
  const { data, isLoading, error } = useApiQuery(
    ['trendingProducts'],
    () => ProductService.getTrendingProducts()
  );

  if (isLoading) return <div className="py-12 text-center dark:text-gray-200">Loading trending products...</div>;
  if (error) return <div className="py-12 text-center dark:text-gray-200">Error loading trending products</div>;

  return (
    <section className="py-12 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight dark:text-white">Trending Now</h2>
            <p className="text-gray-500 dark:text-gray-400 mt-1">Most popular arts and wallpapers this week</p>
          </div>
          <TrendingUp className="w-6 h-6 text-ct-blue-500 dark:text-ct-blue-400" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {data?.products?.map((product: any) => (
            <div key={product._id} className="bg-white dark:bg-gray-800 border dark:border-gray-700 rounded-lg shadow-sm overflow-hidden group hover:shadow-md transition-shadow">
              <Link to={`/product/${product.slug}`}>
                <img
                  src={getImageUrl(product.images?.[0])}
                  alt={product.name}
                  className="w-full aspect-[4/3] object-cover"
                />
                <CardContent className="p-4">
                  <h3 className="font-semibold line-clamp-1 group-hover:text-ct-blue-500 dark:text-white dark:group-hover:text-ct-blue-400">
                    {product.name}
                  </h3>
                  <div className="flex items-center mt-2">
                    {getCategoryIcon(product.category?.name || "")}
                    <span className="text-sm text-gray-500 dark:text-gray-400">{product.category?.name}</span>
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <p className="font-medium text-ct-blue-500 dark:text-ct-blue-400">
                      {formatPrice(product.price)}
                    </p>
                    <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                      <Users className="w-4 h-4 mr-1" />
                      {product.reviewCount || 0}
                    </div>
                  </div>
                </CardContent>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingProducts;
