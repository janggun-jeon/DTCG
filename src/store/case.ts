import {
  atom,
  useRecoilValue,
  useRecoilState,
  useSetRecoilState,
} from 'recoil';

import type { ElementType } from '@type/element';
/**
 * 모든 케이스를 저장하는 atom
 */
const caseState = atom<ElementType[]>({
  key: 'case',
  default: [],
});
/**
 * Case Atom에 대한 getter, setter를 가져옵니다.
 */
export const useCaseStore = () => useRecoilState(caseState);
/**
 * Case Atom에 대한 getter를 가져옵니다.
 */
export const useGetCaseStore = () => useRecoilValue(caseState);
/**
 * Case Atom에 대한 setter를 가져옵니다.
 */
export const useSetCaseStore = () => useSetRecoilState(caseState);
