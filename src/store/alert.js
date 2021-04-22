import { atom } from 'recoil';

const alertState = atom({
  key: 'alert',
  default: {},
  // showAlert: (alertData) => set({ alert: alertData }),
  // hideAlert: () => set({ alert: {} }),
});

export default alertState;