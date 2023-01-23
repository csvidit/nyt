import Head from "next/head";
import React, { useState, useEffect, useRef } from "react";
import { Inter } from "@next/font/google";
import Heading from "@/components/Heading";
import News from "@/components/News";
import axios from "axios";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ data }: { data: { results: [] } }) {
  
  const containerRef = useRef(null);

  return (
    <>
      <Head>
        <title>NYT Headlines - Vidit Khandelwal</title>
        <meta
          name="description"
          content="See the top NYT headlines, straight from their wire feed."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Vidit Khandelwal"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-screen h-screen flex flex-col space-y-1 justify-center bg-zinc-200 dark:bg-zinc-900">
        <div className="w-screen h-fit flex flex-col space-y-1 justify-center bg-zinc-200 dark:bg-zinc-900 items-center">
          <Heading  />
          <News ref={containerRef} data={data} />
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch(
    "https://api.nytimes.com/svc/news/v3/content/all/all.json?api-key=" +
      process.env.NEXT_PUBLIC_API_KEY
  );
  const data = await res.json();

  return { props: { data } };
}
