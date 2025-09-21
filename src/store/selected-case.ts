import {
  atom,
  useRecoilValue,
  useRecoilState,
  useSetRecoilState,
} from 'recoil';

import type { ElementType } from '@type/element';
/**
 * 선택한 케이스를 저장하는 atom
 */
const selectedCaseState = atom<ElementType[]>({
  key: 'selected-case',
  default: [],
});
/**
 * Selected Case Atom에 대한 getter, setter를 가져옵니다.
 */
export const useSelectedCaseStore = () => useRecoilState(selectedCaseState);
/**
 * Selected Case Atom에 대한 getter를 가져옵니다.
 */
export const useGetSelectedCaseStore = () => useRecoilValue(selectedCaseState);
/**
 * Selected Case Atom에 대한 setter를 가져옵니다.
 */
export const useSetSelectedCaseStore = () =>
  useSetRecoilState(selectedCaseState);
