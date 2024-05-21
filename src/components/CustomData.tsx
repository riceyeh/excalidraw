import React from "react";

import "./CustomData.scss";
import { AppState } from "../types";

type Props = {
  value: string | null;
  onChange: (value: string) => void;
  appState: AppState;
};

export const CustomData = React.forwardRef((props: Props, ref) => {
  const inputRef = React.useRef(null);

  React.useImperativeHandle(ref, () => inputRef.current);

  return (
    <div>
      <input
        spellCheck={false}
        className="custom-data-input"
        value={props.value === null ? "" : props.value}
        onChange={(event) => props.onChange(event.target.value)}
        ref={inputRef}
      />
    </div>
  );
});
