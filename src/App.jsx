import { BrowserRouter } from "react-router-dom";
import RouteStack from "./router";
import AuthProvider from "./context/auth";
import UsersProvider from "./context/tanstack/query/users";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import InterestsPlacesProvider from "./context/tanstack/query/interests-places";
import UsersLoginsProvider from "./context/tanstack/query/users-logins";

const queryClient = new QueryClient();

function App() {
  return (
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <UsersProvider>
          <UsersLoginsProvider>
            <InterestsPlacesProvider>
              <BrowserRouter>
                <RouteStack />
              </BrowserRouter>
            </InterestsPlacesProvider>
          </UsersLoginsProvider>
        </UsersProvider>
      </QueryClientProvider>
    </AuthProvider>
  );
}

export default App;
