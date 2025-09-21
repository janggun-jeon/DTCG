import { useCallback, useState } from 'react';
import { useGetSelectedModalStore } from '@store/modal-type';
import Modals from '@components/home/Modals/Modals';
import TopControlPanel from '@components/home/TopControlPanel/TopControlPanel';
import { treeParser } from '@utils/element';
import classNames from 'classnames';
import Layer from '@components/home/Layer/Layer';
import Spinner from '@components/common/Spinner/Spinner';
import { useGetLoadingStateStore } from '@store/loading';
import { Toaster } from 'react-hot-toast';

const HomePage = () => {
  const modalType = useGetSelectedModalStore();
  const [layer, setLayer] = useState<number>(1);
  const isLoading = useGetLoadingStateStore();

  const handleLayerClick = useCallback((layer: number) => {
    setLayer(Math.min(Math.max(layer, 1), 7));
  }, []);

  return (
    <div className="py-10 select-none">
      {isLoading && <Spinner />}
      <Toaster />

      {/* 사고, 법률, 랜덤, 선택랜덤, 알림 등의 모달 */}
      <Modals modalType={modalType} />

      {/* 사고 데이터 입력, 법률 키워드 검색 / 전체 해제, 초기화 버튼들 */}
      <TopControlPanel />

      <Layer>
        <Layer.Header layer={layer} onClick={handleLayerClick} />
        <Layer.TreeWrapper>
          {[1, 2, 3, 4, 5, 6, 7].map((layerNumber) => (
            <Layer.Tree
              key={layerNumber}
              data={treeParser(layerNumber)}
              className={classNames({ hidden: layer !== layerNumber })}
            />
          ))}
        </Layer.TreeWrapper>
        <Layer.HandleScenarioButtons />
        <Layer.Result />
      </Layer>
    </div>
  );
};

export default HomePage;
