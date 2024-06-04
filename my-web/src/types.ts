export enum ComponentTypes {
  Row = "ui-row",
}

export type Component<T> = {
  id: string;
  type: ComponentTypes;
  props?: {} & T;
  children?: Array<Component<unknown>>;
};
