import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "@/components/common/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Upload,
  BarChart3,
  Users,
  ShoppingBag,
  DollarSign,
  PlusCircle,
  Image,
  Trash2,
  Edit,
  X,
  FolderPlus,
  Mail, // Add this import for messages icon
} from "lucide-react";

import AdminService from "@/services/adminService";
import ProductService from "@/services/productService";
import CategoryService from "@/services/categoryService";
import OrderService from "@/services/orderService";
import ContactService from "@/services/contactService";
import UserService from "@/services/userService";
import { useApiQuery, useApiMutation } from "@/hooks/useFetch";
import { useToast } from "@/components/ui/use-toast";
import { getImageUrl } from "@/utils/imageHelpers";

// Admin only features (product upload, etc.)

const formatPrice = (price: number) => {
  return new Intl.NumberFormat("si-LK", {
    style: "currency",
    currency: "LKR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
};

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState<string>("overview");
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const navigate = useNavigate();
  const { toast } = useToast();

  // Product form state
  const [productForm, setProductForm] = useState({
    name: "",
    price: "",
    description: "",
    category: "",
    stock: "0",
  });

  // Category form state
  const [categoryForm, setCategoryForm] = useState({
    name: "",
    description: "",
    image: "",
  });

  // File states
  const [thumbnailFile, setThumbnailFile] = useState<File | null>(null);
  const [productFile, setProductFile] = useState<File | null>(null);
  const [thumbnailPreview, setThumbnailPreview] = useState<string>("");

  // Tags state
  const [productTags, setProductTags] = useState<string[]>([]);

  // Fetch dashboard stats
  const {
    data: stats,
    isLoading: statsLoading,
    refetch: refetchStats,
  } = useApiQuery(["adminStats"], () => AdminService.getDashboardStats(), {
    refetchOnWindowFocus: false,
  });

  // Fetch admin products
  const {
    data: products,
    isLoading: productsLoading,
    refetch: refetchProducts,
  } = useApiQuery(["adminProducts"], () => AdminService.getAdminProducts(), {
    enabled: activeTab === "products" || activeTab === "overview",
    refetchOnWindowFocus: false,
  });

  // Fetch orders for activity feed
  const { data: orders, isLoading: ordersLoading } = useApiQuery(
    ["adminOrders"],
    () => AdminService.getAdminOrders(),
    {
      enabled: activeTab === "overview",
      refetchOnWindowFocus: false,
    }
  );

  // Fetch categories for product form
  const {
    data: categories,
    isLoading: categoriesLoading,
    refetch: refetchCategories,
  } = useApiQuery(["categories"], () => CategoryService.getAllCategories(), {
    refetchOnWindowFocus: false,
  });

  // Fetch messages for admin
  const {
    data: messages,
    isLoading: messagesLoading,
    refetch: refetchMessages,
  } = useApiQuery(["adminMessages"], () => ContactService.getMessages(), {
    enabled: activeTab === "messages",
  });

  // Fetch users
  const {
    data: users,
    isLoading: usersLoading,
    refetch: refetchUsers,
  } = useApiQuery(["adminUsers"], () => UserService.getUsers(), {
    enabled: activeTab === "users",
  });

  // Create product mutation
  const createProductMutation = useApiMutation(
    (formData: FormData) => ProductService.createProduct(formData),
    {
      onSuccess: () => {
        toast({
          title: "Product created successfully",
          description: "Your product has been added to the marketplace",
        });
        setIsUploading(false);
        setUploadProgress(0);
        resetForm();
        refetchProducts();
        refetchStats();
      },
      onError: (error) => {
        toast({
          title: "Failed to create product",
          description: error.message,
          variant: "destructive",
        });
        setIsUploading(false);
        setUploadProgress(0);
      },
    }
  );

  // Delete product mutation
  const deleteProductMutation = useApiMutation(
    (id: string) => ProductService.deleteProduct(id),
    {
      onSuccess: () => {
        toast({
          title: "Product deleted successfully",
        });
        refetchProducts();
        refetchStats();
      },
      onError: (error) => {
        toast({
          title: "Failed to delete product",
          description: error.message,
          variant: "destructive",
        });
      },
    }
  );

  // Create category mutation
  const createCategoryMutation = useApiMutation(
    (categoryData: { name: string; description: string; image: string }) =>
      CategoryService.createCategory(categoryData),
    {
      onSuccess: () => {
        toast({
          title: "Category created successfully",
          description: "Your new category has been added",
        });
        setCategoryForm({
          name: "",
          description: "",
          image: "",
        });
        // Refetch categories
        refetchCategories();
      },
      onError: (error) => {
        toast({
          title: "Failed to create category",
          description: error.message,
          variant: "destructive",
        });
      },
    }
  );

  // Delete category mutation
  const deleteCategoryMutation = useApiMutation(
    (id: string) => CategoryService.deleteCategory(id),
    {
      onSuccess: () => {
        toast({
          title: "Category deleted successfully",
        });
        refetchCategories();
      },
      onError: (error) => {
        toast({
          title: "Failed to delete category",
          description: error.message,
          variant: "destructive",
        });
      },
    }
  );

  // Update user mutation
  const updateUserMutation = useApiMutation(
    ({ id, data }: { id: string; data: any }) =>
      UserService.updateUser(id, data),
    {
      onSuccess: () => {
        toast({ title: "User updated" });
        refetchUsers();
      },
      onError: (error) => {
        toast({
          title: "Failed to update user",
          description: error.message,
          variant: "destructive",
        });
      },
    }
  );

  // Delete user mutation
  const deleteUserMutation = useApiMutation(
    (id: string) => UserService.deleteUser(id),
    {
      onSuccess: () => {
        toast({ title: "User deleted" });
        refetchUsers();
      },
      onError: (error) => {
        toast({
          title: "Failed to delete user",
          description: error.message,
          variant: "destructive",
        });
      },
    }
  );

  // Handle thumbnail file change
  const handleThumbnailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      // Direct assignment of the File object
      setThumbnailFile(e.target.files[0]);

      // Create a preview URL
      const reader = new FileReader();
      reader.onloadend = () => {
        setThumbnailPreview(reader.result as string);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  // Handle product file change
  const handleProductFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      // Direct assignment of the File object
      setProductFile(e.target.files[0]);
    }
  };

  // Handle form input change
  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setProductForm({
      ...productForm,
      [name]: value,
    });
  };

  // Handle category input change
  const handleCategoryChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setCategoryForm({
      ...categoryForm,
      [name]: value,
    });
  };

  // Handle product creation
  const handleCreateProduct = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!thumbnailFile) {
      toast({
        title: "Missing thumbnail",
        description: "Please upload a product thumbnail",
        variant: "destructive",
      });
      return;
    }

    if (!productForm.category) {
      toast({
        title: "Missing category",
        description: "Please select a product category",
        variant: "destructive",
      });
      return;
    }

    setIsUploading(true);

    try {
      // Find the category by slug to get its ID
      const selectedCategory = categories?.find(
        (cat) => cat.slug === productForm.category
      );

      if (!selectedCategory) {
        toast({
          title: "Invalid category",
          description: "The selected category could not be found",
          variant: "destructive",
        });
        setIsUploading(false);
        return;
      }

      const formData = new FormData();

      // Add basic product data
      formData.append("name", productForm.name);
      formData.append("price", productForm.price);
      formData.append("description", productForm.description);

      // Use the category ID instead of the slug
      formData.append("category", selectedCategory._id);

      formData.append("stock", productForm.stock);

      // Generate tags based on selected category
      const tags =
        productTags.length > 0
          ? productTags
          : getTagsForCategory(productForm.category);
      if (tags.length > 0) {
        formData.append("tags", JSON.stringify(tags));
      }

      // Add thumbnail/images - MUST use the field name 'images'
      if (thumbnailFile) {
        formData.append("images", thumbnailFile);
      }

      // Add digital product file if available - MUST use the field name 'file'
      if (productFile) {
        formData.append("file", productFile);
      }

      // Create the product
      await createProductMutation.mutateAsync(formData);

      // Reset form on success
      resetForm();

      // Refresh product list
      refetchProducts();
      setActiveTab("products");
    } catch (error) {
      console.error("Error creating product:", error);
      toast({
        title: "Failed to create product",
        description: "Please check the form and try again.",
        variant: "destructive",
      });
    } finally {
      setIsUploading(false);
    }
  };

  // Handle category creation
  const handleCreateCategory = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsUploading(true);

    try {
      // Create the category
      await createCategoryMutation.mutateAsync(categoryForm);

      // Reset form on success
      setCategoryForm({
        name: "",
        description: "",
        image: "",
      });

      // Refresh category list
      refetchCategories();
      setActiveTab("categories");
    } catch (error) {
      console.error("Error creating category:", error);
      toast({
        title: "Failed to create category",
        description: "Please check the form and try again.",
        variant: "destructive",
      });
    } finally {
      setIsUploading(false);
    }
  };

  const resetForm = () => {
    setProductForm({
      name: "",
      price: "",
      description: "",
      category: "",
      stock: "0",
    });
    setThumbnailFile(null);
    setProductFile(null);
    setThumbnailPreview("");
    setProductTags([]);
  };

  const handleDeleteProduct = (id: string) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      deleteProductMutation.mutate(id);
    }
  };

  const handleEditProduct = (product: any) => {
    // Store the product in localStorage and navigate to edit page
    localStorage.setItem("editProduct", JSON.stringify(product));
    navigate(`/admin/edit-product/${product._id}`);
  };

  // Generate recent activity from orders and other data
  const getRecentActivity = () => {
    const activities = [];

    // Add recent orders if available
    if (orders && orders.length > 0) {
      const recentOrders = orders.slice(0, 3).map((order) => ({
        type: "order",
        title: `New Order #${order._id.slice(-4)}`,
        time: new Date(order.createdAt).toLocaleString(),
        data: order,
      }));
      activities.push(...recentOrders);
    }

    // Add some placeholder activities
    activities.push(
      { type: "review", title: "New Review: 5 stars", time: "1 hour ago" },
      { type: "download", title: "Product Download", time: "3 hours ago" },
      { type: "user", title: "New Customer", time: "5 hours ago" }
    );

    return activities.sort(() => Math.random() - 0.5).slice(0, 5);
  };

  // Helper function to generate appropriate tags based on category
  const getTagsForCategory = (categorySlug: string): string[] => {
    switch (categorySlug) {
      case "digital-art":
        return ["digital", "art"];
      case "comic-books":
        return ["comics", "illustration"];
      case "wall-arts":
        return ["decor", "wall-art"];
      case "anime-books":
        return ["anime", "book"];
      case "anime-arts":
        return ["anime", "illustration"];
      case "sketch-arts":
        return ["sketch", "artwork"];
      default:
        return [];
    }
  };

  // Reply to message mutation
  const replyMessageMutation = useApiMutation(
    ({ id, reply }: { id: string; reply: string }) =>
      ContactService.updateMessageStatus(id, "replied", reply),
    {
      onSuccess: () => {
        toast({ title: "Reply sent" });
        refetchMessages();
      },
      onError: (error) => {
        toast({
          title: "Failed to reply",
          description: error.message,
          variant: "destructive",
        });
      },
    }
  );

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row lg:space-x-8">
          {/* Sidebar */}
          <aside className="lg:w-64 mb-6 lg:mb-0">
            <Card>
              <CardHeader>
                <CardTitle>Admin Dashboard</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <nav className="flex flex-col">
                  {[
                    { id: "overview", label: "Overview", icon: BarChart3 },
                    { id: "products", label: "My Products", icon: ShoppingBag },
                    { id: "categories", label: "Categories", icon: FolderPlus }, // Add this line
                    { id: "upload", label: "Upload Content", icon: Upload },
                    {
                      id: "sales",
                      label: "Sales & Analytics",
                      icon: DollarSign,
                    },
                    { id: "users", label: "User Management", icon: Users },
                    { id: "messages", label: "Messages", icon: Mail }, // Add this to your dashboard nav items
                  ].map((item) => (
                    <button
                      key={item.id}
                      className={`flex items-center gap-3 p-3 text-left transition-colors ${
                        activeTab === item.id
                          ? "bg-ct-blue-50 text-ct-blue-500 font-medium"
                          : "text-gray-600 hover:bg-gray-50"
                      }`}
                      onClick={() => setActiveTab(item.id)}
                    >
                      <item.icon className="h-4 w-4" />
                      <span>{item.label}</span>
                    </button>
                  ))}
                </nav>
              </CardContent>
            </Card>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            {activeTab === "overview" && (
              <div>
                <h2 className="text-2xl font-bold mb-6">Dashboard Overview</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                  {[
                    {
                      title: "Total Sales",
                      value: formatPrice(stats?.totalSales || 0),
                      icon: DollarSign,
                      color:
                        "bg-ct-blue-100 text-ct-blue-500 dark:bg-ct-blue-900/30 dark:text-ct-blue-400",
                    },
                    {
                      title: "Products",
                      value: stats?.productCount || 0,
                      icon: ShoppingBag,
                      color:
                        "bg-green-100 text-green-500 dark:bg-green-900/30 dark:text-green-400",
                    },
                    {
                      title: "Customers",
                      value: stats?.userCount || 0,
                      icon: Users,
                      color:
                        "bg-purple-100 text-purple-500 dark:bg-purple-900/30 dark:text-purple-400",
                    },
                    {
                      title: "Orders",
                      value: stats?.orderCount || 0,
                      icon: DollarSign,
                      color:
                        "bg-orange-100 text-orange-500 dark:bg-orange-900/30 dark:text-orange-400",
                    },
                  ].map((stat, index) => (
                    <Card key={index}>
                      <CardContent className="flex items-center justify-between p-6">
                        <div>
                          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                            {stat.title}
                          </p>
                          <h3 className="text-2xl font-bold mt-1">
                            {stat.value}
                          </h3>
                        </div>
                        <div className={`p-3 rounded-full ${stat.color}`}>
                          <stat.icon className="h-6 w-6" />
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle>Sales Overview</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="h-80 flex items-center justify-center bg-gray-50 dark:bg-gray-900 rounded-md">
                        <p className="text-gray-500 dark:text-gray-400">
                          Sales chart would appear here
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle>Recent Activity</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {getRecentActivity().map((activity, index) => (
                          <div key={index} className="flex items-start">
                            <div className="w-2 h-2 mt-2 rounded-full bg-ct-blue-500 dark:bg-ct-blue-400 mr-3"></div>
                            <div>
                              <p className="font-medium">{activity.title}</p>
                              <p className="text-xs text-gray-500 dark:text-gray-400">
                                {activity.time}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            )}
            {activeTab === "upload" && (
              <div>
                <h2 className="text-2xl font-bold mb-6">Upload New Content</h2>
                <Card>
                  <CardContent className="p-6">
                    <form className="space-y-6" onSubmit={handleCreateProduct}>
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium mb-1"
                        >
                          Product Title
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={productForm.name}
                          onChange={handleInputChange}
                          className="w-full h-10 px-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ct-blue-500"
                          placeholder="Enter product title"
                          required
                        />
                      </div>

                      {/* Update the category dropdown component */}
                      <div className="mb-4">
                        <label className="block text-sm font-medium mb-1">
                          Category
                        </label>
                        <select
                          name="category"
                          value={productForm.category}
                          onChange={(e) =>
                            setProductForm({
                              ...productForm,
                              category: e.target.value,
                            })
                          }
                          className="w-full p-2 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-ct-blue-500"
                          required
                        >
                          <option value="">Select a category</option>
                          {categories?.map((category) => (
                            <option key={category._id} value={category.slug}>
                              {category.name}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label
                          htmlFor="description"
                          className="block text-sm font-medium mb-1"
                        >
                          Description
                        </label>
                        <textarea
                          id="description"
                          name="description"
                          value={productForm.description}
                          onChange={handleInputChange}
                          rows={5}
                          className="w-full px-3 py-2 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ct-blue-500"
                          placeholder="Describe your product"
                          required
                        ></textarea>
                      </div>

                      <div>
                        <label
                          htmlFor="price"
                          className="block text-sm font-medium mb-1"
                        >
                          Price (LKR)
                        </label>
                        <input
                          type="number"
                          id="price"
                          name="price"
                          value={productForm.price}
                          onChange={handleInputChange}
                          className="w-full h-10 px-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ct-blue-500"
                          placeholder="Enter price in LKR"
                          required
                          min="0"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="stock"
                          className="block text-sm font-medium mb-1"
                        >
                          Stock (Available Units)
                        </label>
                        <input
                          type="number"
                          id="stock"
                          name="stock"
                          value={productForm.stock}
                          onChange={handleInputChange}
                          className="w-full h-10 px-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ct-blue-500"
                          placeholder="Enter available stock"
                          min="0"
                        />
                      </div>

                      {/* Product Thumbnail Section */}
                      <div>
                        <label className="block text-sm font-medium mb-3">
                          Product Thumbnail
                        </label>
                        <div
                          className={`border-2 border-dashed ${
                            thumbnailFile ? "border-green-300" : "border-input"
                          } rounded-lg p-6 text-center cursor-pointer hover:border-ct-blue-500 transition-colors`}
                          onClick={() =>
                            document.getElementById("thumbnail-upload")?.click()
                          }
                        >
                          {thumbnailPreview ? (
                            <div className="flex flex-col items-center">
                              <img
                                src={thumbnailPreview}
                                alt="Thumbnail preview"
                                className="max-h-60 max-w-full mb-4 rounded"
                              />
                              <p className="text-sm text-green-600 dark:text-green-400 font-medium">
                                {thumbnailFile?.name} (
                                {Math.round(thumbnailFile?.size / 1024)}KB)
                              </p>
                              <button
                                type="button"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setThumbnailFile(null);
                                  setThumbnailPreview("");
                                }}
                                className="mt-2 text-xs text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300"
                              >
                                Remove
                              </button>
                            </div>
                          ) : (
                            <div className="flex flex-col items-center">
                              <Upload className="h-12 w-12 text-muted-foreground mb-2" />
                              <p className="text-sm text-muted-foreground">
                                Drop image here or click to upload
                              </p>
                              <p className="text-xs text-muted-foreground mt-1">
                                PNG, JPG or WEBP up to 5MB
                              </p>
                            </div>
                          )}

                          <input
                            id="thumbnail-upload"
                            type="file"
                            accept="image/*"
                            onChange={handleThumbnailChange}
                            className="hidden"
                          />
                        </div>
                      </div>

                      {/* Digital Product Files Section */}
                      <div>
                        <label className="block text-sm font-medium mb-3">
                          Digital Product Files (Optional)
                        </label>
                        <div
                          className={`border-2 border-dashed ${
                            productFile
                              ? "border-green-300 dark:border-green-700"
                              : "border-input"
                          } rounded-lg p-6 text-center cursor-pointer hover:border-ct-blue-500 transition-colors`}
                          onClick={() =>
                            document
                              .getElementById("product-file-upload")
                              ?.click()
                          }
                        >
                          {productFile ? (
                            <div className="flex flex-col items-center">
                              <File className="h-12 w-12 text-green-500 dark:text-green-400 mb-2" />
                              <p className="text-sm text-green-600 dark:text-green-400 font-medium">
                                {productFile.name} (
                                {Math.round(productFile.size / 1024)}KB)
                              </p>
                              <button
                                type="button"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setProductFile(null);
                                }}
                                className="mt-2 text-xs text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300"
                              >
                                Remove
                              </button>
                            </div>
                          ) : (
                            <div className="flex flex-col items-center">
                              <Upload className="h-12 w-12 text-muted-foreground mb-2" />
                              <p className="text-sm text-muted-foreground">
                                Drop file here or click to upload
                              </p>
                              <p className="text-xs text-muted-foreground mt-1">
                                ZIP, PDF, MP3, MP4, etc. up to 500MB
                              </p>
                            </div>
                          )}

                          <input
                            id="product-file-upload"
                            type="file"
                            accept=".pdf,.zip,.mp3,.mp4,.doc,.docx"
                            onChange={handleProductFileChange}
                            className="hidden"
                          />
                        </div>
                      </div>

                      <Button
                        type="submit"
                        className="bg-ct-blue-500 hover:bg-ct-blue-600"
                        disabled={isUploading}
                      >
                        <PlusCircle className="h-4 w-4 mr-2" />
                        Create Product
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            )}
            {activeTab === "products" && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold">My Products</h2>
                  <Button
                    className="bg-ct-blue-500 hover:bg-ct-blue-600"
                    onClick={() => setActiveTab("upload")}
                  >
                    <PlusCircle className="h-4 w-4 mr-2" />
                    Add New
                  </Button>
                </div>

                <Card>
                  <div className="overflow-x-auto">
                    {productsLoading ? (
                      <div className="p-8 text-center">Loading products...</div>
                    ) : products && products.length > 0 ? (
                      <table className="w-full">
                        <thead>
                          <tr className="border-b">
                            <th className="text-left p-4">Product</th>
                            <th className="text-left p-4">Category</th>
                            <th className="text-left p-4">Price</th>
                            <th className="text-left p-4">Stock</th>
                            <th className="text-left p-4">Rating</th>
                            <th className="text-left p-4">Status</th>
                            <th className="text-left p-4">Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {products.map((product: any) => (
                            <tr key={product._id} className="border-b">
                              <td className="p-4">
                                <div className="flex items-center">
                                  <div className="w-10 h-10 rounded-md overflow-hidden bg-gray-200 mr-3">
                                    <img
                                      src={getImageUrl(product.images[0])}
                                      alt={product.name}
                                      className="w-full h-full object-cover"
                                    />
                                  </div>
                                  <span className="font-medium truncate max-w-[200px]">
                                    {product.name}
                                  </span>
                                </div>
                              </td>
                              <td className="p-4">{product.category?.name}</td>
                              <td className="p-4">
                                {formatPrice(product.price)}
                              </td>
                              <td className="p-4">{product.stock}</td>
                              <td className="p-4">{product.rating}</td>
                              <td className="p-4">
                                <span
                                  className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                                    product.isActive
                                      ? "bg-green-100 text-green-700"
                                      : "bg-gray-100 text-gray-700"
                                  }`}
                                >
                                  {product.isActive ? "Active" : "Inactive"}
                                </span>
                              </td>
                              <td className="p-4">
                                <div className="flex space-x-2">
                                  <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={() => handleEditProduct(product)}
                                  >
                                    <Edit className="h-4 w-4" />
                                  </Button>
                                  <Button
                                    variant="outline"
                                    size="sm"
                                    className="text-red-500 hover:text-red-700"
                                    onClick={() =>
                                      handleDeleteProduct(product._id)
                                    }
                                  >
                                    <Trash2 className="h-4 w-4" />
                                  </Button>
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    ) : (
                      <div className="p-8 text-center">
                        <p className="text-gray-500 mb-4">No products found.</p>
                        <Button
                          className="bg-ct-blue-500 hover:bg-ct-blue-600"
                          onClick={() => setActiveTab("upload")}
                        >
                          Add Your First Product
                        </Button>
                      </div>
                    )}
                  </div>
                </Card>
              </div>
            )}

            {activeTab === "categories" && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold">Manage Categories</h2>
                  <Button
                    className="bg-ct-blue-500 hover:bg-ct-blue-600"
                    onClick={() => setActiveTab("upload")}
                  >
                    <PlusCircle className="h-4 w-4 mr-2" />
                    Add New Category
                  </Button>
                </div>

                <Card>
                  <CardContent className="p-6">
                    <form className="space-y-6" onSubmit={handleCreateCategory}>
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Category Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={categoryForm.name}
                          onChange={handleCategoryChange}
                          className="w-full h-10 px-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ct-blue-500"
                          placeholder="Enter category name"
                          required
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="description"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Description
                        </label>
                        <textarea
                          id="description"
                          name="description"
                          value={categoryForm.description}
                          onChange={handleCategoryChange}
                          rows={3}
                          className="w-full px-3 py-2 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ct-blue-500"
                          placeholder="Describe the category"
                          required
                        ></textarea>
                      </div>

                      {/* Category Image Upload - Optional */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-3">
                          Category Image (Optional)
                        </label>
                        <div
                          className={`border-2 border-dashed ${
                            thumbnailFile
                              ? "border-green-300"
                              : "border-gray-300"
                          } rounded-lg p-6 text-center cursor-pointer hover:border-ct-blue-500 transition-colors`}
                          onClick={() =>
                            document
                              .getElementById("category-image-upload")
                              ?.click()
                          }
                        >
                          {thumbnailPreview ? (
                            <div className="flex flex-col items-center">
                              <img
                                src={thumbnailPreview}
                                alt="Thumbnail preview"
                                className="max-h-60 max-w-full mb-4 rounded"
                              />
                              <p className="text-sm text-green-600 font-medium">
                                {thumbnailFile?.name} (
                                {Math.round(thumbnailFile?.size / 1024)}KB)
                              </p>
                              <button
                                type="button"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setThumbnailFile(null);
                                  setThumbnailPreview("");
                                }}
                                className="mt-2 text-xs text-red-500 hover:text-red-700"
                              >
                                Remove
                              </button>
                            </div>
                          ) : (
                            <div className="flex flex-col items-center">
                              <Upload className="h-12 w-12 text-gray-400 mb-2" />
                              <p className="text-sm text-gray-600">
                                Drop image here or click to upload
                              </p>
                              <p className="text-xs text-gray-400 mt-1">
                                PNG, JPG or WEBP up to 5MB
                              </p>
                            </div>
                          )}

                          <input
                            id="category-image-upload"
                            type="file"
                            accept="image/*"
                            onChange={handleThumbnailChange}
                            className="hidden"
                          />
                        </div>
                      </div>

                      <Button
                        type="submit"
                        className="bg-ct-blue-500 hover:bg-ct-blue-600"
                        disabled={isUploading}
                      >
                        <PlusCircle className="h-4 w-4 mr-2" />
                        Create Category
                      </Button>
                    </form>
                  </CardContent>
                </Card>

                <div className="mt-8">
                  <h3 className="text-lg font-semibold mb-4">
                    Existing Categories
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {categoriesLoading ? (
                      <div className="p-4 text-center">
                        Loading categories...
                      </div>
                    ) : categories && categories.length > 0 ? (
                      categories.map((category) => (
                        <Card
                          key={category._id}
                          className="hover:shadow-md transition-shadow"
                        >
                          <CardContent className="p-4">
                            <div className="flex flex-col items-center">
                              <div className="w-full h-32 rounded-md overflow-hidden mb-4">
                                <img
                                  src={getImageUrl(category.image)}
                                  alt={category.name}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                              <h4 className="text-md font-semibold mb-2 text-center">
                                {category.name}
                              </h4>
                              <p className="text-sm text-gray-500 text-center mb-4">
                                {category.description}
                              </p>
                              <div className="flex gap-2">
                                <Button
                                  variant="outline"
                                  size="sm"
                                  onClick={() => handleEditProduct(product)}
                                >
                                  <Edit className="h-4 w-4" />
                                </Button>
                                <Button
                                  variant="outline"
                                  size="sm"
                                  className="text-red-500 hover:text-red-700"
                                  onClick={() =>
                                    handleDeleteProduct(product._id)
                                  }
                                >
                                  <Trash2 className="h-4 w-4" />
                                </Button>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))
                    ) : (
                      <div className="p-4 text-center">
                        <p className="text-gray-500 mb-4">
                          No categories found.
                        </p>
                        <Button
                          className="bg-ct-blue-500 hover:bg-ct-blue-600"
                          onClick={() => setActiveTab("upload")}
                        >
                          Add Your First Category
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {activeTab === "messages" && (
              <div>
                <h2 className="text-2xl font-bold mb-6">Contact Messages</h2>
                {messagesLoading ? (
                  <div>Loading messages...</div>
                ) : messages &&
                  messages.messages &&
                  messages.messages.length > 0 ? (
                  <div className="space-y-6">
                    {messages.messages.map((msg: any) => (
                      <div
                        key={msg._id}
                        className="bg-background rounded-lg border shadow-sm p-6"
                      >
                        <div className="flex justify-between items-center mb-2">
                          <div>
                            <span className="font-semibold">{msg.name}</span>
                            <span className="ml-2 text-muted-foreground text-sm">
                              {msg.email}
                            </span>
                          </div>
                          <span
                            className={`text-xs px-2 py-1 rounded ${
                              msg.status === "replied"
                                ? "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300"
                                : "bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300"
                            }`}
                          >
                            {msg.status}
                          </span>
                        </div>
                        <div className="mb-2">
                          <span className="font-medium">Subject:</span>{" "}
                          {msg.subject}
                        </div>
                        <div className="mb-4">
                          <span className="font-medium">Message:</span>{" "}
                          {msg.message}
                        </div>
                        {/* Reply form */}
                        <form
                          onSubmit={(e) => {
                            e.preventDefault();
                            const reply = (e.target as any).reply.value;
                            replyMessageMutation.mutate({ id: msg._id, reply });
                            (e.target as any).reset();
                          }}
                          className="flex gap-2"
                        >
                          <input
                            name="reply"
                            type="text"
                            placeholder="Type your reply..."
                            className="flex-1 border rounded px-3 py-2 bg-background"
                            required
                          />
                          <Button
                            type="submit"
                            className="bg-ct-blue-500 hover:bg-ct-blue-600"
                            disabled={replyMessageMutation.isLoading}
                          >
                            Reply
                          </Button>
                        </form>
                        {msg.reply && (
                          <div className="mt-2 text-sm text-green-700 dark:text-green-400">
                            <span className="font-medium">Your Reply:</span>{" "}
                            {msg.reply}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                ) : (
                  <div>No messages found.</div>
                )}
              </div>
            )}

            {activeTab === "users" && (
              <div>
                <h2 className="text-2xl font-bold mb-6">User Management</h2>
                {usersLoading ? (
                  <div>Loading users...</div>
                ) : users && users.length > 0 ? (
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left p-4">Name</th>
                        <th className="text-left p-4">Email</th>
                        <th className="text-left p-4">Admin</th>
                        <th className="text-left p-4">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {users.map((user: any) => (
                        <tr key={user._id} className="border-b">
                          <td className="p-4">{user.name}</td>
                          <td className="p-4">{user.email}</td>
                          <td className="p-4">{user.isAdmin ? "Yes" : "No"}</td>
                          <td className="p-4">
                            <div className="flex gap-2">
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => {
                                  const newAdmin = !user.isAdmin;
                                  updateUserMutation.mutate({
                                    id: user._id,
                                    data: { isAdmin: newAdmin },
                                  });
                                }}
                              >
                                {user.isAdmin ? "Revoke Admin" : "Make Admin"}
                              </Button>
                              <Button
                                variant="outline"
                                size="sm"
                                className="text-red-500 hover:text-red-700"
                                onClick={() => {
                                  if (
                                    window.confirm(
                                      "Are you sure you want to delete this user?"
                                    )
                                  ) {
                                    deleteUserMutation.mutate(user._id);
                                  }
                                }}
                              >
                                Delete
                              </Button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                ) : (
                  <div>No users found.</div>
                )}
              </div>
            )}
          </main>
        </div>
      </div>
    </Layout>
  );
};

export default AdminDashboard;
