import { alertMsg } from "./AlertMsg";
import { addressFormat } from "./custom";

const WalletFound = async () => {
  try {
    const { solana } = window;
    if (solana) {
      if (solana.isPhantom) {
        console.log("Phantom Wallet Detected");
      }
    } else {
      console.log("Phantom Wallet Not Detected");
      alertMsg(
        "WalletProviderNotFound",
        "Phantom Wallet Not Detected. Please install it first.",
        "warning"
      );
    }
  } catch (err) {
    console.log(err);
  }
};

const WalletConnect = async () => {
  try {
    const conn = await window.phantom.solana.connect();
    if (conn) {
      await window.solana;
    }
  } catch (err) {
    if (err.code === 4001) {
      alertMsg(
        "Connection Failure",
        "You have rejected the connection request.",
        "error"
      );
    } else {
      alertMsg(
        "Error" + err.code,
        "Something went wrong. Please try again.",
        "error"
      );
    }
  }
};

const WalletDisconnect = async () => {
  try {
    if (window.phantom.solana.isConnected) {
      await window.phantom.solana.disconnect();
    }
  } catch (err) {
    console.log(err);
  }
};

export { WalletFound, WalletConnect, WalletDisconnect };
