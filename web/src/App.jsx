import { Container } from "@chakra-ui/react";
import { Button } from "@chakra-ui/button";
import React from "react";
import { Route, Routes } from "react-router-dom";
import UserPage from "./pages/UserPage";
import PostPage from "./pages/PostPage";
import Header from "./components/Header";

export default function App() {
  return (
    <Container maxW="620px">
      <Header />
      <Routes>
        <Route path="/:username" element={<UserPage />} />
        <Route path="/:username/post/:pId" element={<PostPage />} />
      </Routes>
    </Container>
  );
}
