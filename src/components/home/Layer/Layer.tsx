import { PropsWithChildren } from 'react';
import classNames from 'classnames';
import LayerHeader, { LayerHeaderProps } from '../LayerHeader/LayerHeader';
import {
  ElementProps,
  ElementTree,
  ElementTreeWrapper,
} from '@components/common/ElementTree/ElementTree';
import ResultTable from '../ResultTable/ResultTable';
import SaveButton from '../SaveButton/SaveButton';
import CreateRandomButton from '../HandleScenarioButtons/CreateRandomButton';
import CreateSelectRandomButton from '../HandleScenarioButtons/CreateSelectRandomButton';
import DeleteButton from '../HandleScenarioButtons/DeleteButton';

interface LayerProps {
  className?: string;
}

const Layer = ({ children, className }: PropsWithChildren<LayerProps>) => (
  <div
    className={classNames(
      'px-3.5 py-10 mt-6 overflow-auto border rounded bg-gray-50 dark:bg-zinc-600',
      className,
    )}
  >
    {children}
  </div>
);

/**
 * 현재 Layer를 설정하는 리스트입니다.
 */
Layer.Header = ({ layer, onClick }: LayerHeaderProps) => (
  <LayerHeader layer={layer} onClick={onClick} />
);

/**
 * Layer 별 트리구조입니다.
 */
Layer.Tree = ({ isFirst, isLast, className, data }: ElementProps) => (
  <ElementTree
    isFirst={isFirst}
    isLast={isLast}
    className={className}
    data={data}
  />
);

Layer.TreeWrapper = ({ children }: PropsWithChildren) => (
  <ElementTreeWrapper>{children}</ElementTreeWrapper>
);

/**
 * 트리 하단의 랜덤생성, 선택 생성, DB에 저장하기 버튼입니다.
 */
Layer.HandleScenarioButtons = () => {
  return (
    <div className="flex flex-col items-center w-full gap-5">
      <div className="flex justify-between w-full mt-6">
        <div className="w-[352px]"></div>
        <div className="flex justify-center w-[352px] gap-2">
          <CreateRandomButton />
          <CreateSelectRandomButton />
        </div>
        <DeleteButton />
      </div>
      <SaveButton />
    </div>
  );
};

/**
 * 시나리오 생성 결과 테이블입니다.
 */
Layer.Result = () => <ResultTable />;

export default Layer;
