import { JSX, SVGProps } from "react";
import {
  ReactIcon,
  SvelteIcon,
  VueIcon,
  RubyIcon,
  GitIcon,
  FlutterIcon,
  D3Icon,
  MatrixIcon,
  HexoIcon,
  NextIcon,
  NginxIcon,
  DockerIcon,
  SwiftIcon,
  CocoapodsIcon,
} from "@/components/icons";

export const tagConfigMap: Record<
  string,
  (svgProps: SVGProps<SVGSVGElement>) => JSX.Element
> = {
  react: ReactIcon,
  vue: VueIcon,
  svelte: SvelteIcon,
  ruby: RubyIcon,
  git: GitIcon,
  flutter: FlutterIcon,
  d3: D3Icon,
  math: MatrixIcon,
  hexo: HexoIcon,
  nextjs: NextIcon,
  nginx: NginxIcon,
  docker: DockerIcon,
  swift: SwiftIcon,
  cocoapods: CocoapodsIcon,
};
