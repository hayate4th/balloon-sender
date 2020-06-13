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
  background-color: #fff;
  border: 1px solid #eeeeee;
  border-radius: 5px;
  bottom: 10%;
  left: 10%;
  padding: 10px 10px 20px 10px;
  position: absolute;
`;

const CounterTitle = styled.h2`
  font: 15px "Itim", cursive;
  margin: 0 0 10px 0;
  text-align: center;
`;

const Counter = styled.div`
  display: flex;

  div {
    margin: 0 10px 0 0;

    &:last-of-type {
      margin: 0;
    }
  }
`;

const Digit = styled.div`
  background-color: #ee7f00;
  color: #fff;
  font: 25px "Itim", cursive;
  padding: 5px 10px 5px 10px;
`;

export default BalloonCounter;
