import React from "react";
import { ChevronDown } from "react-feather";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  console.log("width", displayedValue.length);

  return (
    <Wrapper>
      <NativeSelect
        value={value}
        onChange={onChange}
        width={displayedValue.length}
      >
        {children}
      </NativeSelect>
      <PresentationBits>
        {displayedValue}
        <IconWrapper style={{ '--size': 24 + 'px'}}>
          <Icon id="chevron-down" strokewidth={1} size={24} />
        </IconWrapper>
      </PresentationBits>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: max-content;
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 10px;
  bottom: 0;
  margin: auto;
  height: var(--size);
  width: var(--size);
  pointer-events: none;
`
const NativeSelect = styled.select`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
`;

const PresentationBits = styled.div`
  color: ${COLORS.gray700};
  font-size: ${16 / 16}rem;
  padding: 12px 16px;
  padding-right: 52px;
  background-color: ${COLORS.transparentGray15};
  top: 9px;
  border-radius: 8px;

  ${NativeSelect}:focus + & {
    outline: 1px dotted #212121;
    outline: 5px auto -webkit-focus-ring-color;
  }
  ${NativeSelect}:hover + & {
    color: black;
  }
`;

export default Select;
