import React, { ReactNode } from "react";
import style from "./OpenGraphLayout.module.scss";

interface Props {
  children: ReactNode;
  className?: string;
}

// COMPONENT

const OpenGraphLayout = (props: Props) => {
  return (
    <div className={[style.container, props.className].join(" ")}>
      {props.children}
    </div>
  );
};

export default OpenGraphLayout;
