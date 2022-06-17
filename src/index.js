import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { CommentContextProvider } from './Context/CommentContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CommentContextProvider>
    <App />
    </CommentContextProvider>
  </React.StrictMode>
);

