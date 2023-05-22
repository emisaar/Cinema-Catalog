import React from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "routes/router";
import {AppContainer} from "./appStyles";

const App = () => {
  return (
    <AppContainer>
      <RouterProvider router={router} />
    </AppContainer>
  );
};

export default App;
