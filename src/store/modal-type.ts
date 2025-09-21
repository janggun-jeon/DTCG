import {
  atom,
  useRecoilValue,
  useRecoilState,
  useSetRecoilState,
} from 'recoil';

import type { Modal as ModalType } from '@type/common';

/**
 * 선택된 모달의 상태를 관리하는 atom입니다.
 * @type {import('recoil').RecoilState<ModalType>}
 */
const selectedModalState = atom<ModalType>({
  key: 'selected-modal',
  default: 'none',
});

/**
 * 선택된 모달의 상태를 가져오고 설정합니다.
 * @returns {[ModalType, (newState: ModalType) => void]} 현재 상태와 상태를 업데이트하는 함수.
 */
export const useSelectedModalStore = () => useRecoilState(selectedModalState);

/**
 * 선택된 모달의 현재 상태를 가져옵니다.
 * @returns {ModalType} 선택된 모달의 현재 상태.
 */
export const useGetSelectedModalStore = () =>
  useRecoilValue(selectedModalState);

/**
 * 선택된 모달의 상태를 설정합니다.
 * @returns {(newState: ModalType) => void} 선택된 모달의 상태를 업데이트하는 함수.
 */
export const useSetSelectedModalStore = () =>
  useSetRecoilState(selectedModalState);
