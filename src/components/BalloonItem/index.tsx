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
  background: no-repeat center 0;
  color: #fff;
  max-height: 150px;
  position: absolute;
  padding: 80px 0 0 0;
  width: 140px;
`;

const MessageText = styled.div`
  background-color: #ee7f00;
  border-radius: 5px;
  color: #fff;
  font: 18px "Itim", cursive;
  max-height: 150px;
  overflow: hidden;
  padding: 5px;
  word-break: break-all;
`;

export default BalloonItem;
