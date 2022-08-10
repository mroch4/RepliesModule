import { FC } from "react";
import IReplyProps from "../interfaces/IReplyProps";
import useAppContext from "../../hooks/useAppContext";

const Controls: FC<IReplyProps> = (props): JSX.Element => {
  const item = props.reply;

  const { removeItem, setModalShow, upVote, downVote } = useAppContext();

  return (
    <section className="controls">
      <div className="d-flex me-3">
        <div className="d-flex me-2">
          <i className="bi bi-hand-thumbs-up" onClick={() => upVote(item)}></i>
          <span>{item.upVotes}</span>
        </div>
        <div className="d-flex me-2">
          <i className="bi bi-hand-thumbs-down" onClick={() => downVote(item)}></i>
          <span>{item.downVotes}</span>
        </div>
      </div>
      <div className="d-flex">
        <i className="bi bi-reply" onClick={() => setModalShow(true)}></i>
        <i className="bi bi-pencil mx-1" onClick={() => setModalShow(true)}></i>
        <i className="bi bi-trash3" onClick={() => removeItem(item)}></i>
      </div>
    </section>
  );
};

export default Controls;
