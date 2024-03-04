import React from 'react';
import ReactDOM from 'react-dom/client';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Trends from './components/trends/Trends';
import { Provider } from 'react-redux';
import { store } from './store/store';
import Search from './components/search/Search';
import Random from './components/random/Random';
import Settings from './components/settings/Settings';

const router = createBrowserRouter([
  {
    path: '/find-gifs/',
    element: <Trends />,
  },
  {
    path: '/find-gifs/search',
    element: <Search />,
  },
  {
    path: '/find-gifs/random',
    element: <Random />,
  },
  {
    path: '/find-gifs/settings',
    element: <Settings />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
);
