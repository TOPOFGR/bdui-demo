export enum ComponentTypes {
  Row = "ui-row",
  Button = "mui-button",
  Card = "mui-card",
}

export type Component<T> = {
  id: string;
  type: ComponentTypes;
  props?: {} & T;
  children?: Array<Component<unknown>>;
};
