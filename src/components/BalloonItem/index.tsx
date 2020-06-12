import React, { useEffect } from "react";
import styled from "styled-components";
import anime from "animejs";

import { chooseRandomBalloonColor } from "../../utils/BalloonItemUtil";

type Props = {
  index: number;
  response: {
    colorIndex: number;
    message: string;
    startY: number;
    endY: number;
    endX: number;
  };
};

const BalloonItem: React.FC<Props> = ({ index, response }) => {
  useEffect(() => {
    const { startY, endY, endX } = response;
    anime
      .timeline()
      .add({
        targets: `.animation-balloon-${index}`,
        translateX: ["50vw", `${endX}vw`],
        translateY: [`${startY}vh`, `${endY}vh`],
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
    <MessageItem
      className={`animation-balloon-${index}`}
      style={{
        backgroundImage: `url(${chooseRandomBalloonColor(
          response.colorIndex
        )})`,
      }}
    >
      <MessageText className="animation-textBox">
        {response.message}
      </MessageText>
    </MessageItem>
  );
};

const MessageItem = styled.div`
  position: absolute;
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
