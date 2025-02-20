declare module '@rollup/plugin-sucrase' {
  import { Plugin } from 'rollup';
  type Options = {
    transforms?: string[];
    exclude?: string[];
    jsxPragma?: string;
    jsxFragmentPragma?: string;
    enableLegacyTypeScriptModuleInterop?: string;
    enableLegacyBabel5ModuleInterop?: string;
    production?: boolean;
  };
  export default function sucrase(options: Options): Plugin;
}
