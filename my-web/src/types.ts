export enum ComponentTypes {
  Row = "ui-row",
  Button = "mui-button",
  Card = "mui-card",
  CardContent = "mui-card-content",
  CardHeader = "mui-card-header",
  Text = "mui-text",
}

export type Component<T> = {
  id: string;
  type: ComponentTypes;
  props?: {} & T;
  children?: Array<Component<unknown>>;
};
