import axios from "axios";
import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import { Oval } from "react-loader-spinner";

const News = (props) => {
  // const [news, setNews] = useState([]);

  // const apiUrl =
  //   "https://api.nytimes.com/svc/news/v3/content/all/all.json?api-key=" +
  //   process.env.NEXT_PUBLIC_API_KEY;

  // const fetchNews = () => {
  //   return axios
  //     .get(apiUrl)
  //     .then((response) => response)
  //     .then((response) => setNews(response?.data?.results));
  // };

  // useEffect(() => {
  //   fetchNews();
  //   console.log(news);
  // }, []);

  const [hydrated, setHydrated] = useState(false);
  useEffect(() => {
    setHydrated(true);
  }, []);

  let slicedNews = props?.data?.results?.slice(0,10);

  // let slicedNews = news?.slice(0, 10);

  return (
    <div className="w-4/5 lg:w-3/5 h-96 flex-col space-y-1 justify-center bg-zinc-200 dark:bg-zinc-900 items-center overflow-scroll scroll-smooth">
      {slicedNews?.map((article) => {
        return (
          <NewsItem
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

  // if (slicedNews?.length>0) {
  //   return (
  //     <div className="w-4/5 lg:w-3/5 h-96 flex-col space-y-1 justify-center bg-zinc-200 dark:bg-zinc-900 items-center overflow-scroll scroll-smooth">
  //       {slicedNews?.map((article) => {
  //         return (
  //           <NewsItem
  //             url={article?.url}
  //             key={article?.uri}
  //             title={article?.title}
  //             abstract={article?.abstract || ""}
  //             time={article?.updated_date}
  //           ></NewsItem>
  //         );
  //       })}
  //     </div>
  //   );
  // } else {
  //   return (
  //     <div className="w-4/5 lg:w-3/5 flex flex-row space-x-1 self-center justify-center text-zinc-900 dark:text-zinc-200 bg-zinc-200 dark:bg-zinc-900 items-center">
  //       <p className="text-2xl self-center">Loading</p>
  //       <Oval
  //         height={30}
  //         width={30}
  //         color="#bae6fd"
  //         wrapperStyle={{}}
  //         wrapperClass=""
  //         visible={true}
  //         ariaLabel="oval-loading"
  //         secondaryColor="#0ea5e9"
  //         strokeWidth={5}
  //         strokeWidthSecondary={5}
  //         className="self-center"
  //       />
  //     </div>
  //   );
  // }
};

export default News;
