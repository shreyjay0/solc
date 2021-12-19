import {
  Heading,
  Box,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

const Feed = () => {
  const [isConnected, setisConnected] = useState(false);
  useEffect(() => {
    const checkIfConn = async () => {
      if (await window.phantom.solana.isConnected) {
        setisConnected(true);
      } else {
        setisConnected(false);
      }
    };
    window.addEventListener("load", () => {
      checkIfConn();
      window.addEventListener("mousemove", () => {
        checkIfConn();
      });
    });
    window.addEventListener("click", async () => {
      await checkIfConn();
    });
  }, []);
  return (
    <div>
      {!isConnected ? (
        <Box margin="3em">
          <Alert
            status="warning"
            variant="subtle"
            maxW="40em"
            flexDirection="column"
            color="white"
            margin={"auto"}
            alignItems="center"
            justifyContent="center"
            textAlign="center"
            height="200px"
            bg="rgba(250, 250, 250, 0.16) none repeat scroll 0% 0%"
          >
            <AlertIcon boxSize="40px" mr={0} />
            <AlertTitle mt={4} mb={1} fontSize="lg">
              Not logged in!
            </AlertTitle>
            <AlertDescription maxWidth="sm">
              You must connect your wallet first to access the feed. Thank you
            </AlertDescription>
          </Alert>
        </Box>
      ) : (
        <div>
          <header className="header"></header>

          <Heading mt={20} textAlign="center" color="white">
            Feed
          </Heading>
          <div className="feed main">
            <div className="feed-item">
              <div className="feed-item-header">
                <div className="feed-item-header-title">
                  <h2>
                    <a href="">
                      <span></span>
                      <span></span>
                    </a>
                  </h2>
                </div>
              </div>
              <div className="feed-item-body">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pellentesque euismod, urna eu tincidunt consectetur, nisi nisl
                  tincidunt nisi, eget congue nisl nisi eu ipsum.
                </p>
              </div>
              <div className="feed-item-footer">
                <div className="feed-item-footer-item">
                  <p>
                    <span>
                      <i className="fas fa-thumbs-up"></i>
                    </span>
                    <span>
                      <i className="fas fa-thumbs-down"></i>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Feed;
