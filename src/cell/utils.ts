import { CellColor } from "./types";

export const charToConfig: Map<string, CellColor> = new Map([
  [" ", {}],
  [
    "|",
    {
      topLeftVertical: true,
      bottomLeftVertical: true
    }
  ],
  [
    "0",
    {
      topLeftHorizontal: true,
      topRightHorizontal: true,
      bottomLeftHorizontal: true,
      bottomRightHorizontal: true,
      topLeftVertical: true,
      topRightVertical: true,
      bottomLeftVertical: true,
      bottomRightVertical: true
    }
  ],
  [
    "1",
    {
      topMiddleVertical: true,
      bottomMiddleVertical: true
    }
  ],
  [
    "2",
    {
      topLeftHorizontal: true,
      topRightHorizontal: true,
      middleLeftHorizontal: true,
      middleRightHorizontal: true,
      bottomLeftHorizontal: true,
      bottomRightHorizontal: true,
      topRightVertical: true,
      bottomLeftVertical: true
    }
  ],
  [
    "3",
    {
      topLeftHorizontal: true,
      topRightHorizontal: true,
      middleLeftHorizontal: true,
      middleRightHorizontal: true,
      bottomLeftHorizontal: true,
      bottomRightHorizontal: true,
      topRightVertical: true,
      bottomRightVertical: true
    }
  ],
  [
    "4",
    {
      middleLeftHorizontal: true,
      middleRightHorizontal: true,
      topLeftVertical: true,
      topRightVertical: true,
      bottomRightVertical: true
    }
  ],
  [
    "5",
    {
      topLeftHorizontal: true,
      topRightHorizontal: true,
      middleLeftHorizontal: true,
      middleRightHorizontal: true,
      bottomLeftHorizontal: true,
      bottomRightHorizontal: true,
      topLeftVertical: true,
      bottomRightVertical: true
    }
  ],
  [
    "6",
    {
      topLeftHorizontal: true,
      topRightHorizontal: true,
      middleLeftHorizontal: true,
      middleRightHorizontal: true,
      bottomLeftHorizontal: true,
      bottomRightHorizontal: true,
      topLeftVertical: true,
      bottomLeftVertical: true,
      bottomRightVertical: true
    }
  ],
  [
    "7",
    {
      topLeftHorizontal: true,
      topRightHorizontal: true,
      topRightVertical: true,
      bottomRightVertical: true
    }
  ],
  [
    "8",
    {
      topLeftHorizontal: true,
      topRightHorizontal: true,
      middleLeftHorizontal: true,
      middleRightHorizontal: true,
      bottomLeftHorizontal: true,
      bottomRightHorizontal: true,
      topLeftVertical: true,
      topRightVertical: true,
      bottomLeftVertical: true,
      bottomRightVertical: true
    }
  ],
  [
    "9",
    {
      topLeftHorizontal: true,
      topRightHorizontal: true,
      middleLeftHorizontal: true,
      middleRightHorizontal: true,
      bottomLeftHorizontal: true,
      bottomRightHorizontal: true,
      topLeftVertical: true,
      topRightVertical: true,
      bottomRightVertical: true
    }
  ],
  [
    "A",
    {
      topLeftHorizontal: true,
      topRightHorizontal: true,
      middleLeftHorizontal: true,
      middleRightHorizontal: true,
      topLeftVertical: true,
      topRightVertical: true,
      bottomLeftVertical: true,
      bottomRightVertical: true
    }
  ],
  [
    "B",
    {
      topLeftHorizontal: true,
      topRightHorizontal: true,
      middleRightHorizontal: true,
      bottomLeftHorizontal: true,
      bottomRightHorizontal: true,
      topRightVertical: true,
      bottomRightVertical: true,
      topMiddleVertical: true,
      bottomMiddleVertical: true
    }
  ],
  [
    "C",
    {
      topLeftHorizontal: true,
      topRightHorizontal: true,
      bottomLeftHorizontal: true,
      bottomRightHorizontal: true,
      topLeftVertical: true,
      bottomLeftVertical: true
    }
  ],
  [
    "D",
    {
      topLeftHorizontal: true,
      topRightHorizontal: true,
      bottomLeftHorizontal: true,
      bottomRightHorizontal: true,
      bottomRightVertical: true,
      topRightVertical: true,
      topMiddleVertical: true,
      bottomMiddleVertical: true
    }
  ],
  [
    "E",
    {
      topLeftHorizontal: true,
      topRightHorizontal: true,
      middleLeftHorizontal: true,
      bottomLeftHorizontal: true,
      bottomRightHorizontal: true,
      topLeftVertical: true,
      bottomLeftVertical: true
    }
  ],
  [
    "F",
    {
      topLeftHorizontal: true,
      topRightHorizontal: true,
      middleLeftHorizontal: true,
      topLeftVertical: true,
      bottomLeftVertical: true
    }
  ],
  [
    "G",
    {
      topLeftHorizontal: true,
      topRightHorizontal: true,
      bottomLeftHorizontal: true,
      bottomRightHorizontal: true,
      middleRightHorizontal: true,
      topLeftVertical: true,
      bottomLeftVertical: true,
      bottomRightVertical: true
    }
  ],
  [
    "H",
    {
      middleLeftHorizontal: true,
      middleRightHorizontal: true,
      topLeftVertical: true,
      topRightVertical: true,
      bottomLeftVertical: true,
      bottomRightVertical: true
    }
  ],
  [
    "I",
    {
      topLeftHorizontal: true,
      topRightHorizontal: true,
      bottomLeftHorizontal: true,
      bottomRightHorizontal: true,
      topMiddleVertical: true,
      bottomMiddleVertical: true
    }
  ],
  [
    "J",
    {
      bottomLeftHorizontal: true,
      bottomRightHorizontal: true,
      topRightVertical: true,
      bottomLeftVertical: true,
      bottomRightVertical: true
    }
  ],
  [
    "K",
    {
      middleLeftHorizontal: true,
      topLeftVertical: true,
      bottomLeftVertical: true,
      topRightDiagonal: true,
      bottomRightDiagonal: true
    }
  ],
  [
    "L",
    {
      bottomLeftHorizontal: true,
      bottomRightHorizontal: true,
      topLeftVertical: true,
      bottomLeftVertical: true
    }
  ],
  [
    "M",
    {
      topLeftVertical: true,
      topRightVertical: true,
      bottomLeftVertical: true,
      bottomRightVertical: true,
      topLeftDiagonal: true,
      topRightDiagonal: true
    }
  ],
  [
    "N",
    {
      topLeftVertical: true,
      topRightVertical: true,
      bottomLeftVertical: true,
      bottomRightVertical: true,
      topLeftDiagonal: true,
      bottomRightDiagonal: true
    }
  ],
  [
    "O",
    {
      topLeftHorizontal: true,
      topRightHorizontal: true,
      bottomLeftHorizontal: true,
      bottomRightHorizontal: true,
      topLeftVertical: true,
      topRightVertical: true,
      bottomLeftVertical: true,
      bottomRightVertical: true
    }
  ],
  [
    "P",
    {
      topLeftHorizontal: true,
      topRightHorizontal: true,
      middleLeftHorizontal: true,
      middleRightHorizontal: true,
      topLeftVertical: true,
      topRightVertical: true,
      bottomLeftVertical: true
    }
  ],
  [
    "Q",
    {
      topLeftHorizontal: true,
      topRightHorizontal: true,
      bottomLeftHorizontal: true,
      bottomRightHorizontal: true,
      topLeftVertical: true,
      topRightVertical: true,
      bottomLeftVertical: true,
      bottomRightVertical: true,
      bottomRightDiagonal: true
    }
  ],
  [
    "R",
    {
      topLeftHorizontal: true,
      topRightHorizontal: true,
      middleLeftHorizontal: true,
      middleRightHorizontal: true,
      topLeftVertical: true,
      topRightVertical: true,
      bottomLeftVertical: true,
      bottomRightDiagonal: true
    }
  ],
  [
    "S",
    {
      topLeftHorizontal: true,
      topRightHorizontal: true,
      middleLeftHorizontal: true,
      middleRightHorizontal: true,
      bottomLeftHorizontal: true,
      bottomRightHorizontal: true,
      topLeftVertical: true,
      bottomRightVertical: true
    }
  ],
  [
    "T",
    {
      topLeftHorizontal: true,
      topRightHorizontal: true,
      topMiddleVertical: true,
      bottomMiddleVertical: true
    }
  ],
  [
    "U",
    {
      bottomLeftHorizontal: true,
      bottomRightHorizontal: true,
      topLeftVertical: true,
      topRightVertical: true,
      bottomLeftVertical: true,
      bottomRightVertical: true
    }
  ],
  [
    "V",
    {
      topLeftVertical: true,
      bottomLeftVertical: true,
      bottomLeftDiagonal: true,
      topRightDiagonal: true
    }
  ],
  [
    "W",
    {
      topLeftVertical: true,
      bottomLeftVertical: true,
      topRightVertical: true,
      bottomRightVertical: true,
      bottomLeftDiagonal: true,
      bottomRightDiagonal: true
    }
  ],
  [
    "X",
    {
      topLeftDiagonal: true,
      topRightDiagonal: true,
      bottomLeftDiagonal: true,
      bottomRightDiagonal: true
    }
  ],
  [
    "Y",
    {
      middleLeftHorizontal: true,
      middleRightHorizontal: true,
      bottomRightHorizontal: true,
      bottomLeftHorizontal: true,
      topLeftVertical: true,
      topRightVertical: true,
      bottomRightVertical: true
    }
  ],
  [
    "Z",
    {
      topLeftHorizontal: true,
      topRightHorizontal: true,
      bottomLeftHorizontal: true,
      bottomRightHorizontal: true,
      topRightDiagonal: true,
      bottomLeftDiagonal: true
    }
  ]
]);
