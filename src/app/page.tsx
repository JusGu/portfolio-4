"use client";
import { Box, Typography } from "@mui/material";
import {
  BackgroundColor,
  BorderColor,
  BorderColorTransparent,
  ForegroundColor,
  SecondaryBackgroundColor,
} from "./appThemeProvider";
import CellText from "@/cell/cellText";
import { useState } from "react";

export default function Home() {
  const [text, setText] = useState("JUSTIN GU");

  const handleKeyPress = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Backspace" || event.key === "Delete") {
      setText(text.slice(0, -1));
    } else if (text.length < 10 && event.key.length === 1) {
      // capitalize
      setText(text + event.key.toUpperCase());
    }
  };

  return (
    <Box
      height="100vh"
      width="100vw"
      style={{
        background: BackgroundColor,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      onKeyDown={handleKeyPress}
      tabIndex={0}
    >
      <Box
        sx={containerStyle}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Box sx={innerContainerStyle}>
          <CellText text={text} />

        </Box>
      </Box>
    </Box>
  );
}

const nmInsetStyleBackground = {
  boxShadow: "inset 5px 5px 5px #cecece, inset -5px -5px 5px #f2f2f2",
};

const nmInsetStyleSecondaryBackground = {
  boxShadow: "inset 5px 5px 5px #9fa299, inset -5px -5px 5px #bbbeb3",
};

const containerStyle = {
  ...nmInsetStyleBackground,
  borderRadius: 10,
  height: "200px",
  width: "1000px",
  background: ForegroundColor,
};


const innerContainerStyle = {
  ...nmInsetStyleSecondaryBackground,
  borderRadius: 8,
  height: "calc(100% - 18px)",
  width: "calc(100% - 18px)",
  background: SecondaryBackgroundColor,
  border: `2px solid ${BorderColor}`,
  
  // backgroundSize: "40px 40px",
  // backgroundImage:
  //   `linear-gradient(to right, ${BorderColorTransparent} 1px, transparent 1px), linear-gradient(to bottom, ${BorderColorTransparent} 1px, transparent 1px)`,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
};



