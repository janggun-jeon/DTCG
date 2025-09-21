import AccidentModal from '@components/common/Modal/AccidentModal';
import ApplyPresetModal from '@components/common/Modal/ApplyPresetModal';
import LawModal from '@components/common/Modal/LawModal';
import RandomModal from '@components/common/Modal/RandomModal';
import SelectedRandomModal from '@components/common/Modal/SelectedRandomModal';
import { Modal as ModalType } from '@type/common';

interface ModalsProps {
  modalType: ModalType;
}

const Modals = ({ modalType }: ModalsProps) => {
  return (
    <>
      {modalType === '랜덤' && <RandomModal />}
      {modalType === '선택' && <SelectedRandomModal />}
      {modalType === '사고' && <AccidentModal />}
      {modalType === '법률' && <LawModal />}
      {modalType === '프리셋' && <ApplyPresetModal />}
    </>
  );
};

Modals.propTypes = {};

export default Modals;
