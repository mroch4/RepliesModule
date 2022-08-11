import { FC } from "react";
import IReply from "../../common/interfaces/IReply";
import IReplyProps from "../interfaces/IReplyProps";
import RATING from "../../common/RatingEnum";
import useAppContext from "../../hooks/useAppContext";

const Controls: FC<IReplyProps> = (props): JSX.Element => {
  const item = props.reply;

  const { updateReply, deleteReply, setModalShow, setCurrentParentID } = useAppContext();

  const vote = (reply: IReply, rating: RATING) => {
    if (rating === RATING.UPVOTE) reply.upVotes++;
    if (rating === RATING.DOWNVOTE) reply.downVotes++;
    updateReply(reply);
  };

  const handleOnClick = () => {
    setCurrentParentID(item.id);
    setModalShow(true);
  };

  return (
    <section className="controls">
      <section className="vote">
        <section>
          <i className="bi bi-hand-thumbs-up" onClick={() => vote(item, RATING.UPVOTE)}></i>
          <span>{item.upVotes}</span>
        </section>
        <section>
          <i className="bi bi-hand-thumbs-down" onClick={() => vote(item, RATING.DOWNVOTE)}></i>
          <span>{item.downVotes}</span>
        </section>
      </section>
      <section className="manipulate">
        <i className="bi bi-reply" onClick={() => setModalShow(true)}></i>
        <i className="bi bi-pencil mx-1" onClick={handleOnClick}></i>
        <i className="bi bi-trash3" onClick={() => deleteReply(item)}></i>
      </section>
    </section>
  );
};

export default Controls;
