import { Box, Code, Heading, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Indx = () => {
  return (
    <div>
      <Box maxW="36rem" textAlign="left">
        <Heading
          className="main-welcome backg"
          bgClip="text"
          bgGradient="linear-gradient(90deg, #11E259, #3AFFFF)"
          animation="backg-anim 8s ease-in-out infinite"
          size="4xl"
          mb={12}
        >
          Welcome to Solc
        </Heading>
        <Text mb={8}>
          Solc is a solana based app that allows you to send anonymous messages
          over the web!
        </Text>
        <a>
          Go to the{" "}
          <Link to="/feed">
            <Code className="link-to-feed-main">feed</Code>
          </Link>{" "}
          now!
        </a>
      </Box>
    </div>
  );
};

export default Indx;
