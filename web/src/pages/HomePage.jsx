import { Button, Flex } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <Flex justifyContent={"center"}>
        <Link to={"/mark"}>
          <Button>View profile</Button>
        </Link>
      </Flex>
    </>
  );
};

export default HomePage;
