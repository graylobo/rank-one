import Head from "next/head";
import Bag from "../components/ranking/royal/Bag";

export default function Home() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <Bag />
      </main>
    </>
  );
}
