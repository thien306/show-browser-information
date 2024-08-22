import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function BrowserDetails() {
    return (
        <div>
            <h4>Browser's details: {navigator.userAgent}</h4>
        </div>
    );
}

ReactDOM.createRoot(document.getElementById('root')).render(<BrowserDetails />);
