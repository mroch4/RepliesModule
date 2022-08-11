import { useEffect, useState } from "react";

import IReply from "../common/interfaces/IReply";

const useLocalStorage = (key: string, defaultValue: IReply[]) => {
  const [value, setValue] = useState(() => {
    const jsonValue = localStorage.getItem(key);

    if (jsonValue != null) return JSON.parse(jsonValue);

    return defaultValue;
  });

  useEffect(() => {
    const val = JSON.stringify(value);
    localStorage.setItem(key, val);

    const length = val.length;
    const size = ((2 * length) / 1024).toFixed(2);
    console.log(`Lenght: ${length}, Size: ${size} kB`);
  }, [key, value]);

  return [value, setValue];
};

export default useLocalStorage;
