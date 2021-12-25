import { Grid, GridItem, Heading, Stack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import FeedBox from "../components/FeedBox";
import LargeInfoCard from "../components/LargeInfoCard";

const Feed = () => {
  const [isConnected, setisConnected] = useState(false);
  const [allPosts, setallPosts] = useState(["ASd", "asd", "ASd"]);

  const msgOnNotConnected = {
    heading: "Not logged in!",
    description:
      "You must connect your wallet first to access the feed. Thank you",
    type: "warning",
  };
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
        <LargeInfoCard msgOnNotConnected={msgOnNotConnected} />
      ) : (
        <div>
          <header className="header"></header>

          <Heading
            mt={20}
            mb={10}
            textAlign="center"
            bgGradient="linear-gradient(189deg, #11e24fe8, #3affff, #2a8552)"
            bgClip={"text"}
          >
            Feed
          </Heading>
          <Stack className="feed main">
            {allPosts.map((post) => (
              <FeedBox />
            ))}
          </Stack>
        </div>
      )}
    </div>
  );
};

export default Feed;
