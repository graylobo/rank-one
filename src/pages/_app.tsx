import type { AppProps } from "next/app";
import { ProSidebarProvider } from "react-pro-sidebar";
import SideBar from "../components/navigation/SideBar";
import styled from "styled-components";
import { QueryClient, QueryClientProvider } from "react-query";
export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <ProSidebarProvider>
        <SideBar />
        <Component {...pageProps} />
      </ProSidebarProvider>
    </QueryClientProvider>
  );
}
