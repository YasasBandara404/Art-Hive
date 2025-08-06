import api from './api';

export interface Product {
  _id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  images: string[];
  category: {
    _id: string;
    name: string;
    slug: string;
  };
  stock: number;
  reviews?: Array<{
    user: string;
    name: string;
    rating: number;
    comment: string;
    createdAt: string;
  }>;
  rating: number;
  numReviews: number;
  createdAt: string;
  updatedAt: string;
  tags?: string[];
}

export interface ProductsResponse {
  products: Product[];
  page: number;
  pages: number;
  total: number;
}

const ProductService = {
  getAllProducts: async (params?: { 
    page?: number,
    keyword?: string,
    category?: string,
    minPrice?: number,
    maxPrice?: number,
    sort?: string
  }): Promise<ProductsResponse> => {
    try {
      const response = await api.get('/products', { params });
      return response.data;
    } catch (error) {
      console.error('Get products error:', error);
      throw error;
    }
  },
  
  getProductBySlug: async (slug: string): Promise<Product> => {
    try {
      // Make sure we don't attempt to fetch with an empty slug
      if (!slug) throw new Error("Product slug is required");
      
      const response = await api.get(`/products/${slug}`);
      return response.data;
    } catch (error) {
      console.error(`Get product ${slug} error:`, error);
      throw error;
    }
  },
  
  getProductById: async (id: string): Promise<Product> => {
    try {
      const response = await api.get(`/products/id/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Get product by ID error:`, error);
      throw error;
    }
  },
  
  getTopProducts: async (): Promise<Product[]> => {
    try {
      const response = await api.get('/products/top');
      return response.data;
    } catch (error) {
      console.error('Get top products error:', error);
      throw error;
    }
  },
  
  getTrendingProducts: async () => {
    const res = await api.get('/products/trending');
    return res.data;
  },
  
  createReview: async (productId: string, rating: number, comment: string) => {
    try {
      const response = await api.post(`/products/${productId}/reviews`, {
        rating,
        comment
      });
      return response.data;
    } catch (error) {
      console.error('Create review error:', error);
      throw error;
    }
  },
  
  // Admin functions
  createProduct: async (productData: FormData) => {
    try {
      const response = await api.post('/products', productData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        timeout: 60000, // For larger files, extend timeout
      });
      return response.data;
    } catch (error) {
      console.error('Create product error:', error);
      throw error;
    }
  },
  
  updateProduct: async (id: string, productData: FormData) => {
    try {
      const response = await api.put(`/products/${id}`, productData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      return response.data;
    } catch (error) {
      console.error('Update product error:', error);
      throw error;
    }
  },
  
  deleteProduct: async (id: string) => {
    try {
      const response = await api.delete(`/products/${id}`);
      return response.data;
    } catch (error) {
      console.error('Delete product error:', error);
      throw error;
    }
  }
};

export default ProductService;