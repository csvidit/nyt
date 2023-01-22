import Head from "next/head";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import { Radio, Oval } from "react-loader-spinner";
import axios from "axios";
import NewsItem from "@/components/NewsItem";
import Heading from "@/components/Heading";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [news, setNews] = useState([]);

  const apiUrl =
    "https://api.nytimes.com/svc/news/v3/content/all/all.json?api-key=" +
    process.env.NEXT_PUBLIC_API_KEY;

  const fetchNews = () => {
    return axios
      .get(apiUrl)
      .then((response) => response)
      .then((response) => setNews(response?.data?.results));
  };

  useEffect(() => {
    fetchNews();
    console.log(news);
  }, []);

  let slicedNews = news?.slice(0, 5);

  if (news) {
    console.log(news?.toString());
    return (
      <>
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="w-screen h-screen flex flex-col space-y-1 justify-center bg-zinc-200 dark:bg-zinc-900">
          <div className="w-screen h-fit flex flex-col space-y-1 justify-center bg-zinc-200 dark:bg-zinc-900 items-center">
            <Heading></Heading>
            <a
              className="text-zinc-400 dark:text-zinc-700 text-xs font-extralight hover:text-zinc-700 dark:hover:text-zinc-400"
              href="https://github.com/csvidit/nyt"
            >
              A VIDIT KHANDELWAL PROJECT
            </a>
            <div className="w-1/2 border-b border-b-zinc-400 dark:border-b-zinc-700"></div>
            {slicedNews?.map((article) => {
              return <NewsItem url={article?.url} key={article?.uri} title={article?.title} abstract={article?.abstract} time={article?.updated_date}></NewsItem>;
            })}
          </div>
        </div>
      </>
    );

  } else {
    return (
      <>
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="w-screen h-screen flex flex-col space-y-1 justify-center bg-zinc-200 dark:bg-zinc-900">
          <div className="w-screen h-fit flex flex-col space-y-1 justify-center bg-zinc-200 dark:bg-zinc-900 items-center">
            <div className="flex flex-row space-x-1 items-center text-zinc-900 dark:text-zinc-200 text-4xl font-medium">
              <p>Loading</p>
              <Oval
                height={30}
                width={30}
                color="#bae6fd"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                ariaLabel="oval-loading"
                secondaryColor="#0ea5e9"
                strokeWidth={5}
                strokeWidthSecondary={5}
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}
