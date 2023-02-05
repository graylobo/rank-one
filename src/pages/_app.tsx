import type { AppProps } from "next/app";
import { ProSidebarProvider } from "react-pro-sidebar";
import SideBar from "../components/navigation/SideBar";
import styled from "styled-components";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <ProSidebarProvider>
      <SideBar />
      <Component {...pageProps} />
    </ProSidebarProvider>
  );
}
