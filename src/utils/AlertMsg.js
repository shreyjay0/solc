import { createStandaloneToast } from "@chakra-ui/react";

const alertMsg = (status, desc, type) => {
  const alertTst = createStandaloneToast();
  alertTst({
    title: status,
    description: desc,
    status: type,
    duration: 3000,
    isClosable: true,
  });
};
export { alertMsg };
