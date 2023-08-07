import { Resource, component$, useResource$ } from "@builder.io/qwik";
import { Image } from '@unpic/qwik';
import { useTranslate } from "qwik-speak";
import { useAppStore } from "~/contexts/AppProvider";
import { useHttpClient } from "~/service-hooks/useHttpClient";

const Greeting = component$(() => {
  const state = useAppStore();
  const httpClientStore = useHttpClient();
  const t = useTranslate();

  const productData = useResource$<any>(async ({ track }) => {
      track(() => state.count);
      track(() => httpClientStore.axiosInstance)
      const response = await httpClientStore.axiosInstance?.get(`https://dummyjson.com/products/${state.count}`)
      // const response = await fetch(
      //   `https://dummyjson.com/products/${state.count}`
      // );
      return response
  });
    return (
        <div>
            {t('home.test')}
            <button onClick$={() => state.count += 1}>
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
    )
})

export default Greeting;