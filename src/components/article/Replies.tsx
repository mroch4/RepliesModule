import { FC, useState } from "react";

import { Form } from "react-bootstrap";
import IRepliesProps from "../interfaces/IRepliesProps";
import IReply from "../../common/interfaces/IReply";
import Reply from "../reply/_Reply";

const SORTING_OPTIONS = {
  NEWEST_FIRST: "Newest first",
  OLDEST_FIRST: "Oldest first",
  HIGHEST_UPVOTES_FIRST: "Highest upvotes first",
  HIGHEST_DOWNVOTES_FIRST: "Highest downvotes first",
};

const Replies: FC<IRepliesProps> = (props): JSX.Element => {
  const replies = props.replies;

  const [sorting, setSoring] = useState(SORTING_OPTIONS.OLDEST_FIRST);

  replies.sort((a: IReply, b: IReply) => {
    if (sorting === SORTING_OPTIONS.OLDEST_FIRST) return a.timeStamp - b.timeStamp;
    if (sorting === SORTING_OPTIONS.NEWEST_FIRST) return b.timeStamp - a.timeStamp;
    if (sorting === SORTING_OPTIONS.HIGHEST_UPVOTES_FIRST) return b.upVotes - a.upVotes;
    if (sorting === SORTING_OPTIONS.HIGHEST_DOWNVOTES_FIRST) return b.downVotes - a.downVotes;
    return 0;
  });

  return (
    <>
      {replies.length !== 0 ? <hr></hr> : null}
      <div className="d-flex justify-content-end mx-3">
        <Form.Select onChange={(e) => setSoring(e.target.value)}>
          {Object.entries(SORTING_OPTIONS).map(([key, value]) => (
            <option key={key} value={value}>
              {value}
            </option>
          ))}
        </Form.Select>
      </div>

      {replies.map((reply: IReply) => {
        return <Reply key={reply.id} reply={reply} />;
      })}
    </>
  );
};

export default Replies;
