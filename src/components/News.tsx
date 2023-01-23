import React, { useState, useEffect, useRef } from "react";
import NewsItem from "./NewsItem";
import { UrlObject } from "url";
import { motion, useScroll } from "framer-motion";

const News = (props: {
  data: { results: [] };
  ref: React.MutableRefObject<null>;
}) => {
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => {
    setHydrated(true);
  }, []);

  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    container: targetRef,
  });

  let slicedNews = props?.data?.results

  return (
    <div className="w-4/5 lg:w-3/5 h-96 flex flex-col items-center relative">
      <div ref={targetRef} className="mb-2 w-100 flex flex-col space-y-1 justify-center bg-zinc-200 dark:bg-zinc-900 items-center overflow-scroll scroll-smooth">
        {slicedNews?.map(
          (article: {
            url: string | UrlObject;
            uri: React.Key | null | undefined;
            title: string;
            abstract: any;
            updated_date: string;
          }) => {
            return (
              hydrated && (
                <NewsItem
                  url={article?.url}
                  key={article?.uri}
                  title={article?.title}
                  abstract={article?.abstract || ""}
                  time={article?.updated_date}
                ></NewsItem>
              )
            );
          }
        )}
      </div>
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="mt-2 absolute bottom-0 left-0 right-0 w-max-full h-2 bg-zinc-400 dark:bg-zinc-600"
      ></motion.div>
    </div>
  );
};

export default News;
