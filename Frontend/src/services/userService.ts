import api from './api';

const UserService = {
  getUsers: async () => {
    const res = await api.get('/users');
    return res.data;
  },
  getUserById: async (id: string) => {
    const res = await api.get(`/users/${id}`);
    return res.data;
  },
  updateUser: async (id: string, data: any) => {
    const res = await api.put(`/users/${id}`, data);
    return res.data;
  },
  deleteUser: async (id: string) => {
    const res = await api.delete(`/users/${id}`);
    return res.data;
  }
};

export default UserService;