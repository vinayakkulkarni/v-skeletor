import {
  AllowedComponentProps,
  App,
  ComponentCustomProps,
  Plugin,
  VNodeProps,
} from '@vue/composition-api';
import { VueConstructor } from 'vue';

export interface SkeletorOptions {
  shimmer?: boolean;
}

export interface SkeletorPlugin extends Plugin {
  install: (app: App, options: SkeletorOptions) => void;
}

export const useSkeletor: () => SkeletorOptions;

export interface SkeletorProps {
  as?: string;
  circle?: boolean;
  pill?: boolean;
  shimmer?: boolean;
  size?: string | number;
  width?: string | number;
  height?: string | number;
}

type Props = AllowedComponentProps &
  ComponentCustomProps &
  VNodeProps &
  SkeletorProps;

// export const Skeletor: new () => {
//   $props: AllowedComponentProps &
//     ComponentCustomProps &
//     VNodeProps &
//     SkeletorProps;
// };

export const Skeletor: VueConstructor<Vue> = {
  $props: Props,
};
