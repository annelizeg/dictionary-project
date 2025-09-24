import React from "react";

export default function Photos(props) {
  if (props.photos) {
    console.log(props.photos);
    return <div className="Photos">Hello from Photos</div>;
  } else {
    return null;
  }
}
