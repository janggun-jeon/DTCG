import { PropsWithChildren, useCallback, useState } from 'react';
import LayerElement from '../LayerElement/LayerElement';
import GroupElement from '../GroupElement/GroupElement';
import CaseElement from '../CaseElement/CaseElement';
import classNames from 'classnames';
import type { ElementWithChildrenType } from '@type/element';

export interface ElementProps {
  isFirst?: boolean;
  isLast?: boolean;
  className?: string;
  data: ElementWithChildrenType;
}

const ElementTree = ({
  isFirst = false,
  isLast = false,
  className,
  data,
}: ElementProps) => {
  const [open, setOpen] = useState<boolean>(true);

  const handleOpenClick = useCallback(() => {
    setOpen((prev) => !prev);
  }, []);

  let RenderElement = null;
  let RenderElementStyle = '';

  switch (data.type) {
    case 'layer':
      RenderElement = LayerElement;
      RenderElementStyle = 'border-none';
      break;
    case 'group':
      RenderElement = GroupElement;
      break;
    case 'case':
      RenderElement = CaseElement;
      break;
  }

  return (
    <ul
      className={classNames(
        'flex border-l dark:border-white/20',
        RenderElementStyle,
        className,
      )}
    >
      <li className="inline-block" onClick={handleOpenClick}>
        <RenderElement
          isFirst={isFirst}
          data={data}
          isLast={isLast}
          length={data.children.length}
        />
      </li>
      <li className="inline-block space-y-4">
        {open &&
          data.children.length > 0 &&
          data.children.map((child, index) => (
            <ElementTree
              key={child.id}
              data={child}
              isLast={data.children.length === index + 1}
              isFirst={index === 0}
            />
          ))}
      </li>
    </ul>
  );
};

const ElementTreeWrapper = ({ children }: PropsWithChildren) => (
  <div className="px-3.5 py-10 mt-6 overflow-auto border rounded bg-gray-50 dark:bg-zinc-600">
    {children}
  </div>
);

export { ElementTree, ElementTreeWrapper };
