import ContextProvider from "../contexts/Context";
import { FC } from "react";
import Layout from "./_Layout";

const App: FC = (): JSX.Element => {
  return (
    <ContextProvider>
      <Layout />
    </ContextProvider>
  );
};

export default App;
