import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Search, ShoppingCart, User, LayoutDashboard } from "lucide-react";
import { Button } from "@/components/ui/button";
import MobileNav from "./MobileNav";
import SearchDialog from "../common/SearchDialog";
import { useAuth } from "@/contexts/AuthContext";
import { useCart } from "@/contexts/CartContext";
import { useApiQuery } from "@/hooks/useFetch";
import CategoryService from "@/services/categoryService";
import { Category } from "@/services/categoryService";
import DarkModeToggle from "@/components/common/DarkModeToggle";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [categoryMenuOpen, setCategoryMenuOpen] = useState(false);
  const { isAuthenticated, user } = useAuth();
  const { cartCount } = useCart();

  // Fetch categories from API
  const { data: categories, isLoading: categoriesLoading } = useApiQuery(
    ['navbarCategories'],
    () => CategoryService.getAllCategories(),
    {
      refetchOnWindowFocus: false,
      staleTime: 5 * 60 * 1000, // 5 minutes
    }
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 hidden md:flex">
          <Link to="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold text-xl bg-gradient-to-r from-ct-blue-500 to-ct-teal-500 bg-clip-text text-transparent">
              Art Hive
            </span>
          </Link>
          <nav className="flex gap-6">
            <Link
              to="/products"
              className="font-medium transition-colors hover:text-ct-blue-500"
            >
              Products
            </Link>
            <div className="relative">
              <button
              className="flex items-center font-medium transition-colors hover:text-ct-blue-500"
              onClick={() => setCategoryMenuOpen(!categoryMenuOpen)}
              onMouseEnter={() => setCategoryMenuOpen(true)}
              >
              Categories
              </button>
              {categoryMenuOpen && (
              <div
                className="absolute left-0 top-full mt-2 w-48 rounded-md border bg-background dark:bg-gray-800 shadow-lg max-h-80 overflow-y-auto"
                onMouseLeave={() => setCategoryMenuOpen(false)}
              >
                {categoriesLoading ? (
                <div className="px-4 py-2 text-sm text-muted-foreground">Loading...</div>
                ) : categories && categories.length > 0 ? (
                categories.map((category: Category) => (
                  <Link
                  key={category._id}
                  to={`/category/${category.slug}`}
                  className="block px-4 py-2 text-sm text-foreground hover:bg-accent hover:text-accent-foreground"
                  onClick={() => setCategoryMenuOpen(false)}
                  >
                  {category.name}
                  </Link>
                ))
                ) : (
                <div className="px-4 py-2 text-sm text-muted-foreground">No categories found</div>
                )}
              </div>
              )}
            </div>
            <Link
              to="/about"
              className="font-medium transition-colors hover:text-ct-blue-500"
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className="font-medium transition-colors hover:text-ct-blue-500"
            >
              Contact Us
            </Link>
            {isAuthenticated && user?.isAdmin && (
              <Link
                to="/admin"
                className="font-medium text-purple-600 transition-colors hover:text-purple-700"
              >
                Dashboard
              </Link>
            )}
          </nav>
        </div>

        <div className="flex-1 md:hidden">
          <Link to="/" className="flex items-center">
            <span className="font-bold text-lg bg-gradient-to-r from-ct-blue-500 to-ct-teal-500 bg-clip-text text-transparent">
              Art Hive
            </span>
          </Link>
        </div>

        <div className="flex flex-1 items-center justify-end gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setSearchOpen(true)}
            aria-label="Search"
          >
            <Search className="h-5 w-5" />
          </Button>

          <Link to="/cart">
            <Button
              variant="ghost"
              size="icon"
              aria-label="Cart"
              className="relative"
            >
              <ShoppingCart className="h-5 w-5" />
              {isAuthenticated && cartCount > 0 && (
                <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-ct-blue-500 text-xs text-white">
                  {cartCount}
                </span>
              )}
            </Button>
          </Link>

          {isAuthenticated ? (
            <Link to="/profile">
              <Button variant="ghost" size="icon" aria-label="User Account">
                <User className="h-5 w-5" />
              </Button>
            </Link>
          ) : (
            <Link to="/auth">
              <Button variant="ghost" size="icon" aria-label="Login/Register">
                <User className="h-5 w-5" />
              </Button>
            </Link>
          )}

          {isAuthenticated && user?.isAdmin && (
            <Link to="/admin" className="hidden md:block">
              <Button variant="ghost" size="icon" aria-label="Admin Dashboard">
                <LayoutDashboard className="h-5 w-5 text-purple-600" />
              </Button>
            </Link>
          )}

          {/* Add Dark Mode Toggle here */}
          <DarkModeToggle />

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && <MobileNav categories={categories} categoriesLoading={categoriesLoading} />}

      {/* Search Dialog */}
      <SearchDialog isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </header>
  );
};

export default Navbar;
