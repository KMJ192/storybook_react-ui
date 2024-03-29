import type { StoryFn, Meta } from '@storybook/react';

import Switch, { type SwitchProps } from '@src/components/Switch/Switch';
// import { Switch, type SwitchProps } from '@cdkit/react-ui';

import style from './Components.module.scss';

const meta: Meta<typeof Switch> = {
  title: 'UI/Components/Switch',
  component: Switch,
  parameters: {
    componentSubtitle: 'Switch',
  },
  argTypes: {},
};

const Template = (args: SwitchProps) => {
  return (
    <Switch {...args} className={style.switch}>
      <Switch.Bullet></Switch.Bullet>
    </Switch>
  );
};

export const PrimarySwitch: StoryFn<SwitchProps> = Template.bind({});
PrimarySwitch.args = {
  checked: false,
  disabled: false,
};

export default meta;
