import { ConnectButton } from "../components/ConnectButton";

const Feed = () => {
  return (
    <div>
      <header className="header"></header>

      <h1>Feed</h1>
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
  );
};

export default Feed;
