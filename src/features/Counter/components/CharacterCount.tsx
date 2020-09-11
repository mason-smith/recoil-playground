import React from "react";
import { useRecoilValue } from "recoil";

// Local Dependencies
import { charCountState } from "../selectors";

export const CharacterCount = () => {
  const count = useRecoilValue(charCountState);

  return <>Character Count: {count}</>;
};
