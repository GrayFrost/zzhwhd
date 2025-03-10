import { MDXRemote, MDXRemoteProps } from "next-mdx-remote/rsc";
import { options } from "@/config/mdx-options";
import Image from "./image";
// import Pre from "./pre";

const components = {
  Image,
  h2(props: { children: string }) {
    return <h2 {...props} id={props.children || ""} />;
  },
  h3(props: { children: string }) {
    return <h3 {...props} id={props.children || ""} />;
  },
  h4(props: { children: string }) {
    return <h4 {...props} id={props.children || ""} />;
  },
};

export default function Mdx(props: MDXRemoteProps) {
  return <MDXRemote {...props} components={components} options={options} />;
}
