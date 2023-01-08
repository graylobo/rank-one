import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { Menu, MenuItem, Sidebar, SubMenu, useProSidebar } from "react-pro-sidebar";
import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  #more {
    width: 1vw;
    height: 1vw;
    cursor: pointer;
  }
`;
export default function SideBar() {
  const router = useRouter();
  const [sideBar, setSideBar] = useState(false);
  const { collapseSidebar } = useProSidebar();
  return (
    <Wrapper id="navbar">
      {sideBar && (
        <Sidebar collapsedWidth="0" id="sidebar">
          <Menu>
            <SubMenu label="명품">
              <MenuItem
                onClick={() => {
                  router.push("/ranking/royal/bag");
                }}
              >
                핸드백
              </MenuItem>
            </SubMenu>
            <MenuItem> Calendar</MenuItem>
            <MenuItem> E-commerce</MenuItem>
          </Menu>
        </Sidebar>
      )}

      <img
        id="more"
        src="/images/more.png"
        alt=""
        onClick={() => {
          setSideBar((e) => !e);
        }}
      />
    </Wrapper>
  );
}
