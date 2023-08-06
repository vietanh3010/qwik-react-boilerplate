/** @jsxImportSource react */
import { qwikify$ } from "@builder.io/qwik-react";

const Head = (): JSX.Element => {
    
    return (
        <head>
            <div className="bg-primary p-2 hover:bg-secondary border-2 border-solid border-blue-500 text-[50px] text-[pink]">head</div>

           
        </head>
    )
}

export default qwikify$(Head);