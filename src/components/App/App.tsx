import { HistoricalDates } from '@/components/HistoricalDates';
import React from 'react';

import cl from './App.module.scss';

function App() {
    return (
        <div className={cl.App}>
            <HistoricalDates />
        </div>
    );
}

export default App;
