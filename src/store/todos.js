import { atom, selector } from 'recoil';
import { alertState } from './';

const UId = () => '_' + Math.random().toString(36).substr(2, 9);

export const todosState = atom({
  key: 'todos',
  default: [],
});

export const todoSelector = selector({
  key: 'TodoSelector',
  // get: ({get}) => get(todosState),
  set: ({ get, set, reset }, { type, payload }) => {

    switch (type) {
      case 'ADD_ITEM':
        set(todosState, [...get(todosState), { id: UId(), ...payload }]);
        set(alertState, { message: `Added ${payload.label}` });
        break;
      case 'DELETE':
        set(todosState, get(todosState).filter(item => item.id !== payload))
        break;
      case 'DELETE_ALL':
        reset(todosState);
        break;
      case 'SAMPLE_FETCH':
        console.log(payload);
        break;
      default:
        break;
    }
  }
})