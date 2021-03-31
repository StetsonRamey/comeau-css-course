/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const SIZES = {
  small: {
    "--height": `${8}px`,
    "--padding": 0,
    "--radius": `${4}px`,
  },
  medium: {
    "--height": `${12}px`,
    "--padding": 0,
    "--radius": `${4}px`,
  },
  large: {
    "--height": `${24}px`,
    "--padding": `${4}px`,
    "--radius": `${8}px`,
  },
};

const ProgressBar = ({ value, size }) => {
  const styles = SIZES[size];
  // const progress = value;

  return (
    <Wrapper style={styles}>
      <Progress
        value={value}
        aria-valuenow={value}
        aria-valuemin="0"
        aria-valuemax="100"
      >
        <VisuallyHidden>{value}%</VisuallyHidden>
      </Progress>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  background: ${COLORS.transparentGray15};
  padding: var(--padding);
  height: var(--height);
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  border-radius: var(--radius);
  overflow: hidden;
`;
const Progress = styled.div`
  width: ${(props) => props.value + "%"};
  height: 100%;
  background: ${COLORS.primary};
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  border-top-right-radius: ${(props) =>
    props.value > 99 ? `${(props.value - 99) * 4}px` : 0};
  border-bottom-right-radius: ${(props) =>
    props.value > 99 ? `${(props.value - 99) * 4}px` : 0};
`;

export default ProgressBar;
