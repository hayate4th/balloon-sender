import React from "react";
import styled from "styled-components";

type Props = {
  count: number;
};

const BalloonCounter: React.FC<Props> = ({ count }) => {
  return (
    <Wrapper>
      <CounterTitle>Balloon Counter</CounterTitle>
      <Counter>
        {`000${count}`
          .slice(-4)
          .split("")
          .map((digit, index) => (
            <Digit key={index}>{digit}</Digit>
          ))}
      </Counter>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: absolute;
  left: 10%;
  bottom: 10%;
  background-color: white;
  border: 1px solid #eeeeee;
  border-radius: 5px;
  padding: 10px 10px 20px;
`;

const CounterTitle = styled.h2`
  font-size: 15px;
  margin: 0 0 10px 0;
  text-align: center;
`;

const Counter = styled.div`
  display: flex;

  div {
    margin-right: 10px;

    &:last-of-type {
      margin-right: 0;
    }
  }
`;

const Digit = styled.div`
  font-size: 25px;
  font-weight: bold;
  color: white;
  background-color: #ee7f00;
  padding: 5px 10px;
`;

export default BalloonCounter;
