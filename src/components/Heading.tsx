import { TbBrandNytimes } from "react-icons/tb";
import {useScroll, motion} from "framer-motion"
import {useRef} from "react"
import containerRef from "./News"

export default function Heading() {


  return (
    <div className="flex flex-col space-y-1 w-4/5 lg:w-3/5 justify-center items-center">
      <a
        className="text-zinc-400 dark:text-zinc-700 text-xs font-extralight hover:text-zinc-700 dark:hover:text-zinc-400"
        href="https://github.com/csvidit/nyt"
      >
        A VIDIT KHANDELWAL PROJECT
      </a>
      <div className="flex flex-col space-y-1 lg:flex-row lg:space-x-1 items-center text-zinc-900 dark:text-zinc-200 text-2xl lg:text-4xl font-medium">
        
        <h1 className="font-extralight">Top Headlines from </h1>
        <div className="flex flex-row space-x-1 items-center">
          <div className="self-center"><TbBrandNytimes></TbBrandNytimes></div>
          <h1>The New York Times</h1>
        </div>
      </div>
      
      <p className="text-zinc-700 dark:text-zinc-400 text-xs font-extralight">(SCROLL FOR MORE)</p>
    </div>
  );
}
