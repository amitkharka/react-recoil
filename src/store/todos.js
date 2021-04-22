import { atom } from 'recoil';

const todosState = atom({
  key: 'todos',
  default: [],
  // addNew: (todoData) => {
  //   set({ todos: [...get().todos, { ...todoData, id: UId() }] });
  //   // Alert on success addd
  //   useAlertStore.setState({ alert: { show: true, type: 'success', message: `Added ${todoData.label}` } });
  // },
  // removeTodo: (id) => set({ todos: get().todos.filter(item => item.id !== id) }),
  // removeAll: () => { },
  // getStorage: () => sessionStorage,
});

export default todosState;