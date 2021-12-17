const WalletFound = async () => {
  try {
    const { solana } = window;
    if (solana) {
      if (solana.isPhantom) {
        console.log("Phantom Wallet Detected");
      }
    } else {
      console.log("Phantom Wallet Not Detected");
      alert("Phantom Wallet Not Detected. Please install it first.");
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
      alert("You have rejected the connection request.");
    }
  }
};

const WalletDisconnect = async () => {
  try {
    if (window.phantom.solana.isConnected) {
      await window.phantom.solana.disconnect();
      alert("You have now been disconnected from the wallet.");
    }
  } catch (err) {
    console.log(err);
  }
};

export { WalletFound, WalletConnect, WalletDisconnect };
