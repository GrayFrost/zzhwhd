"use client";

import * as motion from "motion/react-client";
import { useTheme } from "next-themes";

export default function LayoutAnimation() {
  const { theme, setTheme } = useTheme();

  const toggleSwitch = () => {
    if (theme !== "dark") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <button
      className="toggle-container"
      style={{
        ...container,
        justifyContent: "flex-" + (theme !== "dark" ? "start" : "end"),
      }}
      onClick={toggleSwitch}
    >
      <motion.div
        className="toggle-handle"
        style={handle}
        layout
        transition={{
          type: "spring",
          visualDuration: 0.2,
          bounce: 0.2,
        }}
      />
    </button>
  );
}

/**
 * ==============   Styles   ================
 */

const container = {
  width: 100,
  height: 50,
  backgroundColor: "#9911ff44",
  borderRadius: 50,
  cursor: "pointer",
  display: "flex",
  padding: 10,
  boxSizing: 'content-box'
};

const handle = {
  width: 50,
  height: 50,
  backgroundColor: "#9911ff",
  borderRadius: "50%",
};
