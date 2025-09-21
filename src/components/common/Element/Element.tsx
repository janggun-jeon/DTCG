import classNames from 'classnames';
import { elementColors } from './Element.style';
import type { ElementColorType } from './Element.type';

interface ElementProps extends React.HTMLAttributes<HTMLButtonElement> {
  color?: ElementColorType;
  selected?: boolean;
}

const Element = ({
  color = 'case',
  className,
  children,
  selected = false,
  ...rest
}: ElementProps) => {
  return (
    <button
      className={classNames(
        'h-10 text-sm font-semibold rounded-lg w-36 dark:text-gray-800/80',
        { '!border-orange-400 text-orange-400': selected },
        elementColors[color],
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Element;
