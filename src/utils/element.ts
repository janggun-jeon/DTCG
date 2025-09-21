import { Response } from '@tauri-apps/api/http';
import { ParsedElement } from './../types/element';
import { elementData, memoCases } from '@mocks/elementData';
import { RandomType } from '@type/common';
import type {
  ElementType,
  ElementWithChildrenType,
  ParsedTestCasesLayer,
  TestCase,
  responseDataType,
} from '@type/element';

/**
 * 레이어 ID를 받아서 해당 레이어의 하위 레이어를 찾아서 트리 구조로 반환하는 함수
 * @param layer 레이어 ID
 * @returns 해당 레이어의 하위 레이어를 찾아서 트리 구조로 반환
 */
export function treeParser(layer: number): ElementWithChildrenType {
  const findLayer = elementData.find((item) => item.id === layer);

  if (findLayer) {
    // Layer가 존재하다면 해당 레이어의 하위 레이어를 찾아서 트리 구조로 반환
    const children = elementData.filter((item) => item.parentId === layer);
    const result = {
      ...findLayer,
      children: children.map((item) => {
        return {
          ...item,
          children: treeParser(item.id).children,
        };
      }),
    };

    return result;
  }

  return {} as ElementWithChildrenType;
}

// /**
//  * 주어진 경우의 목록에서 각 고유한 parentId를 기준으로 여러 개의 시나리오를 생성합니다.
//  * 각 시나리오는 각 고유한 parentId에 대해 해당하는 경우들 중 하나를 랜덤으로 선택하여 구성됩니다.
//  *
//  * @param {ElementType[]} cases - 시나리오를 생성하기 위한 경우들의 배열. 각 경우는 `parentId` 속성을 포함해야 합니다.
//  * @param {number} numberOfScenarios - 생성할 시나리오의 수. 기본값은 1입니다.
//  * @param {RandomType} type - 랜덤 선택 방식 ('랜덤' 또는 다른 값).
//  * @returns {Promise<TestCase[]>} 생성된 시나리오들의 배열. 각 시나리오는 ElementType 배열입니다.
//  */
// export async function createTestCases(
//   cases: ElementType[],
//   numberOfScenarios: number = 1,
//   type: RandomType,
//   description: string,
// ): Promise<TestCase> {
//   const parentIds = [
//     ...new Set(cases.filter((c) => c.parentId !== null).map((c) => c.parentId)),
//   ];

//   const scenarios = await Promise.all(
//     new Array(numberOfScenarios).fill(null).map(async () => {
//       return await Promise.all(
//         parentIds.map(async (pid) => {
//           const filteredCases =
//             type === '랜덤'
//               ? memoCases[pid!]
//               : cases.filter((c) => c.parentId === pid);
//           return filteredCases[
//             Math.floor(Math.random() * filteredCases.length)
//           ];
//         }),
//       );
//     }),
//   );

//   const result = { description: description, cases: scenarios };

//   return result;
// }
/**
 * 주어진 경우의 목록에서 각 고유한 parentId를 기준으로 여러 개의 시나리오를 생성합니다.
 * 각 시나리오는 각 고유한 parentId에 대해 해당하는 경우들 중 하나를 랜덤으로 선택하여 구성됩니다.
 *
 * @param {ElementType[]} cases - 시나리오를 생성하기 위한 경우들의 배열. 각 경우는 `parentId` 속성을 포함해야 합니다.
 * @param {number} numberOfScenarios - 생성할 시나리오의 수. 기본값은 1입니다.
 * @param {RandomType} type - 랜덤 선택 방식 ('랜덤' 또는 다른 값).
 * @returns {Promise<TestCase[]>} 생성된 시나리오들의 배열. 각 시나리오는 ElementType 배열입니다.
 */
