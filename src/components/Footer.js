import { HStack, Text, Flex } from "@chakra-ui/react";

export const Footer = () => {
  return (
    <Flex
      textAlign="center"
      padding="1rem"
      direction="column"
      justifyContent="center"
      width="100%"
      alignItems="center"
    >
      <HStack spacing={5} mb={5}>
        <Text color="gray.400">Privacy</Text>
        <Text color="gray.400">Terms of Use</Text>
      </HStack>
      <HStack>
        <a href="   ">
          <img src="https://img.icons8.com/color/48/000000/facebook.png" />
        </a>
        <a href="   ">
          <img src="https://img.icons8.com/color/48/000000/twitter.png" />
        </a>
        <a href="   ">
          <img src="https://img.icons8.com/color/48/000000/linkedin.png" />
        </a>
      </HStack>

      <Text color={"#568367"} mt={3}>
        Copyrights © 2022 SOLC. All rights reserved.
      </Text>
    </Flex>
  );
};
