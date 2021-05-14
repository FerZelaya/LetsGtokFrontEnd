import React from "react";
import "./section2.css";
import PostBox from "./postBox";

const section2 = () => {
  return (
    <div id="section2" className="section2-main">
      <div className="quoteContainer">
        <h1 className="quote">A community to spread positivity</h1>
      </div>
      <div className="share-columns">
        <div className="column">
          <div className="inner-container">
            <div className="postContainer">
              <PostBox
                title={"Current feeling"}
                details={"So Excited to finally get my hands on the latest PS5"}
                user={"@josh"}
              />
              <PostBox
                title={"Current feeling"}
                details={"So Excited to finally get my hands on the latest PS5"}
                user={"@josh"}
              />
            </div>

            <h4 className="endQuote">
              Share what's on your mind with the community
            </h4>
            <button className="shareButton">Share Feeling</button>
          </div>
        </div>
        <div className="column mb-0">
          <div className="inner-container">
            <div className="postContainer">
              <PostBox
                title={"Watching"}
                details={"The Wolf of Wall Street. A must watch"}
                user={"@lily"}
              />
              <PostBox
                title={"Watching"}
                details={"The Wolf of Wall Street. A must watch"}
                user={"@lily"}
              />
            </div>

            <h4 className="endQuote">
              Share what you are doing with the community
            </h4>
            <button className="shareButton">Share Feeling</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default section2;
