import type { FC } from "react";
import Renderer from "@/Framework/Renderer";
import { Component } from "@/types";

import styles from "./row.module.css";

export type RowProps = {
  items: Array<Component<any>>;
};

const Row: FC<RowProps> = ({ items }) => (
  <div className={styles.row}>
    {items.map((itemProps) => (
      <div key={itemProps.id} className={styles.item}>
        <Renderer {...itemProps} />
      </div>
    ))}
  </div>
);

export default Row;
