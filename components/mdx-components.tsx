import { MDXRemote, MDXRemoteProps } from "next-mdx-remote/rsc";
import { options } from "@/config/mdx-options";
import Image from "./image";
import { createHeaderId } from "@/utils/h-id";
import { ReactElement, ReactNode } from "react";
// import Pre from "./pre";

const components = {
  Image,
  h2(props: { children: string | ReactElement<HTMLElement> }) {
    const { children } = props;
    const text =
      typeof children === "string"
        ? children
        : children?.props?.children.toString();
    return <h2 {...props} id={createHeaderId(text ? `h2-${text}` : "")} />;
  },
  h3(props: { children: string | ReactElement<HTMLElement> }) {
    const { children } = props;
    const text =
      typeof children === "string"
        ? children
        : children?.props?.children.toString();
    return <h3 {...props} id={createHeaderId(text ? `h3-${text}` : "")} />;
  },
  h4(props: { children: string | ReactElement<HTMLElement> }) {
    const { children } = props;
    const text =
      typeof children === "string"
        ? children
        : children?.props?.children.toString();
    return <h4 {...props} id={createHeaderId(text ? `h4-${text}` : "")} />;
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
