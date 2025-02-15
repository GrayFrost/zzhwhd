import { MDXRemote, MDXRemoteProps,  } from "next-mdx-remote/rsc";
import { options } from "@/config/mdx-options";
import Image from "./image";
// import Pre from "./pre";

const components = {
  Image,
};

export default function Mdx(props: MDXRemoteProps) {
  return <MDXRemote {...props} components={components} options={options}/>;
}
