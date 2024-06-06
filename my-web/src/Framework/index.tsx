import type { FC } from "react";

import type { Component } from "@/types";

import Renderer from "./Renderer";

const Framework: FC<Component<any>> = (props) => {
  return <Renderer {...props} />;
};

export default Framework;
