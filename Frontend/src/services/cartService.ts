import api from './api';

export interface CartItem {
  product: {
    _id: string;
    name: string;
    price: number;
    images: string[];
    slug: string;
    description?: string;
  };
  quantity: number;
}

export interface Cart {
  _id: string;
  user: string;
  items: CartItem[];
  totalPrice: number;
}

const CartService = {
  getCart: async (): Promise<Cart> => {
    try {
      const response = await api.get('/cart');
      return response.data;
    } catch (error) {
      console.error('Get cart error:', error);
      throw error;
    }
  },
  
  addToCart: async (productId: string, quantity: number = 1): Promise<Cart> => {
    try {
      const response = await api.post('/cart', { productId, quantity });
      return response.data;
    } catch (error) {
      console.error('Add to cart error:', error);
      throw error;
    }
  },
  
  updateCartItem: async (productId: string, quantity: number): Promise<Cart> => {
    try {
      const response = await api.put(`/cart/${productId}`, { quantity });
      return response.data;
    } catch (error) {
      console.error('Update cart error:', error);
      throw error;
    }
  },
  
  removeFromCart: async (productId: string): Promise<Cart> => {
    try {
      const response = await api.delete(`/cart/${productId}`);
      return response.data;
    } catch (error) {
      console.error('Remove from cart error:', error);
      throw error;
    }
  },
  
  clearCart: async () => {
    try {
      const response = await api.delete('/cart');
      return response.data;
    } catch (error) {
      console.error('Clear cart error:', error);
      throw error;
    }
  }
};

export default CartService;