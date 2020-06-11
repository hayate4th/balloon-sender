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
  message: string;
};

const MainPage: React.FC = () => {
  const [messages, setMessages] = useImmer<
    Array<{
      colorIndex: number;
      message: string;
    }>
  >([]);
  const [count, setCount] = useImmer(0);

  const socket = socketIOClient(ENDPOINT);

  useEffect(() => {
    socket.on("message", (data: SocketData) => {
      setMessages((draft) => {
        draft.push({
          colorIndex: Math.floor(Math.random() * 7),
          message: data.message,
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
  display: flex;
  font-family: "Itim", cursive;
  justify-content: center;
  background-color: #ccf1ff;
  width: 100vw;
  height: 100vh;
`;

const TreeImg = styled.img`
  height: calc(100% - 50px);
  width: auto;
  padding-top: 50px;
`;

export default MainPage;
