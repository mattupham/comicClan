import styled from "styled-components";
import { Text } from "rebass";

export enum COLORS {
  Red = "#f15454",
  Black = "#333333",
  DarkGrayDark = "#535353",
  DarkGrayLight = "#5a5a5a",
  MedGray = "#777777",
  LightGrayDark = "#999999",
  LightGrayMed = "#aaaaaa",
  LightGrayLight = "#cccccc",
  White = "#ffffff;",
}

export const HR = styled.hr`
  border: 1px solid ${COLORS.DarkGrayDark};
  width: 100%;
  margin: 0;
`;

export const Roboto = styled(Text)`
  font-family: Roboto;
`;

export const RobotoMed = styled(Roboto)`
  font-weight: 500;
`;

export const RobotoBold = styled(Roboto)`
  font-weight: bold;
`;
