import { PropsWithChildren, useCallback, useEffect, useState } from 'react';
import ElementLine from '../ElementLine/ElementLine';
import Element from '../Element/Element';
import { ElementType } from '@type/element';
import { useSetCaseStore } from '@store/case';
import { useSelectedCaseStore } from '@store/selected-case';

interface CaseElementProps extends PropsWithChildren {
  data: ElementType;
  isFirst?: boolean;
}

const CaseElement = ({ data, isFirst = false }: CaseElementProps) => {
  const setCaseStore = useSetCaseStore();
  const [selectedCase, setSelectedCase] = useSelectedCaseStore();
  const [isSelected, setIsSelected] = useState<boolean>(isFirst);

  /**
   * @description 케이스를 클릭하여 선택/삭제합니다.
   */
  const handleIsSelectedClick = useCallback(() => {
    setIsSelected((prev) => !prev);
    setSelectedCase((prevSelectedCase) => {
      const caseIndex = prevSelectedCase.findIndex(
        (item) => item.id === data.id,
      );
      if (caseIndex === -1) {
        // 요소가 전역 리스트에 없을 경우 추가
        return [...prevSelectedCase, data];
      } else {
        // 요소가 전역 리스트에 있을 경우 제거
        return prevSelectedCase.filter((_, index) => index !== caseIndex);
      }
    });
  }, [data, setSelectedCase]);

  useEffect(() => {
    // 전역 리스트에 요소가 있는지 확인
    const isExistCase = selectedCase.findIndex((item) => item.id === data.id);
    setIsSelected(isExistCase !== -1); // 요소가 있을 경우 선택 상태로 변경
  }, [data, selectedCase]);

  useEffect(function init() {
    setCaseStore((prev) => [...prev, data]);
    if (isFirst) {
      setSelectedCase((prevSelectedCase) => {
        const isExistCase = prevSelectedCase.some(
          (item) => item.id === data.id,
        );
        if (isExistCase) {
          // 이미 요소가 있다면 기존 상태를 유지합니다.
          return prevSelectedCase;
        }
        // 요소가 없다면 추가합니다.
        return [...prevSelectedCase, data];
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div id={`case-${data.value}`} className="relative flex items-center">
      <ElementLine />
      <Element selected={isSelected} onClick={handleIsSelectedClick}>
        {data.value}
      </Element>
    </div>
  );
};

export default CaseElement;
