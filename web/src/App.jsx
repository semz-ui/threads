import { Container } from "@chakra-ui/react";
import { Button } from "@chakra-ui/button";
import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import UserPage from "./pages/UserPage";
import PostPage from "./pages/PostPage";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import AuthPage from "./pages/AuthPage";
import { useRecoilValue } from "recoil";
import userAtom from "../atom/userAtom";
import Logout from "./components/Logout";
import UpdateProfile from "./pages/UpdateProfile";

export default function App() {
  const user = useRecoilValue(userAtom);
  console.log(user, "user");
  return (
    <Container maxW="620px">
      <Header />
      <Routes>
        <Route
          path="/"
          element={user ? <HomePage /> : <Navigate to="/auth" />}
        />
        <Route
          path="/auth"
          element={!user ? <AuthPage /> : <Navigate to="/" />}
        />
        <Route
          path="/update-profile"
          element={user ? <UpdateProfile /> : <Navigate to="/auth" />}
        />
        <Route path="/:username" element={<UserPage />} />
        <Route path="/:username/post/:pId" element={<PostPage />} />
      </Routes>
      {user && <Logout />}
    </Container>
  );
}
