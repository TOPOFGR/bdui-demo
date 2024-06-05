import type { FC } from "react";
import type { Component } from "@/types";

import ComponentMap from "../componentMap";

const Renderer: FC<Component<any>> = ({ type, props, id, children }) => {
  const FrontendComponent = ComponentMap[type];

  const newProps = { ...props, id };

  console.log("children", children);

  if (children && children.length > 0) {
    return (
      <FrontendComponent {...newProps}>
        {children.map((childrenProps) => (
          <Renderer {...childrenProps} key={childrenProps.id} />
        ))}
      </FrontendComponent>
    );
  }

  console.log("Sin HIJOS", id);

  return <FrontendComponent {...newProps} />;
};

export default Renderer;
