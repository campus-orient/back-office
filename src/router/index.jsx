import { Routes, Route } from "react-router-dom";
import AppLayout from "../layout";
import HomeView from "../views/home";
import LoginView from "../views/auth/login";

const RouteStack = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<HomeView />} />
          <Route path="auth/login" element={<LoginView />} />
          {/* <Route path="contact" element={<Contact />} /> */}
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </>
  );
};

export default RouteStack;
