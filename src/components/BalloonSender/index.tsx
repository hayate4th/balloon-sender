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
      <SendButton onClick={handleSendClick} disabled={inputText === ""}>
        Send
      </SendButton>
    </SenderWrapper>
  );
};

const SenderWrapper = styled.div`
  background-color: #ee7f00;
  border-radius: 5px;
  bottom: 5%;
  padding: 10px;
  position: absolute;
  right: 5%;
`;

const SenderTitle = styled.h2`
  color: #fff;
  font: 1.5rem "Itim", cursive;
  margin: 0 0 20px 0;
  text-align: center;
`;

const MessageInput = styled.input`
  background: none;
  border: 0;
  border-bottom: 2px solid #fff;
  color: #fff;
  font: 1.5rem "Itim", cursive;
  margin: 0 10px 0 0;
  max-width: 500px;
  outline: none;

  &::placeholder {
    color: #fff;
    opacity: 0.7;
  }
`;

const SendButton = styled.button`
  background-color: transparent;
  border: 2px solid #fff;
  border-radius: 3px;
  color: #fff;
  cursor: pointer;
  font: 1.5rem "Itim", cursive;
  outline: none;
  padding: 5px;

  &:active {
    color: #ee7f00;
    background-color: white;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

export default BalloonSender;
