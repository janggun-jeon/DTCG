import {
  atom,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from 'recoil';

export const loadingState = atom<boolean>({
  key: 'loading',
  default: false,
});

export const useLoadingStateStore = () => useRecoilState(loadingState);

export const useGetLoadingStateStore = () => useRecoilValue(loadingState);

export const useSetLoadingStateStore = () => useSetRecoilState(loadingState);
