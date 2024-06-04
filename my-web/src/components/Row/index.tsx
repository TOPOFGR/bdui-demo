import type { FC } from "react";

type RowProps = {
  content: string;
};

const Row: FC<RowProps> = ({ content }) => {
  return <div>This is my Row content: {content}</div>;
};

export default Row;
