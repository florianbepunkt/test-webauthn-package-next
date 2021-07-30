import React from "react";
import { useSomeLogic } from "./some.compoent.logic";
export const SomeComponent = () => {
    const { data, handleAuth } = useSomeLogic();
    return (React.createElement(React.Fragment, null,
        React.createElement("button", { type: "button", onClick: () => alert(data) }, "Klick me")));
};
