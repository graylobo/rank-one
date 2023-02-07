import React from "react";
import styled from "styled-components";
function DefaultLayout({ children }: any) {
  return (
    <Wrapper>
      <h1 id="title-name">RANK ONE</h1>
      <section>{children}</section>
    </Wrapper>
  );
}

export default DefaultLayout;

const Wrapper = styled.main`
  @media (min-width: 1024px) {
    width: 1500px;
  }
  margin: 0 auto;
  justify-content: center;
  #title-name {
    width: 100%;
    text-align: center;
  }
`;
