import { useState } from "react";
import { css } from "../styled-system/css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div
      className={css({
        height: "100vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      })}>
      <h2 className={css({ color: "red", fontSize: "2rem" })}>Hello</h2>
    </div>
  );
}

export default App;
