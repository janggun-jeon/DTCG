import {
  atom,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from 'recoil';

/**
 * JSON 형식으로 파싱된 데이터
 */
export const parsedDataState = atom<string>({
  key: 'parsed-data',
  default: '',
});

/**
 * 파싱된 데이터의 상태를 가져오고 설정합니다.
 */
export const useParsedDataStore = () => useRecoilState(parsedDataState);

/**
 * 현재 파싱된 데이터의 상태를 가져옵니다
 */
export const useGetParsedDataStore = () => useRecoilValue(parsedDataState);

/**
 * 파싱된 데이터의 상태를 설정합니다
 */
export const useSetParsedDataStore = () => useSetRecoilState(parsedDataState);
