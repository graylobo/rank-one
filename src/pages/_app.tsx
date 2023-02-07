import type { AppProps } from "next/app";
import { ProSidebarProvider } from "react-pro-sidebar";
import { QueryClient, QueryClientProvider } from "react-query";
import SideBar from "../components/navigation/SideBar";
import Head from "next/head";
import Script from "next/script";
export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();
  return (
    <>
      <Head>
        <title>세상의 모든 계급표</title>
      </Head>
      
      <QueryClientProvider client={queryClient}>
        <ProSidebarProvider>
          <SideBar />
          <Component {...pageProps} />
        </ProSidebarProvider>
      </QueryClientProvider>
    </>
  );
}
