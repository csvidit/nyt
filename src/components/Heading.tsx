import { TbBrandNytimes } from "react-icons/tb";

export default function Heading() {
  return (
    <div className="flex flex-col space-y-1 w-4/5 lg:w-3/5 justify-center items-center">
      <div className="flex flex-col space-y-1 lg:flex-row lg:space-x-1 items-center text-zinc-900 dark:text-zinc-200 text-2xl lg:text-4xl font-medium ">
        <h1 className="font-extralight">Top Headlines from </h1>
        <div className="flex flex-row space-x-1 items-center">
          <TbBrandNytimes></TbBrandNytimes>
          <h1>The New York Times</h1>
        </div>
      </div>
      <a
        className="text-zinc-400 dark:text-zinc-700 text-xs font-extralight hover:text-zinc-700 dark:hover:text-zinc-400"
        href="https://github.com/csvidit/nyt"
      >
        A VIDIT KHANDELWAL PROJECT
      </a>
      <div className="w-full border-b border-b-zinc-400 dark:border-b-zinc-700"></div>
    </div>
  );
}
