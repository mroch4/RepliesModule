import { FC } from "react";
import ICounterProps from "../interfaces/ICounterProps";

const Counter: FC<ICounterProps> = (props): JSX.Element => {
  const count = props.count;

  return (
    <span className="fw-bold">
      {count} comment{count === 1 ? "" : "s"}
    </span>
  );
};

export default Counter;
