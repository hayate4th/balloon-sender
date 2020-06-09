import React from "react";
import styled from "styled-components";

import BalloonCounter from "../BalloonCounter";
import tree from "../../assets/images/tree.png";

const MainPage: React.FC = () => {
  return (
    <FlexWrapper>
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
