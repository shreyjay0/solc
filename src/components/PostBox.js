import { Box, Text, Textarea, Button } from "@chakra-ui/react";
import { useState } from "react";
import { alertMsg } from "../utils/AlertMsg";

const PostBox = () => {
  const [content, setcontent] = useState("");
  const [isLoading, setisLoading] = useState(false);
  const onSubimtPost = async (e) => {
    e.preventDefault();
    setisLoading(true);
    if (content !== "") {
      alertMsg(
        "Submission successfull",
        "Your post has been submitted successfully. Thank you",
        "success"
      );
      setisLoading(false);
    } else {
      alertMsg(
        "Submission unsuccessfull",
        "Please enter some content",
        "error"
      );
      setisLoading(false);
    }
  };
  let handleInputChange = (e) => {
    let inp = e.target.value;
    setcontent(inp);
  };
  return (
    <>
      <Box margin="4em 10em">
        <Text fontSize={24} color={"white"} fontWeight={700} mb={6}>
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
        {isLoading ? (
          <Button
            bg="linear-gradient(19deg, #14622f, #0f9191)"
            fontSize={20}
            color={"white"}
            isLoading
            fontWeight={600}
            transition="transform 3s ease-in-out"
            _hover={{ bg: "linear-gradient(19deg, #0f9191, #14622f)" }}
            onClick={(e) => onSubimtPost(e)}
          >
            Anonymscape
          </Button>
        ) : (
          <Button
            bg="linear-gradient(19deg, #14622f, #0f9191)"
            fontSize={20}
            color={"white"}
            fontWeight={600}
            transition="transform 3s ease-in-out"
            _hover={{ bg: "linear-gradient(19deg, #0f9191, #14622f)" }}
            onClick={(e) => onSubimtPost(e)}
          >
            Anonymscape
          </Button>
        )}
      </Box>
    </>
  );
};

export default PostBox;
