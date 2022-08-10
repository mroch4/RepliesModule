import ARTICLES from "../common/database/Articles";
import Article from "./article/Article";
import { FC } from "react";
import IArticle from "../common/interfaces/IArticle";
import Popup from "./Popup";

const Layout: FC = (): JSX.Element => {
  return (
    <div className="container mt-3">
      {ARTICLES.sort((a: IArticle, b: IArticle) => {
        return b.timeStamp - a.timeStamp;
      }).map((article: IArticle) => {
        return <Article key={article.id} article={article} />;
      })}
      <Popup />
    </div>
  );
};

export default Layout;
