import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/globals.css';
import App from './App.tsx';

import { RecoilRoot } from 'recoil';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { elementData } from '@mocks/elementData';

const queryClient = new QueryClient();

if (elementData) {
  console.log('법률목록:\n', elementData.slice(597));
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <React.StrictMode>
      <RecoilRoot>
        <App />
      </RecoilRoot>
    </React.StrictMode>
  </QueryClientProvider>,
);
