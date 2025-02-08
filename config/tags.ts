import { JSX, SVGProps } from "react";
import { ReactIcon, SvelteIcon, VueIcon, RubyIcon } from "@/components/icons";

export const tagConfigMap: Record<
  string,
  (svgProps: SVGProps<SVGSVGElement>) => JSX.Element
> = {
  react: ReactIcon,
  vue: VueIcon,
  svelte: SvelteIcon,
  ruby: RubyIcon,
};
