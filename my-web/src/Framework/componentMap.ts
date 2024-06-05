import Button from "@mui/material/Button";

import Row from "@/components/Row";
import { ComponentTypes } from "@/types";

const ComponentMap = {
  [ComponentTypes.Row]: Row,
  [ComponentTypes.Button]: Button,
};

export default ComponentMap;
