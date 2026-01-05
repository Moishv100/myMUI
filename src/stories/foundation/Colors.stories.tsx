import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta = {
    title: 'Foundation/Colors/Full Palette',
    tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen',
    },
};

export default meta;

const colorGroups = [
    { name: 'Primary', colors: ['primary'] },
    { name: 'Gray', colors: ['gray', 'slate', 'zinc', 'neutral', 'stone'] },
    { name: 'Blue Spectrum', colors: ['blue', 'indigo', 'violet'] },
    { name: 'Green Spectrum', colors: ['green', 'emerald'] },
    { name: 'Yellow/Orange', colors: ['yellow', 'amber', 'orange'] },
    { name: 'Red Spectrum', colors: ['red', 'rose'] },
];

export const FullPalette = () => (
    <div className="p-8 space-y-12 min-h-screen bg-gray-50">
        <div className="text-center mb-12">
            <h1 className="text-5xl font-black bg-gradient-to-r from-primary-600 to-blue-600 bg-clip-text text-transparent mb-4">
                Tailwind Color Palette
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Complete system colors + your custom tokens
            </p>
        </div>

        {colorGroups.map((group) => (
            <section key={group.name} className="space-y-6">
                <h2 className="text-3xl font-bold text-gray-900 border-b pb-4">
                    {group.name}
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
                    {Array.from({ length: 9 }, (_, shade) => {
                        const shadeNum = 50 + shade * 100;
                        const colors = group.colors.flatMap((color) =>
                            [`${color}-${shadeNum}`, shadeNum === 500 ? `${color}` : null]
                                .filter(Boolean) as string[]
                        );
                        return colors.map((colorName) => (
                            <div
                                key={colorName}
                                className={`p-6 rounded-xl border shadow-sm transition-all hover:scale-105 cursor-pointer group relative overflow-hidden ${colorName.includes('500')
                                        ? 'text-white'
                                        : colorName.includes('50')
                                            ? 'text-gray-900'
                                            : 'text-gray-100'
                                    }`}
                                style={{
                                    backgroundColor: `var(--color-${colorName})` || `hsl(var(--${colorName}))`,
                                }}
                            >
                                <div className="font-mono text-xs opacity-80 mb-1 group-hover:opacity-100">
                                    {colorName}
                                </div>
                                <div className="font-bold text-sm">{shadeNum}</div>
                                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                        ));
                    })}
                </div>
            </section>
        ))}
    </div>
);
