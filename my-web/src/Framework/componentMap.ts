import type { FC } from "react";

import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Typography from "@mui/material/Typography";

import Row from "@/components/Row";
import { ComponentTypes } from "@/types";

const ComponentMap: Record<ComponentTypes, FC<any>> = {
  [ComponentTypes.Row]: Row,
  [ComponentTypes.Button]: Button,
  [ComponentTypes.Card]: Card,
  [ComponentTypes.CardContent]: CardContent,
  [ComponentTypes.CardHeader]: CardHeader,
  [ComponentTypes.Text]: Typography,
};

export default ComponentMap;
