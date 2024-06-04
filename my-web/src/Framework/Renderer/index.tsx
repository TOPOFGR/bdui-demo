import type { FC } from "react";
import type { Component } from "@/types";

import ComponentMap from "../componentMap";

export type RendererProps = {
  component: Component<any>;
};

const Renderer: FC<RendererProps> = ({ component }) => {
  const { type, props, id } = component;

  const FrontendComponent = ComponentMap[type];

  const newProps = { ...props, id };

  return <FrontendComponent {...newProps} />;
};

export default Renderer;
