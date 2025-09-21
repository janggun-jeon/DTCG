import { LuLoader2 } from 'react-icons/lu';

const Spinner = () => {
  return (
    <div className="fixed inset-0 z-10 flex items-center justify-center bg-black/50">
      <LuLoader2 size={60} className="animate-spin text-white" />
    </div>
  );
};

export default Spinner;
