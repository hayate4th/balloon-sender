import React, { useEffect } from "react";
import socketIOClient from "socket.io-client";
import styled from "styled-components";
import { useImmer } from "use-immer";

import BalloonCounter from "../BalloonCounter";
import tree from "../../assets/images/tree.png";
import BalloonSender from "../BalloonSender";
import BalloonItem from "../BalloonItem";

const ENDPOINT = "http://127.0.0.1:4001";

type SocketData = {
  colorIndex: number;
  message: string;
  startY: number;
  endY: number;
  endX: number;
};

const MainPage: React.FC = () => {
  const [messages, setMessages] = useImmer<
    Array<{
      colorIndex: number;
      message: string;
      startY: number;
      endY: number;
      endX: number;
    }>
  >([]);
  const [count, setCount] = useImmer(0);

  const socket = socketIOClient(ENDPOINT);

  useEffect(() => {
    socket.on("message", (data: SocketData) => {
      setMessages((draft) => {
        draft.push({
          colorIndex: data.colorIndex,
          message: data.message,
          startY: data.startY,
          endY: data.endY,
          endX: data.endX,
        });
      });
      setCount((draft) => draft + 1);
    });
    // FIXME: try not to use this
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <FlexWrapper>
      {messages.map((message, index) => (
        <BalloonItem key={index} index={index} response={message} />
      ))}
      <TreeImg src={tree} />
      <BalloonCounter count={count} />
      <BalloonSender socket={socket} />
    </FlexWrapper>
  );
};

const FlexWrapper = styled.div`
  background-color: #ccf1ff;
  display: flex;
  height: 100vh;
  justify-content: center;
`;

const TreeImg = styled.img`
  height: calc(100% - 50px); // padding-top 50px
  padding: 50px 0 0 0;
`;

export default MainPage;
