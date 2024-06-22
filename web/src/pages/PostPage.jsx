import React from "react";
import { Avatar, Flex, Image, Text } from "@chakra-ui/react";

const PostPage = () => {
  return (
    <>
      <Flex>
        <Flex w={"full"} alignItems={"center"} gap={3}>
          <Avatar src="/zuck-avatar.png" name="Mark" size={"md"} />
          <Flex alignItems={"center"}>
            <Text fontSize={"sm"} fontWeight={"bold"}>
              markzuckerberg
            </Text>
            <Image src="/verified.png" w={4} h={4} ml={1} />
          </Flex>
          <Flex></Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default PostPage;
