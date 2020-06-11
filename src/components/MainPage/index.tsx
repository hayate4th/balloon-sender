import React, { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";
import styled from "styled-components";
import anime from "animejs";

import BalloonCounter from "../BalloonCounter";
import tree from "../../assets/images/tree.png";
import balloonRed from "../../assets/images/balloon-red.png";
import BalloonSender from "../BalloonSender";

const ENDPOINT = "http://127.0.0.1:4001";

type SocketData = {
  message: string;
};

const MainPage: React.FC = () => {
  const [response, setResponse] = useState("");

  const socket = socketIOClient(ENDPOINT);

  useEffect(() => {
    anime
      .timeline()
      .add({
        targets: ".animation-balloon",
        translateX: ["50vw", "0vw"],
        easing: "linear",
        duration: 5000,
      })
      .add({
        targets: ".animation-textBox",
        translateY: ["0vh", "100vh"],
        easing: (el: HTMLElement, i: number, total: number) => (t: number) =>
          0.5 * 9.8 * t * t,
        duration: 2000,
      });
  }, [response]);

  useEffect(() => {
    socket.on("message", (data: SocketData) => {
      setResponse(data.message);
    });
  }, [socket]);

  return (
    <FlexWrapper>
      {response !== "" && (
        <MessageItem className="animation-balloon">
          <MessageText className="animation-textBox">{response}</MessageText>
        </MessageItem>
      )}
      <TreeImg src={tree} />
      <BalloonCounter count={123} />
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

const TreeImg = styled.img`
  height: calc(100% - 50px);
  width: auto;
  padding-top: 50px;
`;

export default MainPage;
