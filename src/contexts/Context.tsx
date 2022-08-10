import { FC, createContext, useState } from "react";

import IContext from "./interfaces/IContext";
import IContextProviderProps from "./interfaces/IContextProviderProps";
import IReply from "../common/interfaces/IReply";
import useLocalStorage from "../hooks/useLocalStorage";

export const AppContext = createContext<IContext | null>(null);

const ContextProvider: FC<IContextProviderProps> = ({ children }) => {
  const [items, setItems] = useLocalStorage("replies", []);
  const [showModal, setModalShow] = useState(false);

  const intl = "de-DE";

  const addItem = (item: IReply) => {
    setItems((prevRepository: IReply[]) => {
      return [...prevRepository, item];
    });
  };

  const removeItem = (item: IReply) => {
    setItems((prevRepository: IReply[]) => {
      return prevRepository.filter((element) => element.id !== item.id);
    });
  };

  const upVote = (item: IReply) => {
    item.upVotes++;
    setItems((prevRepository: IReply[]) => {
      const prev = prevRepository.filter((element) => element.id !== item.id);
      return [...prev, item];
    });
  };

  const downVote = (item: IReply) => {
    item.downVotes++;
    setItems((prevRepository: IReply[]) => {
      const prev = prevRepository.filter((element) => element.id !== item.id);
      return [...prev, item];
    });
  };

  const contextValue = {
    items: items,
    addItem: addItem,
    removeItem: removeItem,
    showModal: showModal,
    setModalShow: setModalShow,
    intl,
    upVote,
    downVote,
  };

  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
};

export default ContextProvider;
