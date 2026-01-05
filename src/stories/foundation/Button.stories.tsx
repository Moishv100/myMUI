import type { Meta, StoryObj } from '@storybook/react';
import { Button, type ButtonProps } from '../../components/ui/Button';

const meta: Meta<typeof Button> = {
    title: 'Foundation/Button',
    component: Button,
    argTypes: {
        variant: {
            control: 'select',
            options: ['default', 'destructive', 'outline', 'ghost'],
        },
        size: {
            control: 'select',
            options: ['default', 'sm', 'lg', 'icon'],
        },
    },
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
    args: {
        children: 'Button',
    },
};

export const Variants: Story = {
    args: {
        variant: "destructive",
        size: "icon"
    },

    render: (args: ButtonProps) => (
        <div className="flex flex-wrap gap-4 p-8 bg-gray-50 rounded-xl">
            <Button variant="default" {...args}>Default</Button>
            <Button variant="destructive" {...args}>Destructive</Button>
            <Button variant="outline" {...args}>Outline</Button>
            <Button variant="ghost" {...args}>Ghost</Button>
        </div>
    )
};

export const Sizes: Story = {
    render: (args: ButtonProps) => (
        <div className="flex flex-col gap-4 p-8 bg-gray-50 rounded-xl">
            <Button size="default" {...args}>Default</Button>
            <Button size="sm" {...args}>Small</Button>
            <Button size="lg" {...args}>Large</Button>
            <Button size="icon" className="w-12 h-12">
                👤
            </Button>
        </div>
    ),
};

