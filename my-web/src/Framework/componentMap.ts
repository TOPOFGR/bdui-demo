import type { FC } from "react";

import Button from "@mui/material/Button";
import Card from "@mui/material/Card";

import Row from "@/components/Row";
import { ComponentTypes } from "@/types";

const ComponentMap: Record<ComponentTypes, FC<any>> = {
  [ComponentTypes.Row]: Row,
  [ComponentTypes.Button]: Button,
  [ComponentTypes.Card]: Card,
};

export default ComponentMap;
