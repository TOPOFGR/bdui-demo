export enum ComponentTypes {
  Row = "ui-row",
  Button = "mui-button",
}

export type Component<T> = {
  id: string;
  type: ComponentTypes;
  props?: {} & T;
  children?: Array<Component<unknown>>;
};
