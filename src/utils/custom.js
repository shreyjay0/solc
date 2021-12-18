export const addressFormat = (address) => {
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
