import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
const meta = { title:'UI/Button', component:Button, args:{ children:'Ask North Star' } } satisfies Meta<typeof Button>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Primary: Story = {};
export const Secondary: Story = { args:{ variant:'secondary' } };
export const Ghost: Story = { args:{ variant:'ghost' } };
