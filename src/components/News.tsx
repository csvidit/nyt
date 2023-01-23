import axios from "axios";
import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import { Oval } from "react-loader-spinner";
import { UrlObject } from "url";

const News = (props: { data: { results: [] }; }) => {

  const [hydrated, setHydrated] = useState(false);
  useEffect(() => {
    setHydrated(true);
  }, []);

  let slicedNews = props?.data?.results?.slice(0,10);

  return (
    <div className="w-4/5 lg:w-3/5 h-96 flex-col space-y-1 justify-center bg-zinc-200 dark:bg-zinc-900 items-center overflow-scroll scroll-smooth">
      {slicedNews?.map((article: { url: string | UrlObject; uri: React.Key | null | undefined; title: string; abstract: any; updated_date: string; }) => {
        return (
          hydrated && <NewsItem
            url={article?.url}
            key={article?.uri}
            title={article?.title}
            abstract={article?.abstract || ""}
            time={article?.updated_date}
          ></NewsItem>
        );
      })}
    </div>
  );
};

export default News;
