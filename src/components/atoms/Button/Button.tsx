import React from 'react';

import type { OVER_RIDABLE_PROPS } from '@src/types/types';

import classNames from 'classnames/bind';
import style from './style.module.scss';
const cx = classNames.bind(style);

type BaseProps = {
  children?: React.ReactNode;
  variant?: 'primary' | 'loading';
  loading?: boolean;
};

const DEFAULT_COMPONENT_ELEMENT = 'button';

type Props<T extends React.ElementType> = OVER_RIDABLE_PROPS<T, BaseProps>;

function Button<T extends React.ElementType = typeof DEFAULT_COMPONENT_ELEMENT>(
  {
    children,
    as,
    variant = 'primary',
    loading = false,
    className,
    ...props
  }: Props<T>,
  ref: React.Ref<any>,
) {
  const Element = as ?? DEFAULT_COMPONENT_ELEMENT;

  return (
    <Element {...props} ref={ref} className={cx('button', variant)}>
      {children}
    </Element>
  );
}

export type { BaseProps as ButtonProps };
export default React.forwardRef(Button) as typeof Button;
