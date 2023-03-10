import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Kakao from "../ads/Kakao";
import SideBar from "../navigation/SideBar";
function DefaultLayout({ children }: any) {
  const [fullWidth, setFullWidth] = useState(0);

  useEffect(() => {
    setFullWidth(screen.width);
  }, []);
  return (
    <Wrapper width={fullWidth} className="tests">
      <h1 id="title-name">RANK ONE</h1>
      <ContentSection width={fullWidth}>
        <SideBar />
        {children}
      </ContentSection>
      <Kakao
        className={"kakao-ad-1 kakao-ad-pc"}
        code={"DAN-F3a42R4onMLWbFYg"}
        width={160}
        height={600}
      />
      <Kakao
        className={"kakao-ad-2 kakao-ad-pc"}
        code={"DAN-nkZj3D2R4yvjPIDl"}
        width={160}
        height={600}
      />
    </Wrapper>
  );
}

export default DefaultLayout;

const Wrapper = styled.main<{ width: number }>`
  width: ${(props) => `${props.width}px`};
  position: relative;
  .kakao-ad-pc {
    display: none;
  }
  @media (min-width: 1024px) {
    .kakao-ad-pc {
      display: block;
    }
    .kakao-ad-1 {
      position: absolute;
      left: 3vw;
      top: 100px;
    }
    .kakao-ad-2 {
      position: absolute;
      right: 3vw;
      top: 100px;
    }
  }
  justify-content: center;
  #title-name {
    width: 100%;
    text-align: center;
  }
`;

const ContentSection = styled.section<{ width: number }>`
  @media (min-width: 1024px) {
    width: ${(props) => `${props.width * 0.66}px`};
    margin: 0 auto;
  }
`;
