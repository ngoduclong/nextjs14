import { create } from 'zustand';

type TExampleState = {
  count: number;
};
type TExampleActions = {
  increase: (by: number) => void;
  decrease: (by: number) => void;
};
type ExampleStore = TExampleState & TExampleActions;

const defaultState: TExampleState = {
  count: 0,
};

const useExampleStore = create<ExampleStore>((set) => ({
  ...defaultState,
  increase: (by) => set((state) => ({ count: state.count + by })),
  decrease: (by) => set((state) => ({ count: state.count - by })),
}));

export default useExampleStore;
