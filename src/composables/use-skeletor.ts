import { inject, warn } from '@vue/composition-api';
import { SkeletorOptions } from 'types';
import { DEFAULT_OPTIONS, SkeletorSymbol } from '../constants';

/**
 * Composable for using the skeletor
 *
 * @returns {SkeletorOptions} - the options
 */
export default function useSkeletor(): SkeletorOptions {
  const skeletor = inject<SkeletorOptions>(SkeletorSymbol, DEFAULT_OPTIONS);

  if (!skeletor) {
    warn('Skeletor is not installed on this Vue application.');
  }

  return skeletor;
}
