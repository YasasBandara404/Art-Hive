import api from './api';

export interface DashboardStats {
  productCount: number;
  orderCount: number;
  userCount: number;
  totalSales: number;
  recentOrders?: any[];  // Adjust based on your actual data
  recentUsers?: any[];   // Adjust based on your actual data
}

const AdminService = {
  getDashboardStats: async (): Promise<DashboardStats> => {
    try {
      const response = await api.get('/admin/stats');
      return response.data;
    } catch (error) {
      console.error('Get admin dashboard stats error:', error);
      throw error;
    }
  },
  
  getAdminProducts: async () => {
    try {
      const response = await api.get('/admin/products');
      return response.data;
    } catch (error) {
      console.error('Get admin products error:', error);
      throw error;
    }
  },
  
  getAdminOrders: async () => {
    try {
      const response = await api.get('/admin/orders');
      return response.data;
    } catch (error) {
      console.error('Get admin orders error:', error);
      throw error;
    }
  }
};

export default AdminService;