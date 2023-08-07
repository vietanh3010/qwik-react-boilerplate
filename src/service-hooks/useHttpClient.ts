import { type NoSerialize, noSerialize, useStore, useVisibleTask$ } from "@builder.io/qwik";
import axios, { type AxiosInstance } from "axios";

// const axiosInstance = () => axios.create();
type ResultHttpClient = {
    axiosInstance: NoSerialize<AxiosInstance>;
}
export const useHttpClient = (): ResultHttpClient => {
    const store = useStore<{ axiosInstance: NoSerialize<AxiosInstance> }>({
        axiosInstance: undefined
    })
    // const axiosInstance = instance//noSerialize(instance);clear

    useVisibleTask$(() => {
        const axiosInstance = axios.create();
        store.axiosInstance = noSerialize(axiosInstance);

        store.axiosInstance?.interceptors.response.use(
            (response) => {
                return response.data;
            },
            (error) => {
                if (error?.response?.status === 401) {
                    //
                }

                return Promise.reject(error);
            },
        )
        store.axiosInstance?.interceptors.request.use(
            (config) => {
                // config.headers.Authorization = `Bearer ${localStorage.getItem(AppConfig.ACCESS_TOKEN) ?? ''}`;
                return config
            },
            (error) => {
                return Promise.reject(error);
            },
        )
    });

    return store;
}