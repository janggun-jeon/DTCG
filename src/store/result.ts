import {
  atom,
  useRecoilValue,
  useRecoilState,
  useSetRecoilState,
} from 'recoil';

import type { TestCase } from '@type/element';

/**
 * 결과 상태를 관리하는 atom입니다.
 * @type {import('recoil').RecoilState<TestCase>}
 */
const resultState = atom<TestCase>({
  key: 'result',
  default: { description: '', cases: [] },
});

/**
 * 시나리오 생성 결과 상태를 가져오고 설정합니다.
 * @returns {[TestCase, (newState: TestCase) => void]} 현재 상태와 상태를 업데이트하는 함수.
 */
export const useResultStore = () => useRecoilState(resultState);

/**
 * 시나리오 생성 결과 상태의 현재 값을 가져옵니다.
 * @returns {TestCase} 결과 상태의 현재 값.
 */
export const useGetResultStore = () => useRecoilValue(resultState);

/**
 * 시나리오 생성 결과 상태를 설정합니다.
 * @returns {(newState: TestCase) => void} 결과 상태를 업데이트하는 함수.
 */
export const useSetResultStore = () => useSetRecoilState(resultState);
