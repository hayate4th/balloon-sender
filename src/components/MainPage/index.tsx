import React, { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";
import styled from "styled-components";
import anime from "animejs";

import BalloonCounter from "../BalloonCounter";
import tree from "../../assets/images/tree.png";
import balloonRed from "../../assets/images/balloon-red.png";

const ENDPOINT = "http://127.0.0.1:4001";

type SocketData = {
  message: string;
};

const MainPage: React.FC = () => {
  const [response, setResponse] = useState("");
  const [inputText, setInputText] = useState("");

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

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
  };

  const handleSendClick = () => {
    socket.emit("message", {
      message: inputText,
    });
    setInputText("");
  };

  return (
    <FlexWrapper>
      {response !== "" && (
        <MessageItem className="animation-balloon">
          <MessageText className="animation-textBox">{response}</MessageText>
        </MessageItem>
      )}
      <TreeImg src={tree} />
      <BalloonCounter count={123} />
      <SenderWrapper>
        <SenderTitle>Send Your Message</SenderTitle>
        <MessageInput
          type="text"
          name="message-input"
          placeholder="Write Here"
          onChange={handleInputChange}
          value={inputText}
        />
        <SendButton onClick={handleSendClick}>Send</SendButton>
      </SenderWrapper>
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

const SenderWrapper = styled.div`
  position: absolute;
  right: 5%;
  bottom: 5%;
  border-radius: 5px;
  background-color: #ee7f00;
  padding: 10px;
`;

const SenderTitle = styled.h2`
  color: white;
  font-size: 25px;
  margin: 0;
  margin-bottom: 20px;
  text-align: center;
`;

const MessageInput = styled.input`
  border: 0px;
  border-bottom: 2px solid white;
  background: none;
  color: white;
  font-size: 25px;
  font-family: "Itim", cursive;
  outline: none;
  max-width: 500px;
  margin-right: 10px;

  &::placeholder {
    color: white;
    opacity: 0.7;
  }
`;

const SendButton = styled.button`
  outline: none;
  font-size: 25px;
  font-family: "Itim", cursive;
  padding: 5px;
  color: white;
  border: 2px solid white;
  border-radius: 3px;
  background-color: transparent;

  &:active {
    color: #ee7f00;
    background-color: white;
  }
`;

export default MainPage;
