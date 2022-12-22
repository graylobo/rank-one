import React from "react";
import styled from "styled-components";

const Wrapper = styled.main`
  display: grid;
`;
export default function DefaultTemplate() {
  const rankList = { 1: ["디올", "샤넬"], 2: ["하이", "루루"] };
  return (
    <Wrapper>
      {Object.entries(rankList).map((e, i) => (
        <>
          <div>{e[0]}</div>
          <div>
            {e[1].map((e, i) => (
              <div key={i}>{e}</div>
            ))}
          </div>
        </>
      ))}
    </Wrapper>
  );
}
