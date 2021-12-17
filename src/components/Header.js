import { Tabs } from "@chakra-ui/react";
import React from "react";
import { ConnectButton } from "./ConnectButton";
import { Box, Stack, Heading, Flex, useDisclosure } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleToggle = () => (isOpen ? onClose() : onOpen());

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      bg="none"
      color="white"
      {...props}
    >
      <Flex align="center" mr={5}>
        <Heading as="h1" size="lg" letterSpacing={"tighter"}>
          SOLC
        </Heading>
      </Flex>

      <Box display={{ base: "block", md: "none" }} onClick={handleToggle}>
        Go
      </Box>

      <Stack
        direction={{ base: "column", md: "row" }}
        display={{ base: isOpen ? "block" : "none", md: "flex" }}
        width={{ base: "full", md: "auto" }}
        alignItems="center"
        flexGrow={1}
        mt={{ base: 4, md: 0 }}
      >
        <Tabs>
          <a className="nav-options-outer">
            <Link className="nav-options" to="/">
              Main
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
