import Image from "next/image";
import React from "react";
import styled from "styled-components";
import { Menu, MenuItem, Sidebar, SubMenu, useProSidebar } from "react-pro-sidebar";
import { useRouter } from "next/router";

const Wrapper = styled.main`
  @font-face {
    font-family: "notosans";
    src: url("/assets/fonts/notosans/NotoSansKR-Bold.otf");
  }

  #tier-container {
    display: grid;
    grid-template-columns: 0.1fr 0.9fr;
    border: 1px solid gray;
  }
  .item-box {
    padding-left: 3vw;
    padding: 10px 0 10px 2vw;
    border-bottom: 1px solid gray;
    border-left: 1px solid;
    margin-bottom: -1px;
    display: flex;
    flex-wrap: wrap;
    gap: 3vw;
  }
  .tier-box {
    font-family: "notosans";
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid black;
    margin-bottom: -1px;
    font-size: 17px;
  }
  #navbar {
    display: "flex";
    height: "100%";
    position: fixed;
  }
`;

const Tier = styled.div`
  color: ${(props) => props.color};
  color: ${(props) => props.color};
  text-shadow: 0 0 7px ${(props) => props.color}, 0 0 10px ${(props) => props.color},
    0 0 21px ${(props) => props.color}, 0 0 42px black, 0 0 82px black, 0 0 92px black,
    0 0 102px black, 0 0 151px black;
  background-color: black;
`;
export default function DefaultTemplate({ rankList }: any) {
  const router = useRouter();
  const { collapseSidebar } = useProSidebar();
  const tierColor: any = {
    0: "red",
    1: "orange",
    2: "yellow",
    3: "green",
    4: "blue",
    5: "indigo",
    6: "purple",
  };
  return (
    <Wrapper>
      {/* <div id="title">Bag Rank</div> */}

      <div id="tier-container">
        {Object.entries(rankList).map((e: any, i) => (
          <>
            <Tier color={tierColor[e[0]]} className="tier-box">{`${e[0]} Tier`}</Tier>
            <div className="item-box">
              {Object.entries(e[1]).map((e: any, i) => (
                <>
                  <a href={e[1]["link"]}>
                    {e[1]["logo"] && <Image src={e[1]?.["logo"]} width={180} height={60} alt="" />}
                  </a>
                </>
              ))}
            </div>
          </>
        ))}
      </div>
    </Wrapper>
  );
}
