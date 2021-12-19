import { Box, Text, Textarea, Button } from "@chakra-ui/react";
import React from "react";

const PostBox = () => {
  const [content, setcontent] = React.useState("");

  let handleInputChange = (e) => {
    let inp = e.target.value;
    setcontent(inp);
  };
  return (
    <>
      <Box margin="4em 10em">
        <Text mb="8px" fontSize={24} color={"white"} fontWeight={700} mb={6}>
          Post anonymously
        </Text>
        <Textarea
          value={content}
          onChange={handleInputChange}
          color="white"
          placeholder="What's on your mind?"
          size="lg"
          h={40}
          mb={8}
        />
        <Button
          bg="linear-gradient(19deg, #14622f, #0f9191)"
          fontSize={20}
          color={"white"}
          fontWeight={600}
          transition="transform 3s ease-in-out"
          _hover={{ bg: "linear-gradient(19deg, #0f9191, #14622f)" }}
        >
          Anonymscape
        </Button>
      </Box>
    </>
  );
};

export default PostBox;
