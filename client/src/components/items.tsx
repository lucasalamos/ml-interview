import React from 'react';
import '../styles/items.scss';

interface Item {
    id: number;
    title: string;
}

const items: Item[] = [
    { id: 1, title: 'Item 1' },
    { id: 2, title: 'Item 2' },
    { id: 3, title: 'Item 3' },
];

export const Items: React.FC = () => {
    return (
        <div className="items">
            {items.map((item) => (
                <div key={item.id} className="item">
                    {item.title}
                </div>
            ))}
        </div>
    );
};
