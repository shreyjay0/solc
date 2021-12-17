import { Link } from "react-router-dom";

const Indx = () => {
  return (
    <div>
      <h1>Welcome to solc</h1>
      <p>
        Solc is a solana based feed app that allows you to send anonymous
        messages over the web!
      </p>
      <a>
        Go to the <Link to="/feed">feed</Link> now!
      </a>
    </div>
  );
};

export default Indx;
