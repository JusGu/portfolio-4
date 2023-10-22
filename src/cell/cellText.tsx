import { Box } from "@mui/material";
import CellBase from "./cellBase";
import { CellColor } from "./types";
import { useEffect, useState } from "react";

const charToConfig: Map<string, CellColor> = new Map([
  [
    " ",
    {
      top: false,
      topLeft: false,
      topRight: false,
      middle: false,
      bottomLeft: false,
      bottomRight: false,
      bottom: false,
    },
  ],
  [
    "0",
    {
      top: true,
      topLeft: true,
      topRight: true,
      middle: false,
      bottomLeft: true,
      bottomRight: true,
      bottom: true,
    },
  ],
  [
    "1",
    {
      top: false,
      topLeft: false,
      topRight: true,
      middle: false,
      bottomLeft: false,
      bottomRight: true,
      bottom: false,
    },
  ],
  [
    "2",
    {
      top: true,
      topLeft: false,
      topRight: true,
      middle: true,
      bottomLeft: true,
      bottomRight: false,
      bottom: true,
    },
  ],
  [
    "3",
    {
      top: true,
      topLeft: false,
      topRight: true,
      middle: true,
      bottomLeft: false,
      bottomRight: true,
      bottom: true,
    },
  ],
  [
    "4",
    {
      top: false,
      topLeft: true,
      topRight: true,
      middle: true,
      bottomLeft: false,
      bottomRight: true,
      bottom: false,
    },
  ],
  [
    "5",
    {
      top: true,
      topLeft: true,
      topRight: false,
      middle: true,
      bottomLeft: false,
      bottomRight: true,
      bottom: true,
    },
  ],
  [
    "6",
    {
      top: true,
      topLeft: true,
      topRight: false,
      middle: true,
      bottomLeft: true,
      bottomRight: true,
      bottom: true,
    },
  ],
  [
    "7",
    {
      top: true,
      topLeft: false,
      topRight: true,
      middle: false,
      bottomLeft: false,
      bottomRight: true,
      bottom: false,
    },
  ],
  [
    "8",
    {
      top: true,
      topLeft: true,
      topRight: true,
      middle: true,
      bottomLeft: true,
      bottomRight: true,
      bottom: true,
    },
  ],
  [
    "9",
    {
      top: true,
      topLeft: true,
      topRight: true,
      middle: true,
      bottomLeft: false,
      bottomRight: true,
      bottom: true,
    },
  ],
  [
    "A",
    {
      top: true,
      topLeft: true,
      topRight: true,
      middle: true,
      bottomLeft: true,
      bottomRight: true,
      bottom: false,
    },
  ],
  [
    "B",
    {
      top: true,
      topLeft: true,
      topRight: true,
      middle: true,
      bottomLeft: true,
      bottomRight: true,
      bottom: true,
    },
  ],
  [
    "C",
    {
      top: true,
      topLeft: true,
      topRight: false,
      middle: false,
      bottomLeft: true,
      bottomRight: false,
      bottom: true,
    },
  ],
  [
    "D",
    {
      top: true,
      topLeft: true,
      topRight: true,
      middle: false,
      bottomLeft: true,
      bottomRight: true,
      bottom: true,
    },
  ],
  [
    "E",
    {
      top: true,
      topLeft: true,
      topRight: false,
      middle: true,
      bottomLeft: true,
      bottomRight: false,
      bottom: true,
    },
  ],
  [
    "F",
    {
      top: true,
      topLeft: true,
      topRight: false,
      middle: true,
      bottomLeft: true,
      bottomRight: false,
      bottom: false,
    },
  ],
  [
    "G",
    {
      top: true,
      topLeft: true,
      topRight: true,
      middle: true,
      bottomLeft: false,
      bottomRight: true,
      bottom: true,
    },
  ],
  [
    "H",
    {
      top: false,
      topLeft: true,
      topRight: true,
      middle: true,
      bottomLeft: true,
      bottomRight: true,
      bottom: false,
    },
  ],
  [
    "I",
    {
      top: false,
      topLeft: false,
      topRight: true,
      middle: false,
      bottomLeft: false,
      bottomRight: true,
      bottom: false,
    },
  ],
  [
    "J",
    {
      top: false,
      topLeft: false,
      topRight: true,
      middle: false,
      bottomLeft: true,
      bottomRight: true,
      bottom: true,
    },
  ],
  [
    "K",
    {
      top: false,
      topLeft: true,
      topRight: false,
      middle: true,
      bottomLeft: true,
      bottomRight: false,
      bottom: false,
    },
  ],
  [
    "L",
    {
      top: false,
      topLeft: true,
      topRight: false,
      middle: false,
      bottomLeft: true,
      bottomRight: false,
      bottom: true,
    },
  ],
  [
    "M",
    {
      top: false,
      topLeft: true,
      topRight: true,
      middle: false,
      bottomLeft: true,
      bottomRight: true,
      bottom: false,
    },
  ],
  [
    "N",
    {
      top: true,
      topLeft: true,
      topRight: true,
      middle: false,
      bottomLeft: true,
      bottomRight: true,
      bottom: false,
    },
  ],
  [
    "O",
    {
      top: true,
      topLeft: true,
      topRight: true,
      middle: false,
      bottomLeft: true,
      bottomRight: true,
      bottom: true,
    },
  ],
  [
    "P",
    {
      top: true,
      topLeft: true,
      topRight: true,
      middle: true,
      bottomLeft: true,
      bottomRight: false,
      bottom: false,
    },
  ],
  [
    "Q",
    {
      top: true,
      topLeft: true,
      topRight: true,
      middle: false,
      bottomLeft: true,
      bottomRight: true,
      bottom: true,
    },
  ],
  [
    "R",
    {
      top: true,
      topLeft: true,
      topRight: true,
      middle: true,
      bottomLeft: true,
      bottomRight: true,
      bottom: false,
    },
  ],
  [
    "S",
    {
      top: true,
      topLeft: true,
      topRight: false,
      middle: true,
      bottomLeft: false,
      bottomRight: true,
      bottom: true,
    },
  ],
  [
    "T",
    {
      top: true,
      topLeft: false,
      topRight: true,
      middle: false,
      bottomLeft: false,
      bottomRight: true,
      bottom: false,
    },
  ],
  [
    "U",
    {
      top: false,
      topLeft: true,
      topRight: true,
      middle: false,
      bottomLeft: true,
      bottomRight: true,
      bottom: true,
    },
  ],
  [
    "V",
    {
      top: false,
      topLeft: true,
      topRight: true,
      middle: false,
      bottomLeft: true,
      bottomRight: true,
      bottom: false,
    },
  ],
  [
    "W",
    {
      top: false,
      topLeft: true,
      topRight: true,
      middle: false,
      bottomLeft: true,
      bottomRight: true,
      bottom: false,
    },
  ],
  [
    "X",
    {
      top: false,
      topLeft: true,
      topRight: true,
      middle: true,
      bottomLeft: true,
      bottomRight: true,
      bottom: false,
    },
  ],
  [
    "Y",
    {
      top: false,
      topLeft: true,
      topRight: true,
      middle: false,
      bottomLeft: false,
      bottomRight: true,
      bottom: false,
    },
  ],
  [
    "Z",
    {
      top: true,
      topLeft: false,
      topRight: true,
      middle: true,
      bottomLeft: true,
      bottomRight: false,
      bottom: true,
    },
  ],
]);

export const charToCellColor = (char: string) => {
  return charToConfig.get(char);
};

interface ICellTextProps {
  text: string;
}

export default function CellText(props: ICellTextProps) {
    const [cursorBlink, setCursorBlink] = useState(false);
    const emptySpaceConfig = charToCellColor(" ");

    useEffect(() => {
        const interval = setInterval(() => {
            setCursorBlink(prevState => !prevState);
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const cursorConfig = charToCellColor(cursorBlink ? "I" : " ");
    const { text } = props;
    let cells = text.split("").map((char, index) => {
        const cellColorConfig = charToCellColor(char)!;
        return <CellBase key={index} cellColorConfig={cellColorConfig} />;
    });

    if (text.length > 10) {
        cells = cells.slice(0, 10);
        cells.push(<CellBase cellColorConfig={cursorConfig!} />);
    } else {
        cells.push(<CellBase cellColorConfig={cursorConfig!} />);
        while (cells.length <= 10) {
            cells.push(<CellBase cellColorConfig={emptySpaceConfig!} />);
        }
    }

    return <Box sx={{ display: "flex", justifyContent: "flex-start", alignItems: "center" }}>
        {cells}
    </Box>;
}
