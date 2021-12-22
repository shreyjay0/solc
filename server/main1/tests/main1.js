const anc = require("@project-serum/anchor");

const main = async () => {
  console.log("Testing main1.js");
  // anc.setAnchor(anc.anc);
  // const solana = await anc.getSolana();
  // const solanaClient = await anc.getSolanaClient();
  // const solanaWallet = await anc.getSolanaWallet();
  // const solanaWalletClient = await anc.getSolanaWalletClient();
  // anc.setProvider(anc.providers.solana);
  anc.setProvider(anc.Provider.env());
  const program = anc.workspace.Main1;
  const test_txn = await program.rpc.initialize({});

  console.log(
    "Transaction success. Visit: https://explorer.solana.com/tx/" + test_txn
  );
};

const sndtxn = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

sndtxn();
