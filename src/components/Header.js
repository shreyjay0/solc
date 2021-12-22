import { Tabs } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { ConnectButton } from "./ConnectButton";
import {
  Box,
  Stack,
  Heading,
  Flex,
  useDisclosure,
  Image,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import "./Header.css";
import Logo from "../assets/solclogo.svg";
const Header = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const onToggleClick = () => (isOpen ? onClose() : onOpen());
  const [hdrBg, sethdrBg] = useState(true);
  useEffect(() => {
    const bgcol = window.location.pathname == "/" ? "Home" : "";
    sethdrBg(bgcol);
  }, []);
  return (
    <Flex
      as="nav"
      wrap="wrap"
      align="center"
      padding="0 1.5rem 0 1.5rem"
      justify="space-between"
      color="white"
      bg="#ffffff14"
      position="sticky"
      top="0"
      zIndex="1"
      padding="1rem"
      {...props}
    >
      <Flex
        className="logoname"
        align="center"
        mr={5}
        margin={{ base: "auto", md: "" }}
      >
        {" "}
        <Image src={Logo} maxW={34} mr={5}></Image>
        <Heading as="h1" size="lg" letterSpacing={"tighter"}>
          <Link to="/">SOLC</Link>
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
