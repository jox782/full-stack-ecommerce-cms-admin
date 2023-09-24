"use client";

import { type } from "os";
import { useEffect, useState } from "react";

const Test = () => {
  const [click, setClick] = useState(0);

  useEffect(() => console.log(click), [click]);
  console.log("Click first", { g: { s: { click } } });
  console.log("Click first", { g: { s: { click: click } } });
  console.log("Click after add", click);
  console.log("Click after setClick", click);

  return <button onClick={() => setClick(100)}>aa</button>;
};

export default Test;

// interface discrip objects onlu
// type discrip all
