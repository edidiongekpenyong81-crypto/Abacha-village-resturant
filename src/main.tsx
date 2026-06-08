import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { CustomImageProvider } from './context/CustomImageContext.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CustomImageProvider>
      <App />
    </CustomImageProvider>
  </StrictMode>,
);
