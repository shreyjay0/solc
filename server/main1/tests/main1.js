const anc = require("@project-serum/anchor");
const { SystemProgram } = anc.web3;
const main = async () => {
  console.log("Testing main1.js");
  ancProvider = anc.Provider.env();
  anc.setProvider(ancProvider);
  const prgm = anc.workspace.Main1;
  const pgAcc = anc.web3.Keypair.generate();

  const test_txn = await prgm.rpc.initialize({
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
  const acc = await prgm.account.pgAcc.fetch(pgAcc.publicKey);
  const count_post = acc.postCount;
  console.log("PgAcc Data: ", acc);
  console.log("Total post on here initally: ", count_post.toString());
  console.log(
    "Transaction success. Visit: https://explorer.solana.com/tx/" + test_txn
  );
  const txnNewPost = await prgm.rpc.newPost("Hello World", {
    accounts: {
      pgAcc: pgAcc.publicKey,
      user: ancProvider.wallet.publicKey,
    },
  });
  const accAfterTxn = await prgm.account.pgAcc.fetch(pgAcc.publicKey);
  console.log(
    "Total post on here after txn: ",
    accAfterTxn.postCount.toString()
  );
  console.log("your posts 👀", accAfterTxn.allPosts);
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
