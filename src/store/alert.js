import { atom, selector } from 'recoil';

const alertState = atom({
  key: 'alert',
  default: {},
  // showAlert: (alertData) => set({ alert: alertData }),
  // hideAlert: () => set({ alert: {} }),
});


const alertSelector = atom({
  key: 'AlertSelector',
  set: ({ set }, param) => {
    set(alertState, param);
  }
});


export { alertState, alertSelector };