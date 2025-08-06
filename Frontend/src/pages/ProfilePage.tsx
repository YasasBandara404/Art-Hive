import { useState } from "react";
import Layout from "@/components/common/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/components/ui/use-toast";
import { useNavigate } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useApiQuery } from "@/hooks/useFetch";
import OrderService from "@/services/orderService";

const ProfilePage = () => {
  const { user, updateProfile, logout } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();

  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    password: "",
    confirmPassword: "",
    bio: user?.bio || ""
  });

  const { data: orders, isLoading: ordersLoading } = useApiQuery(
    ['myOrders'],
    () => OrderService.getMyOrders(),
    {
      enabled: !!user,
    }
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setProfileData(prev => ({ ...prev, [name]: value }));
  };

  const handleUpdateProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (profileData.password && profileData.password !== profileData.confirmPassword) {
      toast({
        title: "Passwords don't match",
        variant: "destructive"
      });
      return;
    }

    try {
      const updateData = {
        name: profileData.name,
        email: profileData.email,
        bio: profileData.bio
      };

      if (profileData.password) {
        updateData["password"] = profileData.password;
      }

      await updateProfile(updateData);
      
      toast({
        title: "Profile updated successfully"
      });
      
      setIsEditing(false);
      setProfileData(prev => ({ ...prev, password: "", confirmPassword: "" }));
    } catch (error) {
      toast({
        title: "Failed to update profile",
        description: "Please try again later",
        variant: "destructive"
      });
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/auth');
    toast({
      title: "Logged out successfully"
    });
  };

  if (!user) {
    navigate('/auth');
    return null;
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric', 
      month: 'short', 
      day: 'numeric'
    });
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('si-LK', { 
      style: 'currency', 
      currency: 'LKR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0 
    }).format(price);
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">My Profile</h1>
        
        <Tabs defaultValue="profile" className="space-y-6">
          <TabsList className="grid w-full max-w-md grid-cols-3">
            <TabsTrigger value="profile">Profile</TabsTrigger>
            <TabsTrigger value="orders">Orders</TabsTrigger>
            <TabsTrigger value="downloads">Downloads</TabsTrigger>
          </TabsList>
          
          <TabsContent value="profile" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Personal Information</CardTitle>
              </CardHeader>
              <CardContent>
                {isEditing ? (
                  <form onSubmit={handleUpdateProfile} className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={profileData.name}
                        onChange={handleInputChange}
                        className="w-full h-10 px-3 rounded-md border border-input focus:outline-none focus:ring-2 focus:ring-ct-blue-500"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={profileData.email}
                        onChange={handleInputChange}
                        className="w-full h-10 px-3 rounded-md border border-input focus:outline-none focus:ring-2 focus:ring-ct-blue-500"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="bio" className="block text-sm font-medium text-gray-700 mb-1">
                        Bio
                      </label>
                      <textarea
                        id="bio"
                        name="bio"
                        value={profileData.bio}
                        onChange={handleInputChange}
                        rows={3}
                        className="w-full px-3 py-2 rounded-md border border-input focus:outline-none focus:ring-2 focus:ring-ct-blue-500"
                      ></textarea>
                    </div>
                    
                    <div>
                      <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                        New Password (leave blank to keep current)
                      </label>
                      <input
                        id="password"
                        name="password"
                        type="password"
                        value={profileData.password}
                        onChange={handleInputChange}
                        className="w-full h-10 px-3 rounded-md border border-input focus:outline-none focus:ring-2 focus:ring-ct-blue-500"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                        Confirm New Password
                      </label>
                      <input
                        id="confirmPassword"
                        name="confirmPassword"
                        type="password"
                        value={profileData.confirmPassword}
                        onChange={handleInputChange}
                        className="w-full h-10 px-3 rounded-md border border-input focus:outline-none focus:ring-2 focus:ring-ct-blue-500"
                      />
                    </div>
                    
                    <div className="flex space-x-2">
                      <Button type="submit" className="bg-ct-blue-500 hover:bg-ct-blue-600">
                        Save Changes
                      </Button>
                      <Button type="button" variant="outline" onClick={() => setIsEditing(false)}>
                        Cancel
                      </Button>
                    </div>
                  </form>
                ) : (
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm font-medium text-gray-500">Full Name</p>
                      <p className="text-base">{user.name}</p>
                    </div>
                    
                    <div>
                      <p className="text-sm font-medium text-gray-500">Email Address</p>
                      <p className="text-base">{user.email}</p>
                    </div>
                    
                    {user.bio && (
                      <div>
                        <p className="text-sm font-medium text-gray-500">Bio</p>
                        <p className="text-base">{user.bio}</p>
                      </div>
                    )}
                    
                    <div className="flex space-x-2">
                      <Button onClick={() => setIsEditing(true)} className="bg-ct-blue-500 hover:bg-ct-blue-600">
                        Edit Profile
                      </Button>
                      
                      {user.isAdmin && (
                        <Button 
                          onClick={() => navigate('/admin')} 
                          className="bg-purple-600 hover:bg-purple-700 text-white"
                        >
                          Admin Dashboard
                        </Button>
                      )}
                      
                      <Button variant="outline" onClick={handleLogout}>
                        Logout
                      </Button>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="orders">
            <Card>
              <CardHeader>
                <CardTitle>Order History</CardTitle>
              </CardHeader>
              <CardContent>
                {ordersLoading ? (
                  <p className="text-center py-6 text-gray-500">Loading your orders...</p>
                ) : !orders || orders.length === 0 ? (
                  <div className="text-center py-8">
                    <p className="text-gray-500 mb-4">You haven't placed any orders yet.</p>
                    <Button 
                      onClick={() => navigate('/')} 
                      className="bg-ct-blue-500 hover:bg-ct-blue-600"
                    >
                      Browse Products
                    </Button>
                  </div>
                ) : (
                  <div className="divide-y">
                    {orders.map((order) => (
                      <div key={order._id} className="py-4">
                        <div className="flex justify-between items-center mb-2">
                          <div>
                            <h4 className="font-medium">Order #{order._id.substring(0, 8)}</h4>
                            <p className="text-sm text-gray-500">{formatDate(order.createdAt)}</p>
                          </div>
                          <div>
                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                              order.status === 'completed' 
                                ? 'bg-green-100 text-green-800'
                                : order.status === 'pending'
                                ? 'bg-yellow-100 text-yellow-800'
                                : 'bg-blue-100 text-blue-800'
                            }`}>
                              {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                            </span>
                          </div>
                        </div>
                        
                        <p className="text-sm mb-2">
                          <span className="font-medium">Total:</span> {formatPrice(order.totalPrice)}
                        </p>
                        
                        <div className="mt-2">
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => navigate(`/orders/${order._id}`)}
                          >
                            View Details
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="downloads">
            <Card>
              <CardHeader>
                <CardTitle>My Downloads</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <p className="text-gray-500 mb-4">Your downloads will appear here after purchase.</p>
                  <Button 
                    onClick={() => navigate('/')} 
                    className="bg-ct-blue-500 hover:bg-ct-blue-600"
                  >
                    Browse Products
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default ProfilePage;