export type Component<T> = {
  id: string;
  type: string;
  props?: {} & T;
  children?: Array<Component<unknown>>;
};

export type Event = {
  type: string;
};

export type HomePage = {};
