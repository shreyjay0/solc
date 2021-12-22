import React, { useState } from "react";
import { Button } from "@chakra-ui/button";
import { WalletConnect, WalletDisconnect } from "../utils/wallet";
import { alertMsg } from "../utils/AlertMsg";
import { addressFormat } from "../utils/custom";
import { Tooltip } from "@chakra-ui/react";
export const ConnectButton = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);
  const [currentAddress, setcurrentAddress] = useState(null);
  const [currentBalance, setcurrentBalance] = useState(null);

  const onConnectWallet = async () => {
    setIsConnecting(true);
    WalletConnect().then((res) => {
      if (window.phantom.solana.isConnected) {
        setIsConnected(true);
        setIsConnecting(false);
        setcurrentAddress(window.phantom.solana.publicKey.toString());
        alertMsg(
          "Wallet Connected",
          "Connected to the wallet " +
            addressFormat(window.phantom.solana.publicKey.toString()) +
            " successfully.",
          "success"
        );
      } else {
        setIsConnected(false);
        setIsConnecting(false);
      }
    });
  };
  const onDisconnectWallet = () => {
    setIsConnecting(true);
    const disconnect = WalletDisconnect();
    const disconMsg =
      "You have now been disconnected from the wallet " +
      addressFormat(window.phantom.solana.publicKey.toString()) +
      ".";
    alertMsg("Wallet Update", disconMsg, "success");
    setIsConnecting(false);
    setIsConnected(false);
    setcurrentAddress(null);
  };
  return (
    <div>
      {window.solana ? (
        isConnected ? (
          <Button
            size="md"
            colorScheme="blackAlpha"
            onClick={() => {
              onDisconnectWallet();
            }}
          >
            Disconnnect Wallet
          </Button>
        ) : isConnecting ? (
          <Button
            size="md"
            isLoading
            colorScheme="blackAlpha"
            loadingText="Connecting"
          ></Button>
        ) : (
          <Button
            size="md"
            display="block"
            colorScheme="blackAlpha"
            onClick={() => {
              onConnectWallet();
            }}
          >
            Connect Wallet
          </Button>
        )
      ) : (
        <Button size="md" colorScheme="blackAlpha" isDisabled="true">
          Connect Wallet
        </Button>
      )}
    </div>
  );
};
