import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { Menu, MenuItem, Sidebar, SubMenu, useProSidebar } from "react-pro-sidebar";
import styled from "styled-components";

export default function SideBar() {
  const router = useRouter();
  const [sideBar, setSideBar] = useState(false);
  return (
    <Wrapper id={`navbar ${sideBar ? "active" : ""}`}>
      <div id="nav-container">
        {sideBar && (
          <>
            <Modal />
            <Sidebar collapsedWidth="0" id="sidebar">
              <Menu className="menu-container">
                <SubMenu label="명품">
                  <MenuItem
                    onClick={() => {
                      router.push("/ranking/royal/bag");
                    }}
                  >
                    핸드백
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      router.push("/ranking/royal/watch");
                    }}
                  >
                    시계
                  </MenuItem>
                </SubMenu>
                {/* <MenuItem> Calendar</MenuItem>
            <MenuItem> E-commerce</MenuItem> */}
              </Menu>
            </Sidebar>
          </>
        )}

        <Image
          id="more"
          width={25}
          height={25}
          src="/images/more.png"
          alt=""
          onClick={() => {
            setSideBar((e) => !e);
          }}
        />
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  top: 10px;
  padding-bottom: 30px;
  #nav-container {
    position: fixed;
    z-index: 99;
  }

  #more {
    z-index: 99;
    position: absolute;
    top: 0;
    cursor: pointer;
  }
  #sidebar {
    z-index: 99;
    position: absolute;
    left: 40px;
    .ps-sidebar-container {
      border-radius: 10px;
    }
  }
`;
const Modal = styled.div`
  position: fixed;
  overflow: hidden;
  z-index: 98;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  opacity: 1;
  background-color: gray;
  opacity: 0.8;
`;
