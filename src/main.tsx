import React from 'react';
import ReactDOM from 'react-dom';
import { MantineProvider } from '@mantine/core';
import './index.css';
import App from './App';
import { moonSaveTheme } from './theme/theme';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePageContainer } from './pages/HomePage/HomePage.container';
import { TransactionsPageContainer } from './pages/TransactionsPage/TransactionsPage.container';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <MantineProvider withGlobalStyles withNormalizeCSS theme={moonSaveTheme}>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="/home" element={<HomePageContainer />} />
            <Route path="/transactions" element={<TransactionsPageContainer />} />
            <Route
              path="*"
              element={
                <main style={{ padding: '1rem' }}>
                  <p>There's nothing here!</p>
                </main>
              }
            />
          </Route>
        </Routes>
      </MantineProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
