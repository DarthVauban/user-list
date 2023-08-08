import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { setupStore } from './store/store';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './index.css'
import App from './App';

const container = document.getElementById('root');
const root = createRoot(container);
const store = setupStore()

root.render(
    <Provider store={store}>
      <App />
    </Provider>
);



