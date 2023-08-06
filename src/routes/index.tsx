import { component$, Resource, useResource$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { useAppStore } from "~/contexts/app.context";
import { useHttpClient } from "~/service-hooks/useHttpClient";
import { Image } from '@unpic/qwik';

export default component$(() => {
    const {setCount, state} = useAppStore();
    const httpClientStore = useHttpClient();

    const productData = useResource$<any>(async ({ track, cleanup }) => {
        track(() => state.count);
        track(() => httpClientStore.axiosInstance)
        const response = await httpClientStore.axiosInstance?.get(`https://dummyjson.com/products/${state.count}`)
        // const response = await fetch(
        //   `https://dummyjson.com/products/${state.count}`
        // );
        return response
    });


    return (
        <div class="bg-slate-200">
            main page
            <button onClick$={() => setCount(state.count + 1)}>
                Click me {state.count}
            </button>

            <Resource
                value={productData}
                onPending={() => <>loading...</>}
                onResolved={(data: any) => (
                <div>
                    {
                        data && 
                        <>
                            <span>{data.title}</span>
                            <Image
                                src={data.thumbnail}
                                layout="constrained"
                                alt={data.description}
                            />
                        </>
                    }
                </div>
                )}
            />
        </div>
    );
});

export const head: DocumentHead = {
    title: "Welcome to Qwik",
    meta: [
        {
            name: "description",
            content: "Qwik site description",
        },
    ],
};
