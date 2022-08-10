import { FC } from "react";
import IReplyProps from "../interfaces/IReplyProps";
import useAppContext from "../../hooks/useAppContext";

const Details: FC<IReplyProps> = (props): JSX.Element => {
  const { firstName, lastName, timeStamp } = props.reply;

  const { intl } = useAppContext();

  const date = new Date(timeStamp).toLocaleString(intl);

  return (
    <div className="d-flex">
      <div className="replyHeader flex-sm-row">
        <span className="d-flex">{date}</span>
        <span className="d-none d-sm-flex">&nbsp;|&nbsp;</span>
        <span className="d-flex fw-bold">
          {firstName} {lastName}
        </span>
      </div>
    </div>
  );
};

export default Details;
