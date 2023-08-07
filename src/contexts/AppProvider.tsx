import { Slot, component$, createContextId, useContext, useContextProvider, useStore } from "@builder.io/qwik";

type AppState = {
    count: number,
}

const initialState: AppState = {
    count: 1,
}

export const AppContext = createContextId<AppState>('app');
const AppProvider = component$(() => {
    const store = useStore<AppState>({
        ...initialState,
    });

    useContextProvider(
        AppContext,
        store,
    );
   
    return (
        <Slot />
    );
});

export default AppProvider;

export const useAppStore = () => {
    const state = useContext(AppContext);
    return state;
}