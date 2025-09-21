import { PropsWithChildren } from 'react';
import { ElementType } from '@type/element';
import Element from '../Element/Element';
import ElementLine from '../ElementLine/ElementLine';

interface LayerElementProps extends PropsWithChildren {
  isFirst: boolean;
  isLast?: boolean;
  length?: number;
  data: ElementType;
}

const LayerElement = ({ data }: LayerElementProps) => {
  return (
    <div id={`layer-${data.value}`} className="flex items-center">
      <Element color="layer">{data.value}</Element>
      <ElementLine />
    </div>
  );
};

export default LayerElement;
