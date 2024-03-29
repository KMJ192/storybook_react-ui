import { defaultValues } from '../Common/defaultValues';
import type { FontStyle } from '../Common/types';

export const pieChartDefaultValues: FontStyle & {
  backgroundColor: string;
  wedgeColor: string;
  disabledColor: string;
  title: FontStyle;
  legend: FontStyle & {
    direction: 'v' | 'h';
  };
  tooltip: FontStyle & {
    backgroundColor: string;
    borderRadius: number;
    borderColor: string;
  };
} = {
  backgroundColor: 'none',
  wedgeColor: '#99daf5',
  disabledColor: '#a5a5a5',
  fontColor: defaultValues.fontStyle.fontColor,
  fontFamily: defaultValues.fontStyle.fontFamily,
  fontWeight: '500',
  fontSize: 16,
  title: defaultValues.fontStyle,
  legend: {
    ...defaultValues.fontStyle,
    direction: 'v',
  },
  tooltip: {
    ...defaultValues.fontStyle,
    backgroundColor: '#fff',
    borderRadius: 4,
    borderColor: '#000',
  },
};
