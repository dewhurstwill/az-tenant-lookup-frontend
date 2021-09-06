// Node Modules
import React from 'react';

// Provider HOCs
import ReduxProvider from './reduxProvider';
import ReactRouter from './reactRouter';

const AppConfiguration = ({ children }) => (
    <ReduxProvider>
        <ReactRouter>
            {children}
        </ReactRouter>
    </ReduxProvider>
);

export default AppConfiguration;
