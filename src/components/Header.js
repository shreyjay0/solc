import { Tabs } from "@chakra-ui/react";
import React from "react";
import { ConnectButton } from "./ConnectButton";
import { Box, Stack, Heading, Flex, useDisclosure } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const onToggleClick = () => (isOpen ? onClose() : onOpen());

  return (
    <Flex
      as="nav"
      wrap="wrap"
      align="center"
      padding="0 1.5rem 0 1.5rem"
      justify="space-between"
      color="white"
      bg="none"
      padding="1rem"
      {...props}
    >
      <Flex align="center" mr={5} margin={{ base: "auto", md: "" }}>
        <Heading as="h1" size="lg" letterSpacing={"tighter"}>
          SOLC
        </Heading>
      </Flex>

      <Box
        fontSize={28}
        _hover={{ cursor: "pointer" }}
        display={{ base: "block", md: "none" }}
        onClick={onToggleClick}
      >
        😎
      </Box>

      <Stack
        direction={{ base: "column", md: "row" }}
        display={{ base: isOpen ? "block" : "none", md: "flex" }}
        alignItems="center"
        width={{ base: "full", md: "auto" }}
        flexGrow={1}
        ml={{ base: 0, md: "2rem" }}
        mt={{ base: 4, md: 0 }}
      >
        <Tabs display={{ base: isOpen ? "grid" : "none", md: "block" }}>
          <a className="nav-options-outer">
            <Link className="nav-options" to="/">
              Home
            </Link>
          </a>
          <a className="nav-options-outer">
            <Link className="nav-options" to="/feed">
              Feed
            </Link>
          </a>
          <a className="nav-options-outer">
            <Link className="nav-options" to="/about">
              About
            </Link>
          </a>
        </Tabs>
      </Stack>

      <Box
        display={{ base: isOpen ? "block" : "none", md: "block" }}
        mt={{ base: 4, md: 0 }}
      >
        <ConnectButton />
      </Box>
    </Flex>
  );
};

export default Header;
