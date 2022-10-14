import create from 'zustand';
import { mountStoreDevtool } from 'simple-zustand-devtools';
import { configurePersist } from 'zustand-persist';

const { persist } = configurePersist({
  storage: localStorage, // use `AsyncStorage` em react native
  rootKey: 'root', // opcional, o valor padrão é `root`
});

const userStore = create(persist(
  {
    key: 'user',
  },
  (set) => ({
    user: {
      isLogin: false,
      token: localStorage.getItem('ACCESS_TOKEN') || '',
    },
    setToken: (token) => set((store) => ({
      ...store,
      user: { ...store.user, token },
    })),
  }),
));

mountStoreDevtool('User', userStore);

export default userStore;
