import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const SIZES = {
  small: {
    "--height": `${24}px`,
  },
  large: {
    "--height": `${36}px`,
  },
};

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  const styles = SIZES[size];
  console.log(SIZES.size);
  return (
    <Wrapper style={{ "--width": width + "px" }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      <NativeInput
        size={size}
        placeholder={placeholder}
        style={styles}
      ></NativeInput>
      <IconWrapper
        style={{ "--size": size === "small" ? `${16}px` : `${24}px` }}
      >
        <Icon id={icon} strokeWidth={1} size={size === "small" ? 16 : 24} />
      </IconWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.label`
  position: relative;
  display: block;
  width: var(--width);

  &:hover {
    color: ${COLORS.black};
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  height: var(--size);
  width: var(--size);
  color: inherit;
`;

const NativeInput = styled.input`
  width: 100%;
  border: none;
  font-size: ${(p) => (p.size === "small" ? 14 / 16 + "rem" : 18 / 16 + "rem")};
  border-bottom: ${(p) =>
    p.size === "small" ? `1px solid ${COLORS.black}` : `2px solid ${COLORS.black}`};
  height: var(--height);
  padding-left: ${(p) => (p.size === "small" ? `${24}px` : `${36}px`)};
  outline-offset: 2px;
`;

export default IconInput;
