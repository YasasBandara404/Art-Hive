import { useApiQuery } from "../../hooks/useFetch";
import CategoryService from "../../services/categoryService";
import { Link } from "react-router-dom";
import {
  Palette,
  BookOpen,
  Image as ImageIcon,
  FileText,
  PenTool,
  Book,
  HelpCircle
} from "lucide-react";

const getCategoryIcon = (name: string) => {
  switch (name.toLowerCase()) {
    case "digital art":
      return <Palette className="w-8 h-8" />;
    case "comic books":
      return <BookOpen className="w-8 h-8" />;
    case "wall arts":
      return <ImageIcon className="w-8 h-8" />;
    case "anime books":
      return <Book className="w-8 h-8" />;
    case "anime arts":
      return <PenTool className="w-8 h-8" />;
    case "sketch arts":
      return <FileText className="w-8 h-8" />;
    default:
      return <HelpCircle className="w-8 h-8" />;
  }
};

const Categories = () => {
  const { data: categories, isLoading, error } = useApiQuery(
    ['categories'],
    () => CategoryService.getAllCategories(),
  );

  if (isLoading) return <div className="py-12 text-center dark:text-gray-200">Loading categories...</div>;
  if (error) return <div className="py-12 text-center dark:text-gray-200">Error loading categories</div>;

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10 dark:text-white">Browse Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          {categories?.map((category) => (
            <Link
              to={`/category/${category.slug}`}
              key={category._id}
              className="bg-white dark:bg-gray-800 rounded-lg p-6 text-center border dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow group"
            >
              <div className="w-16 h-16 mx-auto bg-ct-blue-50 dark:bg-gray-700 rounded-full flex items-center justify-center mb-4
                transition-transform duration-300 group-hover:scale-110 group-hover:bg-ct-blue-100 dark:group-hover:bg-gray-600">
                <span className="text-ct-blue-500 dark:text-ct-blue-400 group-hover:text-ct-blue-600 dark:group-hover:text-ct-blue-300 transition-colors duration-300">
                  {getCategoryIcon(category.name)}
                </span>
              </div>
              <h3 className="font-medium dark:text-white">{category.name}</h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
