import { Box, Heading, Stack, Text } from "@chakra-ui/react";

const GradientCard = (props) => {
  const { title, content, gradOpt } = props.gradData;
  console.log(props);
  return (
    <Box>
      <Box
        margin="auto"
        padding={"2em"}
        mt={40}
        margin={"3em"}
        color="white"
        backgroundImage={gradOpt}
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
