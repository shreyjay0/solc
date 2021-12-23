const anc = require("@project-serum/anchor");
const filesys = require("fs");
filesys.writeFileSync(
  "./kp/kp.json",
  JSON.stringify(anc.web3.Keypair.generate())
);
