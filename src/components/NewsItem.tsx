import React from "react";
import {BsDot} from "react-icons/bs"
import Link from "next/link";

export default function NewsItem(props) {
  return (
    <div className="flex flex-col space-y-1 justify-center items-center w-2/5">
      <Link
        href={props.url}
        className="flex w-full flex-col space-y-1 hover:bg-zinc-500 p-2 rounded-xl col-span-2 font-light h-max"
      >
        <div className="flex flex-col space-y-1 ">
          <p className="text-md text-zinc-200 text-2xl">{props.title}</p>
          <p className="text-zinc-400">{props.abstract}</p>
          <div className="flex flex-row space-x-1 text-slate-300 text-xs items-center">
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
