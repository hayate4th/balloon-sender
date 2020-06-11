import React, { useState } from "react";
import styled from "styled-components";

type Props = {
  socket: SocketIOClient.Socket;
};

const BalloonSender: React.FC<Props> = ({ socket }) => {
  const [inputText, setInputText] = useState("");

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
  );
};

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

export default BalloonSender;
