import React from "react";
import { useSomeLogic } from "./some.compoent.logic";

export const SomeComponent: React.FC = () => {
  const { data, handleAuth } = useSomeLogic();

  return (
    <React.Fragment>
      <button type="button" onClick={() => alert(data)}>
        Klick me
      </button>
    </React.Fragment>
  );
};
