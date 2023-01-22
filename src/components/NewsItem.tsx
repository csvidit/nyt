import React from "react";
import Link from "next/link";
import { UrlObject } from "url";

export default function NewsItem(props: { url: string | UrlObject; title: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; abstract: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; time: string | number | Date; }) {
  return (
    <div className="flex flex-col space-y-1 justify-center items-center">
      <Link
        href={props.url}
        className="flex w-full flex-col space-y-1 hover:bg-zinc-300 dark:hover:bg-zinc-700 p-2 rounded-xl col-span-2 font-light h-max"
      >
        <div className="flex flex-col space-y-1 ">
          <p className="text-md text-zinc-900 dark:text-zinc-200 text-2xl">{props.title}</p>
          <p className="text-zinc-700 dark:text-zinc-400">{props.abstract}</p>
          <div className="flex h-max flex-row space-x-1 text-zinc-800 dark:text-zinc-300 text-xs font-medium items-center ">
            <p className="">
              {new Date(props.time).toLocaleTimeString("en-IN", {
                timeStyle: "short",
              })}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}
