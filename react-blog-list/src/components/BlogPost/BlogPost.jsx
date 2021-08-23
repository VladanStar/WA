import React from "react";
import "./BlogPost.css";

const BlogPost = (props) => {
  return (
    <li className="Post__listItem">
      <h3 className="Post__headline">{props.name}</h3>
      <p className="Post__info">{props.text}</p>
    </li>
  );
};

export default BlogPost;
