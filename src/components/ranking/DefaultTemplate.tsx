import Image from "next/image";
import React from "react";
import styled from "styled-components";

const Wrapper = styled.main`
  display: grid;
  grid-template-columns: 0.1fr 0.9fr;
  outline: 1px solid;

  .item-box {
    padding: 10px;
    border-bottom: 1px solid;
    border-left: 1px solid;
    margin-bottom: -1px;
    display: flex;
    gap: 10px;
  }
  .tier-box {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
export default function DefaultTemplate() {
  const rankList = {
    0: {
      hermes: {
        link: "https://www.hermes.com/kr/ko/",
        name: "에르메스",
        logo: "/images/bag/hermes.svg",
      },
    },
    1: {
      chanel: { link: "https://www.chanel.com/kr", name: "샤넬", logo: "/images/bag/chanel.svg" },
      louis: {
        link: "https://kr.louisvuitton.com/kor-kr/homepage",
        name: "루이비통",
        logo: "/images/bag/louis.svg",
      },
      goyard: {
        link: "https://kr.louisvuitton.com/kor-kr/homepage",
        name: "고야드",
        logo: "/images/bag/goyard.svg",
      },
    },
    2: {
      dior: { link: "https://www.chanel.com/kr", name: "샤넬" },
      fendi: { link: "https://kr.louisvuitton.com/kor-kr/homepage", name: "루이비통" },
      bottega: { link: "https://kr.louisvuitton.com/kor-kr/homepage", name: "루이비통" },
      celine: { link: "https://kr.louisvuitton.com/kor-kr/homepage", name: "루이비통" },
    },
    3: {
      prada: { link: "https://www.chanel.com/kr", name: "샤넬" },
      gucci: { link: "https://kr.louisvuitton.com/kor-kr/homepage", name: "루이비통" },
      saint: { link: "https://kr.louisvuitton.com/kor-kr/homepage", name: "루이비통" },
      burberry: { link: "https://kr.louisvuitton.com/kor-kr/homepage", name: "루이비통" },
      loewe: { link: "https://kr.louisvuitton.com/kor-kr/homepage", name: "루이비통" },
    },
  };
  console.log(Object.entries(rankList));
  return (
    <Wrapper>
      {Object.entries(rankList).map((e, i) => (
        <>
          <div className="tier-box">{e[0]}Tier</div>
          <div className="item-box">
            {Object.entries(e[1]).map((e: any, i) => (
              <>
                <a href={e[1]["link"]}>
                  {/* <div key={i}>{e[1]["name"]}</div> */}
                  {/* <img src={e[1]?.["logo"]} alt="" /> */}
                  {e[1]["logo"] && <Image src={e[1]?.["logo"]} width={130} height={80} alt="as" />}
                </a>
              </>
            ))}
          </div>
        </>
      ))}
    </Wrapper>
  );
}
