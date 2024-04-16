import { BrowserRouter } from "react-router-dom";
import RouteStack from "./router";
import AuthProvider from "./context/auth";

function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <RouteStack />
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
