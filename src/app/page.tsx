"use client";
import { Box, Button } from "@mui/material";
import { BackgroundColor, BorderColor, BorderColorTransparent, SecondaryBackgroundColor } from "./appThemeProvider";
import CellText from "@/cell/cellText";
import { useState } from "react";
import { charToConfig } from "@/cell/utils";
import { getAutocompleteItem, searchItems } from "./utils";
import Image from "next/image";

export default function Home() {
  const [text, setText] = useState("JUSTIN GU");

  const handleKeyPress = (event: React.KeyboardEvent<HTMLDivElement>) => {
    event.preventDefault();
    if (event.key === "Backspace" || event.key === "Delete") {
      setText(text.slice(0, -1));
    } else if (text.length < 9 && event.key.length === 1 && charToConfig.has(event.key.toUpperCase())) {
      setText(text + event.key.toUpperCase());
    } else if (event.key === "Enter" && searchItems.find((searchItem) => searchItem.text === text)) {
      const searchItem = searchItems.find((searchItem) => searchItem.text === text);
      const searchUrl = searchItem?.url;
      const blank = searchItem?.blank;
      if (searchUrl) {
        blank === false ? window.open(searchUrl, "_self") : window.open(searchUrl, "_blank");
      }
    } else if (event.key === "Tab" || event.key === "ArrowDown" || event.key === "Enter") {
      const autocompleteItem = getAutocompleteItem(text);
      if (autocompleteItem) {
        setText(autocompleteItem.text);
      }
    }
  };

  return (
    <Box sx={backgroundStyle}>
      <Box
        sx={{
          position: "absolute",
          top: "20%",
          left: "30%",
          transform: "translate(-50%, -50%)"
        }}
      >
        <Image
          src="./handwriting.svg"
          width={550}
          height={200}
          alt="handwriting"
          style={{ transform: "rotate(-10deg)" }}
        />
      </Box>
      <Box
        sx={{
          position: "absolute",
          top: "29%",
          left: "40%",
          transform: "translate(-50%, -50%)"
        }}
      >
        <Image src="./arrow.svg" width={125} height={125} alt="arrow" style={{ transform: "rotate(155deg)" }} />
      </Box>
      <Box
        sx={{
          position: "absolute",
          top: "70%",
          left: "68%",
          transform: "translate(-50%, -50%)"
        }}
      >
        <Image src="./prompt.svg" width={350} height={200} alt="ex: Linkedin" />
      </Box>
      <Box
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)"
        }}
      >
        <div contentEditable={true}>
          <Box
            sx={containerStyle}
            display="flex"
            justifyContent="center"
            alignItems="center"
            onKeyDown={handleKeyPress}
            tabIndex={0}
          >
            <Box sx={innerContainerStyle}>
              <CellText text={text} maxLength={9} />
            </Box>
          </Box>
        </div>

        <Button>Hello</Button>
      </Box>
    </Box>
  );
}

const nmInsetStyleBackground = {
  boxShadow: "inset 5px 5px 5px #cecece, inset -5px -5px 5px #f2f2f2"
};

const nmInsetStyleSecondaryBackground = {
  boxShadow: "inset 5px 5px 5px #9fa299, inset -5px -5px 5px #bbbeb3"
};

const containerStyle = {
  ...nmInsetStyleBackground,
  borderRadius: 1000,
  padding: { xs: "4px", md: "8px" },

  background: "ForegroundColor",
  zIndex: 100
};

const innerContainerStyle = {
  ...nmInsetStyleSecondaryBackground,
  borderRadius: 1000,
  width: "fit-content",
  padding: { xs: "12px", md: "24px" },
  paddingX: { xs: "16px", md: "48px" },
  background: SecondaryBackgroundColor,
  border: `2px solid ${BorderColor}`,

  backgroundSize: { xs: "5vw 5vw", md: "40px 40px" },
  backgroundImage: `linear-gradient(to right, ${BorderColorTransparent} 1px, transparent 1px), linear-gradient(to bottom, ${BorderColorTransparent} 1px, transparent 1px)`,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  transition: "filter 0.5s ease-in-out"
};

const backgroundStyle = {
  height: "100vh",
  background: BackgroundColor
};
