import React from "react";
import { useSelector } from "react-redux";

export function TestRedux(props) {
  console.group("%c Oh my heavens! ", "background: #222; color: #bada55");
  console.log("props ", "==> ", props, "\n\n");
  console.groupEnd();

  return (
    <div>
      <h2>Test redux components</h2>
    </div>
  );
}
