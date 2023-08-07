import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Speak } from "qwik-speak";
import Greeting from "~/components/views/Greeting";
import AppProvider from "~/contexts/AppProvider";

export default component$(() => {

    return (
        <Speak assets={['home']}>
            <AppProvider>
                <Greeting/>
            </AppProvider>
        </Speak>
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
