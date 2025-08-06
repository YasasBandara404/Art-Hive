import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "@/components/common/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/components/ui/use-toast";

type AuthTab = "login" | "register";

const Auth = () => {
  const [activeTab, setActiveTab] = useState<AuthTab>("login");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const { login, register, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  // Redirect if already logged in
  useEffect(() => {
    if (isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated, navigate]);
  
  const handleTabChange = (tab: AuthTab) => {
    setActiveTab(tab);
    setError(null);
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    
    try {
      await login(formData.email, formData.password);
      toast({
        title: "Login successful!",
        description: "Welcome back to ArtHive",
      });
      navigate('/');
    } catch (error: any) {
      setError(error.response?.data?.message || 'Invalid email or password');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords don't match");
      return;
    }
    
    setIsSubmitting(true);
    setError(null);
    
    try {
      await register(formData.name, formData.email, formData.password);
      toast({
        title: "Registration successful!",
        description: "Welcome to ArtHive",
      });
      navigate('/');
    } catch (error: any) {
      setError(error.response?.data?.message || 'Failed to register');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      <div className="bg-gradient-to-b from-white to-gray-50 py-12">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="max-w-md mx-auto bg-white p-8 rounded-lg border shadow-sm">
            <div className="text-center mb-6">
              <h1 className="text-2xl font-bold">Welcome to ArtHive</h1>
              <p className="text-gray-500 mt-1">Sri Lanka's Digital Content Marketplace</p>
            </div>
            
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 p-3 rounded mb-4">
                {error}
              </div>
            )}
            
            <div className="flex border-b mb-6">
              <button
                className={`flex-1 py-2 text-center border-b-2 ${
                  activeTab === "login"
                    ? "border-ct-blue-500 text-ct-blue-500 font-medium"
                    : "border-transparent text-gray-500"
                }`}
                onClick={() => handleTabChange("login")}
              >
                Login
              </button>
              <button
                className={`flex-1 py-2 text-center border-b-2 ${
                  activeTab === "register"
                    ? "border-ct-blue-500 text-ct-blue-500 font-medium"
                    : "border-transparent text-gray-500"
                }`}
                onClick={() => handleTabChange("register")}
              >
                Register
              </button>
            </div>
            
            {activeTab === "register" ? (
              <form onSubmit={handleRegister}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full h-10 px-3 rounded-md border border-input focus:outline-none focus:ring-2 focus:ring-ct-blue-500"
                    required
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full h-10 px-3 rounded-md border border-input focus:outline-none focus:ring-2 focus:ring-ct-blue-500"
                    required
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                    Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full h-10 px-3 rounded-md border border-input focus:outline-none focus:ring-2 focus:ring-ct-blue-500"
                    required
                    minLength={6}
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                    Confirm Password
                  </label>
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="w-full h-10 px-3 rounded-md border border-input focus:outline-none focus:ring-2 focus:ring-ct-blue-500"
                    required
                    minLength={6}
                  />
                </div>
                
                <Button
                  type="submit"
                  className="w-full bg-ct-blue-500 hover:bg-ct-blue-600"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Creating Account..." : "Create Account"}
                </Button>
              </form>
            ) : (
              <form onSubmit={handleLogin}>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full h-10 px-3 rounded-md border border-input focus:outline-none focus:ring-2 focus:ring-ct-blue-500"
                    required
                  />
                </div>
                
                <div className="mb-4">
                  <div className="flex justify-between items-center">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                      Password
                    </label>
                    <Link to="/forgot-password" className="text-xs text-ct-blue-500 hover:underline">
                      Forgot Password?
                    </Link>
                  </div>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full h-10 px-3 rounded-md border border-input focus:outline-none focus:ring-2 focus:ring-ct-blue-500"
                    required
                  />
                </div>
                
                <Button
                  type="submit"
                  className="w-full bg-ct-blue-500 hover:bg-ct-blue-600"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Logging in..." : "Login"}
                </Button>
                
                <div className="mt-6">
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <span className="w-full border-t"></span>
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                      <span className="bg-white px-2 text-gray-500">Or continue with</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3 mt-6">
                    <Button variant="outline" className="w-full">
                      Google
                    </Button>
                    <Button variant="outline" className="w-full">
                      Facebook
                    </Button>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Auth;
