export type Component<T> = {
  id: string;
  type: string;
  props?: {} & T;
  children?: Array<Component<unknown>>;
};

export type Event = {
  type: string;
};

export type HomePageQueryParams = {
  country: string;
};

export type HomePage = {};

export enum Country {
  Argentina = 'ar',
  Uruguay = 'uy',
}
