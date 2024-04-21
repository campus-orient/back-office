import { BrowserRouter } from "react-router-dom";
import RouteStack from "./router";
import AuthProvider from "./context/auth";
import UsersProvider from "./context/tanstack/query/users";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <AuthProvider>
        <QueryClientProvider client={queryClient}>
          <UsersProvider>
            <BrowserRouter>
              <RouteStack />
            </BrowserRouter>
          </UsersProvider>
        </QueryClientProvider>
      </AuthProvider>
    </>
  );
}

export default App;
