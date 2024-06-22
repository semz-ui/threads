import { Button } from "@chakra-ui/react";
import React from "react";
import UserHeader from "../components/UserHeader";
import UserPost from "../components/UserPost";

function UserPage() {
  console.log("Viewde");
  return (
    <>
      <UserHeader />
      <UserPost />
    </>
  );
}

export default UserPage;
