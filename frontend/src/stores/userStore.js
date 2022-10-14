import create from 'zustand';

const userStore = create((set) => ({
  user: {
    isLogin: false,
    token: localStorage.getItem('ACCESS_TOKEN') || '',
  },
  setToken: (token) => set((store) => ({
    ...store,
    user: { ...store.user, token },
  })),
}));

export default userStore;
