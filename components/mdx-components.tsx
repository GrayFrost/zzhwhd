import { MDXRemote, MDXRemoteProps } from "next-mdx-remote/rsc";
import { options } from "@/config/mdx-options";
import Image from "./image";
import { createHeaderId } from "@/utils/h-id";
import { ReactNode } from "react";
// import Pre from "./pre";

const components = {
  Image,
  h2(props: { children: string }) {
    return (
      <h2
        {...props}
        id={createHeaderId(props.children ? `h2-${props.children}` : "")}
      />
    );
  },
  h3(props: { children: string }) {
    return (
      <h3
        {...props}
        id={createHeaderId(props.children ? `h3-${props.children}` : "")}
      />
    );
  },
  h4(props: { children: string }) {
    return (
      <h4
        {...props}
        id={createHeaderId(props.children ? `h4-${props.children}` : "")}
      />
    );
  },
  code(props: { children: ReactNode; className?: string }) {
    const { className } = props;
    const codeClassName = className ? className : "text-rose-700";
    return <code {...props} className={codeClassName} />;
  },
};

export default function Mdx(props: MDXRemoteProps) {
  return <MDXRemote {...props} components={components} options={options} />;
}
