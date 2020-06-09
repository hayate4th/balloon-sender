import React from "react";
import styled from "styled-components";

const BalloonCounter: React.FC = () => {
  return (
    <Wrapper>
      <div>Balloon Counter</div>
      <Counter>
        <Digit>0</Digit>
        <Digit>0</Digit>
        <Digit>0</Digit>
        <Digit>0</Digit>
      </Counter>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: absolute;
  left: 10%;
  bottom: 10%;
  background-color: #ee7f00;
`;

const Counter = styled.div`
  display: flex;
`;

const Digit = styled.div``;

export default BalloonCounter;
