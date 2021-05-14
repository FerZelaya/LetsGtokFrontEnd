import React from "react";
import "./post.css";

const postBox = ({title, details, user}) => {

  return (
    <div className="post-container">
      <div className="inner-post">
        <h3 className="postTitle">{title}</h3>
        <h3 className="postDetails">
         {details}
        </h3>
        <div className="user-container">
          <p className="postUser">{user}</p>
          <p className="  ">a few seconds ago</p>
        </div>
      </div>
    </div>
  );
};

export default postBox;
