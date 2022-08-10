import IReply from "../../common/interfaces/IReply";

interface IContext {
  items: IReply[];
  addItem: (item: IReply) => void;
  removeItem: (item: IReply) => void;
  showModal: boolean;
  setModalShow: (show: boolean) => void;
  intl: string;
  upVote: (item: IReply) => void;
  downVote: (item: IReply) => void;
}

export default IContext;
