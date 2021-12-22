import { Box, Heading, HStack, Image, Stack, Text } from "@chakra-ui/react";
import verifiedLogo from "../assets/verified.svg";
const FeedBox = () => {
  return (
    <Box maxW="70%" margin="auto">
      <Stack className="feed-item">
        <Box className="feed-item-header">
          <Box className="feed-item-header-title">
            <h2>
              <HStack>
                <Heading as="h5" size={"md"} flexDirection={"row"}>
                  Anonymscape
                </Heading>
                <Image
                  src={verifiedLogo}
                  maxW={4}
                  top={0.5}
                  pos={"relative"}
                ></Image>
              </HStack>
              <span></span>
            </h2>
          </Box>
        </Box>
        <Box className="feed-item-body">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque euismod, urna eu tincidunt consectetur, nisi nisl
            tincidunt nisi, eget congue nisl nisi eu ipsum.
          </p>
        </Box>
        <Box className="feed-item-footer">
          <Box className="feed-item-footer-item">
            <HStack justifyContent={"space-between"}>
              <span>
                <i className="fas fa-thumbs-up">ok</i>
              </span>
              <Text as="i" color={"#12746b"}>
                posted 10 mins ago
              </Text>
            </HStack>
          </Box>
        </Box>
      </Stack>
    </Box>
  );
};

export default FeedBox;
