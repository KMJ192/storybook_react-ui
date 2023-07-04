import React from 'react';

import type { OVER_RIDABLE_PROPS } from '@src/types/types';

import classNames from 'classnames/bind';
import style from './style.module.scss';
import Flex from '../Flex/Flex';
const cx = classNames.bind(style);

type BaseProps = {
  children?: React.ReactNode;
};

const DEFAULT_ELEMENT = 'div';

type Props<T extends React.ElementType> = OVER_RIDABLE_PROPS<T, BaseProps> & {
  as?: T;
};

function Center<T extends React.ElementType = typeof DEFAULT_ELEMENT>(
  { as, children, className, ...props }: Props<T>,
  ref: React.Ref<any>,
) {
  return (
    <Flex {...props} ref={ref} className={cx('center', className)}>
      {children}
    </Flex>
  );
}

export type CenterProps = Props<typeof DEFAULT_ELEMENT>;
export default React.forwardRef(Center) as typeof Center;
