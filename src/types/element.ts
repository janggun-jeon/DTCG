/**
 * @description 요소의 타입
 */
export type ElementTypeType = 'layer' | 'group' | 'case';

/**
 * @description 한 요소 전체 구성
 */
export interface ElementType {
  id: number;
  layer?: number;
  type: ElementTypeType;
  name?: string;
  parentId: number | null;
  value: string;
  content?: string | undefined;
}

/**
 * @description 한 요소가 가진 자식
 */
export interface ElementWithChildrenType extends ElementType {
  children: ElementWithChildrenType[];
}

/**
 * @description 한개의 테스트 케이스
 */
export type TestCase = { description: string; cases: ElementType[][] };

/**
 * @description 아크릴 통신에 사용되는 response의 형식
 */
export interface responseDataType {
  r: number;
  result: {
    [key: string]: {
      [property: string]: string[];
    };
  };
}

/**
 * @description 시나리오 결과를 파싱할 때, 한 요소의 구성
 */
export interface ParsedElement {
  [key: string]: string | number;
}

/**
 * @description 시나리오 결과를 파싱할 때, 전체 요소
 */
export type ParsedTestCasesLayer = Record<string, ParsedElement[] | string>;

/**
 * @description 프리셋의 요소들
 */
export interface Preset {
  id: number;
  name: string;
  removalElements: ElementType[];
}
