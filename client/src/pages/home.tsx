


import React from 'react';
import { SearchBox } from '../components/search-box';
import '../styles/app.scss';

export const HomePage: React.FC = () => {
    return (
        <div>
            <div className='header'>
                <SearchBox />
            </div>
        </div>
    );
};



