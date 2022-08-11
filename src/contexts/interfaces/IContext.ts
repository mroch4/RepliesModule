import IReply from "../../common/interfaces/IReply";

interface IContext {
  internationalization: string;
  replies: IReply[];
  createReply: (reply: IReply) => void;
  updateReply: (reply: IReply) => void;
  deleteReply: (reply: IReply) => void;
  showModal: boolean;
  setModalShow: (show: boolean) => void;
  currentParentID: string;
  setCurrentParentID: (id: string) => void;
}

export default IContext;
