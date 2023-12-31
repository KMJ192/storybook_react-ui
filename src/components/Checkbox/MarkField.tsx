import React from 'react';

import type { OVER_RIDABLE_PROPS } from '@src/types/types';

import classNames from 'classnames/bind';
import style from '@css/components/Checkbox/MarkField/style.module.scss';
import useCheckboxState from './store/hooks/useCheckboxState';
const cx = classNames.bind(style);

type BaseProps = {
  children?: React.ReactNode;
};

const DEFAULT_ELEMENT = 'div';

type Props<T extends React.ElementType> = OVER_RIDABLE_PROPS<T, BaseProps>;

function MarkField<T extends React.ElementType = typeof DEFAULT_ELEMENT>(
  { as, children, className, ...props }: Props<T>,
  ref: React.Ref<React.ElementRef<typeof DEFAULT_ELEMENT>>,
) {
  const ELEMENT = as || DEFAULT_ELEMENT;
  const [state] = useCheckboxState();
  const { checked, disabled } = state;

  return (
    <ELEMENT
      {...props}
      ref={ref}
      className={cx('cb-mark-field', { checked }, { disabled }, className)}
    >
      {children}
    </ELEMENT>
  );
}

export type CheckboxMarkFieldProps = Props<typeof DEFAULT_ELEMENT>;
export default React.forwardRef(MarkField) as typeof MarkField;
