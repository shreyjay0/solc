import React, { useState } from "react";
import { Button } from "@chakra-ui/button";
import { WalletConnect, WalletDisconnect } from "../utils/wallet";
export const ConnectButton = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);
  const [currentAddress, setcurrentAddress] = useState(null);
  const onConnectWallet = async () => {
    setIsConnecting(true);
    WalletConnect().then((res) => {
      if (window.phantom.solana.isConnected) {
        setIsConnected(true);
        setIsConnecting(false);
        setcurrentAddress(window.phantom.solana.publicKey.toString());
      } else {
        setIsConnected(false);
        setIsConnecting(false);
      }
    });
  };
  const onDisconnectWallet = () => {
    setIsConnecting(true);
    const disconnect = WalletDisconnect();
    setIsConnecting(false);
    setIsConnected(false);
    setcurrentAddress(null);
  };

  return (
    <div>
      {isConnected ? (
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
      )}
    </div>
  );
};
