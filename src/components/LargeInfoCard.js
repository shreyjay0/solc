import {
  Box,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";
const LargeInfoCard = (props) => {
  const { heading, description, type } = props.msgOnNotConnected;
  return (
    <Box margin="3em">
      <Alert
        status={type}
        variant="subtle"
        maxW="40em"
        flexDirection="column"
        color="white"
        margin={"auto"}
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        height="200px"
        bg="rgba(250, 250, 250, 0.16) none repeat scroll 0% 0%"
      >
        <AlertIcon boxSize="40px" mr={0} />
        <AlertTitle mt={4} mb={1} fontSize="lg">
          {heading}
        </AlertTitle>
        <AlertDescription maxWidth="sm">{description}</AlertDescription>
      </Alert>
    </Box>
  );
};

export default LargeInfoCard;
