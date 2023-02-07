import type { AppProps } from "next/app";
import { ProSidebarProvider } from "react-pro-sidebar";
import { QueryClient, QueryClientProvider } from "react-query";
import SideBar from "../components/navigation/SideBar";
import Head from "next/head";
import Script from "next/script";
import DefaultLayout from "../components/layout/DefaultLayout";
export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();
  return (
    <>
      <Head>
        <title>세상의 모든 계급표</title>
      </Head>
      <Script
        type="text/javascript"
        onError={(e) => {
          console.error("Daum Script failed to load", e);
        }}
        src="//t1.daumcdn.net/kas/static/ba.min.js"
        async
      ></Script>
      <Script
        id="Adsense-id"
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1544015487048934"
        crossOrigin="anonymous"
        onError={(e) => {
          console.error("AdSence Script failed to load!", e);
        }}
      ></Script>
      <QueryClientProvider client={queryClient}>
        <ProSidebarProvider>
          <DefaultLayout>
            <Component {...pageProps} />
          </DefaultLayout>
        </ProSidebarProvider>
      </QueryClientProvider>
    </>
  );
}
