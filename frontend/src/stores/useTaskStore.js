import create from 'zustand';

const useTaskStore = create((set) => ({
  tasks: [],
  addManyTasks: (tasks) => set({ tasks }),
  completedOneTask: (id) => set((state) => {
    const newTasks = state.tasks?.map((task) => {
      if (task.id === id) return { ...task, status: 1 };
      return task;
    });

    return newTasks;
  }),
  removeAllTasks: () => set({ tasks: [] }),
}));

export default useTaskStore;
