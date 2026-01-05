import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta = {
    title: 'Foundation/Typography',
    tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen',
    },
};

export default meta;

export const Scale = () => (
    <div className="p-12 space-y-8 max-w-4xl mx-auto min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        <h1 className="text-3xl font-bold text-gray-900 mb-12">Typography Scale</h1>

        <div className="space-y-6">
            <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-2">Display (text-4xl)</h2>
                <p className="text-lg text-gray-600">Perfect for hero sections</p>
            </div>

            <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Heading (text-2xl)</h2>
                <p className="text-lg text-gray-600">Section headers, cards</p>
            </div>

            <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Subheading (text-xl)</h3>
                <p className="text-lg text-gray-600">Subsections, labels</p>
            </div>

            <div>
                <p className="text-lg text-gray-700 mb-2">Body (text-lg)</p>
                <p className="text-base text-gray-600">Paragraphs, descriptions</p>
            </div>
        </div>
    </div>
);
