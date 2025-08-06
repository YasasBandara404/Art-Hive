import api from './api';

interface User {
  _id: string;
  name: string;
  email: string;
  isAdmin: boolean;
  isCreator?: boolean;
  profileImage?: string;
}

interface AuthResponse {
  user: User;
  token: string;
}

const AuthService = {
  register: async (name: string, email: string, password: string): Promise<AuthResponse> => {
    try {
      const response = await api.post('/auth/register', {
        name,
        email,
        password
      });
      
      if (response.data.token) {
        localStorage.setItem('userToken', response.data.token);
        // Store user object separately
        const userData = response.data.user || response.data;
        localStorage.setItem('user', JSON.stringify(userData));
      }
      
      return response.data;
    } catch (error) {
      console.error('Registration error:', error);
      throw error;
    }
  },
  
  login: async (email: string, password: string): Promise<AuthResponse> => {
    try {
      const response = await api.post('/auth/login', {
        email,
        password
      });
      
      if (response.data.token) {
        localStorage.setItem('userToken', response.data.token);
        // Store user object separately
        const userData = response.data.user || response.data;
        localStorage.setItem('user', JSON.stringify(userData));
      }
      
      return response.data;
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  },
  
  logout: () => {
    localStorage.removeItem('userToken');
    localStorage.removeItem('user');
  },
  
  getCurrentUser: (): User | null => {
    try {
      const userStr = localStorage.getItem('user');
      if (!userStr) return null;
      return JSON.parse(userStr);
    } catch (error) {
      console.error('Error getting current user:', error);
      // If there's an error parsing, clear the data
      localStorage.removeItem('user');
      return null;
    }
  },
  
  updateProfile: async (userData: { name?: string, email?: string, password?: string, bio?: string, profileImage?: string }): Promise<User> => {
    try {
      const response = await api.put('/auth/profile', userData);
      
      // Update stored user data
      if (response.data) {
        const currentUser = AuthService.getCurrentUser();
        const updatedUser = {...currentUser, ...response.data};
        localStorage.setItem('user', JSON.stringify(updatedUser));
      }
      
      return response.data;
    } catch (error) {
      console.error('Update profile error:', error);
      throw error;
    }
  },
};

export default AuthService;