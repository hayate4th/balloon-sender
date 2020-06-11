import React, { useEffect } from "react";
import styled from "styled-components";
import anime from "animejs";

import balloonRed from "../../assets/images/balloon-red.png";

type Props = {
  index: number;
  response: string;
};

const BalloonItem: React.FC<Props> = ({ index, response }) => {
  useEffect(() => {
    anime
      .timeline()
      .add({
        targets: `.animation-balloon-${index}`,
        translateX: ["50vw", "0vw"],
        easing: "linear",
        duration: 5000,
      })
      .add({
        targets: `.animation-balloon-${index} .animation-textBox`,
        translateY: ["0vh", "100vh"],
        easing: (el: HTMLElement, i: number, total: number) => (t: number) =>
          0.5 * 9.8 * t * t,
        duration: 2000,
      });
  }, [index, response]);

  return (
    <MessageItem className={`animation-balloon-${index}`}>
      <MessageText className="animation-textBox">{response}</MessageText>
    </MessageItem>
  );
};

const MessageItem = styled.div`
  position: absolute;
  background-image: url(${balloonRed});
  background-repeat: no-repeat;
  background-position: center 0;
  color: white;
  padding-top: 80px;
  width: 140px;
  max-height: 150px;
`;

const MessageText = styled.div`
  color: white;
  background-color: #ee7f00;
  border-radius: 5px;
  padding: 5px;
  font-size: 18px;
  font-weight: bold;
  word-break: break-all;
  overflow: hidden;
  max-height: 150px;
`;

export default BalloonItem;
