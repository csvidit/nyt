import React from "react";

export default function NewsItem(props: { children: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; })
{
    return(<div className="flex flex-col space-y-1">
        {props.children}
    </div>)
}