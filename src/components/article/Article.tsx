import { FC, useState } from "react";

import { Button } from "react-bootstrap";
import Counter from "./Counter";
import IArticleProps from "../interfaces/IArticleProps";
import IReply from "../../common/interfaces/IReply";
import Replies from "./Replies";
import useAppContext from "../../hooks/useAppContext";

const Article: FC<IArticleProps> = (props): JSX.Element => {
  const { id, author, timeStamp, title, content } = props.article;

  const { internationalization, replies, setModalShow, setCurrentParentID } = useAppContext();

  const [showReplies, setShowReplies] = useState<boolean>(true);

  const dateFormatted = new Date(timeStamp).toLocaleDateString(internationalization);
  const repliesFiltered = replies.filter((reply: IReply) => reply.parent === id);
  const repliesAmount = repliesFiltered.length;

  const handleOnClick = () => {
    setCurrentParentID(id);
    setModalShow(true);
  };

  return (
    <article className="card">
      <header>
        <h4>{title}</h4>
        <section className="details">
          <i className="bi bi-person-circle"></i>
          <span>{author},&nbsp;</span>
          <span>{dateFormatted}</span>
        </section>
      </header>
      <figure></figure>
      <main>
        <p>{content}</p>
        <footer>
          <Counter count={repliesAmount} />
          <Button variant="primary" size="sm" className="ms-2" onClick={handleOnClick}>
            Reply
          </Button>
          {repliesAmount > 0 ? (
            <Button variant="outline-primary" className="ms-2" size="sm" onClick={() => setShowReplies(!showReplies)}>
              {showReplies ? "Hide Replies" : "Show Replies"}
            </Button>
          ) : null}
        </footer>
      </main>
      {repliesAmount > 0 ? showReplies ? <Replies replies={repliesFiltered} /> : null : null}
    </article>
  );
};

export default Article;
