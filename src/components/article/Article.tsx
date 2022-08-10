import { FC, useState } from "react";

import { Button } from "react-bootstrap";
import Counter from "./Counter";
import IArticleProps from "../interfaces/IArticleProps";
import IReply from "../../common/interfaces/IReply";
import Replies from "./Replies";
import useAppContext from "../../hooks/useAppContext";

const Article: FC<IArticleProps> = (props): JSX.Element => {
  const { id, author, timeStamp, title, content } = props.article;

  const { items, setModalShow, intl } = useAppContext();

  const [showReplies, setShowReplies] = useState(false);

  const date = new Date(timeStamp).toLocaleDateString(intl);
  const filteredReplies = items.filter((reply: IReply) => reply.parent === id);
  const repliesAmount = filteredReplies.length;

  return (
    <article className="card">
      <header>
        <h4>{title}</h4>
        <section className="details">
          <i className="bi bi-person-circle"></i>
          <span>{author},&nbsp;</span>
          <span>{date}</span>
        </section>
      </header>
      <figure></figure>
      <main>
        <p>{content}</p>
        <footer>
          <Counter count={repliesAmount} />
          <Button variant="primary" size="sm" className="mx-2" onClick={() => setModalShow(true)}>
            Reply
          </Button>
          <Button variant="outline-primary" size="sm" onClick={() => setShowReplies(!showReplies)}>
            {showReplies ? "Hide Replies" : "Show Replies"}
          </Button>
        </footer>
      </main>
      {showReplies ? <Replies replies={filteredReplies} /> : null}
    </article>
  );
};

export default Article;
