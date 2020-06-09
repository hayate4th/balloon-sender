import React from "react";
import styled from "styled-components";

import BalloonCounter from "../BalloonCounter";
import tree from "../../assets/images/tree.png";

const MainPage: React.FC = () => {
  return (
    <FlexWrapper>
      <TreeImg src={tree} />
      <BalloonCounter />
    </FlexWrapper>
  );
};

const FlexWrapper = styled.div`
  display: flex;
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
