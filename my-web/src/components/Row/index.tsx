import type { FC } from "react";
import Renderer from "@/Framework/Renderer";
import { Component } from "@/types";

import styles from "./row.module.css";

export type RowProps = {
  items: Array<Component<any>>;
};

const Row: FC<RowProps> = ({ items }) => (
  <div className={styles.row}>
    {items.map(({ id, ...otherProps }) => (
      <div key={id} className={styles.item}>
        <Renderer component={{ ...otherProps, id }} />
      </div>
    ))}
  </div>
);

export default Row;
