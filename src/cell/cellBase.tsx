import { Box } from "@mui/material";
import { CellColor } from "./types";
import { BorderColorTransparent } from "../app/appThemeProvider";
interface ICellBaseProps {
  cellColorConfig: CellColor;
  autocomplete?: boolean;
  cursorBlink?: boolean;
}

export default function CellBase(props: ICellBaseProps) {
  const { cellColorConfig, cursorBlink } = props;

  const baseColor = BorderColorTransparent;
  const cursorColor = "#444444";
  const selectedColor = props?.autocomplete ? "#777777" : cursorColor;

  return (
    <Box sx={{ width: { xs: "7.5vw", md: "80px" } }}>
      <svg
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        viewBox="0 0 142.000000 202.000000"
        preserveAspectRatio="xMidYMid meet"
      >
        <g transform="translate(0.000000,202.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
          <path
            d="M170 1955 l-44 -45 44 -45 44 -45 196 0 196 0 44 45 44 45 -44 45
-44 45 -196 0 -196 0 -44 -45z"
            fill={cellColorConfig.topLeftHorizontal ? selectedColor : baseColor}
          />
          <path
            d="M770 1955 l-44 -45 44 -45 44 -45 196 0 196 0 44 45 44 45 -44 45
-44 45 -196 0 -196 0 -44 -45z"
            fill={cellColorConfig.topRightHorizontal ? selectedColor : baseColor}
          />
          <path
            d="M62 1847 l-42 -43 0 -345 0 -345 45 -44 45 -44 45 44 45 44 0 345 0
345 -42 43 c-23 24 -45 43 -48 43 -3 0 -25 -19 -48 -43z"
            fill={cursorBlink ? cursorColor : cellColorConfig.topLeftVertical ? selectedColor : baseColor}
          />
          <path
            d="M662 1847 l-42 -43 0 -345 0 -345 45 -44 45 -44 45 44 45 44 0 345 0
345 -42 43 c-23 24 -45 43 -48 43 -3 0 -25 -19 -48 -43z"
            fill={cellColorConfig.topMiddleVertical ? selectedColor : baseColor}
          />
          <path
            d="M1262 1847 l-42 -43 0 -345 0 -345 45 -44 45 -44 45 44 45 44 0 345
0 345 -42 43 c-23 24 -45 43 -48 43 -3 0 -25 -19 -48 -43z"
            fill={cellColorConfig.topRightVertical ? selectedColor : baseColor}
          />
          <path
            d="M220 1708 l0 -92 148 -248 147 -247 43 -1 42 0 0 92 0 92 -147 248
-148 247 -42 1 -43 0 0 -92z"
            fill={cellColorConfig.topLeftDiagonal ? selectedColor : baseColor}
          />
          <path
            d="M968 1552 l-148 -248 0 -92 0 -92 43 0 42 1 148 247 147 248 0 92 0
92 -42 0 -43 -1 -147 -247z"
            fill={cellColorConfig.topRightDiagonal ? selectedColor : baseColor}
          />
          <path
            d="M170 1055 l-44 -45 44 -45 44 -45 196 0 196 0 44 45 44 45 -44 45
-44 45 -196 0 -196 0 -44 -45z"
            fill={cellColorConfig.middleLeftHorizontal ? selectedColor : baseColor}
          />
          <path
            d="M770 1055 l-44 -45 44 -45 44 -45 196 0 196 0 44 45 44 45 -44 45
-44 45 -196 0 -196 0 -44 -45z"
            fill={cellColorConfig.middleRightHorizontal ? selectedColor : baseColor}
          />
          <path
            d="M62 947 l-42 -43 0 -345 0 -345 45 -44 45 -44 45 44 45 44 0 345 0
345 -42 43 c-23 24 -45 43 -48 43 -3 0 -25 -19 -48 -43z"
            fill={cursorBlink ? cursorColor : cellColorConfig.bottomLeftVertical ? selectedColor : baseColor}
          />
          <path
            d="M662 947 l-42 -43 0 -345 0 -345 45 -44 45 -44 45 44 45 44 0 345 0
345 -42 43 c-23 24 -45 43 -48 43 -3 0 -25 -19 -48 -43z"
            fill={cellColorConfig.bottomMiddleVertical ? selectedColor : baseColor}
          />
          <path
            d="M1262 947 l-42 -43 0 -345 0 -345 45 -44 45 -44 45 44 45 44 0 345 0
345 -42 43 c-23 24 -45 43 -48 43 -3 0 -25 -19 -48 -43z"
            fill={cellColorConfig.bottomRightVertical ? selectedColor : baseColor}
          />
          <path
            d="M368 652 l-148 -248 0 -92 0 -92 43 0 42 1 148 247 147 248 0 92 0
92 -42 0 -43 -1 -147 -247z"
            fill={cellColorConfig.bottomLeftDiagonal ? selectedColor : baseColor}
          />
          <path
            d="M820 808 l0 -92 148 -248 147 -247 43 -1 42 0 0 92 0 92 -147 248
-148 247 -42 1 -43 0 0 -92z"
            fill={cellColorConfig.bottomRightDiagonal ? selectedColor : baseColor}
          />
          <path
            d="M170 155 l-44 -45 44 -45 44 -45 196 0 196 0 44 45 44 45 -44 45 -44
45 -196 0 -196 0 -44 -45z"
            fill={cellColorConfig.bottomLeftHorizontal ? selectedColor : baseColor}
          />
          <path
            d="M770 155 l-44 -45 44 -45 44 -45 196 0 196 0 44 45 44 45 -44 45 -44
45 -196 0 -196 0 -44 -45z"
            fill={cellColorConfig.bottomRightHorizontal ? selectedColor : baseColor}
          />
        </g>
      </svg>
    </Box>
  );
}
