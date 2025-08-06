import api from './api';

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ContactMessage extends ContactForm {
  _id: string;
  status: 'new' | 'read' | 'replied' | 'closed';
  user?: string;
  createdAt: string;
  updatedAt: string;
}

const ContactService = {
  sendMessage: async (messageData: ContactForm) => {
    try {
      const response = await api.post('/contact', messageData);
      return response.data;
    } catch (error) {
      console.error('Send message error:', error);
      throw error;
    }
  },
  
  // Admin functions
  getMessages: async (params?: { page?: number }) => {
    try {
      const response = await api.get('/contact', { params });
      return response.data;
    } catch (error) {
      console.error('Get messages error:', error);
      throw error;
    }
  },
  
  updateMessageStatus: async (id: string, status: string) => {
    try {
      const response = await api.put(`/contact/${id}`, { status });
      return response.data;
    } catch (error) {
      console.error('Update message status error:', error);
      throw error;
    }
  }
};

export default ContactService;