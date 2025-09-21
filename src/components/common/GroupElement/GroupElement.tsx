import { PropsWithChildren, useCallback, useState } from 'react';
import ElementLine from '../ElementLine/ElementLine';
import Element from '../Element/Element';
import { ElementType } from '@type/element';

interface GroupElementProps extends PropsWithChildren {
  data: ElementType;
}

const GroupElement = ({ data }: GroupElementProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const handleIsOpen = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return (
    <div
      id={`group-${data.value}`}
      className="relative flex items-center"
      onClick={handleIsOpen}
    >
      <ElementLine />
      <Element color="group" className="flex items-center">
        <span className="basis-1/6"></span>
        <span className="basis-4/6">{data.value}</span>
        <div className="basis-1/6">
          <div className="text-xs text-white bg-gray-400 rounded-full dark:bg-gray-400/80 size-4 dark:text-white/80">
            {isOpen ? '-' : '+'}
          </div>
        </div>
      </Element>
      {isOpen && <ElementLine />}
    </div>
  );
};

export default GroupElement;
