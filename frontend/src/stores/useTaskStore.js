import create from 'zustand';

const useTaskStore = create((set) => ({
  task: [],
  completedTask: {},
  removeAllBears: () => set({ bears: 0 }),
}));

export default useTaskStore;
