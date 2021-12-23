import { Link } from "@chakra-ui/react";

const addressFormat = (address) => {
  const addressArray = address.split("");
  const addressArrayLength = addressArray.length;
  const addressArrayFirstHalf = addressArray.slice(0, 4);
  const addressArraySecondHalf = addressArray.slice(
    addressArrayLength - 4,
    addressArrayLength
  );
  const addressArrayFirstHalfFormatted = addressArrayFirstHalf.join("");
  const addressArraySecondHalfFormatted = addressArraySecondHalf.join("");
  const addressFormatted = `${addressArrayFirstHalfFormatted}...${addressArraySecondHalfFormatted}`;
  return addressFormatted;
};

const addressAsLink = (address) => {
  return `https://explorer.solana.com/address/${address}`;
};

const addressAsLinkComp = (address) => {
  const addressFormatted = addressFormat(address);
  return (
    <Link to={`https://explorer.solana.com/account/${address}`}>
      {addressFormatted}
    </Link>
  );
};

const transactionAsLinkComp = (transaction) => {
  const transactionFormatted = addressFormat(transaction);
  return (
    <Link to={`https://explorer.solana.com/tx/${transaction}`}>
      {transactionFormatted}
    </Link>
  );
};

export {
  addressFormat,
  addressAsLink,
  addressAsLinkComp,
  transactionAsLinkComp,
};
