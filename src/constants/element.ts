interface LayerType {
  layer: number;
  name: string;
}

export const LAYER_LIST: LayerType[] = [
  { layer: 1, name: '도로정보' },
  { layer: 2, name: '도로 교통시설' },
  { layer: 3, name: '일시적 사건' },
  { layer: 4, name: '동적 객체' },
  { layer: 5, name: '주행 환경' },
  { layer: 6, name: '디지털' },
  { layer: 7, name: '법ㆍ규제' },
] as const;
