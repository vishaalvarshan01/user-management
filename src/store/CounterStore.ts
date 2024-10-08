import {create} from 'zustand';

type CounterState = {
    count: number;
    increment: () => void;
    decrement: () => void;
    reset: () => void;
}


export const useStore = create<CounterState>((set) => ({
    count: 1,
    increment: () => set((state) => ({count: state.count + 1})),
    decrement: () => set((state) => ({count: state.count - 1})),
    reset: () => set(() => ({count : 0}))
}));

export default useStore;
