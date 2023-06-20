import type { StoryFn, Meta } from '@storybook/react';

import Popup from '@src/components/atoms/Popup/Popup';
import type { PopupProps } from '@src/components/atoms/Popup/Popup';

const meta: Meta<typeof Popup> = {
  title: 'UI/Atoms/Popup',
  component: Popup,
  parameters: {
    componentSubtitle: 'Popup',
  },
  argTypes: {
    animation: {
      options: ['fade', 'none'],
      control: {
        type: 'radio',
      },
    },
  },
};

const Template = (args: PopupProps<'div'>) => {
  const { children, ...arg } = args;

  return <Popup {...arg}>{children}</Popup>;
};

export const Test: StoryFn<PopupProps<'div'>> = Template.bind({});
Test.args = {
  children: 'Popup',
  animation: 'fade',
  visible: false,
  style: {
    padding: '30px',
  },
};

export default meta;