export async function createTestCases(
  cases: ElementType[],
  numberOfScenarios: number = 1,
  type: RandomType,
  description: string,
): Promise<TestCase> {
  const parentIds = [
    ...new Set(cases.filter((c) => c.parentId !== null).map((c) => c.parentId)),
  ];
  const scenarios = await Promise.all(
    new Array(numberOfScenarios).fill(null).map(async () => {
      return await Promise.all(
        parentIds.map(async (pid) => {
          const filteredCases =
            type === '랜덤'
              ? memoCases[pid!]
              : cases.filter((c) => c.parentId === pid);
          return filteredCases[
            Math.floor(Math.random() * filteredCases.length)
          ];
        }),
      );
    }),
  );

  if (type === '랜덤') {
    for (let idx in scenarios) {
      const scenario = scenarios[idx]
      const lawCases = cases
        .filter((cs) => cs.parentId === 7)
        .filter((c) => 
          c.content?.includes(scenario.find((env) => env.parentId === 8)?.value?? '__') || //도로 기능과 등급
          c.content?.includes(scenario.find((env) => env.parentId === 12)?.value?? '__') || //도로유형
          c.content?.includes(scenario.find((env) => env.parentId === 19)?.value?? '__') || //도로선형
          c.content?.includes(scenario.find((env) => env.parentId === 21)?.value?? '__') || //차로 수
          c.content?.includes(scenario.find((env) => env.parentId === 22)?.value?? '__') || //도로 포장
          c.content?.includes(scenario.find((env) => env.parentId === 23)?.value?? '__') || //노면 상태
          c.content?.includes(scenario.find((env) => env.parentId === 72)?.value?? '__') || //중앙선
          c.content?.includes(scenario.find((env) => env.parentId === 87)?.value?? '__') || //차량신호
          c.content?.includes(scenario.find((env) => env.parentId === 165)?.value?? '__') || //도로공사
          c.content?.includes(scenario.find((env) => env.parentId === 166)?.value?? '__') || //선행사고
          c.content?.includes(scenario.find((env) => env.parentId === 167)?.value?? '__') || //장애물
          c.content?.includes(scenario.find((env) => env.parentId === 186)?.value?? '__') || //객체종류
          c.content?.includes(scenario.find((env) => env.parentId === 191)?.value?? '__') || //Trigger
          c.content?.includes(scenario.find((env) => env.parentId === 193)?.value?? '__') || //객체행동
          c.content?.includes(scenario.find((env) => env.parentId === 527)?.value?? '__') || //시간대
          c.content?.includes(scenario.find((env) => env.parentId === 528)?.value?? '__') || //요일
          c.content?.includes(scenario.find((env) => env.parentId === 529)?.value?? '__') || //날씨
          c.content?.includes(scenario.find((env) => env.parentId === 530)?.value?? '__') //기온
      );
      
      if (lawCases.length > 0) {
        const lawCase: ElementType = lawCases[Math.floor(Math.random() * lawCases.length)];
        
        scenarios[idx][scenario.length-1] = lawCase;
      }
    }
  }

  const result = { description: description, cases: scenarios };

  return result;
}

/**
 * 입력받은 데이터를 아크릴 측으로 전송합니다
 */
export function matchingCaseWithResponse(
  res: Response<responseDataType>,
): ElementType[] {
  const result: ElementType[] = [];

  // responseData에서 모든 값을 추출하여 배열로 변환
  let searchValues: string[] = [];
  Object.values(res.data.result).forEach((item) => {
    Object.values(item).forEach((value) => {
      if (Array.isArray(value) && value.length > 0) {
        searchValues = [...searchValues, ...value];
      }
    });
  });
  
  // mocks 배열을 순회하며 name이 searchValues에 포함되는지 확인
  elementData.forEach((item) => {
    if (searchValues.includes(item.value) && item.type === 'case') {
      result.push(item);
    }
  });
  
  return result;
}

/**
 * @description 시나리오를 Layer 별로, Layer 내에서는 시나리오 별로 파싱하는 함수입니다.
 * @param {TestCase} scenarios - 각 요소가 layer, name, value를 포함하는 2차원 배열.
 * @returns {ParsedScenarioLayer} - 레이어 번호를 키로 갖는 객체, 각 레이어는 시나리오 데이터를 포함하는 배열을 포함합니다.
 */
export function parseTestCasesByLayer(
  scenarios: TestCase,
  type: 'random' | 'select',
): string {
  const result: ParsedTestCasesLayer = {};

  const descriptionKey = 'tc_description';

  if (scenarios.description) {
    result[descriptionKey] = `${scenarios.description} ${type} auto generate`;
  } else {
    result[descriptionKey] = '설명 없음';
  }

  scenarios.cases.forEach((scenario, i) => {
    for (const element of scenario) {
      const layer = element.layer;

      if (layer !== undefined) {
        const layerKey = `layer${layer}DTOs`;
        if (!result[layerKey]) {
          result[layerKey] = [];
        }

        const layerArray = result[layerKey] as ParsedElement[];
        if (!result[layerKey][i]) {
          layerArray[i] = {};
        }
        layerArray[i][element.name ?? '-'] = element.value ?? '-';
      }
    }
  });

  const resultJson = JSON.stringify(result, null, 2);

  return resultJson;
}
