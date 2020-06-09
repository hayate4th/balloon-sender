import React from "react";
import styled from "styled-components";

const SendPage: React.FC = () => {
  return (
    <FlexWrapper>
      <SenderTitle>Write Something Here</SenderTitle>
      <MessageInput type="text" name="message-input" placeholder="Input Here" />
      <SendButton>Send</SendButton>
    </FlexWrapper>
  );
};

const FlexWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ee7f00;
  width: 100vw;
  height: calc(100vh - 150px);
  padding: 50px 0;
`;

const SenderTitle = styled.h2`
  color: white;
  font-size: 45px;
  margin: 0;
  margin-bottom: 20px;
  text-align: center;
`;

const MessageInput = styled.input`
  border: 0px;
  border-bottom: 2px solid white;
  background: none;
  color: white;
  font-size: 40px;
  font-family: "Itim", cursive;
  outline: none;
  max-width: 500px;
  align-self: center;
  margin-bottom: 20px;

  &::placeholder {
    color: white;
    opacity: 0.7;
  }
`;

const SendButton = styled.button`
  outline: none;
  font-size: 40px;
  font-family: "Itim", cursive;
  padding: 5px;
  color: white;
  border: 2px solid white;
  border-radius: 3px;
  background-color: transparent;
  width: 150px;
  align-self: center;

  &:active {
    color: #ee7f00;
    background-color: white;
  }
`;

export default SendPage;
