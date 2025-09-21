import { useSetSelectedModalStore } from '@store/modal-type';
import { Modal } from './Modal';
import { PRE_SET } from '@constants/preset';
import { Button } from '../Button/Button';
import { useState } from 'react';
import { useSetSelectedCaseStore } from '@store/selected-case';
import { useGetCaseStore } from '@store/case';

const ApplyPresetModal = () => {
  const setModal = useSetSelectedModalStore();
  const defaultCase = useGetCaseStore();
  const setSelectedCase = useSetSelectedCaseStore();
  const [selectedPreset, setSelectedPreset] = useState<number>(1);

  const ApplyPresetIntoSelectedCase = (id: number) => {
    const selectedPreset = PRE_SET.find((preset) => preset.id === id);

    if (selectedPreset) {
      const removalIds = new Set(
        selectedPreset.removalElements.map((el) => el.id),
      );

      const filteredCase = defaultCase.filter(
        (caseItem) => !removalIds.has(caseItem.id),
      );

      setSelectedCase(filteredCase);
    }

    setModal('none');
  };

  return (
    <Modal onClose={() => setModal('none')}>
      <div className="flex flex-col items-center gap-8 text-center">
        <p className="text-xl">적용할 프리셋을 선택해주세요</p>

        <div className="grid grid-cols-4 rounded-lg">
          {PRE_SET.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedPreset(item.id)}
              className={`px-4 py-3 border ${selectedPreset === item.id && 'border-orange-400 bg-orange-400 text-white font-semibold'}`}
            >
              {item.name}
            </div>
          ))}
        </div>
        <Button
          onClick={() => ApplyPresetIntoSelectedCase(selectedPreset)}
          color="black"
          className="w-full text-lg font-semibold"
        >
          적용하기
        </Button>
      </div>
    </Modal>
  );
};

export default ApplyPresetModal;
