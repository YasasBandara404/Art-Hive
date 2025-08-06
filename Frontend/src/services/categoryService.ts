import api from './api';

export interface Category {
  _id: string;
  name: string;
  slug: string;
  description?: string;
  image?: string;
  createdAt: string;
  updatedAt: string;
}

export interface CategoryWithProducts {
  category: Category;
  products: Array<any>; // Use actual Product type if available
}

const CategoryService = {
  getAllCategories: async (): Promise<Category[]> => {
    try {
      const response = await api.get('/categories');
      return response.data;
    } catch (error) {
      console.error('Get categories error:', error);
      throw error;
    }
  },
  
  getCategoryBySlug: async (slug: string): Promise<CategoryWithProducts> => {
    try {
      const response = await api.get(`/categories/${slug}`);
      return response.data;
    } catch (error) {
      console.error(`Get category ${slug} error:`, error);
      throw error;
    }
  },
  
  // Admin functions
  createCategory: async (categoryData: {
    name: string,
    description?: string,
    image?: string
  }) => {
    try {
      const response = await api.post('/categories', categoryData);
      return response.data;
    } catch (error) {
      console.error('Create category error:', error);
      throw error;
    }
  },
  
  updateCategory: async (id: string, categoryData: {
    name?: string,
    description?: string,
    image?: string
  }) => {
    try {
      const response = await api.put(`/categories/${id}`, categoryData);
      return response.data;
    } catch (error) {
      console.error('Update category error:', error);
      throw error;
    }
  },
  
  deleteCategory: async (id: string) => {
    try {
      const response = await api.delete(`/categories/${id}`);
      return response.data;
    } catch (error) {
      console.error('Delete category error:', error);
      throw error;
    }
  }
};

export default CategoryService;