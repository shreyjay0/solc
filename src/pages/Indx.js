import React, { useEffect } from "react";
import { WalletFound } from "../utils/wallet";
const Indx = () => {
  useEffect(() => {
    const onLoad = async () => {
      await WalletFound();
    };
    window.addEventListener("load", onLoad);

    return () => {
      window.removeEventListener("load", onLoad);
    };
  }, []);

  return (
    <div>
      <h1>Welcome to solc</h1>
    </div>
  );
};

export default Indx;
