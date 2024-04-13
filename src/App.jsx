import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import RouteStack from "./router";

function App() {
  return (
    <>
      <BrowserRouter>
        <RouteStack />
      </BrowserRouter>
    </>
  );
}

export default App;
