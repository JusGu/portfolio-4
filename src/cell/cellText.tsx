import { Box } from "@mui/material";
import CellBase from "./cellBase";
import { useEffect, useState } from "react";
import { charToConfig } from "./utils";
import { getAutocompleteItem } from "../app/utils";

export const charToCellColor = (char: string) => {
  return charToConfig.get(char);
};

interface ICellTextProps {
  text: string;
  maxLength: number;
}

export default function CellText(props: ICellTextProps) {
  const [cursorBlink, setCursorBlink] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCursorBlink(!cursorBlink);
    }, 530);
    return () => clearInterval(interval);
  });

  const emptySpaceConfig = charToCellColor(" ")!;
  const autocompleteItem = getAutocompleteItem(props.text);

  const { text } = props;
  let cells = text.split("").map((char, index) => {
    const cellColorConfig = charToCellColor(char) || emptySpaceConfig!;
    return <CellBase key={`cell-${index}-${char}`} cellColorConfig={cellColorConfig} autocomplete={false} />;
  });

  if (text.length > props.maxLength - 1) {
    cells = cells.slice(0, props.maxLength);
    cells.push(
      <CellBase
        key={`cursor-cell-${Date.now()}`}
        cellColorConfig={emptySpaceConfig}
        autocomplete={false}
        cursorBlink={cursorBlink}
      />
    );
  } else {
    while (cells.length <= props.maxLength) {
      let cellColorConfig = emptySpaceConfig!;
      if (autocompleteItem) {
        const autocompleteChar = autocompleteItem.text[cells.length];
        cellColorConfig = charToCellColor(autocompleteChar) ?? emptySpaceConfig!;
      }
      cells.push(
        <CellBase
          key={`empty-cell-${cells.length}-${Date.now()}`}
          cellColorConfig={cellColorConfig}
          autocomplete={true}
          cursorBlink={cursorBlink && cells.length === text.length}
        />
      );
    }
  }

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        gap: { xs: "1vw", md: "12px" }
      }}
    >
      {cells}
    </Box>
  );
}
