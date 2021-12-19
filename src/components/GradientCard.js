import { Box, Heading, Stack, Text } from "@chakra-ui/react";

const GradientCard = (props) => {
  const { title, content } = props.gradData;
  console.log(props);
  return (
    <Box>
      <Box
        margin="auto"
        padding={"2em"}
        mt={40}
        margin={"3em"}
        color="white"
        backgroundImage="linear-gradient(80deg, rgba(37, 77, 233, 0.5) -5.49%, rgba(40, 244, 129, 0.5) 81.15%, rgba(64, 255, 58, 0.45) 104.99%)"
        borderRadius="8"
      >
        <Heading textAlign="center" mb="5" size={"3xl"}>
          {title}
        </Heading>
        <Stack>
          <Box></Box>
        </Stack>
      </Box>
      <Box
        margin="auto"
        padding={"2em"}
        margin={"3em"}
        color="white"
        bg="#21945e"
        borderRadius="8"
      >
        <Text fontSize="2xl" fontWeight={"semibold"}>
          {content}
        </Text>
      </Box>
    </Box>
  );
};

export default GradientCard;

//#03050da6;
