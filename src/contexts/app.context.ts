import { $, useStore } from "@builder.io/qwik"
import { CombineStateAction } from "~/types/store.type"
import { useShared } from "./useShared"

type AppState = {
    count: number,
}

type AppAction = {
    setCount: (count: number) => void,
}

const initialState: AppState = {
    count: 1,
}

const _useApp = (): CombineStateAction<AppState, AppAction> => {
    const state = useStore<AppState>(initialState);

    const actions: AppAction = {
        setCount: $((count: number) => {
            state.count = count;
        })
    }

    return {
        state,
        ...actions,
    };
}

export const useAppStore = () => useShared(_useApp, 'app');