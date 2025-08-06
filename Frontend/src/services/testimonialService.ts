import api from './api';

const TestimonialService = {
  getTestimonials: async () => {
    const response = await api.get('/testimonials');
    return response.data;
  },
  // Optionally add create/delete for admin
};

export default TestimonialService;