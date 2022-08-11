import { FC, useState } from "react";

import { Form } from "react-bootstrap";
import IRepliesProps from "../interfaces/IRepliesProps";
import IReply from "../../common/interfaces/IReply";
import Reply from "../reply/_Reply";
import SORTING_OPTIONS from "../../common/SortingOptions";

const Replies: FC<IRepliesProps> = (props): JSX.Element => {
  const replies = props.replies;

  const [currentSortingOption, setCurrentSortingOption] = useState<string>(SORTING_OPTIONS.NEWEST_FIRST);

  replies.sort((a: IReply, b: IReply) => {
    if (currentSortingOption === SORTING_OPTIONS.OLDEST_FIRST) return a.timeStamp - b.timeStamp;
    if (currentSortingOption === SORTING_OPTIONS.NEWEST_FIRST) return b.timeStamp - a.timeStamp;
    if (currentSortingOption === SORTING_OPTIONS.HIGHEST_UPVOTES_FIRST) return b.upVotes - a.upVotes;
    if (currentSortingOption === SORTING_OPTIONS.HIGHEST_DOWNVOTES_FIRST) return b.downVotes - a.downVotes;
    return 0;
  });

  return (
    <section className="replies">
      <hr></hr>
      <div className="sorting">
        <Form.Select value={currentSortingOption} onChange={(e) => setCurrentSortingOption(e.target.value)}>
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
    </section>
  );
};

export default Replies;
