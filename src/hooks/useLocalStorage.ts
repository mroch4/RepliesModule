import { useEffect, useState } from "react";

import IReply from "../common/interfaces/IReply";

const useLocalStorage = (key: string, defaultValue: IReply[]) => {
  const [value, setValue] = useState(() => {
    const jsonValue = localStorage.getItem(key);

    if (jsonValue != null) return JSON.parse(jsonValue);

    return defaultValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};

export default useLocalStorage;
