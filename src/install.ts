import VueCompositionApi, { reactive } from '@vue/composition-api';
import { SkeletorOptions } from 'types';
import { VueConstructor } from 'vue';
import { DEFAULT_OPTIONS, SkeletorSymbol } from './constants';

let installed = false;

const SkeletorPlugin = {
  install(Vue: VueConstructor, options: SkeletorOptions = {}) {
    if (installed) return;
    Vue.use(VueCompositionApi);
    Vue.use(
      SkeletorSymbol,
      reactive<SkeletorOptions>({ ...DEFAULT_OPTIONS, ...options }),
    );
    installed = true;
  },
};

export default SkeletorPlugin;
