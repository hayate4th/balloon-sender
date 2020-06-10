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

  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);
    socket.on("message", (data: SocketData) => {
      setResponse(data.message);
    });
  }, []);

  return (
    <FlexWrapper>
      {response !== "" && <div>{response}</div>}
      <TreeImg src={tree} />
      <BalloonCounter count={123} />
    </FlexWrapper>
  );
};

const FlexWrapper = styled.div`
  display: flex;
  font-family: "Itim", cursive;
  justify-content: center;
  background-color: #ccf1ff;
  width: 100vw;
  height: calc(100vh - 50px);
`;

const TreeImg = styled.img`
  height: 100%;
  width: auto;
`;

export default MainPage;
