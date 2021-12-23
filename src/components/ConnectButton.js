import React, { useEffect, useState } from "react";
import { Button } from "@chakra-ui/button";
import { WalletConnect, WalletDisconnect } from "../utils/wallet";
import { alertMsg } from "../utils/AlertMsg";
import { addressAsLink, addressFormat } from "../utils/custom";
import { Connection, PublicKey, clusterApiUrl } from "@solana/web3.js";
import solidl from "../solidl.json";
import { Program, Provider, web3 } from "@project-serum/anchor";

const { SystemProgram, Keypair } = web3;

const network = clusterApiUrl("devnet"); //devnet for dev purpose
const opt = {
  preflightCommitment: "processed",
};
let pgAcc = Keypair.generate();
const programID = new PublicKey(solidl.metadata.address);

const getAncProvider = () => {
  const conn = new Connection(network, opt.preflightCommitment);
  const ancProvider = new Provider(
    conn,
    window.solana,
    opt.preflightCommitment
  );
  return ancProvider;
};
export const ConnectButton = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);
  const [currentAddress, setcurrentAddress] = useState(null);
  const [currentBalance, setcurrentBalance] = useState(null);
  const [allPosts, setallPosts] = useState([]);

  const getAllPosts = async () => {
    try {
      const ancProvider = getAncProvider();
      const prgm = new Program(solidl, programID, ancProvider);
      const account = await prgm.account.pgAcc.fetch(pgAcc.publicKey);
      alertMsg(
        "Posts fetched",
        "Account has " + account.allPosts.length + " posts",
        "success"
      );

      console.log();
      setallPosts(account.allPosts);
    } catch (err) {
      alertMsg("Fetch error", "Posts couldn't be fetched." + err, "error");
      setallPosts(null);
    }
  };
  const createPostAccount = async () => {
    try {
      const ancProvider = getAncProvider();
      const prgm = new Program(solidl, programID, ancProvider);
      await prgm.rpc.initialize({
        accounts: {
          pgAcc: pgAcc.publicKey,
          systemProgram: SystemProgram.programId,
          user: ancProvider.wallet.publicKey,
        },
        fee: {
          // fee for the transaction  (in lamports)
          lamports: 1,
        },
        signers: [pgAcc],
      });
      alertMsg(
        "Program account created",
        "New program account created successfully. " +
          addressAsLink(pgAcc.publicKey.toString()),
        "success"
      );
      console.log(pgAcc.publicKey.toString());

      await getAllPosts();
    } catch (err) {
      alertMsg(
        "Account creation error",
        "Program account can't be created. " + err,
        "error"
      );
    }
  };
  useEffect(() => {
    if (currentAddress) {
      console.log("Getting all your posts");
      getAllPosts();
    }
  }, [currentAddress]);
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
        createPostAccount();
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
