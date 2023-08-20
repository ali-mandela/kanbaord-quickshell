import ReactDOM from "react-dom";
import React, { StrictMode } from "react";
import Header from "./components/Header/Header";
import Text from "./components/GroupandOrder";

const App = () => {
  return (
    <>
      <Header />
      <Text />
    </>
  );
};

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);
root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
