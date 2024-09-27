import { Routes, Route } from "react-router-dom";
import AppLayout from "../layout";
import HomeView from "../views/home";
import LoginView from "../views/auth/login";
import UsersLogins from "../views/users-logins";
import UsersView from "../views/users/layout";

const RouteStack = () => {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<HomeView />} />
        <Route path="auth/login" element={<LoginView />} />
        <Route path="users" element={<UsersView />} />
        {/* <Route path="*" element={<NoPage />} /> */}
      </Route>
    </Routes>
  );
};

export default RouteStack;
