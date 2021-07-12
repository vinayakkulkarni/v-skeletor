declare module '*.vue' {
  import type { DefineComponent } from '@vue/composition-api';
  const component: DefineComponent;
  export default component;
}
