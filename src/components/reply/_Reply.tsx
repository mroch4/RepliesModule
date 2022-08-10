import Avatar from "./Avatar";
import Controls from "./Controls";
import Details from "./Details";
import { FC } from "react";
import IReplyProps from "../interfaces/IReplyProps";

const Reply: FC<IReplyProps> = (props): JSX.Element => {
  const reply = props.reply;

  return (
    <section className="reply">
      <Avatar reply={reply} />
      <main>
        <section>
          <Details reply={reply} />
          <p>{reply.content}</p>
        </section>
        <Controls reply={reply} />
      </main>
    </section>
  );
};

export default Reply;
