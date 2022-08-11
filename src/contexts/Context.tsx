import { FC, createContext, useState } from "react";

import IContext from "./interfaces/IContext";
import IContextProviderProps from "./interfaces/IContextProviderProps";
import IReply from "../common/interfaces/IReply";
import useLocalStorage from "../hooks/useLocalStorage";

export const AppContext = createContext<IContext | null>(null);

const ContextProvider: FC<IContextProviderProps> = ({ children }) => {
  const [replies, setReplies] = useLocalStorage("replies", []);
  const [showModal, setModalShow] = useState<boolean>(false);
  const [currentParentID, setCurrentParentID] = useState<string>("");

  const internationalization = "pl-PL";

  const createReply = (item: IReply) => {
    setReplies((prevRepository: IReply[]) => {
      return [...prevRepository, item];
    });
  };

  const deleteReply = (item: IReply) => {
    setReplies((prevRepository: IReply[]) => {
      return prevRepository.filter((element) => element.id !== item.id);
    });
  };

  const updateReply = (item: IReply) => {
    setReplies((prevRepository: IReply[]) => {
      const prev = prevRepository.filter((element) => element.id !== item.id);
      return [...prev, item];
    });
  };

  const contextValue = {
    internationalization,
    replies: replies,
    createReply: createReply,
    updateReply: updateReply,
    deleteReply: deleteReply,
    showModal: showModal,
    setModalShow: setModalShow,
    currentParentID: currentParentID,
    setCurrentParentID: setCurrentParentID,
  };

  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
};

export default ContextProvider;
