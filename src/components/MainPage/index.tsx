import React, { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";
import styled from "styled-components";

import BalloonCounter from "../BalloonCounter";
import tree from "../../assets/images/tree.png";

const ENDPOINT = "http://127.0.0.1:4001";

type SocketData = {
  message: string;
};

const MainPage: React.FC = () => {
  const [response, setResponse] = useState("");
  const [inputText, setInputText] = useState("");

  const socket = socketIOClient(ENDPOINT);

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
      {response !== "" && <div>{response}</div>}
      <TreeImg src={tree} />
      <BalloonCounter count={123} />
      <SenderWrapper>
        <SenderTitle>Write Something Here</SenderTitle>
        <MessageInput
          type="text"
          name="message-input"
          placeholder="Input Here"
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

const TreeImg = styled.img`
  height: 100%;
  width: auto;
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
