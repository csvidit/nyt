import { TbBrandNytimes } from "react-icons/tb";

export default function Heading() {
  return (
    <div className="flex flex-row space-x-1 items-center text-zinc-900 dark:text-zinc-200 text-4xl font-medium">
      <h1 className="font-extralight">Top Headlines from </h1>
      <TbBrandNytimes></TbBrandNytimes>
      <h1>The New York Times</h1>
    </div>
  );
}
